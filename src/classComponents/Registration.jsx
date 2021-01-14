import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom'


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cPassword: ''
        }
    }
    //on change functions:
    newMail = (e) => {
        this.setState({ email: e.target.value });
    }
    newPass = (e) => {
        this.setState({ password: e.target.value });
    }
    confirmPass = (e) => {
        this.setState({ cPassword: e.target.value });
    }
    //chek info and send props function
    checkUserInfo = () => {
        if (this.state.password !== this.state.cPassword) {
            alert("The confirm password is not match!");
            return;
        }
        if (this.state.password === "" || this.state.email === "") {
            alert("Field cannot be an empty");
            return;
        }
        let user = { email: this.state.email, password: this.state.password,notes:[] };
        this.props.addUser(user);
        this.setState({ email: "", password: "", cPassword: "" });
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                      <h1>Registration</h1>
                      <p>Welcome to Note-App registration page</p>
                </div>
                <br/><br/>
                   <Form style={{width:'60%' ,marginRight:'20%' , marginLeft:'20%'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" value={this.state.email} onChange={this.newMail} placeholder="Enter email" />
                             <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                             </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                         <Form.Control type="password" value={this.state.password} onChange={this.newPass} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                      <Form.Label>Confirm password</Form.Label>
                         <Form.Control type="password" value={this.state.cPassword} onChange={this.confirmPass} placeholder="Confirm Password" />
                </Form.Group>
                 <Button onClick={this.checkUserInfo}> Register</Button>
            </Form>  
            </div>
        );
    }
}

export default withRouter(Registration);