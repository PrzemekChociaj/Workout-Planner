import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
	const [seconds, setSeconds] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);

	useEffect(() => {
		let interval: number | undefined = 0;

		if (isRunning) {
			interval = window.setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}, 1000);
		}

		return () => {
			if (interval) {
				window.clearInterval(interval);
			}
		};
	}, [isRunning]);

	const handleStartStop = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};

	return (
		<div className='flex flex-col items-center space-y-4'>
			<div className='flex justify-center items-center h-20 w-40 bg-blue-500 text-white text-4xl'>
				{seconds}
			</div>
			<button
				className={`px-4 py-2 rounded-md ${
					isRunning ? 'bg-red-500' : 'bg-green-500'
				} text-white`}
				onClick={handleStartStop}>
				{isRunning ? 'Stop' : 'Start'}
			</button>
		</div>
	);
};

export default Timer;
