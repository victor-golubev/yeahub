import logoIcon from '@/shared/assets/icons/logo-icon.png'
import logoText from '@/shared/assets/icons/logo-text.svg'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

interface LogoProps {
	className?: string
}

export const Logo = ({ className }: LogoProps) => {
	return (
		<Link
			to={ROUTES.QUESTIONS}
			className={cn(styles.logo, className)}
			aria-label="На главную"
		>
			<img
				src={logoIcon}
				alt=""
			/>
			<img
				src={logoText}
				alt="YeaHub"
			/>
		</Link>
	)
}
