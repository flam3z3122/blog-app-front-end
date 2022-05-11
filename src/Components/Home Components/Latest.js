import React ,{useState, useEffect} from "react";
import { useNavigate , Link  } from "react-router-dom";

import "./Home.css"


const Latest = ({data}) => {

//   const [randomNo, setRandomNo] = useState();

//   useEffect(
//       () => {
//           setRandomNo(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);
//       }, []
//   );

  const latest = data.filter(
    (blog, index) => index < data.length && index > data.length - 4).reverse();


  return (
    <div id="latest">
      <h2>Latest </h2>
      <div className="hr" />
      <div className="latest-container flex">
                {
                   
                    // .filter(
                    //     latest => latest.id == "21" && (latest.category === 'Fitness' || latest.category === 'Bollywood' || latest.category === 'Food'))
                    latest.map(
                        (latestInfo, index) => (
                            <div className="latest-card" key={index}>
                                <Link to={`/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none",  color: "black"}}>
                                    <img src={latestInfo.image} alt="random"/>
                                    <h4 className='the-latest-title'>{latestInfo.title}</h4>
                                    <p className='para'>{latestInfo.text}</p>
                                    <p className='date'>
                                        <span >{latestInfo.category}</span> / {latestInfo.date}
                                    </p>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
    </div>
  );
};

export default Latest;