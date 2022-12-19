import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../util/logo.png';

const Navbar = () => {
  return (
    <Stack direction="row"
      gap="20px"
      justifyContent="space-evenly"
      sx={{
        gap: { sm: '120px', xs: '40px' },
        mt: { sm: '32px', xs: '22px' }
      }}>
      <Link to="/">
        <img src={logo} alt="LOGO" style={{
          width: "100px", height: '80px'
        }}></img>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="18px"
        alignItems="flex-end"
        paddingBottom="30px">
        <Link to="/" style={{ textDecoration: 'none', color: 'purple' }}>
          Home
        </Link>
        <a href="#exercises" style={{
          textDecoration: 'none',
          color: 'purple'
        }}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar