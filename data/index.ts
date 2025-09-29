export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Timeline", link: "/timeline" },
];

export const gridItems = [
  {
    id: 1,
    title: "I believe in transparent collaboration, working closely with teams to build impactful products ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Intelligent Real Estate Platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Medium-clone",
    des: "Blog writing website with different routes for admin, writers and readers",
    img: "/p1.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/pg.png", "/pm.png"],
    link: "https://medium-blog-project.vercel.app/",
  },
  {
    id: 2,
    title: "Web3 CrowdFunding Platform",
    des: "Create your campaign using ethereum",
    img: "/p2.jpeg",
    iconLists: [
      "/react.svg",
      "/tail.svg",
      "/ethereum.png",
      "/thirdweb.png",
      "/metamask.png",
    ],
    link: "https://crowd-funding-swart.vercel.app/",
  },
  {
    id: 3,
    title: "EduEnhance: An ERP for Education",
    des: "Managing schools and colleges effectively",
    img: "/p3.png",
    iconLists: ["/react.svg", "/tail.svg", "/ts.svg", "/pg.png", "/pm.png"],
    link: "https://eduenhance-kd.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "/ui.yoom.com",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Working with Vaibhav is great from initial of our project I have seen a dedication towards work in him, if once he is there then rest assured ",
    name: "Prof. Pawan Kumar",
    title: "Faculty, MnC, IIT Kharagpur",
    img: "/Prof.PawanKumar.png",
  },
  {
    quote:
      "Working with Vaibhav was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project, the way he continuosly learn and explore new areas and maintaining his other aspects of life also is wonderful",
    name: "Prof. Kannabiran Seshayan",
    title: "Faculty, Applied Mechanics and Biomedical Engineering, IIT Madras",
    img: "/Prof.KannabiranSeshayan.png",
  },
  {
    quote:
      "During the period of the internship, he was punctual, and his performance met our expectations. We wish him all the best in his future endeavors.",
    name: "Aravind Prasad",
    title: "Founder and MD, Deepgrid",
    img: "/Aravind_Prasad.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "DeepGrid DataCenter Pvt. Ltd.",
    desc: "Architected, developed and deployed a highly customizable e-commerce platform using NestJS, Next.js, MongoDB, and Redis",
    className: "md:col-span-2",
    thumbnail: "/FullStackDeveloper.png",
  },
  {
    id: 2,
    title: "Full Stack GenAI Developer Intern",
    company: "Transenigma Services Pvt. Ltd.",
    desc: "Architected and Created a cutting-edge School ERP software solution using React with Redux, MongoDB, TailwindCSS, and Python (Flask), Langchain, LLM ",
    className: "md:col-span-2",
    thumbnail: "/FullStackGenAIDeveloper.png",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of app for client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Freelancer.png",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/FrontendDeveloper.png",
  },
];

export const socialMedia = [
  {
    id: "1",
    img: "/git.svg",
    url: "https://github.com/KDVaibhav/",
  },
  {
    id: "2",
    img: "/twit.svg",
    url: "https://x.com/Vaibhav48955024",
  },
  {
    id: "3",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/vaibhav-agrawal-9a77681b8/",
  },
];

