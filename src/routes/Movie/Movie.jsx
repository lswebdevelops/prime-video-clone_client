import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

function Movie() {
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
  const baseUrl = `${serverUrl}/api/movies`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetshData();
  }, []);

  return (
    <div>
      <h1>Movies you may like:</h1>
      <ul className="ul-movies-container">
        {data.map((item) => (
          <li>
            {item.type === "movie" && (
              <Link to={`/movies/${item._id}`}>
                <div>
                  <img
                    className="image-movies"
                    src={`${serverUrl}/uploads/${item.thumbnail}`}
                    alt={item.title}
                  />
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
