import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'UI/UX Designer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'Graphic Designer',
        1500,
        
      ]}
      
      speed={50}
      className='text-[2rem] md:text-[3rem] font-bold text-[#0BC5EA]'
      repeat={Infinity}
    />
  );
};

export default TextEffect;