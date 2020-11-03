import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "dat123",
      ipUsername: '',
      password: "dat1",
      ipPassword: '',
      popup: "Vui lòng nhập username và password"
    }
  }

  handleUsernameChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
      popup: "Vui lòng nhập mật khẩu"
    });
  }

  handlePasswordChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
      popup: ""
    });
  }
  onLogin = () => {
    if (this.state.username === this.state.ipUsername && this.state.password === this.state.ipPassword) {
      this.props.history.push('/');
    } else {
      this.setState({
        popup: "Sai Tên đăng nhập hoặc Mật khẩu"
      })
    }

  }

  render() {

    var { Username, Password } = this.state;

    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Đăng Nhập</h4>

            <form action="">
              <div className="form-group">

                <input 
                  className="iptext" 
                  type="text" 
                  for="form-control" 
                  name="ipUsername" id="username" 
                  placeholder="  Tên Đăng Nhập" 
                  size="70" 
                  color="red" 
                  value={Username}
                  onChange={this.handleUsernameChange}
                  />
              </div>
              <div className="form-group">

                <input 
                    className="iptext" 
                    type="password" 
                    for="form-control" 
                    name="ipPassword" 
                    id="password" 
                    placeholder="  Mật Khẩu" 
                    size="70" 
                    value={Password}
                    onChange={this.handlePasswordChange}
                    />
              </div>
              <div className="form-group">

                <span className="label label-success mg-l">{this.state.popup}</span>
                                    <br />
                                    <br />
                <div className="col-sm-10 col-sm-offset-2">
                  <button type="submit" className="btn btn-primary" onClick={this.onLogin}>Đăng Nhập</button>
                  <button type="submit" className="btn btn-primary"><Link to='/Register'>Đăng Ký</Link></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;