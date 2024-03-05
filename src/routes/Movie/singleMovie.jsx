import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleMovie() {
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
  const [data, setData] = useState([]);
  const urlId = useParams();

  const baseUrl = `${serverUrl}/api/movies/${urlId.id}`;

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [baseUrl]);

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <Link to={"/movies"}>Back to Movies</Link>
      <div>
        <img  className="image-movies-single" src={`${serverUrl}/uploads/${data.thumbnail}`} alt="" />
        <h2>{data.title}</h2>
        <ul>
          {data?.genre?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
       <div className="div-year-lenght-container">
       <p>Year: {data.year}
        <span>{data.length} min</span>
       </p>

       </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default SingleMovie;
