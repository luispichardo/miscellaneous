import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./card-tilt.styles.scss";

// yarn add vanilla-tilt

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const options = {
  //   scale: 1.2,
  speed: 400,
  max: 25,
  glare: true,
  "max-glare": 1,
};

const CardTilt = ({ title, first, last, large }) => (
  <section>
    <div className="container">
      <Tilt options={options}>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={large} alt="user" />
            </div>
            <div className="contentBx">
              <h3>
                {`${title}. ${first} ${last}`}
                <br />
                <span>Programmer</span>
              </h3>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  </section>
);

export default CardTilt;
