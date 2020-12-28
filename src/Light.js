import React, {useState} from 'react';

const Light = () => {
  const [RedOn, setRedOn] = useState("");
  const [YellowOn, setYellowOn] = useState("");
  const [GreenOn, setGreenOn] = useState("");

  return (
    <>
      <div className="pagogo">
        <div className="background">
          <div className="boxou">
            <div className="boxie">
              <div className={"void Red " + RedOn} onClick ={() => (setRedOn("On"), setYellowOn(""), setGreenOn(""))}></div>
              <div className={"void Yellow " + YellowOn} onClick ={() => (setRedOn(""), setYellowOn("On"), setGreenOn(""))}></div>
              <div className={"void Green " + GreenOn} onClick ={() => (setRedOn(""), setYellowOn(""), setGreenOn("On"))}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Light;