import { axiosClassic } from 'api/interceptors'
import { IActor } from '@/shared/types/movie.types'
import axios from 'api/interceptors'
import { getActorsUrl } from '@/config/api.config'
export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getMOstPupularActor() {
		const { data: movies } = await axiosClassic.get<IActor[]>(
			getActorsUrl('/most-popular')
		)
		return movies
	},
	async deleteActor(_id: string) {
		await axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}
