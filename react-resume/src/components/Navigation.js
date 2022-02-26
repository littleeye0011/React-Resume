import { Link } from "react-router-dom";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import MenuData from "../data/MenuData";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggleMenu} />
          </Link>
        </div>
        <div className="nav-title">
          <Link to="/">My Portfolio</Link>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-bar-item" onClick={toggleMenu}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaArrowLeft onClick={toggleMenu} />
            </Link>
          </li>
          {MenuData.map((menu, index) => {
            return (
              <li className="menu-text" key={index}>
                <Link to={menu.path}>
                  {menu.icon}
                  <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
