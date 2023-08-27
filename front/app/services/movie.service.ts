import { axiosClassic } from 'api/interceptors'
import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movie.types'
import axios from 'api/interceptors'
export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getMostPupularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async deleteMovie(_id: string) {
		await axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
