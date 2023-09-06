import { FC, useEffect, useState } from 'react'
import { useFavorites } from '../../favorites/useFavorites'
import { useMutation } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'
import HeartImage from './heart-animation.png'
import { toastError } from '@/utils/toastError'
import cn from 'classnames'
import styles from './FavoriteButton.module.scss'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)
	const favorites = useFavorites()

	useEffect(() => {
		if (!favorites?.favoritesMovies) return

		const isHasMovie = favorites?.favoritesMovies?.some(
			(f) => f._id === movieId
		)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favorites?.favoritesMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		['update favorites'],
		() => UserService.toggleFavorite(movieId),
		{
			onSuccess: () => {
				setIsSmashed(!isSmashed)
				favorites?.refetch()
			},
			onError: (err) => {
				toastError(err, 'Update favorites')
			},
		}
	)
	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, { [styles.animate]: isSmashed })}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteButton
