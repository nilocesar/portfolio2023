
import { usePageStore } from 'store';
import { getPathname } from 'next-impl-getters/get-pathname';

import { CardModel } from 'components/CardModel';
import { MotionDiv } from 'components/MotionElement';

import { timeHome } from 'utils/motionTime';


export default async function HomeContainer() {

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pageCurrent = usePageStore.getState().state.page.pageCurrent;

  const pathname = getPathname();
  usePageStore.setState({
     state: {
       page: {
         originPage: pathname === '/' ? 'home' : '',
         pageCurrent: pathname === '/' ? 'home' : ''
       }
     }
   });

  console.log(pathname);
  console.log(pageCurrent);

  const variantsHome = {
    hidden: {
      display: 'none'
    },
    visible: {
      display: 'block',
      transition: {
        display: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeHome(pageCurrent)
        }
      }
    }
  };

  // usePageStore.setState({ state: { page: { originPage: 'home', pageCurrent: 'home' } } });



  return (
    <>

      <MotionDiv
        variants={variantsHome}
        initial="hidden"
        animate="visible"
        className={`flex-1 max-h-screen overflow-y-scroll relative`}
      >
        <ul className={`relative`}>
          {items.map((it, i) => {
            return (
              <CardModel key={'s' + it} it={it} delay={timeHome(pageCurrent) + i / 10 + 0.2} />
            );
          })}
        </ul>
      </MotionDiv>
    </>
  );
}
