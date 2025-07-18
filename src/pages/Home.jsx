import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={scrollToOptions}
          style={{ fontSize: '2rem', padding: '1rem 2rem', cursor: 'pointer' }}
        >
          Start Now
        </button>
      </section>

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
