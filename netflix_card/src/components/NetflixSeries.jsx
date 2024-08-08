import seriesData from "../api/seriesData.json"


const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curEle) => {
        return (
          <li key={curEle.id}>
            <div>
              <img src={curEle.img_url} alt={curEle.name} width="40%" height="40%" />
            </div>

            <h2>Name:{curEle.name}</h2>
            <h3>Rating:{curEle.rating}</h3>
            <p>sumary:{curEle.description}</p>

            <p>Genre:{curEle.genre}</p>
            <p>Cast:{curEle.cast}</p>
            <a href={curEle.watch_url} target="_blank">
              <button>watch now</button>
            </a>
          </li>);

      })
      }



    </ul>
  );
};

export default NetflixSeries;



