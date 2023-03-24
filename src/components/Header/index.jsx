import "../../styles/header.css";
import Logo from "../../assets/nu_kenzie_logo.svg";
export const Header = () => {
  return (
    <header className="header__container">
      <img
        onClick={() => setDarkMode(!darkMode)}
        src={Logo}
        alt="Logo Nu Kenzie"
      />
      {/* {darkMode ? "Ir para Light Mode" : "Ir para Dark Mode"} */}
    </header>
  );
};
