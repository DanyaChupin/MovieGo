import { FC } from 'react'
import PopularMovies from './PopularMovies'
import FavoriteMovies from './favoritesMovies/FavoriteMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
