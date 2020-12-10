import {Form, Button} from 'react-bootstrap'
import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            filmText: ""
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();

        this.props.searchFilm(this.state.filmText);
        this.setState({filmText: ''});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <div className="form my-5">
                <Form onSubmit={this.onSubmit}>
                    <Form.Control 
                        type="text" 
                        name="filmText" 
                        placeholder="Search film" 
                        value={this.state.filmText}
                        onChange = {this.onChange}
                        autoFocus 
                    />
                    
                    <Button variant="primary" type="submit" block style={{marginTop: '1rem'}}>
                    Search
                    </Button>
            </Form>
        </div>
        )
    } 
}

export default Search