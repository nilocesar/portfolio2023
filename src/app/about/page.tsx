'use client';

import Image from 'next/image';

import { useAbout } from '../../hooks/useAbout';


const About = () => {

  const { borderAnim } = useAbout();

  return (
    <>
      {borderAnim && (
        <aside className="profile-card shadow-md">
          <div className="profile-bio mx-auto my-10 rounded-lg p-5">
            <Image
              className="w-32 h-32 rounded-full mx-auto"
              src="https://picsum.photos/600/400"
              alt="Profile picture"
              width={100}
              height={100}
            />
            <h2 className="text-center text-2xl font-semibold mt-3">Nilo Cesar</h2>
            <p className="text-center text-gray-600 mt-1">FRONT END DEVELOPER</p>
            <div className="flex justify-center mt-5">
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                GitHub
              </a>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-left">Bio</h3>
              <p className="text-gray-600 mt-2 text-left">
                Sou um <b>Front End</b> que adora trabalhar com interatividade digital. Motivado por
                uma necessidade de criar engenhocas interativas e principalmente compreender os
                novos rumos das experiências na web.
              </p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default About;
