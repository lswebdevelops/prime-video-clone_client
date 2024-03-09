import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

function SingleSeries() {
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
  const [data, setData] = useState([]);
  console.log(data.link);
  const urlId = useParams();
  const baseUrl = `${serverUrl}/api/series/${urlId.id}`;

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
        ) : (
          <Link to={"/series"}>Back to Series</Link>
        )}

        <img
          className="image-movies-single"
          src={`${serverUrl}/uploads/${data.thumbnail}`}
          alt=""
        />

        <div>
          <h2>{data.title}</h2>
          <Link to={`https:${data.link}` } target="_blanc">
                <FaPlayCircle className="play-button" />
          </Link>

        </div>

        {data?.genre?.map((item, index) => (
          <li key={index}>{item.toUpperCase()}</li>
        ))}

        <hr className="hr-single-page" />
        <p>Year: {data.year} </p>

        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default SingleSeries;
