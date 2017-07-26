import React from 'react';

const References = () => {
  return (
<section id="references" className="references-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>SEE WHAT OTHERS ARE SAYING</h1>
            </div>
          </div>
        </div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <div className="carousel-content">
                <p>It's been a great time to work closely with Shon</p><p>
                </p><h4>Daniel Joseph, Head of Mobile Division, <a href="http://www.mako.co.il/tv">Keshet</a></h4>
              </div>
            </div>
            <div className="item">
              <div className="carousel-content">
                <p>I've had the pleasure to work with Shon - his attention to detail and interest in innovation are truly exceptional.</p><p>
                </p><h4>Levona Cohen, Director of Web Applications, <a href="www.tracx.com">Tracx</a></h4>
              </div>
            </div>
            <div className="item">
              <div className="carousel-content">
                <p>I've had the pleasure to work with Shon - his attention to detail and interest in innovation are truly exceptional.</p><p>
                </p><h4>Levona Cohen, Director of Web Applications, <a href="www.tracx.com">Tracx</a><p />
                </h4></div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

  )
}

export default References;
