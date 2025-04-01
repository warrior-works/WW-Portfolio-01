import uniqual from "../../resources/images/work-data/UNIQUAL/UNIQUALTHUMBNAIL.png";
import uniqualBanner from "../../resources/images/work-data/UNIQUAL/UNIQUALBANNER.png";
import uniqual1 from "../../resources/images/work-data/UNIQUAL/UNIQUAL1.png";
import uniqual2 from "../../resources/images/work-data/UNIQUAL/UNIQUAL2.png";
import uniqual3 from "../../resources/images/work-data/UNIQUAL/UNIQUAL3.png";
import uniqual4 from "../../resources/images/work-data/UNIQUAL/UNIQUAL4.png";

import DevDisplay from "../../resources/images/work-data/DevDisplay/DevDisplayTHUMBNAIL.png";
import DevDisplayBanner from "../../resources/images/work-data/DevDisplay/DevDisplayBANNER.png";
import DevDisplay1 from "../../resources/images/work-data/DevDisplay/DevDisplay1.png";
import DevDisplay2 from "../../resources/images/work-data/DevDisplay/DevDisplay2.png";
import DevDisplay3 from "../../resources/images/work-data/DevDisplay/DevDisplay3.png";
import DevDisplay4 from "../../resources/images/work-data/DevDisplay/DevDisplay4.png";

import VS from "../../resources/images/work-data/VS/VSTHUMBNAIL.png";
import VSBanner from "../../resources/images/work-data/VS/VSBANNER.png";
import VS1 from "../../resources/images/work-data/VS/VS1.png";
import VS2 from "../../resources/images/work-data/VS/VS2.png";
import VS3 from "../../resources/images/work-data/VS/VS3.png";
import VS4 from "../../resources/images/work-data/VS/VS4.png";

import GRG from "../../resources/images/work-data/GRG/GRGTHUMBNAIL.png";
import GRGBanner from "../../resources/images/work-data/GRG/GRGBANNER.png";
import GRG1 from "../../resources/images/work-data/GRG/GRG1.png";
import GRG2 from "../../resources/images/work-data/GRG/GRG2.png";
import GRG3 from "../../resources/images/work-data/GRG/GRG3.png";
import GRG4 from "../../resources/images/work-data/GRG/GRG4.png";

const WorkData = [
  {
    id: "uniqual",
    image: uniqual,
    bannerImage: uniqualBanner,
    name: "Uniqual ITech",
    title: "UniQual iTech | The Powerhouse That Delivers High Quality IT",
    slug: "uniqual-itech-the-powerhouse-that-delivers-high-quality-it",
    liveLink: "https://uniqualitech.com/",
    image1: uniqual1,
    image2: uniqual2,
    image3: uniqual3,
    image4: uniqual4,
    detailsInfo: "Crafted a dynamic company website with PHP and Laravel on the backend, while spearheading frontend development using HTML, CSS, and JavaScript. Focused on optimizing user experience by implementing responsive design, interactive features, and ensuring seamless navigation. Translated design concepts into a visually appealing and functional website, contributing to a polished and engaging digital presence.",
    techStack: {
      frontend: "HTML, CSS, JavaScript",
      backend: "Laravel",
    },
    nextProject: null,
  },
  {
    id: "DevDisplay",
    image: DevDisplay,
    bannerImage: DevDisplayBanner,
    name: "DevDisplay",
    title: "DevDisplay - Paradise for Developers",
    slug: "devdisplay-paradise-for-developers",
    liveLink: "https://www.devdisplay.org/",
    image1: DevDisplay1,
    image2: DevDisplay2,
    image3: DevDisplay3,
    image4: DevDisplay4,
    detailsInfo: "Developed an innovative platform for developers to showcase their projects and collaborate. Leveraged React.js for a dynamic frontend and Node.js with Express for a robust backend. Integrated MongoDB for efficient data storage and retrieval. Focused on creating a seamless user experience with real-time updates and responsive design.",
    techStack: {
      frontend: "React.js",
      backend: "Node.js, Express",
      database: "MongoDB",
    },
    nextProject: null,
  },
  {
    id: "Visionary Architects",
    image: VS,
    bannerImage: VSBanner,
    name: "Visionary Architects",
    title: "Where Innovation Meets Tradition",
    slug: "visionary-architects",
    liveLink: "https://visionary-architects.vercel.app/",
    image1: VS1,
    image2: VS2,
    image3: VS3,
    image4: VS4,
    detailsInfo: "Modern Responsive Website Design & development of an imaginary Architects Company - Visionary Architects who achieve mystery in the Architects design & creating environments where innovation meets tradition, and their design transcend imagination.",
    techStack: {
      frontend: "HTML, CSS, JavaScript, Bootstrap, Odometer",
      design: "Figma & Pinterest",
    },
    nextProject: null,
  },
  {
    id: "GitHub Legacy",
    image: GRG,
    bannerImage: GRGBanner,
    name: "GitHub Legacy",
    title: "GitHub Resume Generator",
    slug: "github-legacy",
    liveLink: "https://github-legacy.vercel.app/",
    image1: GRG1,
    image2: GRG2,
    image3: GRG3,
    image4: GRG4,
    detailsInfo: "Transform your GitHub journey into a professional resume in seconds! This tool automatically generates beautiful, customizable resumes by analyzing your GitHub activity, repositories, and contributions. Whether you're a developer, open-source contributor, or tech enthusiast, GitHubLegacy helps you showcase your legacy of innovation in a sleek and professional format.",
    techStack: {
      frontend: "Next.JS, TypeScript, Tailwind CSS",
      backend: "GitHub API",
      OtherTools: "html2pdf.JS"
    },
    nextProject: null,
  },
];
export default WorkData;
