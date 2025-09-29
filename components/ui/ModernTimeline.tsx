"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { CheckCircle, Clock, Circle } from "lucide-react";

export interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  image?: string;
  status?: "completed" | "current" | "upcoming";
  category?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const getStatusConfig = (status: TimelineItem["status"]) => {
  const configs = {
    completed: {
      progressColor: "bg-green-500",
      borderColor: "border-green-500/20",
      badgeBg: "bg-green-500/10",
      badgeText: "text-green-500",
      badgeVariant: "outline" as const,
      iconColor: "text-green-500",
    },
    current: {
      progressColor: "bg-purple",
      borderColor: "border-purple/20",
      badgeBg: "bg-purple/10",
      badgeText: "text-purple",
      badgeVariant: "outline" as const,
      iconColor: "text-purple",
    },
    upcoming: {
      progressColor: "bg-yellow-500",
      borderColor: "border-yellow-500/20",
      badgeBg: "bg-yellow-500/10",
      badgeText: "text-yellow-500",
      badgeVariant: "outline" as const,
      iconColor: "text-yellow-500",
    },
  };

  return configs[status || "upcoming"];
};

const getStatusIcon = (status: TimelineItem["status"]) => {
  switch (status) {
    case "completed":
      return CheckCircle;
    default:
      return Circle;
  }
};

export function Timeline({ items, className }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div
        className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6 py-8", className)}
      >
        <p className="text-center text-white-200">
          No timeline items to display
        </p>
      </div>
    );
  }

  return (
    <section
      className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6 py-8", className)}
      role="list"
      aria-label="Timeline of events and milestones"
    >
      <div className="relative">
        {/* Main vertical timeline line */}
        <div className="absolute rounded-2xl left-1/3 top-0 bottom-0 sm:w-12  bg-gradient-to-b from-purple/50 via-purple/30 to-purple/20 transform -translate-x-1/3" />

        <motion.div
          className="absolute left-1/3 top-0 w-1/3 bg-purple origin-top transform -translate-x-1/3"
          initial={{ scaleY: 0 }}
          whileInView={{
            scaleY: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        />

        <div className="space-y-12">
          {items.map((item, index) => {
            const config = getStatusConfig(item.status);
            const IconComponent = getStatusIcon(item.status);

            return (
              <motion.div
                key={index}
                className="relative flex items-center justify-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                viewport={{ once: true, margin: "-10px" }}
              >
                {/* Left Side - Date */}
                <div className="w-1/3 pr-8 flex justify-end">
                  <div className="text-right max-w-md">
                    <motion.div
                      className="inline-flex flex-col items-end"
                      whileHover={{ scale: 1.02 }}
                    >
                      <time
                        dateTime={item.date}
                        className="text-lg font-bold text-purple mb-2"
                      >
                        {item.date}
                      </time>
                      {item.category && (
                        <span className="text-sm text-white-200 bg-white/5 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Center - Timeline Dot with connecting line */}
                <div className="relative flex-shrink-0 z-10 mx-4">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-4 border-black-100 shadow-lg z-20 relative",
                        config.progressColor
                      )}
                    />
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-full animate-ping z-10",
                        config.progressColor,
                        "opacity-30"
                      )}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1.8 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Right Side - Content Card */}
                <div className="w-2/3 pl-8">
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      className={cn(
                        "border transition-all duration-300 hover:shadow-lg",
                        "bg-black-200/50 backdrop-blur-sm border-white/10",
                        config.borderColor,
                        "group-hover:border-purple/30 group-hover:bg-black-200/70"
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors duration-200">
                              {item.title}
                            </h3>
                          </div>

                          <Badge
                            className={cn(
                              "text-xs font-medium border backdrop-blur-sm",
                              config.badgeBg,
                              config.badgeText,
                              "border-current/20"
                            )}
                            variant={config.badgeVariant}
                          >
                            {item.status
                              ? item.status.charAt(0).toUpperCase() +
                                item.status.slice(1)
                              : "Upcoming"}
                          </Badge>
                        </div>

                        <p className="text-white-100 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {item.status !== "current" && (
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 h-2 bg-black-300 rounded-full overflow-hidden">
                              <motion.div
                                className={cn(
                                  "h-full rounded-full",
                                  config.progressColor
                                )}
                                initial={{ width: 0 }}
                                animate={{
                                  width:
                                    item.status === "completed"
                                      ? "100%"
                                      : "0%",
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                              />
                            </div>

                            <div
                              className={cn("p-2 rounded-full", config.badgeBg)}
                            >
                              <IconComponent
                                className={cn("w-4 h-4", config.iconColor)}
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
