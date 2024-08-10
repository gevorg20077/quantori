import { useState, useEffect } from 'react';
import './App.css';
import Page from './Page/Page';
import Menu from './container/Menu/Menu';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogin(!!token);
  }, []);

  return (
    <div className="App">
      <Menu setIsLogin={setIsLogin} isLogin={isLogin} />
      <Page setError={setError} setIsLogin={setIsLogin} isLogin={isLogin} error={error} />
    </div>
  );
}

export default App;
