import React from 'react';

class MovieTabs extends React.Component {

	componentWillReceiveProps() {
		// console.log('MovieTabs will receive')
	}
	
	shouldComponentUpdate(nextProps, nextState) {		
		// console.log('MovieTabs should update');
		// console.log('next props: ', nextProps.sortKey)
		// console.log('this props: ', this.props.sortKey)
		if (nextProps.sortKey !== this.props.sortKey ) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		// console.log('MovieTabs render')
		const {sortKey, sortTabSwitch} = this.props;

		const clickHandle = value => {
			// value is accesseble for sortTabSwitch()
			return (event) => sortTabSwitch(value);
		}

		const getClassBySortKey = value => {
			return (
				sortKey === value ? 'btn-primary' : 'btn-default'
			)
		}

		return (
			<div className="movie-tabs p-3">
				<div className="row">
					<button  
						className={`${getClassBySortKey('popularity.desc')} col-4 m-1`}
						onClick={clickHandle('popularity.desc')}>
						popularity
					</button>
					<button 
						className={`${getClassBySortKey('revenue.desc')} col-4 m-1`}
						onClick={clickHandle('revenue.desc')}>
						revenue
					</button>
					<button 
						className={`${getClassBySortKey('release_date.desc')} col-3 m-1`}
						onClick={clickHandle('release_date.desc')}>
						release
					</button>
				</div>
			</div>
		)
	}
}

export default MovieTabs;