import { useState } from 'react'

export default function App() {
	const [start, setStart] = useState()
	const [end, setEnd] = useState()
	const [generate, setGenerate] = useState('')

	const handleClick = () => {
		if (isNaN(+start) || isNaN(+end)) {
			setGenerate('Invalid Input');
		} else {
			// Convert inputs to numbers
			var minRange = parseInt(start);
			var maxRange = parseInt(end);
		
			// Generate random number
			var randomNumber = generateRandomNumber(minRange, maxRange);
		
			// Display random number in the element
			setGenerate(randomNumber);
		}
	}

	const generateRandomNumber = (min, max) => {
		let random = Math.floor(Math.random() * (max - min + 1)) + min
		return random
	}

	const handleStartChange = (event) => {
		setStart(event.target.value)
	}
	const handleEndChange = (event) => {
		setEnd(event.target.value)
	}

	return (
		<>
			<div>
				<input
					type="number"
					id="startRange"
					value={start}
					onChange={handleStartChange}
				/>{' '}
				<br />
				<input
					type="number"
					id="endRange"
					value={end}
					onChange={handleEndChange}
				/>
			</div>
			<button id="generate" onClick={handleClick}>
				Generate Random Number
			</button>
			<div id="randomNumber">{generate}</div>
		</>
	)
}
