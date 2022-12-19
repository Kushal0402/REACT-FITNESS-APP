import React from 'react'
import { Typography, Stack, Button } from '@mui/material'



const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            name: bodyPart,
        },
        {
            name: target,
        },
        {
            name: equipment,
        },
    ];

    return (
        <Stack gap="60px" sx={{
            flexDirection: { lg: 'row' },
            p: '20px',
            alignItems: 'center'
        }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant="h3" fontWeight={700}
                    textTransform="capitalize">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Daily exercise keeps you fit and healthy.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} gap="24px" alignItems="left">
                        <Typography variant="h6" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail