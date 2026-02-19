import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Outlet } from 'react-router-dom'
import styles from './BaseLayout.module.css'

export const BaseLayout = () => {
	return (
		<div className={styles.layout}>
			<Header />

			<main className={styles.content}>
				<Outlet />
			</main>

			<Footer />
		</div>
	)
}
