import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Reza Aditya Sutrisno. All Rights Reserved.`,
  author: {
    name: "Reza Aditya Sutrisno",
    accounts: [
      {
        url: "https://github.com/zayano",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://x.com/Zaditno",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/zayano",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://www.linkedin.com/in/reza-aditya-sutrisno-9b8519161/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:adityareza46@@gmail.com",
        label: "Mail Reza",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
