import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

function Movie() {
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
  const baseUrl = `${serverUrl}/api/movies`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetshData = async () => {
      try {
        const response = await fetch(baseUrl);
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
    fetshData();
  }, []);

  // shuffle data 
  const shuffeledData = [...data].sort(() => Math.random() -0.5);
  return (
    <div>
      <h1>Movies you may like:</h1>

      {isLoading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="ul-movies-container">
          {shuffeledData.map((item) => (
            <li key={item._id}>
              {item.type === "movie" && (
                <div className="img_wrap">
                  <Link to={`/movies/${item._id}`}>
                    <img
                      className="image-movies img_img"
                      src={`${serverUrl}/uploads/${item.thumbnail}`}
                      alt={item.title}
                    />
                  </Link>

                  <div className="img_description">
                    <div className="add-fav-title-container">
                      <Link to={`/movies/${item._id}`}>
                        <p>&nbsp; {item.title}</p>
                      </Link>
                      <button>+</button>
                    </div>
                    <Link to={`https:${item.link}`} target="_blanc">
                  <FaPlayCircle className="play-button" />
                </Link>

                    <div className="div-year-lenght-container">
                      <p>
                        &nbsp; Year: {item.year} <span>{item.length} min</span>
                      </p>
                    </div>
                    <p className="para-img-description">{item.description}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movie;
