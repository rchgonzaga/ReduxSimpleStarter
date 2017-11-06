import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAfRF1WI5WHtXpE8zTXB03OMmHz6VdpLuQ';

const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	);
}

ReactDOM.render(
	<App/>, 
	document.querySelector('.container')
);