import React from 'react';

const Intro = () => {

  return (

        <section id="intro" className="intro-section">
                <div className="text-vertical-center-header">
                    <p className="col-lg-12 title">So much more than pixels.
                    </p>
                </div>
                <div className="row"></div>
                <div className="text-vertical-center-header">
                    <p className="body-text">Hello! my name is Shon and I'm passionate about making things that make an impact.</p>
                </div>
                <div className="row buttons-align">

                    <a className="page-scroll" href="#about">
                        <button className="teaser-button">SEE MY WORK</button>
                    </a>
                    <a className="page-scroll" href="#contact">
                        <button className="teaser-button">HIRE ME</button>
                    </a>
                    </div>
        </section>
  )
}



export default Intro;
