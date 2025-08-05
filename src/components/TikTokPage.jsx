'use client';
import React, { useState } from 'react';
import HeroOne from './sections/heros/heroOne';
import TikTokResults from './TikTokResults';

const TikTokPage = () => {
  const [tikTokData, setTikTokData] = useState(null);

  return (
    <>
      <HeroOne onDataReceived={setTikTokData} />
      <TikTokResults data={tikTokData} />
    </>
  );
};

export default TikTokPage;