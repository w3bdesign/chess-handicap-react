import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center py-12">
        <img src={logo} className="w-24 h-24" alt="logo" />
        <h1 className="text-3xl font-bold">Chess Handicap</h1>
      </div>
    </header>
  );
};

export default Header;
