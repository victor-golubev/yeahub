import logoImg from '@/shared/assets/images/logo.png'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => (
	<header className={styles.header}>
		<div className={styles.container}>
			<div className={styles.left}>
				<Link
					to="/"
					className={styles.logo}
					aria-label="На главную"
				>
					<img
						src={logoImg}
						alt="YeaHub логотип"
					/>
				</Link>
				<nav
					className={styles.nav}
					aria-label="Основная навигация"
				>
					<Link
						to="/questions"
						className={styles.navLink}
					>
						База вопросов
					</Link>
					<Link
						to="/trainer"
						className={styles.navLink}
					>
						Тренажер
					</Link>
					<Link
						to="/materials"
						className={styles.navLink}
					>
						Материалы
					</Link>
				</nav>
			</div>
			<div className={styles.right}>
				<Link
					to="/login"
					className={styles.enter}
				>
					Вход
				</Link>
				<Link
					to="/register"
					className={styles.registration}
				>
					Регистрация
				</Link>
			</div>
		</div>
	</header>
)
