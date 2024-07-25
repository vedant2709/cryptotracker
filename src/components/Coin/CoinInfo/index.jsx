import React, { useState } from "react";
import "./styles.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 200) + " <span style='color:var(--grey)'>Read More...</span>";
  const longDesc = desc + " <span style='color:var(--grey)'>Read Less...</span>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 200 ? (<p
        className="coin-info-desc"
        onClick={() => setFlag(!flag)}
        dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
      />) : (<p dangerouslySetInnerHTML={{ __html: desc }}/>)}
    </div> 
  );
}

export default CoinInfo;
