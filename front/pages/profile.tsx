import Heading from '@/components/ui/heading/Heading'
import { useAuth } from '@/hooks/useAuth'
import Meta from '@/utils/meta/Meta'
import { NextPage } from 'next'
import Link from 'next/link'

const ProfilePage: NextPage = () => {
	const { user } = useAuth()
	return (
		<Meta title="Profile">
			<Heading title={`Profile ${user?.email}`} />
			<Link href="/">Go home</Link>
		</Meta>
	)
}
export default ProfilePage
