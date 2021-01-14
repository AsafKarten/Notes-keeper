import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, withRouter} from 'react-router-dom';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        
        }
    }
    //send note to delete function
    getNoteToDelete=(index)=>{
        this.props.deleteNote(index);
    };
    

    render() { 
        
        return ( 
            <div style={{textAlign:'center'}}>
                <h1>Notes</h1>
                <div style={{display: 'flex', margin:20}}>
                {this.props.notes.map((note,index)=>
                <Card style={{ width: '18rem' ,marginLeft:10 }} key = {index}>
                     <Card.Body>
                         <Card.Title>{note.title}</Card.Title>
                         <Card.Text>{note.description}</Card.Text>
                         <Button variant="danger" onClick={()=> this.getNoteToDelete(index)}>Delete</Button>
                     </Card.Body>
                </Card>  
                )}
                </div>
                <Link to="/main">
                    <Button variant="link">back 2 Main</Button>
                </Link>
            </div>
            
         );
    }
}
 
export default withRouter(Notes);