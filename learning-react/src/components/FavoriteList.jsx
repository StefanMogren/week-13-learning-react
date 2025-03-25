import React from 'react';
import FavoriteItem from './FavoriteItem';

function FavoriteList() {
	// const favorites = ['fotboll', 'tv-spel', 'golf', 'film', 'mat'];

	const favs = [
		{
			name: 'fotboll',
			isCool: false,
			id: 1,
		},
		{
			name: 'tv-spel',
			isCool: true,
			id: 2,
		},
		{
			name: 'golf',
			isCool: true,
			id: 3,
		},
		{
			name: 'film',
			isCool: false,
			id: 4,
		},
		{
			name: 'mat',
			isCool: true,
			id: 5,
		},
	];

	return (
		<div>
			<h1>Min favvolista!</h1>
			<ul>{favs.map((fav) => FavoriteItem(fav))}</ul>
		</div>
	);
}

export default FavoriteList;
