// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/tripmaster.inLogoTransparent.png";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logoCT,
    route: "/",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/CreativeTim/",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/creativetim",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "Home", href: "https://www.creative-tim.com/presentation" },
        { name: "Contact Us", href: "https://www.creative-tim.com/templates/free" }
      ],
    },
    {
      name: "Travel With Us",
      items: [
        { name: "Thailand", href: "https://iradesign.io/" },
        { name: "Vietnam", href: "https://www.creative-tim.com/bits" },
        { name: "Kenya", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    }
  ],
};
