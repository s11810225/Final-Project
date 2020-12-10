import React from 'react';
import {Card,Image,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Movie = ({movie:{title, poster_path, release_date, id}}) => {
    if(poster_path === null){
        return(
            <Card body className="text-center" >
                <h3 style={{marginTop:'200px', marginBottom:'130px', display:'block'}}>Image Not Found</h3>
                <h6 className="pt-3" ><b>{title}</b></h6>
                <p style={{fontSize:"15px"}}>{release_date}</p>
                <Link to={`/movieDetails/${id}`}><Button variant="primary">View</Button></Link>


            </Card>
        )
    }
    else{
        return(
            // <Card body className="text-center" >
            //     <Image style={{width:'15rem'}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} rounded/>
            //     <h6 className="pt-3" ><b>{title}</b></h6>
            //     <p style={{fontSize:"15px"}}>{release_date}</p>
            //     <Link to={`/movieDetails/${id}`}><Button variant="primary">View</Button></Link>

            // </Card>

            <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Link to={`/movieDetails/${id}`}><Button variant="primary">View Details</Button></Link>
            </Card.Body>
            </Card>
        )
    }
    
  }

export default Movie