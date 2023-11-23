import React from 'react';
import './ButtonStyles.css';

const BlueButton = ({ onClick, label }) => {
	return (
		<button className="blue-btn" onClick={onClick}>
			{label}
		</button>
	);
};

export default BlueButton;
