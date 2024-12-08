import React from "react";
import "./myhero.css";
import Title from "../../common/title/Title";

function Myhero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle={'WELCOME TO ACEDEMIA'} title={'Best Online Education'} />
            <p>
              Unlock your potential with our comprehensive courses and
              expert-led programs. Whether you’re looking to enhance your
              skills, advance your career, or explore new passions, ACADEMIA
              provides top-quality education from the comfort of your home.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW<i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button  >
                VIEW COURSE<i className="fa fa-long-arrow-alt-right"></i>
              </button>
               
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Myhero;
