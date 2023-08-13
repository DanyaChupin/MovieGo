import { FC } from 'react'
import { IHome } from './home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="MovieGo"
			description="Watch Movie online and TV shows or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
