import React from 'react';
// import {Input} from '@material-ui/core';
import {Input} from 'react-input-component';

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

  paginationCustomPage(val, keyCode) {
    if (keyCode === 13 && val > 0 && this.props.totalPages >= val) {
      this.props.paginationClick(val);          
    }
  }

  render() {
    // console.log('pagination props', this.props)
    const {paginationClick, currentPage, totalPages} = this.props;
    return (
      <div className="pagination-block p-5 row">
        <button 
          type="button" 
          onClick={() => paginationClick(1)}>first</button>
        <button 
          type="button" 
          onClick={() => this.paginationPrev(currentPage)}
        >prev</button>
        <Input id="pagination-input-page"
          value={currentPage}          
          onKeyDown={event => this.paginationCustomPage(event.target.value, event.keyCode)}
        />        
        <button 
          type="button" 
          onClick={() => this.paginationNext(currentPage)}
        >next</button>
        <button 
          type="button" 
          onClick= {() => paginationClick(totalPages)}>{`last ${totalPages}`}</button>
      </div>
    );
  }  
}

export default Pagination;
