import { BurgerIcon } from '@/shared/assets/icons/BurgerIcon'
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon'
import { ProfileAddIcon } from '@/shared/assets/icons/ProfileAddIcon'
import { ProfileIcon } from '@/shared/assets/icons/ProfileIcon'
import { ROUTES } from '@/shared/config'
import { Button, Container, Drawer, Logo } from '@/shared/ui'
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
		setIsPrepMenuOpen(false)
	}

	const togglePrepMenu = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsPrepMenuOpen(prev => !prev)
		setIsProfileMenuOpen(false)
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
						<Logo />

						<nav
							className={styles.nav}
							aria-label="Основная навигация"
						>
							{NAV_ITEMS.map(item => (
								<NavLink
									key={item.to}
									to={item.to}
								>
									{item.label}
								</NavLink>
							))}
						</nav>

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
								lockScroll={false}
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
							to={ROUTES.LOGIN}
							className={styles.loginLink}
						>
							Вход
						</Link>
						<Button
							as={Link}
							to={ROUTES.REGISTER}
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

			<Drawer
				isOpen={isProfileMenuOpen}
				onClose={closeAllMenus}
				className={styles.mobileDrawer}
				lockScroll={false}
			>
				<div className={styles.mobileMenuContent}>
					<Link
						to={ROUTES.LOGIN}
						onClick={closeAllMenus}
						className={styles.mobileDrawerLink}
					>
						<div className={styles.mobileDrawerIcon}>
							<ProfileIcon />
						</div>
						Вход
					</Link>
					<Link
						to={ROUTES.REGISTER}
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
