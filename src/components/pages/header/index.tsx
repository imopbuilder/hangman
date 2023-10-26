import Link from 'next/link';

export default function Header() {
	return (
		<header className='border-b'>
			<div className='max-w-maxi mx-auto py-4'>
				<Link href={'/'} className='font-semibold'>
					Hangman
				</Link>
			</div>
		</header>
	);
}
