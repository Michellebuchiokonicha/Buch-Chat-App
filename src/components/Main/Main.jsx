// import React from "react";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Miimi</span>
          </p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p className="">Suggest buevfdfkjn dvjvbddjk dhbvsjk</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p className="">
              mimi is Sjsdnkvdlkvd hbgsdvdfkl dfkbedn vfjkcvmc sdhjsdnj
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p className="">
              {" "}
              I serve God Sjsdnkvdlkvd hbgsdvdfkl dfkbedn vfjkcvmc sdhjsdnj
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p className="">Sjsdnkvdlkvd vfjkcvmc sdhjsdnj</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inacurrate info, including people, so
            double-check
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
