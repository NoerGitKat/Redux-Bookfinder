import React from 'react';
import PropTypes from 'prop-types';

const BookList = (props) => {
	return (
		<div>
			<ul className="list-group col-sm-4">
				{props.renderList}
			</ul>	
		</div>
	)
}

BookList.propTypes = {

}

export default BookList;