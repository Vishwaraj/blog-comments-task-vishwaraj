import React from 'react'
import AppBar from '@mui/material/AppBar';


export default function Header() {

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
