import { Container } from '@/shared/ui/Container/Container'
import logoIcon from '../assets/footer-logo.svg'
import figmaIcon from '../assets/social/figma.svg'
import githubIcon from '../assets/social/github.svg'
import telegramIcon from '../assets/social/telegram.svg'
import tiktokIcon from '../assets/social/tiktok.svg'
import youtubeIcon from '../assets/social/youtube.svg'
import styles from './Footer.module.css'

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
							<p className={styles.copy}>© 2024 YeaHub</p>
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
									<a
										href="/"
										rel="noopener noreferrer"
									>
										<img
											src={figmaIcon}
											alt="figmaIcon"
										/>
									</a>
									<a
										href="/"
										rel="noopener noreferrer"
									>
										<img
											src={telegramIcon}
											alt="telegramIcon"
										/>
									</a>
									<a
										href="/"
										rel="noopener noreferrer"
									>
										<img
											src={youtubeIcon}
											alt="youtubeIcon"
										/>
									</a>
									<a
										href="/"
										rel="noopener noreferrer"
									>
										<img
											src={tiktokIcon}
											alt="tiktokIcon"
										/>
									</a>
									<a
										href="/"
										rel="noopener noreferrer"
									>
										<img
											src={githubIcon}
											alt="githubIcon"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}
