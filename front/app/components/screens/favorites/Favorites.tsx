import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import FavoritesItem from './FavoritesItem'

const Favorites: FC = () => {
	const favorites = useFavorites()
	return (
		<Meta title="Favorites">
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{favorites?.isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favorites?.favoritesMovies?.map((movie) => (
						<FavoritesItem movie={movie} key={movie._id} />
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
