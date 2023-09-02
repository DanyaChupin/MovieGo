import Profile from '@/components/screens/profile/Profile'
import { useAuth } from '@/hooks/useAuth'
import Meta from '@/utils/meta/Meta'
import { NextPage } from 'next'

const ProfilePage: NextPage = () => {
	const { user } = useAuth()
	return (
		<Meta title="Profile">
			<Profile />
		</Meta>
	)
}
export default ProfilePage
