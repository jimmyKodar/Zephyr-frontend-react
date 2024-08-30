import Clock from "./Clock";
import MenuButtons from "./MenuButtons";

const Header = () => {
  return (
    <header>
      <Clock />
      <span className="logo">ZEPHYR NEWS</span>
      <MenuButtons />
    </header>
  );
};

export default Header;
