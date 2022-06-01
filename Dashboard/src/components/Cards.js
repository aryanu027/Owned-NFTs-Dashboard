import React, { useEffect, useState } from "react";
import { Data } from "./cardstore";
import { Link } from "react-router-dom";
import Sellpopup from "./Sellpopup";
import Moneypage from "./Moneypage";
// 
const Cards = () => {
  // 
  const [cost, setcost] = useState(0);
  const [amt, setamt] = useState(0);
  useEffect(() => {
    let ans = 0;
    {
      Data.map((item) => {
        ans += item.price;
      });
    }
    setcost(ans);
    setamt(5)
  });
  // 
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  // 
  return (
    <>
      <br />
      <div className="row  justify-content-center">
        <div class="card">
          <h5 class="card-header">Total Worth of NFTs:</h5>
          <div class="card-body">
            <h2 class="card-title">{cost} eth</h2>
            <input
              type="button"
              value="Sell All"
              onClick={togglePopup}
              className="btn btn-primary"
            />
            {isOpen && (
              <Sellpopup
                content={
                  <>
                    <h4 style={{ color: "black" }}>
                      Do you want to sell all your NFTs?
                    </h4>
                    <button>Yes</button>
                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      Cancel
                    </button>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>
        <div class="card">
          <h5 class="card-header">Number of NFTs owned:</h5>
          <div class="card-body">
            <h1 class="card-title">{Data.length}</h1>
          </div>
        </div>
        <div class="card">
          <h5 class="card-header">Account Balance</h5>
          <div class="card-body">
            <h5 class="card-title">{amt} eth</h5>
            <Link to="/Moneypage" class="btn btn-primary">
              Add Money
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="Mainhead">Owned NFTs</h1>
      <div className="storeofts">
        {Data.map((info) => {
          return (
            <>
              <div class="card" key={info.id}>
                <Link to="/Detailedpage">
                  <img
                    className="card-img-top"
                    src={info.image}
                    alt="Card image cap"
                  />
                </Link>
                <div class="card-body">
                  <p>{info.parent}</p>
                  <h5 class="card-title">{info.title}</h5>
                  <div className="pricelike">
                    <h2> {info.price} eth</h2>
                    <btn
                      className="btn btn-primary"
                      disabled={info.incart ? true : false}
                    >
                      Sell
                    </btn>
                    <p>{info.Likes} likes</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
