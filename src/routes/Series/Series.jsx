import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Series() {
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
  const baseUrl = `${serverUrl}/api/movies`;
  const [seriesData, setSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const jsonData = await response.json();
        const filteredSeries = jsonData.filter(
          (item) => item.type === "series"
        );
        setSeriesData(filteredSeries);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error by fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchSeries();
  }, []);

  return (
    <div>
      <h1>Series you may like:</h1>
      <ul className="ul-movies-container">
        {seriesData.map((item) => (
          <li key={item._id}>
            <Link to={`/series/${item._id}`}>
              <div>
                <img
                  className="image-movies"
                  src={`${serverUrl}/uploads/${item.thumbnail}`}
                  alt={`${item.title}`}
                />
                <h2>{item.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Series;
