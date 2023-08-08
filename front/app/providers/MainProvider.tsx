import Layout from '@/components/layout/Layout'
import { IChildren } from '@/shared/types/children.types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<IChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
export default MainProvider
