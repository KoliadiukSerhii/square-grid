import React from 'react';
import './SquareGrid.css';

const SquareGrid = ({ fields, isShown, handleSquareHover }) => {
	return (
		<div className="grid-table" style={{ width: `${fields * 50}px` }}>
			{isShown ? (
				[...Array(fields * fields)].map((_, index) => (
					<div key={index} className="square" onMouseEnter={(event) => handleSquareHover(event, index)} />
				))
			) : (
				<h3>Press the START button!</h3>
			)}
		</div>
	);
};

export default SquareGrid;
