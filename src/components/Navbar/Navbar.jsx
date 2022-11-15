import "./navbar.style.css";
import { useState, useEffect } from "react";
import lightModeBtn from "../../images/light-mode-btn.png";
import darkModeBtn from "../../images/dark-mode-btn.png";
import { Link } from "react-router-dom";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import hamburgerBtn from "../../images/hamburger-menu.png";
import closeMenu from "../../images/close-menu.png";

export const Navbar = ({ isDarkMode, handleToggleDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const renderMobile = () => {
    if (isOpen) {
      return (
        <MobileNav
          handleToggleDarkMode={handleToggleDarkMode}
          changeDarkModeBtn={changeDarkModeBtn}
          setIsOpen={setIsOpen}
        />
      );
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const changeDarkModeBtn = () => {
    if (isDarkMode === true) {
      return (
        <img
          src={lightModeBtn}
          style={{ width: "20px", cursor: "pointer" }}
          alt="lightMode"
        />
      );
    } else {
      return (
        <img
          src={darkModeBtn}
          style={{ width: "20px", cursor: "pointer" }}
          alt="darkMode"
        />
      );
    }
  };
  return (
    <nav className="navbar">
      <span>
        <Link to="/" onClick={() => isMobile && setIsOpen(false)}>
          <strong>FinanceApp</strong>
        </Link>
      </span>
      {!isMobile && (
        <DesktopNav
          handleToggleDarkMode={handleToggleDarkMode}
          changeDarkModeBtn={changeDarkModeBtn}
        />
      )}
      {isMobile && (
        <>
          {renderMobile()}
          <span
            className="toggleMobileNav"
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          >
            {isOpen ? (
              <img src={closeMenu} style={{ width: "20px" }} alt="open menu" />
            ) : (
              <img
                src={hamburgerBtn}
                style={{ width: "20px" }}
                alt="open menu"
              />
            )}
          </span>
        </>
      )}
    </nav>
  );
};
