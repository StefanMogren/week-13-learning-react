import React from 'react';

function FavoriteItem(prop) {
	return (
		<li key={prop.id}>
			Det är {prop.isCool ? '' : 'inte'} coolt med {prop.name}
		</li>
	);
}

export default FavoriteItem;
