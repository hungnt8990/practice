import React, { Component } from 'react';
class UserComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
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
    this.props.getUsersAsync(this.state.email, this.state.password);
  }
  render() {
    var {users,loading} = this.props;
    return (
            <div className="well">
                <h1>Đăng nhập</h1>
                <form onSubmit={this.onHandleSubmit}>
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
                    { this.props.loading && <img src='/img/loading.gif' height="30" width="30"/> }
                    { this.props.error && <p style={{color:'red'}}>{this.props.error}</p> }
                    <button type="submit" className="btn btn-default">Đăng nhập</button>
                </form>
            </div>
        );
    }
}

export default UserComponent;