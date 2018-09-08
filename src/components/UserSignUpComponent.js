import React, { Component } from 'react';
class UserSignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: '',
            phone: '',
        }
      }
  handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name] : value
    })
  }
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.createUserAsync(this.state.email, this.state.password, this.state.fullname, this.state.phone);
  }
  render() {
    var {users,loading} = this.props;
    return (
            <div className="well">
                <h1>Đăng ký</h1>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label for="email">Full Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter fullname"
                            name="fullname"
                            onChange={this.handleChange} 
                            value={this.state.fullname}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            onChange={this.handleChange} 
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                            name="password" 
                            onChange={this.handleChange}
                            value={this.state.password} 
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Phone Number:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter phone number"
                            name="phone"
                            onChange={this.handleChange} 
                            value={this.state.phone}
                        />
                    </div>
                    { this.props.loading && <img src='/img/loading.gif' height="30" width="30"/> }
                    { this.props.error && <p style={{color:'red'}}>{this.props.error}</p> }
                    { this.props.users.length > 0 && <p style={{color:'red'}}>Bạn đã đăng ký thành công với email {this.props.users.email}</p> }
                    <button type="submit" className="btn btn-default">Đăng ký</button>
                </form>
            </div>
        );
    }
}

export default UserSignIn;