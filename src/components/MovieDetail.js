import React from 'react';
import {Card, Container, Image, Row, Col, Button, TabContainer} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class MovieDetail extends React.Component{
    componentDidMount(){
        this.props.getMovie(this.props.match.params.id);
    }

    render()
    {
        const {title, poster_path, release_date, overview, runtime, vote_average, vote_count} = this.props.movieDetails;
        return(
            <TabContainer>
                <Link to={'/'}><Button variant="primary" className="mb-3 mt-3"> Back </Button></Link>

                <Card body  className="text-center shadow">
                    <Row>
                        <Col sm={4}>
                            <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} style={{width:"80%"}}/>
                        </Col>
                        <Col sm={8}>
                            <h3>{title}</h3>
                            <h6>{release_date} ({runtime}m)</h6>
                            <br />
                            <p className="text-left">Average Score <b>{vote_average}</b> / Vote <b>{vote_count}</b> </p>
                            <hr />                      
                            <p className="text-left"><b>Overview :</b> <br />{overview}</p>
                        </Col>
                    </Row>
                </Card>
            </TabContainer>
        )
    }

}

export default MovieDetail