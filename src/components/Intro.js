import React, {Component} from 'react';
class Intro extends Component {
    constructor(props){
        super(props)
        this.state={
          firstname: ''
        }
      }
      handlerFirstNameChange = event => {
          this.setState({
            firstname:event.target.value
            })
      }
      handlerLastNameChange = event => {
        this.setState({
          lastname:event.target.value
        })
      }
      handlerDateTimeChange = event => {
        this.setState({
          datetime:event.target.value
        })
      }
      handlerTimeChange = event => {
        this.setState({
          time:event.target.value
        })
      }
      handlerPhoneChange = event => {
        this.setState({
          phone:event.target.value
        })
      }
      handlerPhoneChange = event => {
        this.setState({
          phone:event.target.value
        })
      }
      handlerMessageChange = event => {
        this.setState({
          message:event.target.value
        })
      }
      handlerSubmit = event => {
        event.preventDefault();
        // alert('{this.state.fistname} {this.state.lastname} {this.state.datetime} {this.state.time}{this.state.phone}')
        alert('Hello: ' + this.state.firstname + ' ' + this.state.lastname + ' ' + '\n' +
        'Your Phone' + ' ' +this.state.phone+'\n' +
        'You are Booking on: ' + this.state.datetime + ' '+'-' + ' ' + this.state.time + '\n'+
        'Your Message: ' + ' ' + this.state.message);
      }
    render() {
	    return (
        <div>
            <section className="ftco-intro">
            <div className="container-wrap">
                <div className="wrap d-md-flex align-items-xl-end">
                <div className="info">
                    <div className="row no-gutters">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-phone" /></div>
                        <div className="text">
                        <h3>000 (123) 456 7890</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-my_location" /></div>
                        <div className="text">
                        <h3>198 West 21th Street</h3>
                        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-clock-o" /></div>
                        <div className="text">
                        <h3>Open Monday-Friday</h3>
                        <p>8:00am - 9:00pm</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="book p-4">
                    <h3>Book a Table</h3>
                    <form action="#" className="appointment-form" onSubmit={this.handlerSubmit}>
                    <div className="d-md-flex">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name"  
                            value={this.state.firstname} onChange={this.handlerFirstNameChange}/>
                        </div>
                        <div className="form-group ml-md-4">
                        <input type="text" className="form-control" placeholder="Last Name"
                            value={this.state.lastname} onChange={this.handlerLastNameChange} />
                        </div>
                    </div>
                    <div className="d-md-flex">
                        <div className="form-group">
                        <div className="input-wrap">
                            <div className="icon"><span className="ion-md-calendar" /></div>
                            <input type="text" className="form-control appointment_date" placeholder="Date" 
                                value={this.state.datetime} onChange={this.handlerDateTimeChange}
                            />
                        </div>
                        </div>
                        <div className="form-group ml-md-4">
                        <div className="input-wrap">
                            <div className="icon"><span className="ion-ios-clock" /></div>
                            <input type="text" className="form-control appointment_time" placeholder="Time" 
                                value={this.state.time} onChange={this.handlerTimeChange}
                            />
                        </div>
                        </div>
                        <div className="form-group ml-md-4">
                        <input type="text" className="form-control" placeholder="Phone" 
                            value={this.state.phone} onChange={this.handlerPhoneChange}
                        />
                        </div>
                    </div>
                    <div className="d-md-flex">
                        <div className="form-group">
                        <textarea name='true' id='true' cols={30} rows={2} className="form-control" placeholder="Message" defaultValue={""} 
                            value={this.state.message} onChange={this.handlerMessageChange}
                        />
                        </div>
                        <div className="form-group ml-md-4">
                        <input type="submit" defaultValue="Appointment" className="btn btn-white py-3 px-4" />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
        </div>       
	     );
    }
}
export default Intro;