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
      {isLoading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="ul-movies-container">
          {seriesData.map((item) => (
            <li key={item._id} className="img_wrap">
              <Link to={`/series/${item._id}`}>
                <img
                  className="image-movies img_img"
                  src={`${serverUrl}/uploads/${item.thumbnail}`}
                  alt={item.title}
                />
              </Link>

              <div className="img_description">
                <div className="add-fav-title-container">
                  <Link to={`/series/${item._id}`}>
                    <p>&nbsp; {item.title}</p>
                  </Link>
                  <button>+</button>
                </div>
                <div className="div-year-lenght-container">
                  <p>&nbsp; Year: {item.year}</p>
                </div>
                <p className="para-img-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Series;
