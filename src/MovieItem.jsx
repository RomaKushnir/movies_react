import React from 'react'
// import expandArrow from './expand-more.svg'

class MovieItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			addWillWatch: false, 
			showText: false
		}

		this.showText = this.showText.bind(this)
	}
	
	//зміна статусу кнопки для добавлених карточок фільма в локалсторедж
	componentDidMount() {
		this.setState({
			addWillWatch: this.checkIfAdded()
		});
	}

	
	// componentWillUnmount() {
	// 	console.log('will unmount')
	// }

	
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

	showText() {
		// console.log(this)
		this.setState({
			showText: !this.state.showText			
		});
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

	render() {
		const {movie, sortKey} = this.props;
		// console.log('movieItem', this.props)		
		return (
			<div className={`movie-card ${this.state.showText ? 'text-overflow' : ''}`}>
				<img 
					className="card-img" 
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
					alt="" 
				/>
				<p className="card-title">{movie.title}</p>
				<p className="card-rating">{`Рейтинг: ${movie.vote_average}`}</p>
				<p  className={`card-overview ${this.state.showText ? 'show' : 'overflow-hidden'}`}>
					{movie.overview}</p>
				<div className="d-flex justify-content-between align-items-center">
					{/* <img src={expandArrow}/> */}
					<button
						className={`expand-text-btn ${this.state.showText ? "active" : ""}`} 
						type="button"					
						onClick={this.showText}
					>						
					</button>
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