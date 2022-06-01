import React, { useEffect, useState } from "react";
import Addmoneypop from "./Addmoneypop";

const Moneypage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [mv, setmv] = useState();
  return (
    <>
      <h1 style={{ color: "white" }}>Add Money to Wallet</h1>
      <br />
      <div className="ethbox">
        <input
          type="text"
          className="inputbox"
          value={mv}
          onChange={(e) => setmv(e.target.value)}
        />
        <h1>Eth</h1>
      </div>
      <br />
      <input
        type="button"
        value="CLick to add"
        onClick={togglePopup}
        className="btn btn-primary"
      />
      {isOpen && (
        <Addmoneypop
          content={
            <>
              <h4 style={{ color: "black" }}>Transferred successfully!</h4>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                ok
              </button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Moneypage;
