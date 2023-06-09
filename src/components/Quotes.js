import { useState, useEffect } from 'react';
import './Quotes.css';

function Quotes() {
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
        headers: { 'X-Api-Key': 'RQV8zLgm4opgTdLknwA2y3HFuTq2CYsYCYuHKE8r' },
      })
        .then((response) => response.json())
        .then((quote) => {
          console.log(quote);
          setData(quote[0].quote);
          setAuthor(` - ${quote[0].author}`);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);

          setError(err);
        });
    };
    fetchData();
  }, [setData]);

  return (
    <div className="container">
      <p className="load">{loading ? <>Loading..</> : <></>}</p>
      <p className="error">{error === '' ? <></> : <>{error}</>}</p>
      <blockquote className="quote">
        {data}
        {author}
      </blockquote>
    </div>
  );
}

export default Quotes;
