import React from 'react'

class MovieItem extends React.Component {
	constructor() {
		super();

		this.state = {
			addWillWatch: false
		}
	}
	
	willWatchLocal = (movie) => {
		this.setState({
			addWillWatch: !this.state.addWillWatch
    });
    
    this.props.willWatch(movie);
	}

	buttonsTerminate(key) {
		let {movie} = this.props;

		if (key === 'myWillWatchList') {
			return (
				<button 
						type="button" 
						style={{'minWidth': '100px'}}
						className="btn btn-danger"
						onClick={() => this.props.movieRemove(movie.id)}
					>delete</button>
			)
		} else {
			return (
				<button
					type="button"
					style={{"minWidth": "100px"}}
					className={`btn ${this.state.addWillWatch ? 'btn-success':'btn-secondary'}`} 
					onClick={() => {
						this.willWatchLocal(movie)
					}}>
						{this.state.addWillWatch === false ? "will watch" : "don't watch"}
				</button>
			)
		}
	}

	// componentWillUnmount() {
	// 	console.log('will unmount')
	// }

	render() {
		let {movie} = this.props;
		// console.log(this.props)
		return (
			<div className="movie-card">
				<img 
					className="card-img" 
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
					alt="" 
				/>
				<p className="card-title">{movie.title}</p>
				<p className="card-rating">{`Рейтинг: ${movie.vote_average}`}</p>
				<p  className="card-overview overflow-hidden" 
					style={{'maxHeight': '100px'}}
				>{movie.overview}</p>
				<div className="d-flex justify-content-end">
					{this.buttonsTerminate(this.props.sortKey)}
					{/* <button 
						type="button" 
						className="btn btn-danger"
						onClick={() => this.props.movieRemove(movie.id)}
					>delete</button> */}
					{/* props.sortBy === 'myWillWatchList' ? */}
					{/* <button
						type="button"
						className={`btn ${this.state.addWillWatch ? 'btn-success':'btn-secondary'}`} 
						onClick={() => {
							this.willWatchLocal(movie)
            }}>
							{this.state.addWillWatch === false ? "will watch" : "don't watch"}
					</button> */}
				</div>
			</div>
		)
	}
}

export default MovieItem;