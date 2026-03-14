import { Container } from '@/shared/ui'
import logoIcon from '../assets/footer-logo.svg'
import figmaIcon from '../assets/social/figma.svg'
import githubIcon from '../assets/social/github.svg'
import telegramIcon from '../assets/social/telegram.svg'
import tiktokIcon from '../assets/social/tiktok.svg'
import youtubeIcon from '../assets/social/youtube.svg'
import styles from './Footer.module.css'

const SOCIAL_LINKS = [
	{ href: 'https://figma.com/...', icon: figmaIcon, alt: 'Figma' },
	{ href: 'https://t.me/...', icon: telegramIcon, alt: 'Telegram' },
	{ href: 'https://youtube.com/...', icon: youtubeIcon, alt: 'YouTube' },
	{ href: 'https://tiktok.com/...', icon: tiktokIcon, alt: 'TikTok' },
	{ href: 'https://github.com/...', icon: githubIcon, alt: 'GitHub' }
]

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.inner}>
					<a
						href="/"
						className="logo"
					>
						<img
							src={logoIcon}
							alt="Yeahub"
						/>
					</a>

					<div className={styles.slogan}>
						<p>Выбери, каким будет IT завтра, вместе с нами</p>
					</div>

					<div className={styles.info}>
						<p>
							YeaHub — это полностью открытый проект, призванный объединить
							и улучшить IT-сферу. Наш исходный код доступен для просмотра
							на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
						</p>
					</div>

					<div className={styles.bottom}>
						<div className={styles.left}>
							<p className={styles.copy}>© {new Date().getFullYear()} YeaHub</p>
							<a
								href="/"
								className={styles.documents}
							>
								Документы
							</a>
						</div>

						<div className={styles.right}>
							<div className={styles.socials}>
								<p>Ищите нас и в других соцсетях @yeahub_it</p>
								<div className={styles.links}>
									{SOCIAL_LINKS.map(social => (
										<a
											key={social.alt}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={social.icon}
												alt={social.alt}
											/>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}
