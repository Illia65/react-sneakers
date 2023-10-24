import React from 'react'
import Card from '../components/Card'
import  {AppContext}  from '../App'

function Favorites({ onAddToFavorite }) {
	const {favorites}= React.useContext(AppContext)
	
	console.log (favorites)

	return (
		<div className='wrapperMakr'>
			<div className='titleMark'>
				<h1>Мои закладки</h1>
			</div>
			<div className='content-Mark'>
				{favorites.map((item, index) => (
					<Card
						key={index.id}
						favourited={true}
						onFavorite={onAddToFavorite}
						{...item}
					/>
				))}
			</div>
		</div>
	)
}

export default Favorites
