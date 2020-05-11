import React, {useState} from 'react';

export default function useCH(click)
{
	const [clicks, setClicks] = useState('');
	setClicks(clicks+click);

	return clicks;
};
