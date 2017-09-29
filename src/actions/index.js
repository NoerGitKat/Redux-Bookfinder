export function selectBook(book) {
	console.log('A book has been selected: ' + book.title)	
	//returns an object, this is the action. The type 
	//describes event
	return {
		type: 'BOOK SELECTED',
		payload: book
	}
}