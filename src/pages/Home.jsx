import React from 'react'
import Card from '../components/Card'

function Home({
	items,
	cartItems,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart,
}) {
	return (
		<div className='content'>
			<div className='wrapper-content'>
				<h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'}</h1>
				<div className='search-block'>
					<img src='/img/search.svg ' alt='Search'></img>
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className='removeBtn clear'
							src='/img/btn-remove.svg'
							alt='Clear'
						></img>
					)}
					<input
						onChange={onChangeSearchInput}
						value={searchValue}
						placeholder='Поиск..'
					></input>
				</div>
			</div>

			<div className='cardWrapper'>
				{items
					.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item, index) => (
						<Card
							key={index}
							onFavourite={obj => onAddToFavorite(obj)}
							onPlus={obj => onAddToCart(obj)}
							added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
							{...item}
						/>
					))}
			</div>
		</div>
	)
}

export default Home
