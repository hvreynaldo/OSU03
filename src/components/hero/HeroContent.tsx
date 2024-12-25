import { FC } from 'react';

const HeroContent: FC = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
      <div className="space-y-4 mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF6600] tracking-wide">
          The Innovation Foundation at OSU
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Artificial Intelligence Division
        </h2>
      </div>
      <p className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in">
        Pioneering Tomorrow's Intelligence, Today
      </p>
      <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-fade-in opacity-90">
        Explore groundbreaking research, cutting-edge technology, and collaborative solutions powered by AI.
      </p>
      <div className="mt-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FF6600] tracking-wide leading-tight">
          AI Art Show on January 30th
          <br />
          <span className="text-3xl md:text-4xl">at Mike Morgan Building</span>
        </h2>
      </div>
    </div>
  </div>
);

export default HeroContent;