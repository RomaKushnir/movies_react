import React from 'react';

class Pagination extends React.Component {
  // constructor() {
  //   super();
  // }

  paginationPrev(currentPage) {
    if (currentPage > 1) {
      this.props.paginationClick(currentPage - 1);
      console.log('prev',currentPage)
    }
  }

  paginationNext(currentPage) {
    if (currentPage < this.props.totalPages) {
      this.props.paginationClick(currentPage + 1);
      // console.log('next',currentPage)
    }
  }

  render() {
    // console.log('pagination props', this.props)
    const {paginationClick, currentPage, totalPages} = this.props;
    return (
      <div className="pagination-block p-5 row">
        <button type="button" 
          onClick={() => paginationClick(1)}>first</button>
        <button type="button" 
          onClick={() => this.paginationPrev(currentPage)}
        >prev</button>
        <button type="button" 
          disabled className="active">{currentPage}</button>
        <button type="button" 
          onClick={() => this.paginationNext(currentPage)}
        >next</button>
        <button type="button" 
          onClick= {() => paginationClick(totalPages)}>{`last ${totalPages}`}</button>
      </div>
    );
  }  
}

export default Pagination;
