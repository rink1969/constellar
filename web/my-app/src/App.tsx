import React, { useEffect } from 'react';
import { Buffer } from 'buffer';
import Npc from './npc.svg';
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
      if (username !== 'guest' && username !== 'user') {
        alert('Invalid username: guest or user only');
        return;
      }
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
          <img src={Npc} alt="Npc" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
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
    const [zizaiBubbles, setZizaiBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
      const fetchBubbles = async () => {
        try {
          const response = await fetch('https://testnet-api.explorer.nervos.org/api/v2/nft/collections/0xdb9fc0b43b99850a0182ce8a31e5142fa6c4074febee8eab074521ecfffefdc3/items?page=1');
          const data = await response.json();
          //console.log(data.data);
          const tmpBubbles = [];
          for (const item of data.data) {
            //console.log(item.cell.data);
            const content = item.cell.data;
            const decodedContent = Buffer.from(content.slice(2), 'hex').toString('utf-8');
            const regex = /https:\/\/raw\.githubusercontent\.com\/rink1969\/constellar\/refs\/heads\/main\/dob\/assets\/(.*?)"/g;
            let match;
            while ((match = regex.exec(decodedContent)) !== null) {
              const cleanedMatch = match[0].endsWith('"') ? match[0].slice(0, -1) : match[0];
              console.log(cleanedMatch);
              tmpBubbles.push({ src: cleanedMatch, alt: 'Bubble' });
            }
          }
          setZizaiBubbles(tmpBubbles);
        } catch (error) {
          console.error('Error fetching zizai bubbles:', error);
        }
      };

      fetchBubbles();
    }, []);

    const [xiaoyaoBubbles, setXiaoyaoBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
      const fetchBubbles = async () => {
        try {
          const response = await fetch('https://testnet-api.explorer.nervos.org/api/v2/nft/collections/0xce9dde6605d9d39166b2c2583bc93ee6a4d6410233dccb2ff33a270687e801cc/items?page=1');
          const data = await response.json();
          //console.log(data.data);
          const tmpBubbles = [];
          for (const item of data.data) {
            //console.log(item.cell.data);
            const content = item.cell.data;
            const decodedContent = Buffer.from(content.slice(2), 'hex').toString('utf-8');
            const regex = /https:\/\/raw\.githubusercontent\.com\/rink1969\/constellar\/refs\/heads\/main\/dob\/assets\/(.*?)"/g;
            let match;
            while ((match = regex.exec(decodedContent)) !== null) {
              const cleanedMatch = match[0].endsWith('"') ? match[0].slice(0, -1) : match[0];
              console.log(cleanedMatch);
              tmpBubbles.push({ src: cleanedMatch, alt: 'Bubble' });
            }
          }
          setXiaoyaoBubbles(tmpBubbles);
        } catch (error) {
          console.error('Error fetching xiaoyao bubbles:', error);
        }
      };

      fetchBubbles();
    }, []);

    const [yongxianBubbles, setYongxianBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
      const fetchBubbles = async () => {
        try {
          const response = await fetch('https://testnet-api.explorer.nervos.org/api/v2/nft/collections/0x2c2c0c813714d0b2a8fa10cdc0aecf939577dbb5fa051e40eb24963582ba390e/items?page=1');
          const data = await response.json();
          //console.log(data.data);
          const tmpBubbles = [];
          for (const item of data.data) {
            //console.log(item.cell.data);
            const content = item.cell.data;
            const decodedContent = Buffer.from(content.slice(2), 'hex').toString('utf-8');
            const regex = /https:\/\/raw\.githubusercontent\.com\/rink1969\/constellar\/refs\/heads\/main\/dob\/assets\/(.*?)"/g;
            let match;
            while ((match = regex.exec(decodedContent)) !== null) {
              const cleanedMatch = match[0].endsWith('"') ? match[0].slice(0, -1) : match[0];
              console.log(cleanedMatch);
              tmpBubbles.push({ src: cleanedMatch, alt: 'Bubble' });
            }
          }
          setYongxianBubbles(tmpBubbles);
        } catch (error) {
          console.error('Error fetching xiaoyao bubbles:', error);
        }
      };

      fetchBubbles();
    }, []);

    const imageSrc = [
      'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/zizai.jpg',
      'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/xiaoyao.jpg',
      'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/yongxian.jpg',
    ]

    const imageTitle = [
      '自在',
      '逍遥',
      '涌现',
    ];

    const userImages: Record<string, string> = {
      guest: 'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/guest.png',
      user: 'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/user.png',
    }

    const navigate = useNavigate();

    interface Bubble {
      src: string;
      alt: string;
    }

    const handleBubbleClick = (bubble: Bubble): void => {
      navigate('/bubble-view', { state: { bubble } });
    };

    const bubbles = [zizaiBubbles, xiaoyaoBubbles, yongxianBubbles];

    return (
      <div style={{ textAlign: 'center', padding: '20px', position: 'relative', backgroundColor: '#f0f8ff' }}>
        <h1 style={{ marginBottom: '40px', color: '#333' }}>SeeDAO</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', marginTop: '60px' }}>
          {['zizai', 'xiaoyao', 'yongxian'].map((altText, index) => (
            <div key={index} style={{ position: 'relative', marginTop: '40px' }}>
              <img
                src={imageSrc[index]}
                alt={imageTitle[index]}
                style={{
                  width: '300px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
              <p style={{ textAlign: 'center', marginTop: '10px', color: '#555', fontWeight: 'bold', fontSize: '18px' }}>{imageTitle[index]}</p>
              {bubbles[index].map((bubble, bubbleIndex) => {
                const bubbleSize = currentUser === 'guest' ? 50 : Math.random() * 50 + 30;
                const angle = (360 / bubbles[index].length) * bubbleIndex;
                const radius = 200;
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
            src={userImages[currentUser]}
            alt={currentUser}
            style={{
              width: '200px',
              height: 'auto',
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
      guest: 'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/guest-stat.png',
      user: 'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/user-stat.png',
      all: 'https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/all-stat.png',
    };

    const similar: Record<string, string> = {
      guest: '77%',
      user: '84%',
    }

    const userImage = userImages[user];
    const allImage = userImages['all'];

    return (
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f8ff' }}>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#555', fontWeight: 'bold', fontSize: '18px' }}>Profile of {user}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <img
        src={userImage}
        alt={user}
        style={{
          width: '40%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
          />
          <img
        src={allImage}
        alt="All Stats"
        style={{
          width: '40%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
          />
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#555', fontWeight: 'bold', fontSize: '18px' }}>您与社区的相似度为: {similar[user]}</p>
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
