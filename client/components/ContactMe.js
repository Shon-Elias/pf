import React from 'react';
import axios from 'axios';
// const ContactMe = () => {
class ContactMe extends React.Component{
  constructor(props){
   super(props)

   this.state = {
     name: '',
     email: '',
     phone: '',
     subject: '',
     body: ''
   }

   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // var author = this.state.author.trim();
    // var text = this.state.text.trim();
    // if (!this.state.subject || !this.state.body) {
    //   return;
    // }
    const msg = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      body: this.state.body
    };

    axios.post('/api/contact', msg);

    this.setState({
    name: '',
     email: '',
     phone: '',
     subject: '',
     body: ''
    });

  }


  render(){
    return (
      <section id="contact" className="contact-section">
          <div className="container">
            <div className="container-fluid">
              <div className="row-fluid">
                <div className="col-md-offset-2 col-md-8" id="box">
                  <h2>Contact Me!</h2>
                  <hr />
                  <form className="form-horizontal" action=" " method id="contact_form"
                  onSubmit={this.handleSubmit}
                  >
                    <fieldset>
                      {/* Form Name */}
                      {/* Text input*/}
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                            <input
                            name="first_name" placeholder="Name" className="form-control" type="text"
                            required
                            value = {this.state.name}
                            onChange = {(name) => this.setState({name: name.target.value})}
                             />
                          </div>
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"  /></span>
                            <input name="email" placeholder="E-Mail" className="form-control" type="text"
                            required
                            value = {this.state.email}
                            onChange = {(email) => this.setState({email: email.target.value})}
                             />
                          </div>
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"  /></span>
                            <input name="phone" placeholder="Phone" className="form-control" type="text"
                            value = {this.state.phone}
                            onChange={(phone) => this.setState({phone: phone.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"  /></span>
                            <input name="subject" placeholder="Subject"  className="form-control" type="text"
                            required
                            value={this.state.subject}
                            onChange={(subject) => this.setState({subject: subject.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <div className="col-md-12 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-pencil" required /></span>
                            <textarea className="form-control form-textarea" name="body" placeholder="Message" rows="5"
                            value={this.state.body}
                            onChange = {(body) => this.setState({body: body.target.value})}
                             />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-warning pull-right"

                          >Send
                          <span className="glyphicon glyphicon-send" />
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights" style={{paddingTop: 90, marginTop: 25, marginBottom: 5 }}>
              <a className="github" data-toggle="tooltip" data-placement="top" title="github" href="https://github.com/Shon-Elias" target="_blank">
              </a>

              <a className="linkedIn" data-toggle="tooltip" data-placement="top" title="linkedIn" href="https://www.linkedin.com/in/shon-elias/" target="_blank">
              </a>
          </div>
          <div style={{marginTop: 25, color: 'white'}}>
            <p>New York © 2017 Shon Elias.<br /></p>
          </div>
      </section>
    );
  }


}

export default ContactMe;
