import { FaFile, FaFolderOpen } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const MenuData = [
  {
    title: "Resume",
    path: "/",
    icon: <FaFile />,
  },
  {
    title: "Portfolio",
    path: "/Portfolio",
    icon: <FaFolderOpen />,
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <RiContactsFill />,
  },
];

export default MenuData;
