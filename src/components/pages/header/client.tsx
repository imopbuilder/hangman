'use client';

import { dispatch } from '@/client/store';
import { sethangman } from '@/client/store/slices/client-slice';
import { Button } from '@/components/ui/button';
import { generateRandomWord } from '@/lib/utils/generate-random-word';
import { ReactNode } from 'react';

export function ResetBoard({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<Button
			type='button'
			variant='outline'
			className='text-sm text-muted-foreground hover:text-muted-foreground'
			onClick={() => dispatch(sethangman({ guessedLetters: [], word: generateRandomWord() }))}
		>
			{children}
		</Button>
	);
}
