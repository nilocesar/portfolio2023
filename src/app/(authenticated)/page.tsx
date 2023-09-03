'use client';

import React, {useEffect, useState} from 'react';
import { CardModel } from '../components/CardModel';


export default function Home() {
  
  const container:any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [thumbsStatus, setThumbs] = useState(false);

  setTimeout(() => {
    setThumbs(true);
  }, 1000* 1.2)
  
  return  <main className={`flex-1 max-h-screen overflow-y-scroll relative ${!thumbsStatus? "hide": ''}`}>
            <ul className="relative">
              {container.map((it, i) => {
                return <CardModel key={i} it={it} />;
              })}
            </ul>
          </main>
  

}
