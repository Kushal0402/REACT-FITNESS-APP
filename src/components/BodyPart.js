import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import icon from '../util/icon.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid purple' : '',
                backgroundColor: 'white',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '40px'
            }}>
            <img src={icon} alt="icon" style={{
                width: '40px',
                height: '40px',
            }} />
            <Typography style={{
                fontWeight: '700',
                fontSize: '20px',
                color: 'purple'
            }}>
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart