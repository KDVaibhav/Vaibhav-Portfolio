export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
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
    title: "Currently building a Decentralized App DAPP",
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
    title: "Lead Frontend Developer",
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
