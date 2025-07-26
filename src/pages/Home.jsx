import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../V.png'
import './Home.css'

function Home() {
  const navigate = useNavigate();
  const optionsRef = useRef(null);
  const loginRef = useRef(null);

  const scrollToOptions = () => {
    optionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLogin = () => {
    loginRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Landing section */}
      <header>
        <img src={logo} alt="logo" className='logo'></img>
        <h2 className='title'>Velora</h2>
        <button className='headerStart'
          onClick={scrollToOptions}
        >
          Start Voting
        </button>
      </header>
      <div className='headerBack'>
        <h1 className='welcomeText1'>Secure, Transparent Voting </h1><h1 className='welcomeText1' id='nextLine'>for the</h1>
        <h1 className='welcomeText2'>Future</h1>
        <h3 className='description'>Blockchain-powered elections for governments, corporations, and</h3>
        <h3 className='description' id='additional'>organizations worldwide.</h3>
        <button className='startVoting'
          onClick={scrollToOptions}
        >
          Start a Voting Session
        </button>
      </div>

      {/* Options section */}
      <section
        ref={optionsRef}
        style={{ height: '50vh', textAlign: 'center', paddingTop: '2rem' }}
      >
        <button
          onClick={() => navigate('/statistics')}
          style={{ margin: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}
        >
          Show Statistics
        </button>
        <button
          onClick={scrollToLogin}
          style={{ margin: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}
        >
          Create Election
        </button>
      </section>

      {/* Login/Register section */}
      <section
        ref={loginRef}
        style={{ height: '70vh', textAlign: 'center', paddingTop: '2rem' }}
      >
        <h2>Login or Register to create an election</h2>
        <button
          onClick={() => navigate('/create')}
          style={{ marginTop: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}
        >
          Proceed to Login/Register
        </button>
      </section>
    </div>
  );
}

export default Home;
