import '../styles/globals.css';

import { Canvas } from '../components/Canvas';
import { Sidebar } from '../components/Sidebar';

//👇 Import Open Sans font
import { Raleway } from 'next/font/google'

//👇 Configure our font object
const ralewayFont = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Nilo César',
  description:
    'Mutável portfólio - reposiciona seus elementos a cada nova visualização.'
};

type modelScreenObj = {
  base: string;
  sidebar: string;
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const sb_w_randow = randomInteger(17, 35); /// valor do width sidebar
  const sb_h_randow = randomInteger(12, 17); /// valor do height sidebar
  const model_randow = randomInteger(0, 3); /// valor tipo modal

  const modelScreen: Array<modelScreenObj> = [
    {
      base: `flex-col lg:flex-row`,
      sidebar: `w-full h-[${sb_h_randow}rem] lg:h-full lg:w-[${sb_w_randow}rem] sidebar sidebar0`
    },
    {
      base: `flex-col-reverse lg:flex-row-reverse`,
      sidebar: `w-full h-[${sb_h_randow}rem] lg:h-full lg:w-[${sb_w_randow}rem] sidebar sidebar1`
    },
    {
      base: `flex-col`,
      sidebar: `w-full h-[${sb_h_randow}rem] sidebar sidebar2`
    },
    {
      base: `flex-col-reverse`,
      sidebar: `w-full h-[${sb_h_randow}rem] sidebar sidebar3`
    }
  ];

  const modelSelect = modelScreen[model_randow];
  //const modelSelect = modelScreen[0];

  return (
    
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <Canvas />
        <div
          className={`h-screen flex flex-initial flex-wrap ${modelSelect.base}`}
        >
          <Sidebar modelSelect={modelSelect.sidebar}/>
          {children}
        </div>
      </body>
    </html>
  );
}
