import { WORDS } from '@/constants/words';

export function generateRandomWord() {
	return WORDS[Math.floor(Math.random() * WORDS.length)].split('');
}
