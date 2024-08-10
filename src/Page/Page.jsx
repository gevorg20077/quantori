import Login from "../container/Login/Login";
import "./page.css";

const Page = ({ setIsLogin, isLogin, error, setError }) => {
  return (
    <div className="page">
      <div className="page__box1"></div>
      <div className="page__box2"></div>
      <div className="page__box3"></div>
      <div className="page__box4"></div>
      <div className="page__box5"></div>
      {isLogin && (
        <Login setIsLogin={setIsLogin} error={error}/>
      )}
    </div>
  );
}

export default Page;
