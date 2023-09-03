import Image from 'next/image';


type Props = {
  it: number;
};

export function CardModel({ it }: Props) {
  // const imgLoading = (image: HTMLImageElement) => {
  //   image.classList.remove('opacity-0');
  // };
  // console.log(it);

  return (
    <li className={`relative h-[14rem] w-full border-b-[0.2rem] border-neutral-500 animate-fadeIn`}
    style={
      {
        opacity: 0,
        animationDelay: `${(it+1) * 100}ms`,
      }
    }
    >
      <video src='./spritesheet.webm' 
            className={`h-[100%] w-full object-cover absolute animate-fadeOut`} 
            autoPlay={true} loop={false} muted
            style={
                {
                  animationDelay: `${(it+1) * 400}ms`,
                }
              }
            />
      <button className={`animate-fadeIn`}
        style={
          {
            opacity: 0,
            animationDelay: `${(it+1) * 300}ms`,
          }
        }
      > 
        <Image
          src={`https://picsum.photos/600/400`}
          alt=""
          fill
          className={`object-cover transition-opacity ease-in-out opacity-[0.3] duration-[1s] hover:opacity-[0.7] cursor-pointer`}
          // onLoadingComplete={(img) => imgLoading(img)}
        />
      </button>
    </li>
  );
}
