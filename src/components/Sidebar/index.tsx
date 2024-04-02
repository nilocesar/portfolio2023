import AboutFooter from './components/AboutFooter';
import SignatureTop from './components/SignatureTop';

interface Props {
  modelSelect: string;
  className?: string;
}

export function Sidebar({ modelSelect, className = '' }: Props) {
  return (
    <aside
      className={`bg-stone-950 bg-opacity-90 ${modelSelect} ${className}
      opacity-[0] animate-fadeInInit animation-delay-1000 overflow-hidden`}
    >
      <SignatureTop />
      <AboutFooter />
    </aside>
  );
}
