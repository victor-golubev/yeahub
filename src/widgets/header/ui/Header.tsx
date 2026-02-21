// widgets/header/ui/Header.tsx
import { BurgerIcon } from '@/shared/assets/icons/BurgerIcon'
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon'
import logoIcon from '@/shared/assets/icons/logo-icon.png'
import logoText from '@/shared/assets/icons/logo-text.svg'
import { ProfileAddIcon } from '@/shared/assets/icons/ProfileAddIcon'
import { ProfileIcon } from '@/shared/assets/icons/ProfileIcon'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_ITEMS = [
	{ to: ROUTES.QUESTIONS, label: 'База вопросов' },
	{ to: ROUTES.TRAINER, label: 'Тренажер' },
	{ to: ROUTES.MATERIALS, label: 'Материалы' }
]

export const Header = () => {
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
	const [isPrepMenuOpen, setIsPrepMenuOpen] = useState(false)

	const toggleProfileMenu = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsProfileMenuOpen(prev => !prev)
		setIsPrepMenuOpen(false) // Закрываем другое меню
	}

	const togglePrepMenu = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsPrepMenuOpen(prev => !prev)
		setIsProfileMenuOpen(false) // Закрываем другое меню
	}

	const closeAllMenus = () => {
		setIsProfileMenuOpen(false)
		setIsPrepMenuOpen(false)
	}

	return (
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

						{/* Контейнер для позиционирования выпадашки подготовки */}
						<div className={styles.prepWrapper}>
							<button
								className={styles.mobileNavTrigger}
								onClick={togglePrepMenu}
							>
								Подготовка
								<ChevronDownIcon
									className={`${styles.chevron} ${isPrepMenuOpen ? styles.chevronActive : ''}`}
								/>
							</button>

							<Drawer
								isOpen={isPrepMenuOpen}
								onClose={closeAllMenus}
								className={styles.prepDrawer}
							>
								<nav className={styles.mobileNavList}>
									{NAV_ITEMS.map(item => (
										<NavLink
											key={item.to}
											to={item.to}
											onClick={closeAllMenus}
											className={styles.mobileDrawerLink}
										>
											{item.label}
										</NavLink>
									))}
								</nav>
							</Drawer>
						</div>
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

					<div className={styles.burgerWrapper}>
						<button
							className={styles.burgerButton}
							onClick={toggleProfileMenu}
							aria-label="Открыть меню"
						>
							<BurgerIcon />
						</button>
					</div>
				</div>
			</Container>

			{/* Drawer только для профиля (бургер) */}
			<Drawer
				isOpen={isProfileMenuOpen}
				onClose={closeAllMenus}
				className={styles.mobileDrawer}
			>
				<div className={styles.mobileMenuContent}>
					<Link
						to="/login"
						onClick={closeAllMenus}
						className={styles.mobileDrawerLink}
					>
						<div className={styles.mobileDrawerIcon}>
							<ProfileIcon />
						</div>
						Вход
					</Link>
					<Link
						to="/register"
						onClick={closeAllMenus}
						className={styles.mobileDrawerLink}
					>
						<div className={styles.mobileDrawerIcon}>
							<ProfileAddIcon />
						</div>
						Регистрация
					</Link>
				</div>
			</Drawer>
		</header>
	)
}
