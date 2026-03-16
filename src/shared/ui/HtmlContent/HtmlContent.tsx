import accordionIcon from '@/shared/assets/icons/accordion.svg'
import { cn, sanitizeHtml } from '@/shared/lib'
import { Surface } from '@/shared/ui/Surface/Surface'
import { useState } from 'react'
import styles from './HtmlContent.module.css'

interface HtmlContentProps {
	title: string
	content: string
	collapsible?: boolean
}

export const HtmlContent = ({
	title,
	content,
	collapsible = false
}: HtmlContentProps) => {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<Surface>
			<div className={styles.answer}>
				<h2 className={styles.title}>{title}</h2>

				<div className={collapsible ? styles.expandWrapper : undefined}>
					<div
						className={cn(
							styles.content,
							collapsible && !isExpanded && styles.collapsed
						)}
						dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
					/>
					{collapsible && !isExpanded && <div className={styles.overlay} />}
				</div>

				{collapsible && (
					<button
						type="button"
						className={styles.expandBtn}
						onClick={() => setIsExpanded(prev => !prev)}
					>
						{isExpanded ? 'Свернуть' : 'Развернуть'}
						<img
							src={accordionIcon}
							alt=""
							className={cn(styles.arrow, isExpanded && styles.arrowActive)}
						/>
					</button>
				)}
			</div>
		</Surface>
	)
}
