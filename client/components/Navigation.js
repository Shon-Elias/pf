import React from 'react';

// npm install react-scroll
import Scroll from 'react-scroll';

import Intro  from './Intro';
import Work from './Work';
import References from './References';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

class Topbar extends React.Component{

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {

    });

    Events.scrollEvent.register('end', function() {

    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" >
          <div className="container">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">

               <div className="navbar-header page-scroll">

                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                </button>
                <a className="navbar-brand page-scroll" href="#page-top"></a>
              </div>

                <li><Link activeClass="active" className="test0" to="test0" spy={true} smooth={true} duration={500} ></Link></li>

                <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >WORK</Link></li>
                <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>REFERENCES</Link></li>
                <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >ABOUT</Link></li>
                <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>SKILLS</Link></li>
                <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500}>CONTACT</Link></li>

              </ul>
            </div>
          </div>
        </nav>

        <Element name="test0" className="element" >
            <Intro />
        </Element>


        <Element name="test1" className="element" >
            <Work />
        </Element>

        <Element name="test2" className="element">
          <References />
        </Element>


        <Element name="test3" className="element">
          <AboutMe />
        </Element>

        <Element name="test4" className="element">
          <Skills/>
        </Element>

        <Element name="test5" className="element">
          <ContactMe />
        </Element>





      </div>
    );
  }
}


export default Topbar;


 // <Element name="test6" className="element">
        //   <Footer />
        // </Element>
