import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

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
    <div className="single-page-container">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div>
        {data.type === "movie" ? (
        <Link to={"/movies"}>Back to Movies</Link>
        ): (
          <Link to={"/series"}>Back Series</Link>
        )}



        <h2>{data.title}</h2>
        

        <img
          className="image-movies-single"
          src={`${serverUrl}/uploads/${data.thumbnail}`}
          alt=""
        />
        <Link to={`https:${data.link}`} target="_blanc">
                  <FaPlayCircle className="play-button" />
                </Link>
          {data?.genre?.map((item, index) => (
            <li key={index}>{item.toUpperCase()}</li>
          ))}
        
        <hr className="hr-single-page" />
        <div className="div-year-lenght-container">
          <p>Year: {data.year}</p>
         {data.length &&  <p>{data.length} min</p>}
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default SingleMovie;
