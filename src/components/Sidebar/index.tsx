import AboutBottom from './components/AboutBottom';
import SignatureTop from './components/SignatureTop';

import { PageInitializer } from 'utils/PageInitializer';

import { usePageStore } from 'store';
interface Props {
  modelSelect: string;
  className?: string;
}

export function Sidebar({ modelSelect, className = '' }: Props) {

  console.log('Sidebar ' + usePageStore.getState().state.page.pageCurrent);

  return (
    <aside
      className={`bg-stone-950 bg-opacity-90 ${modelSelect} ${className}
      opacity-[0] animate-fadeInInit animation-delay-1000 overflow-hidden`}
    >
      <PageInitializer
        page={{
          originPage: usePageStore.getState().state.page.originPage,
          pageCurrent: usePageStore.getState().state.page.pageCurrent
        }}
      />
      <SignatureTop />
      <AboutBottom />
    </aside>
  );
}
