import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()
	const redirect = String(query.redirect) || '/'

	//fix bag redirect after authorization
	useEffect(() => {
		if (user) push(redirect)
	}, [user])
}
