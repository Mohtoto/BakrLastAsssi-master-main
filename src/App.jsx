import { useState } from 'react'
import HomePage from './components/HomePage'
import Nav from './components/Nav'
import View from './components/View'
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import OurPage from './components/OurPage';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');


function App() {
 

  return (
    <div className="text-red text-xl">
      <Nav />
      <HomePage />
      <View />
      <OurPage />
    </div>
  )
}

export default App
