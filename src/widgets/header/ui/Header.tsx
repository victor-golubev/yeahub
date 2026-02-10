import logoIcon from '@/shared/assets/images/logo-icon.png'
import logoText from '@/shared/assets/images/logo-text.svg'
import { Button } from '@/shared/ui/Button'
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
						src={logoIcon}
						alt="Логотип"
					/>
					<img
						src={logoText}
						alt="YeaHub"
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
					className={styles.loginLink}
				>
					Вход
				</Link>
				<Button
					as={Link}
					to="/register"
					variant="primary"
					className={styles.registerLink}
				>
					Регистрация
				</Button>
			</div>
		</div>
	</header>
)
