import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery(['favorite movies'], () => UserService.getFavorites(), {
		select: ({ data }) => data,
	})
	return {
		isLoading,
		favoritesMovies,
		refetch,
	}
}
