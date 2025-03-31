import uniqual from "../../resources/images/work-data/UNIQUALTHUMBNAIL.png";
import uniqualBanner from "../../resources/images/work-data/UNIQUALBANNER.png";
import uniqualPhoto1 from "../../resources/images/work-data/UNIQUAL1.png";
import uniqualPhoto2 from "../../resources/images/work-data/UNIQUAL2.png";
import uniqualPhoto3 from "../../resources/images/work-data/UNIQUAL3.png";
import uniqualPhoto4 from "../../resources/images/work-data/UNIQUAL4.png";

import DevDisplay from "../../resources/images/work-data/DevDisplayTHUMBNAIL.png";
import DevDisplayBanner from "../../resources/images/work-data/DevDisplayBanner.png";
import DevDisplayPhoto1 from "../../resources/images/work-data/DevDisplay1.png";
import DevDisplayPhoto2 from "../../resources/images/work-data/DevDisplay2.png";
import DevDisplayPhoto3 from "../../resources/images/work-data/DevDisplay3.png";
import DevDisplayPhoto4 from "../../resources/images/work-data/DevDisplay4.png";

const WorkData = [
  {
    id: "uniqual",
    image: uniqual,
    bannerImage: uniqualBanner,
    name: "Uniqual ITech",
    title: "UniQual iTech | The Powerhouse That Delivers High Quality IT",
    slug: "uniqual-itech-the-powerhouse-that-delivers-high-quality-it",
    liveLink: "https://uniqualitech.com/",
    image1: uniqualPhoto1,
    image2: uniqualPhoto2,
    image3: uniqualPhoto3,
    image4: uniqualPhoto4,
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
    image1: DevDisplayPhoto1,
    image2: DevDisplayPhoto2,
    image3: DevDisplayPhoto3,
    image4: DevDisplayPhoto4,
    detailsInfo: "Developed an innovative platform for developers to showcase their projects and collaborate. Leveraged React.js for a dynamic frontend and Node.js with Express for a robust backend. Integrated MongoDB for efficient data storage and retrieval. Focused on creating a seamless user experience with real-time updates and responsive design.",
    techStack: {
      frontend: "React.js",
      backend: "Node.js, Express",
      database: "MongoDB",
    },
    nextProject: null,
  },
];
export default WorkData;
