import React from 'react';
import './HoveredSquareCard.css';

const HoveredSquareCard = ({ index, fields }) => {
	const getRowIndex = () => {
		return Math.floor(index / fields);
	};

	const getColumnIndex = () => {
		return index % fields;
	};

	return <div className="card">{`row ${getRowIndex()} col ${getColumnIndex()}`}</div>;
};

export default HoveredSquareCard;
