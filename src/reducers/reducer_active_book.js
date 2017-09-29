export default function ActiveBook(state = null, action) {
	switch(action.type) {
		case 'BOOK SELECTED':
			return action.payload;
		default:
			return state;
	}
}