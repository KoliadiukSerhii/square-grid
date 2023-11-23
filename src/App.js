import { useEffect, useState } from 'react';
import axios from 'axios';
import BlueButton from './components/Button/Button';
import SelectMode from './components/Select/Select';
import SquareGrid from './components/SquareGrid/SquareGrid';
import HoveredSquareCard from './components/HoveredSquareCard/HoveredSquareCard';
import './App.css';

function App() {
	const [modes, setModes] = useState([]);
	const [fields, setFields] = useState(0);
	const [isShown, setIsShown] = useState(false);
	const [hoveredSquares, setHoveredSquares] = useState([]);

	useEffect(() => {
		axios
			.get('https://60816d9073292b0017cdd833.mockapi.io/modes')
			.then((response) => setModes(response.data))
			.catch((error) => console.error('Error fetching modes:', error));
	}, []);

	const handleModeSelection = (modeField) => {
		setFields(modeField);
		setIsShown(false);
		setHoveredSquares([]);
	};

	const handleSquareHover = (event, index) => {
		event.currentTarget.classList.toggle('blue');

		if (event.currentTarget.classList.contains('blue')) {
			setHoveredSquares((prevSquares) => [...prevSquares, index]);
		} else {
			setHoveredSquares((prevSquares) => prevSquares.filter((item) => item !== index));
		}
	};

	return (
		<div className="container">
			<div className="main" style={{ height: isShown ? `${fields * 50 + 50}px` : 'auto' }}>
				<div className="wrapper">
					<SelectMode modes={modes} handleModeSelection={handleModeSelection} />
					<BlueButton
						onClick={() => {
							setIsShown(true);
						}}
						label="START"
					></BlueButton>
				</div>
				<SquareGrid fields={fields} isShown={isShown} handleSquareHover={handleSquareHover} />
			</div>
			<div className="aside" style={{ height: isShown ? `${fields * 50 + 50}px` : 'auto' }}>
				<h2>Hover squares</h2>
				{hoveredSquares.map((index) => (
					<HoveredSquareCard key={index} index={index} fields={fields} />
				))}
			</div>
		</div>
	);
}

export default App;
