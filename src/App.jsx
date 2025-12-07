import React from 'react';
import { Hero } from './components/Hero';
import { Venues } from './components/Venues';
import { Gift } from './components/Gift';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Venues />
      <Gift />
      <PhotoGallery />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App
