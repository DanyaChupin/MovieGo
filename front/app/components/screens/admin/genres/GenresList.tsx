import AdminNavigation from '@/components/ui/adminNavigaton/AdminNavigation'
import AdminHeader from '@/components/ui/adminTable/adminHeader/AdminHeader'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC, useEffect } from 'react'
import AdminTable from '@/components/ui/adminTable/AdminTable'
import { useGenres } from './useGenres'

const GenresList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, refetch } =
		useGenres()
	useEffect(() => {
		refetch()
	}, [data, deleteAsync])
	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				removeHandler={deleteAsync}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default GenresList
