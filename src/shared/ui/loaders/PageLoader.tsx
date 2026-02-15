import styles from './PageLoader.module.css'

export const PageLoader = () => {
	return (
		<div className={styles.pageLoader}>
			<div className={styles.spinner} />
			<p>Загрузка...</p>
		</div>
	)
}
