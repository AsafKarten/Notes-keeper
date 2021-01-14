import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link,withRouter} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:''  
         }
    }
    //on change functions:
    insertEmail = (e) => {
        this.setState({email: e.target.value});
    };
    insertPassword = (e) => {
        this.setState({password: e.target.value});
    };
    //send login request function:
    sendLoginDetails = () => {
        if(this.state.email === "" || this.state.password === "") {
            alert('Field cannot be an empty');
            return;
        }
        let details = {email: this.state.email, password:  this.state.password }
        this.props.logIn(details);
        this.setState({ email: "", password: ""});
    };

    render() { 
        return ( 
            <div style={{textAlign:'center'}}>
                <h1>Login</h1>
                <h3>Note App</h3>
                <h5>By</h5>
                <p >Asaf Karten and Matan Amsalem</p>
            <Form style={{width:'60%' ,marginRight:'20%' , marginLeft:'20%'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" value={this.state.email} onChange={this.insertEmail} placeholder="Enter email" />
                             <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                             </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                         <Form.Control type="password" value={this.state.password} onChange={this.insertPassword} placeholder="Password" />
                </Form.Group>
                 <Button onClick={this.sendLoginDetails}>Login</Button>
                     <br/><br/> Don't have an account yet?
                 <Link to="/registration">
                     <Button  variant='link'>Sign Up</Button>
                 </Link>
            </Form> 
         </div>
         );
    }
}
 
export default withRouter(Login);