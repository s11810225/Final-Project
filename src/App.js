import './App.css';
import TopMenu from './components/Layout/TopMenu';
import Search from './components/Search';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Movie from './components/Movie'
import AboutPage from './components/AboutPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: [],
      movieDetails: {}
    };
  }
  async componentDidMount()
  {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8fad9ab8c8ff98d45adf27664bb5ce21');
    this.setState({ movies: res.data.results });
  }

  searchFilm = async (filmText) =>
  {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${filmText}&api_key=8fad9ab8c8ff98d45adf27664bb5ce21`);
    this.setState({movies: res.data.results})
  }

  getMovie = async (id) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8fad9ab8c8ff98d45adf27664bb5ce21&language=en-US`);
    this.setState({movieDetails: res.data});
  }

  render()
  {
    return (
      <Router>
        <div className="App">
          <TopMenu />
          <Container>
            <Switch>
              <Route exact path="/" render={() => (
                <React.Fragment>
                  <Search searchFilm={this.searchFilm} />
                  <Movie movies={this.state.movies}/>
                </React.Fragment>
              )}/>
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/movieDetails/:id" render={props => (
                <MovieDetail { ... props} getMovie={this.getMovie} movieDetails={this.state.movieDetails}/>
              )} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;