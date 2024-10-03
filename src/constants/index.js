import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  erc,
  threejs,
  angular,
  codeSnippet,
  codeEditor,
  toonTranslator,
  bookMania,
  noteMint,
  semanticAnalyzer
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name:"Angular JS",
    icon: angular
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    Organization_name: "Enlectic Resarch Center",
    icon:erc,
    iconBg: "#383E56",
    date: "Nov 2022 - continue",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality Apps.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "NOMS",
    // company_name: "",
    // icon: icon,
    iconBg: "#383E56",
    date: "JULY 2023 - SEP 2023",
    points: [
      "In my previous role as a full-stack developer at NOMS, I was responsible for developing and maintaining web applications using React.js and related technologies.",
      " I collaborated closely with cross-functional teams, including designers, product managers, and fellow developers, to ensure the delivery of high-quality products. ",
      "My work also involved implementing responsive design solutions while ensuring cross-browser compatibility. ",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Toon Translator",
    description:
      "Toon-Translator converts standard language into cartoon language, offering a unique and expressive way to style content. Convert English text into  Cartoon Language",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: toonTranslator,
    source_code_link: "https://github.com/sahilborse/pbl-project-repo.git",
  },
 
  {
    name: "code-editor",
    description:
      "This tool allows to develop, preview changes in real-time without the need for additional installations.it features a Markdown editor for efficiently creating README files.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CodeMirror",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: codeEditor,
    source_code_link: "https://github.com/sahilborse/code-editor.git",
  },
  {
    name: "Book Mania",
    description:
      "It is a Next.js app for browsing, editing, and highlighting books. Users can navigate by unique IDs, add/edit book details, highlight passages.",
    tags: [
      {
        name: "NEXTJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "FRAMER",
        color: "pink-text-gradient",
      },
    ],
    image: bookMania,
    source_code_link: "https://github.com/sahilborse/BookMania.git",
  },
  {
    name: "Code-snippet",
    description:
      "A Private Code Snippet Manager that allows programmers to securely store, manage, and retrieve personal code snippets, accessible only by the creator for private use.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codeSnippet,
    source_code_link: "https://github.com/",
  },
  {
    name: "Note-Mint",
    description:
      "Notemint is a campus marketplace for students to buy and sell used goods like books and electronics, promoting affordability and sustainability.",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: noteMint,
    source_code_link: "https://github.com/sahilborse/Not-Mint.git",
  },
  {
    name: "Semantic-Analyzer",
    description:
      "This Flask app uses an external API for sentiment analysis, helping businesses gain insights from customer reviews to enhance decision-making.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "GROQ",
        color: "pink-text-gradient",
      },
    ],
    image: semanticAnalyzer,
    source_code_link: "https://github.com/sahilborse/sentiment-analyzer.git",
  },
 
];

export { services, technologies, experiences, projects };
