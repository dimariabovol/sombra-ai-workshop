const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(text: string): string {
	const normalizedText = text.trim();
	if (!normalizedText) {
		return '1 min read';
	}

	const words = normalizedText.split(/\s+/).length;
	const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
	return `${minutes} min read`;
}
