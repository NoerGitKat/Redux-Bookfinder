import React, { Component } from 'react';
import BookList from '../components/BookList';
import BookDetails from '../components/BookDetails';
import { connect } from 'react-redux'; //allows for injecting of state into any level of hierarchy
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class AppContainer extends Component {
  constructor(props) {
  	super(props);

  	this.renderList = this.renderList.bind(this);
  }

  renderList() {
  	return this.props.books.map((book) =>
  		<li key={book.title}
    			onClick={() => this.props.selectBook(book)}
    			className='list-group-item'>
  			{book.title}
  		</li>
  	);
  }

  render() {
    return (
      <div>
      	<BookList renderList={this.renderList()}/>
        <BookDetails />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);