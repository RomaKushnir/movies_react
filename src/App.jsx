import React from 'react';
// import {moviesData} from './moviesData.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs.jsx'
import {API_key, API_url} from './apiMovieDB.js';

class App extends React.Component { 
  constructor() {
    super();

    this.state = {      
      // movies: moviesData,
      movies: [],
      willWatchList: [],
      sortBy: 'myWillWatchList'
    }

    this.movieRemove = this.movieRemove.bind(this) //привязка контекста класу до функції movieRemove
    console.log('constructor')
    console.log('App: ', this)
    // console.log(API_key, `\n${API_url}`)
  }

  movieRemove(clickEl) {
    let updatedMovies = this.state.movies.filter(el => {
      return el.id !== clickEl;
    });

    let updatedWillWatch = this.state.willWatchList.filter(el => {
      return el.id !== clickEl;
    });

    let updatedMoviesLocalStoradge = JSON.parse(localStorage.getItem('movies')).filter(el => {
      return el.id !== clickEl;
    });

    localStorage.setItem('movies', JSON.stringify(updatedMoviesLocalStoradge));

    this.setState({
      movies: updatedMovies,
      willWatchList: updatedWillWatch
    });
  }

  willWatch = addMovie => {
    let newWillWatchList = [...this.state.willWatchList];

    let isInWillWatch = this.state.willWatchList.some((el) => {
      return el === addMovie;
    });
    
    if(!isInWillWatch) {
      newWillWatchList.push(addMovie);
    } else {
      newWillWatchList = this.state.willWatchList.filter(el => {
        return el !== addMovie;
      });
    }

    this.setState({
      willWatchList: newWillWatchList
    });

    localStorage.setItem('movies', JSON.stringify(newWillWatchList));
  }

  getMovies() {
    if (this.state.sortBy !== 'myWillWatchList') {   
      fetch(`${API_url}/discover/movie?api_key=${API_key}&sort_by=${this.state.sortBy}&language=ru`)
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(data => {
        // console.log(data)
        this.setState({
          movies: data.results
        });
        // this.gotMovies = data.results;
        // console.log(this.gotMovies)
      });
    }
  }

  sortTabSwitch = sort_by => {
    if (sort_by !== 'myWillWatchList') {
      this.setState({
        sortBy: sort_by
      });
    } else {
      this.setState({
        sortBy: sort_by,
        // movies: this.state.willWatchList
        movies: JSON.parse(localStorage.getItem('movies')) || [],    
      });      
    }
    // this.getMovies();
    // console.log(this.state.sortBy);
  }

  
  movieShowFilter(movieObj) {
    let localWillMovies = JSON.parse(localStorage.getItem('movies'));

    if (this.state.sortBy !== "myWillWatchList") {
      // console.log(localWillMovies);
      return movieObj.filter(fetchMovie => {
        let tempLocalWillMovie = {};
        
        for (let item of localWillMovies) {
          if (fetchMovie.id === item.id) {
            tempLocalWillMovie = item;
            break;
          }
          
        }
        return fetchMovie.id !== tempLocalWillMovie.id;
      })
    } else {
      return localWillMovies;
    }
  }
  
  componentDidMount() {
    console.log('App did mount: fetch');
    this.setState({
      movies: JSON.parse(localStorage.getItem('movies')) || [],      
      willWatchList: JSON.parse(localStorage.getItem('movies')) || [],      
    });
    // this.getMovies();
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   console.log('should update', prevProps, prevState)
  //   if (prevState === this.state) {
  //     return false
  //   }
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log('did update: ', this.state.sortBy);
    console.log('App did update: ','prevState: ', prevState,'\ncurrentState: ', this.state);
    
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
      // console.log('did update: fetch');
    }
  }
  
  render() {    
    // console.log('render: ',this.state.sortBy);
    console.log('App render');
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <MovieTabs 
              sortTabSwitch={this.sortTabSwitch}
              sortKey={this.state.sortBy}
            />
            <div className="movie-list">
                <div className="container">
                  <div className="row">
                    {/* {this.state.movies.map(movie => {
                        return (
                          <div className="col-md-6" key={movie.id}>
                            <MovieItem 
                              movie={movie} 
                              movieRemove={this.movieRemove} 
                              willWatch={this.willWatch} 
                              key={movie.id}
                              sortKey={this.state.sortBy}
                            />
                          </div>
                        )
                      }
                    )} */}
                    {this.movieShowFilter(this.state.movies).map(movie => {
                      return (
                        <div className="col-md-6" key={movie.id}>
                          <MovieItem 
                            movie={movie} 
                            movieRemove={this.movieRemove} 
                            willWatch={this.willWatch} 
                            key={movie.id}
                            sortKey={this.state.sortBy}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
          </div>
          <div className="col-3 p-3">
            <button 
              className={`${this.state.sortBy === 'myWillWatchList' ? 'btn-primary' : 'btn-default'} m-1 col-12`}
              onClick={() => {
                this.sortTabSwitch('myWillWatchList');
              }
              }>
              will watch
            </button>
            <p className="text-center font-weight-bold">{`Will watch: ${String(this.state.willWatchList.length)}`}</p>
            {/* JSON.parse(localStorage.getItem('movies')).length ||  */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;


