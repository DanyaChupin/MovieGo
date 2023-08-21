import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import Statisctics from './statisticcs/Statisctics'
import AdminNavigation from '@/components/ui/adminNavigaton/AdminNavigation'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statisctics />
		</Meta>
	)
}

export default Admin
