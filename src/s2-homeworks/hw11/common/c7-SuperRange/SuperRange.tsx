import React from 'react'
import { Slider, SliderProps } from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                '& .MuiSlider-thumb': {
                    width: '18px',
                    height: '18px',
                    opacity: '1',
                    borderWidth: '1px',
                    background: '#FFFFFF',
                    border: '1px solid #00CC22',
                    '&::after': {
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#01CB22',
                    }
                },
                '& .MuiSlider-track': {
                    color: '#00CC22',
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
