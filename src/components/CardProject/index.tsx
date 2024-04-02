import { MotionDiv } from 'components/MotionElement';

interface Prop {
  data: any;
  delay: number;
}

const CardProject = ({ data, delay }: Prop) => {
  console.log(data);

  return (
    <>
      <div className="mx-auto flex flex-col max-w-screen-2xl max-h-[100%] overflow-y-auto px-10">
        <div className="w-full lg:flex xl:flex items-center">
          <MotionDiv
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'Spring',
              delay: delay
            }}
            className="w-full lg:w-1/2 xl:w-1/2"
          >
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://www.thehindu.com/entertainment/qh3fnb/article29475886.ece/ALTERNATES/LANDSCAPE_1200/batman-day"
                alt="Lorem ipsum dolor sit amet"
                className="object-cover w-full h-full"
              />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 1 }}
            transition={{
              type: 'Spring',
              delay: delay
            }}
            className="w-full pt-12 lg:w-1/2 xl:w-1/2 lg:pl-12 lg:pt-0"
          >
            {/* <p className="text-sm font-bold tracking-wide text-amber-200 uppercase">
              Lorem ipsum dolor sit
            </p> */}
            <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-amber-100 uppercase">
              Lorem ipsum dolor sit
            </h2>
            <p className="mt-3  xl:text-xl text-amber-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sem iaculis,
            </p>

            <a
              href="#0"
              className="flex items-center mt-8 font-medium text-amber-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Project</span>
            </a>
          </MotionDiv>
        </div>
      </div>
    </>
  );
};

export default CardProject;
