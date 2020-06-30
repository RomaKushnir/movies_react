import React from 'react'

class MovieItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			addWillWatch: false
		}
	}
	
	//зміна статусу кнопки для добавлених карточок фільма в локалсторедж
	componentDidMount() {
		this.setState({
			addWillWatch: this.checkIfAdded()
		});
	}
	
	//перевірка чи є даний елемент в локал сторедж для відображення статусу кнопки
	checkIfAdded(){
		return JSON.parse(localStorage.getItem('movies')).some((el) => el.id === this.props.id)
	}
	
	willWatchLocal = (movie) => {
		this.setState({
			addWillWatch: !this.state.addWillWatch
    });
    
    this.props.willWatch(movie);
	}

	buttonActionTerminate(sortKey) {
		let {movie} = this.props;

		if (sortKey === 'myWillWatchList') {
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
		const {movie, sortKey} = this.props;
		// console.log('movieItem', this.props)		
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
					{this.buttonActionTerminate(sortKey)}
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