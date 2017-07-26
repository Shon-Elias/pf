import React from 'react';

const Footer = () => {

return (
  <footer className="container-fluid text-center bg-lightgray footer">
        <div className="copyrights" style={{marginTop: 25, marginBottom: 5 }}>

            <a className="github" data-toggle="tooltip" data-placement="top" title="github" href="https://github.com/Shon-Elias" target="_blank">
            </a>

            <a className="linkedIn" data-toggle="tooltip" data-placement="top" title="linkedIn" href="https://www.linkedin.com/in/shon-elias/" target="_blank">
            </a>



        </div>
        <div style={{marginTop: 25, color: 'white'}}>
          <p>New York © 2017 Shon Elias.<br /></p>
        </div>
  </footer>
  )
}

export default Footer;
