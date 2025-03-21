import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');


  function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 使用 useNavigate 钩子
    

    const handleLogin = () => {
      if (username === password) {
        alert('Login successful');
        setIsAuthenticated(true);
        setCurrentUser(username);
        navigate('/home'); // 登录成功后跳转到 /home
      } else {
        alert('Invalid username or password');
      }
    };

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', backgroundColor: '#f0f8ff' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Login Page</h2>
          <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
          />
        </label>
          </div>
          <div style={{ marginBottom: '20px' }}></div>
        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
          />
        </label>
        
        <button
            onClick={handleLogin}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '20px', // 调整按钮与输入框的间距
              alignSelf: 'center', // 居中对齐
            }}
            >
            Login
            </button>
        </div>   
      </div>
    );
  }

  function Home() {
    const bubbles = [
      { src: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp', alt: 'Bubble 1' },
      { src: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp', alt: 'Bubble 2' },
      { src: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp', alt: 'Bubble 3' },
      { src: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp', alt: 'Bubble 4' },
      { src: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp', alt: 'Bubble 5' },
    ];

    const navigate = useNavigate();

    interface Bubble {
      src: string;
      alt: string;
    }

    const handleBubbleClick = (bubble: Bubble): void => {
      navigate('/bubble-view', { state: { bubble } });
    };

    return (
      <div style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
        <h1 style={{ marginBottom: '40px', color: '#333' }}>NanTang DAO</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', marginTop: '60px' }}>
          {['Placeholder 1', 'Placeholder 2', 'Placeholder 3'].map((altText, index) => (
            <div key={index} style={{ position: 'relative', marginTop: '40px' }}>
              <img
                src="https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp"
                alt={altText}
                style={{
                  width: '150px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
              {bubbles.map((bubble, bubbleIndex) => {
                const bubbleSize = currentUser === 'guest' ? 50 : Math.random() * 50 + 30;
                const angle = (360 / bubbles.length) * bubbleIndex;
                const radius = 120;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <img
                    key={bubbleIndex}
                    src={bubble.src}
                    alt={bubble.alt}
                    onClick={() => handleBubbleClick(bubble)}
                    style={{
                      position: 'absolute',
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      width: `${bubbleSize}px`,
                      height: `${bubbleSize}px`,
                      borderRadius: '50%',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div
          style={{ marginTop: '120px', position: 'relative', cursor: 'pointer' }}
          onClick={() => navigate('/profile', { state: { user: currentUser } })}
        >
          <img
            src="https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp"
            alt={currentUser}
            style={{
              width: '200px',
              height: 'auto',
              borderRadius: '50%',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              margin: '0 auto',
            }}
          />
          <p style={{ marginTop: '10px', color: '#555' }}>{currentUser}</p>
        </div>
      </div>
    );
  }

  function Profile() {
    const location = useLocation();
    const { user } = location.state || {};

    if (!user) {
      return <Navigate to="/login" />;
    }

    const userImages: Record<string, string> = {
      default: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp',
      guest: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp',
      user: 'https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp',
    };

    const userImage = userImages[user] || userImages['default'];

    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={userImage}
        alt={user}
        style={{
        width: '50%',
        height: '50%',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      />
      </div>
    );
  }

  function BubbleView() {
    const location = useLocation();
    const { bubble } = location.state || {};

    const handleLike = () => {
      alert('+1');
    };

    if (!bubble) {
      return <Navigate to="/home" />;
    }

    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src={bubble.src}
          alt={bubble.alt}
          style={{
            width: '50%',
            height: '50%',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        />
        <button
          onClick={handleLike}
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Like
        </button>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/bubble-view" element={<BubbleView />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
