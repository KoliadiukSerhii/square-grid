import React, { useState } from 'react';
import './SelectStyles.css';

const SelectMode = ({ modes, handleModeSelection }) => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleSelectChange = (event) => {
		const selectedValue = event.target.value;
		setSelectedOption(selectedValue);
		handleModeSelection(selectedValue);
	};

	return (
		<select className="custom-select" value={selectedOption} onChange={handleSelectChange}>
			<option value="0">Pick mode</option>
			{modes.map((mode) => (
				<option key={mode.name} value={mode.field}>
					{mode.name}
				</option>
			))}
		</select>
	);
};

export default SelectMode;
