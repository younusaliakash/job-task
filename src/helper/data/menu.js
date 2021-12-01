import { FiPlus,FiUsers } from "react-icons/fi";
import { AiOutlineRead,AiOutlineDashboard,AiTwotoneShop,AiOutlineSetting,AiFillCalendar } from "react-icons/ai";
import { FaBuffer } from "react-icons/fa";
import { BiBone } from "react-icons/bi";
import { MdNoteAlt,MdOutlineContactSupport } from "react-icons/md";
const menus = [
  {
    link: "Oktio",
    path: "/",
    icon: "Ok",
    className: "menu logo",
  },
  {
    link: "Add Auction",
    path: "#",
    icon: <FiPlus />,
    className: "menu add_auction",
  },
  {
    link: "Dashboard",
    path: "/dashboard",
    icon: <AiOutlineDashboard />,
    className: "menu",
  },
  {
    link: "Project",
    path: "/project",
    icon: <FaBuffer />,
    className: "menu",
  },
  {
    link: "RFX",
    path: "/rfx",
    icon: <AiTwotoneShop />,
    className: "menu",
  },
  {
    link: "Auctions",
    path: "/auctions",
    icon: <BiBone />,
    className: "menu",
  },
  {
    link: "Suppliers",
    path: "/suppliers",
    icon: <AiFillCalendar />,
    className: "menu",
  },
  {
    link: "Items",
    path: "/items",
    icon: <AiOutlineRead />,
    className: "menu",
  },
  {
    link: "Reports",
    path: "/reports",
    icon: <MdNoteAlt />,
    className: "menu",
  },
  {
    link: "Company Users",
    path: "/company-user",
    icon: <FiUsers />,
    className: "menu",
  },
  {
    link: "Settings",
    path: "/setting",
    icon: <AiOutlineSetting />,
    className: "menu",
  },
  {
    link: "Support",
    path: "/support",
    icon: <MdOutlineContactSupport />,
    className: "menu",
  },
];

export default menus;
