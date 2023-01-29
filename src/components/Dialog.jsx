import React from 'react'
import { useState } from 'react';
import { SlButton, SlDialog } from '@shoelace-style/shoelace/dist/react';

import picLogo from '../assets/4.png' 

const Dialog = () => {

    const [open, setOpen] = useState(false);
  return (
    <>
    <SlDialog className='diag' label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <h1 className='headerh1'>Tamarind soda water , made with no added ingredients</h1>
      <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
        Add to Cart
      </SlButton>

      <img className='dialogPic' src={picLogo} alt="" />
    </SlDialog>

    <SlButton onClick={() => setOpen(true)}>VIEW</SlButton>
  </>
  )
}

export default Dialog