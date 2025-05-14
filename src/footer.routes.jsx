// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";
import Page from "pages/landing";
import KenyaTripDetail from "pages/kenyatripdetail";
import ThailandTripDetail from "pages/thailandtripdetail";
import VietnamTripDetail from "pages/vietnamtripdetail";
import HomeIcon from "@mui/icons-material/Home";
import LocalAirportIcon from '@mui/icons-material/LocalAirport';


// Images
import logoCT from "assets/images/tripmaster.inLogoTransparent.png";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logoCT,
    route: "/home",
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
        { name: "Home", href: "/home" },
        { name: "Contact Us", href: "/home" }
      ],
    },
    {
      name: "Travel With Us",
      items: [
        { name: "Thailand", href: "/thailand" },
        { name: "Vietnam", href: "/vietnam" },
        { name: "Kenya", href: "/kenya" },
      ],
    }
  ],
};
