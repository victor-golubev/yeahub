// widgets/header/ui/Header.tsx
import logoIcon from '@/shared/assets/icons/logo-icon.png'
import logoText from '@/shared/assets/icons/logo-text.svg'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_ITEMS = [
	{ to: ROUTES.QUESTIONS, label: 'База вопросов' },
	{ to: ROUTES.TRAINER, label: 'Тренажер' },
	{ to: ROUTES.MATERIALS, label: 'Материалы' }
]

export const Header = () => (
	<header className={styles.header}>
		<Container>
			<div className={styles.inner}>
				<div className={styles.left}>
					<Link
						to="/questions"
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
						{NAV_ITEMS.map(item => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
								}
							>
								{item.label}
							</NavLink>
						))}
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
		</Container>
	</header>
)
