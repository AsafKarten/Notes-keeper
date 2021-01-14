import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Login from './classComponents/Login';
import Registration from './classComponents/Registration';
import Main from './classComponents/Main';
import Notes from './classComponents/Notes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedUser:''
    }  
  }


    //Functions:
    //f1. Register New User
  addUser = (user) => {
    let temp = [...this.state.users, user];
    this.setState({ users: temp });
  }

    //f2. Login function
  logIn = (details) => {
    let user = this.state.users.find((s) => s.email === details.email && s.password === details.password);
    if(user === undefined)
    {
      alert("oops one of the details is wrong");
      return;
    }
    else{
      this.props.history.push({
        pathname:'/main'
      });
      this.setState({
        loggedUser:user
      })
    }
  }

//f3. Create new note
addNote = (note) => {
  let user=this.state.users.find((s)=>s.email===this.state.loggedUser.email)
  user.notes.push(note)
  let newArr=this.state.users.filter((s)=>s.email!==user.email)
  this.setState((prev)=>({
    loggedUser:user,
    users:[...newArr,user]
  }));
}

//f4. Delete note
deleteNote = (index) => {
  console.log(index,this.state.loggedUser)
  let user=this.state.users.find((s)=>s.email===this.state.loggedUser.email)
  user.notes.splice(index,1)
  this.setState((prev)=>({
    loggedUser:user,
    users:[...user.notes,user]
  }));
}

  render() {
    return (
     
        <div>
          <Switch>
            <Route exact path="/" render={() => <Login logIn={this.logIn}/>} />
            <Route path="/registration" render={() => <Registration addUser={this.addUser} />} />
            <Route path="/main" render={() => <Main addNote={this.addNote}/>} />
            <Route path="/notes"render={() => <Notes deleteNote={this.deleteNote} notes ={this.state.loggedUser.notes}/>}/>
          </Switch>
        </div>
      

    );
  }
}

export default withRouter(App);