export const timelineData = [
  {
    title: "uilding an Intelligent Real Estate Platform",
    description:
      "Initiated work on an AI-powered real estate platform, integrating automation and intelligence to improve lead generation and decision-making.",
    date: "2025-08",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=150&h=150&fit=crop&crop=face",
    status: "current",
  },
  {
    title: "Joined Transenigma as SDE-1",
    description:
      "Started full-time role as Software Development Engineer I at Transenigma, contributing to ERP systems and scalable backend services.",
    date: "2025-07",
    category: "Full Time Job",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
    status: "current",
  },
  {
    title: "Joined Alignnr as AI Trainer (Freelance)",
    description:
      "Worked as an AI trainer with Alignnr, contributing to AI project development and model evaluation.",
    date: "2025-07",
    category: "Freelance",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c8f3a9f2f83?w=150&h=150&fit=crop&crop=face",
    status: "current",
  },
  {
    title: "Completed ISKCON Website Project",
    description:
      "Successfully built and launched the 'Srila Prabhupada Connection' website for ISKCON, offering devotees a centralized platform.",
    date: "2025-06",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Joined Outlier as AI Trainer (Freelance)",
    description:
      "Started freelancing with Outlier, training AI models and improving dataset quality for advanced generative AI systems.",
    date: "2025-05",
    category: "Freelance",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4dc83a8a2c?w=150&h=150&fit=crop&crop=face",
    status: "current",
  },
  {
    title: "Built Generative AI Projects",
    description:
      "Developed projects like Interview Question Generator, Audio Translator, and a Telegram chatbot as part of practical GenAI learning.",
    date: "2025-03",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Completed FreeCodeCamp GenAI Course",
    description:
      "Finished a Generative AI course covering LLMs, embeddings, and building AI-powered applications.",
    date: "2025-04",
    category: "Skills",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "ISKCON Project 'Srila Prabhupada Connection'",
    description:
      "Started working on ISKCON's spiritual project, building an end-to-end website to serve devotees worldwide.",
    date: "2025-02",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Started Learning Computer Networks & Systems",
    description:
      "Focused on deepening knowledge of computer networks, operating systems, and system-level concepts.",
    date: "2025-01",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Deepgrid Datacentre Private Limited (4months)",
    description:
      "Starting building a customizable e-commerce platform backend, focusing on scalability and modularity.",
    date: "2024-09",
    category: "Internship",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Completed Web3 Developer Course (LearnWeb3)",
    description:
      "Earned Ethereum Developer Degree, gaining strong foundations in smart contracts, Solidity, and dApp development.",
    date: "2024-08",
    category: "Skills",
    image:
      "https://images.unsplash.com/photo-1616077168060-7dbf7c3a26a6?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },

  {
    title: "Full Stack Development Course (Harkirat Singh)",
    description:
      "Completed a comprehensive full-stack course covering React, Next.js, Node.js, and databases.",
    date: "2024-03",
    category: "Skills",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Transenigma Services Pvt Ltd (7Months)",
    description:
      "Started Building an ERP system for educational institutions, streamlining operations and data management.",
    date: "2024-01",
    category: "Internship",
    image:
      "https://images.unsplash.com/photo-1549921296-3a28b6f5e6b8?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Made Modern Portfolio Website",
    description:
      "Created a modern developer portfolio showcasing projects, skills, and achievements using React & Next.js.",
    date: "2024-01",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Completed AlgoZenith DSA Course",
    description:
      "Took and completed a Data Structures & Algorithms course, strengthening problem-solving skills.",
    date: "2023-06",
    category: "Skills",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "ITC Trust(2months)",
    description:
      "Built a simple website for ITC Trust as part of internship, gaining early industry exposure.",
    date: "2023-05",
    category: "Internship",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Made First Portfolio Website",
    description:
      "Created my first personal portfolio website after learning the basics of web development.",
    date: "2022-12",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },

  {
    title: "Started Learning Web Development",
    description:
      "Began journey into frontend and backend development with HTML, CSS, JavaScript, and modern frameworks.",
    date: "2022-11",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Restarted Coding with C++ and Python",
    description:
      "Picked up coding again, focusing on C++ and Python to strengthen programming fundamentals.",
    date: "2022-07",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Started Learning C and DSA",
    description:
      "Started with C language and solving DSA problems but discontinued after a few months.",
    date: "2021-04",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
  {
    title: "Joined IIT Kharagpur",
    description:
      "Began academic journey at IIT Kharagpur in M.Sc. Physics (5-year program).",
    date: "2020-11",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=150&h=150&fit=crop&crop=face",
    status: "completed",
  },
];
