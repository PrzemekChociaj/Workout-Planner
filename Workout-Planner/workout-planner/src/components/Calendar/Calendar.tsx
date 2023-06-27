import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: React.FunctionComponent = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	const handleSaveDate = () => {
		if (selectedDate) {
			// Tutaj będe wysyłał tę date do jakiegoś serwera, backu, vertexa? czy jak to tam się nazywało XD
			console.log('Zapisano datę:', selectedDate);
		} else {
			console.log('Nie wybrano daty.');
		}
	};

	return (
		<div className='w-1/5 h-1/5 bg-gray-200 p-4 absolute right-0 top-0 mt-24 mr-6'>
			<h1 className='text-lg font-bold mb-4'>Kalendarz</h1>
			<DatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				className='border p-2 rounded'
			/>
			<button
				onClick={handleSaveDate}
				className='mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded'>
				Zapisz datę
			</button>
		</div>
	);
};

export default Calendar;
