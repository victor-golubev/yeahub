import { Header } from '@/widgets/header'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
	return (
		<div className="app-container">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default BaseLayout
