import AdminNavigation from '@/components/ui/adminNavigaton/AdminNavigation'
import AdminHeader from '@/components/ui/adminTable/adminHeader/AdminHeader'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import AdminTable from '@/components/ui/adminTable/AdminTable'
import { useMovies } from './useMovies'

const MoviesList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Title', 'Genres', 'Rating']}
				removeHandler={deleteAsync}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MoviesList
