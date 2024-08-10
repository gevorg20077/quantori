import nonamePhoto from "../../Images/nophoto.jpeg";
import IconLogin from "../IconLogin/IconLogin";
import "./menu.css";

const Menu = ({ setIsLogin, isLogin }) => {
  const handleLoginLogout = () => {
    if (isLogin) {
      localStorage.removeItem('token');
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  return (
    <div className="menu">
      <div className="menu__photo">
        <img src={nonamePhoto} alt="User photo" />
      </div>
      <ul className="menu__select">
        <li className="menu__home"><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">About</a></li>
      </ul>
      <div className="menu__login">
        <button className="menu__button_login" onClick={handleLoginLogout}>Login</button>
        <button className="menu__icon_login" onClick={handleLoginLogout}><IconLogin /></button>
      </div>
    </div>
  );
};

export default Menu;
