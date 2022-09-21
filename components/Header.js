import React from 'react'
import AppBar from '@mui/material/AppBar';


export default function Header() {

  //style for MUI components
    const headerStyles ={
       textAlign: 'center',
       backgroundColor: 'black'
    }

  return (
    <>
        <AppBar style={headerStyles} color='primary' >
        <h1>Tech Blog</h1>
        </AppBar>
    </>
  )
}
