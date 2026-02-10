import styles from './Surface.module.css'

interface SurfaceProps {
	as?: 'div' | 'main' | 'aside' | 'section'
	children: React.ReactNode
}

export const Surface = ({ as: Component = 'div', children }: SurfaceProps) => {
	return <Component className={styles.surface}>{children}</Component>
}
