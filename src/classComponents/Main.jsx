import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link,withRouter} from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            description:''
         }
    }
    //on change functions:
    newTitle = (e) => {
        this.setState({title: e.target.value});
    };
    newDescription = (e) => {
        this.setState({description: e.target.value});
    };
    //add new note function:
    addNewNote = () => {
        if(this.state.title === "" || this.state.description === ""){
            alert("Field cannot be an empty");
            return
        }
        let note =  {title: this.state.title , description: this.state.description}
        this.props.addNote(note);
        console.log(note);
        alert("Your note " + this.state.title + " is saved");
        this.setState({ title:"", description:"" });
        

    }

   

    render() { 
        return ( 
            <div>
                <div style={{textAlign:'center'}}>
                 <Link to='/'>Disconnect</Link>
                 <h1>Main</h1>
                 <h3>Create your own notes</h3>
                 <p style={{fontFamily:'san-serif'}}>so you dont miss a thing</p>
                </div>
                 <br/><br/>
                 <div style={{textAlign:'center',width:'60%' ,marginRight:'20%' , marginLeft:'20%' }}>
                <Form.Group>
                 <Form.Control type="text" placeholder="Title" value={this.state.title} onChange={this.newTitle} />
                 <br /> 
                 <Form.Control type="text" placeholder="Description" value={this.state.description} onChange={this.newDescription}/>
                </Form.Group>
                 <Button variant="success" onClick={this.addNewNote}>Save Note</Button><br/><br/>
                 <Link to="/notes">
                 <Button>Your Notes</Button>
                 </Link>
                </div>  
               </div> 
           
        );
    }
}
       
    

 
export default withRouter(Main);