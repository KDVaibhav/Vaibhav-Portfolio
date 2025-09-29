"use client";
import { timelineData } from "@/data";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaArrowRight } from "react-icons/fa";
import {
  LuCheckCircle as CheckCircle,
  LuClock as Clock,
  LuCircle as Circle,
} from "react-icons/lu";
import { motion } from "framer-motion";

// Simple timeline preview component
export default function TimelinePreview() {
  const previewItems = timelineData.slice(0, 3);

  return (
    <section id="journey" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading mb-4">
            My <span className="text-purple">Development Journey</span>
          </h1>
          <p className="text-white-200 text-center max-w-3xl mx-auto mb-6 text-lg">
            A glimpse into my growth and learning path in web development
          </p>
        </div>

        <div className="relative">
          {/* Mini timeline line for preview */}
          <div className="absolute left-1/3 top-0 bottom-0 sm:w-12 rounded-xl bg-gradient-to-b from-purple/30 to-purple/10 transform -translate-x-1/3" />

          <div className="space-y-12">
            {previewItems.map((item, index) => (
              <div
                key={item.title}
                className="relative flex items-center justify-center w-full"
              >
                {/* Left side - Date */}
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

                {/* Timeline dot */}
                <div className="relative flex-shrink-0 z-10 mx-4">
                  <div
                    className={`w-5 h-5 rounded-full border-4 border-black-100 ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "current"
                        ? "bg-purple"
                        : "bg-yellow-500"
                    }`}
                  />
                </div>

                {/* Right side - Content */}
                <div className="w-2/3 pl-8">
                  <div className="bg-black-200/30 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-black-200/50 transition-all duration-200 group-hover:scale-[1.02]">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple transition-colors duration-200 flex-1">
                        {item.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          item.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : item.status === "current"
                            ? "bg-purple/10 text-purple"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {item.status
                          ? item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)
                          : "Upcoming"}
                      </span>
                    </div>
                    <p className="text-white-100 text-sm leading-relaxed mb-4">
                      {item.description.slice(0, 120)}...
                    </p>
                    {item.status === "completed" && (
                      <div className="flex items-center justify-between">
                        <div className="flex-1 h-1.5 bg-black-300 rounded-full overflow-hidden mr-4">
                          <div
                            className={`h-full rounded-full ${
                              item.status === "completed"
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                            style={{
                              width:
                                item.status === "completed" ? "100%" : "0%",
                            }}
                          />
                        </div>
                        <div
                          className={`p-1.5 rounded-full ${
                            item.status === "completed"
                              ? "bg-green-500/10"
                              : "bg-yellow-500/10"
                          }`}
                        >
                          {item.status === "completed" ? (
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          ) : (
                            <Circle className="w-3 h-3 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/timeline">
            <MagicButton
              title="View Full Journey Timeline"
              icon={<FaArrowRight />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
