'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }) {
	useEffect(() => {}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<h2>{error?.message}</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
