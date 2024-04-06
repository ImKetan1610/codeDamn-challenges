import React, { useState } from 'react'
export default function App() {
	const [options, setOptions] = useState([
		{ name: 'Option A', count: 0 },
		{ name: 'Option B', count: 0 },
		{ name: 'Option C', count: 0 },
		{ name: 'Option D', count: 0 }
	])

	const handleVote = (index) => {
		const updatedOptions = [...options]
		updatedOptions[index].count += 1
		setOptions(updatedOptions)
	}

	return (
		<div>
			<h4 id="question">What is your favorite color?</h4>

			{options.map((option, index) => (
				<button
					className="option"
					key={index}
					onClick={() => handleVote(index)}
				>
					<span>{option.name} </span>
					Votes: <span>{option.count}</span>
				</button>
			))}
		</div>
	)
}
