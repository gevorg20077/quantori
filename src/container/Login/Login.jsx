import { useState } from 'react';
import "./login.css";

const Login = ({ setIsLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Authentication failed');
        setLoginSuccess(false)
        console.error("Authentication error:", errorData);
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      setIsLogin(true);
      setLoginSuccess(true);
      setErrorMessage('')
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage('Network error');
    }
  };

  const closeLoginPage = () => {
    setIsLogin(false);
  };
  return (
    <div className="login_page">
      <div className="login_page__container">
        <p className="login_page__text">Login</p>
        <span style={{ color: errorMessage ? "#cb1111" : "rgb(97 148 139)" }}>Email</span>
        <input
          style={{ border: errorMessage ? "2px solid #cb1111" : "2px solid rgb(97 148 139)" }}
          className="login_page__input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{ color: errorMessage ? "#cb1111" : "rgb(97 148 139)" }}>Password</span>
        <input
          style={{ border: errorMessage ? "2px solid #cb1111" : "2px solid rgb(97 148 139)" }}
          className="login_page__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginSuccess ? (
          <p className="login_page__success">You have successfully logged in.</p>
        ) : (
          errorMessage && <p className="login_page__error">{errorMessage}</p>
        )}
        <div className="login_page__buttons">
          <button onClick={closeLoginPage}>Cancel</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
