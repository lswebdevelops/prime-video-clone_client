import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

function Home() {
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
  const baseUrl = `${serverUrl}/api/movies`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let url = baseUrl;
      if (selectedGenre) {
        url += `?genre=${encodeURIComponent(selectedGenre)}`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error by fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedGenre]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>All you can find:</h1>
          <select onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">All</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="action">Action</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="crime">Crime</option>
            <option value="romance">Romance</option>
            <option value="adventure">Adventure</option>
            <option value="fantasy">Fantasy</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="mystery">Mystery</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
          </select>

          <ul className="ul-movies-container">
            {data.map((item) => (
              <li key={item._id}>
                <Link to={`/movies/${item._id}`}>
                  <div>
                    <img
                      className="image-movies"
                      src={`${serverUrl}/uploads/${item.thumbnail}`}
                      alt={item.title}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Home;
