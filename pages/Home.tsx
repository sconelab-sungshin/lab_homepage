import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Logo */}
          <div className="w-full md:w-[300px] shrink-0">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}public/lab_logo_png.png`}
                alt="scone lab logo" 
                className="w-full h-full object-contain drop-shadow-sm drop-shadow-sm opacity-90 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="sr-only">About</h2>

            <p className="text-lg md:text-3xl text-[#222] leading-relaxed mb-6">
              Welcome to the{" "}
              <b className="text-[#6b4f3f] font-semibold">S</b>cene{" "}
              <b className="text-[#6b4f3f] font-semibold">CO</b>gnition and{" "}
              <b className="text-[#6b4f3f] font-semibold">NE</b>uroscience Lab!
            </p>

            <p className="text-base md:text-[1.05rem] text-[#555] mb-2 max-w-[700px] mx-auto md:mx-0">
              We are based in the Department of Psychology at Sungshin Women's University, Seoul.
            </p>

            <p className="text-base md:text-[1.05rem] text-[#555] max-w-[800px] mx-auto md:mx-0">
              Our research focuses on understanding how humans perceive and remember complex real-world scenes.
              To investigate this question, we use a combination of psychophysics, neuroimaging (EEG, fMRI),
              and computational modelling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
