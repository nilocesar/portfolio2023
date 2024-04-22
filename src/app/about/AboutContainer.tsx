'use client';

import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

import { MotionDiv, MotionAside } from 'components/MotionElement';
import { cn } from 'utils/cn';

import useAbout from './hooks/useAbout';

const AboutContainer = () => {
  const { variants, variantsLine1, variantsLine2, about, init, timeOther } = useAbout();

  return (
    <>
      <MotionAside
        className="aboutScreen"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'Spring',
          delay: timeOther(init, -1)
        }}
      >
        <div className={`drawBorder`}>
          <MotionDiv
            className={`line1 absolute`}
            variants={variantsLine1}
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0 }}
          />
          <MotionDiv
            className={`line2 absolute`}
            variants={variantsLine2}
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0 }}
          />
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: timeOther(init),
              ease: 'easeInOut',
              duration: 0.5
            }}
            viewport={{ amount: 0 }}
            className="profile-card shadow-md"
          >
            <div className="profile-bio mx-auto rounded-lg p-2 flex flex-1 flex-col">
              <div className={'w-32 h-32 rounded-full mx-auto avatar'}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <Image
                  className="w-32 h-32 rounded-full mx-auto"
                  src={about.avatar}
                  alt="Profile picture"
                  width={100}
                  height={100}
                />
              </div>
              <div className={'profile-container flex flex-1 flex-col justify-center items-center'}>
                <h2 className="text-center text-2xl font-semibold mt-3 text-amber-400">
                  {about.title}
                </h2>
                <p className="text-center text-amber-100 mt-1">FRONT-END</p>
                <div className="flex justify-center mt-5 border-amber-200 border-b pb-4 w-full">
                  <a
                    href={about.linkedin}
                    target="_blank"
                    className="text-amber-200 hover:text-amber-300 mx-3"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={about.github}
                    target="_blank"
                    className="text-amber-200 hover:text-amber-300 mx-3"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <Markdown className={cn('flex flex-col gap-8 mt-5 text-gray-50 text-left text-xl')}>
                  {about.description as string}
                </Markdown>
              </div>
            </div>
          </MotionDiv>
        </div>
      </MotionAside>
    </>
  );
};

export default AboutContainer;
