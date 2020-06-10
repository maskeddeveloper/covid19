import React, { useEffect, useState } from "react";

const Grid = (props) => {
  const [data, setData] = useState(props.data);
  const [zone, setZone] = useState(props.area);

  return (
    <div className="grid">
      {data.map((area) => {
       return zone == area.area ?  <div className="card">
            {
                zone == 1 ?  <span style={{  backgroundColor: "green" }} className="dot Blink"></span> :  <span style={{  backgroundColor: "red" }} className="dot Blink"></span>
            }
           
            <h3>{area.region}</h3> 
          </div>
        : <span></span>
      })}
     

      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1200px;
          margin-top: 3rem;
        }
        .dot {
            height: 25px;
            width: 25px;
           
            border-radius: 50%;
            display: inline-block;
          }

        .card {
          margin: 1rem;
          flex-basis: 20%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          //   margin: 0 0 1rem 0;
          font-size: 1rem;
          margin: 0;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .Blink {
            animation: blinker 1.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
          }
          @keyframes blinker {  
            from { opacity: 1; }
            to { opacity: 0; }
          }
      `}</style>
    </div>
  );
};

export default Grid;
