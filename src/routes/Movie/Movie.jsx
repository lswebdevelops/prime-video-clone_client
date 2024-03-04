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
      {/* <pre>{JSON.stringify(data, null , 2)}</pre> */}
      <ul>
        {data.map((item) => (
          <>
            <li key={item._id}>{item.title}</li>: <span>{item.type}</span>
            <Link to={`/movies/${item.slug}`}>
              <img src={`${serverUrl}/uploads/${item.thumbnail}`} alt={`${item.title}`} />
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
