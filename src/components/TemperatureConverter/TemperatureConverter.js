import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function TemperatureConverter() {
    const [dergeeCelsius, setDergeeCelsius] = useState('');
    const [dergeeFarenheit, setDergeeFarenheit] = useState('');
    const [catchedEl, setCathcedEl] = useState('');

    const catchCelsiusInput = ({target}) => {
        const degree = target.value
        setDergeeCelsius(degree);
        setCathcedEl('celsius');   
    }
    
    const catchFahrenheitInput = ({target}) => {
        const degree = target.value
        setDergeeFarenheit(degree);
        setCathcedEl('fahrenheit');
    }
   
   const handleClick = () => {
        if (catchedEl == 'celsius') {
            setDergeeFarenheit((parseFloat(dergeeCelsius) * 9 / 5 + 32).toFixed(2));
        } 
        if (catchedEl == 'fahrenheit') { 
            setDergeeCelsius(((parseFloat(dergeeFarenheit) - 32) * 5 / 9).toFixed(2));
        }
   }

    return (
        <div className='block'>
            <TextField
                label="Темп. по Цельсию"
                variant="filled"
                onChange={catchCelsiusInput}
                className='celsius'
                value={dergeeCelsius}
            />
            <TextField
                label="Темп. по Фаренгейту"
                variant="filled"
                onChange={catchFahrenheitInput}
                className='fahrenheit'
                value={dergeeFarenheit}
            />
            <Button variant="contained" onClick={handleClick}>Конвертировать</Button>
        </div>
    );
}

export default TemperatureConverter;