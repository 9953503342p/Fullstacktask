import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GreetingPage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');

  useEffect(() => {
    const fetchGreeting = async () => {
      if (!name) {
        setError('Name is required.');
        return;
      }

      try {
        const response = await fetch(`/api/greet?name=${encodeURIComponent(name)}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to fetch');
        setMessage(data.message);
        setError('');
      } catch (err) {
        setError(err.message);
        setMessage('');
      }
    };

    fetchGreeting();
  }, [name]);

  return (
    <div className="container">
      <h1>Greeting Page</h1>
      {message && <div className="message">{message}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default GreetingPage;
