import DOMPurify from 'dompurify'

export const sanitizeHtml = (html: string): string => {
	if (typeof window === 'undefined') {
		return html
	}

	return DOMPurify.sanitize(html, {
		ALLOWED_TAGS: [
			'p',
			'br',
			'strong',
			'em',
			'u',
			's',
			'code',
			'pre',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'ul',
			'ol',
			'li',
			'blockquote',
			'a',
			'img'
		],

		ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class'],

		FORBID_ATTR: ['style'],
		ADD_ATTR: ['target'],
		KEEP_CONTENT: true
	})
}
