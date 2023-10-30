'use client';

import React, {useEffect, useState} from 'react';
import { useAnimate, useInView } from 'framer-motion';
import { CardModel } from '../components/CardModel';


export default function Home() {

  const [thumbsStatus, setThumbs] = useState(false);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


  useEffect(() => {
    setTimeout(() => {
      setThumbs(true);
      const delayedItems: any[] = [];
      const delay = 1000* 0.2;

      items.forEach((item, index) => {
        setTimeout(() => {
          delayedItems.push(item);
          setItems([...delayedItems]);
        }, index * delay);
      });
    }, 1000 * 1.2);
  }, []);


  return (
    <main
      className={`flex-1 max-h-screen overflow-y-scroll relative ${!thumbsStatus ? 'hide' : ''}`}
    >
      {thumbsStatus && <ul className={`relative`}>
        {items.map((it, i) => {
          return <CardModel key={i} it={it} />;
        })}
      </ul>}
    </main>
  );
}
