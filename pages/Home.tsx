import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">      
      <div className="max-w-[1800px] mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50] sr-only">About</h2>
        <p className="text-lg md:text-3xl text-[#222] leading-relaxed mb-10">
          Welcome to the{" "}
          <b className="text-[#6b4f3f] font-semibold">S</b>cene{" "}
          <b className="text-[#6b4f3f] font-semibold">CO</b>gnition and{" "}
          <b className="text-[#6b4f3f] font-semibold">NE</b>uroscience Lab! 
        </p>      
        <p className="md:text-small max-w-[700px] mx-auto mt-[0.6rem] text-center text-[#555]">
          We are based in the Department of Psychology at Sungshin Women's University, Seoul.
        </p>
        <p className="md:text-small max-w-[1000px] mx-auto mt-[0.6rem] text-center text-[#555]">
          Our research focuses on understanding how humans perceive and remember the complex real-world scenes. To investigate this question, we use a combination of psychophysics, neuroimaging (EEG, fMRI), and computational modeling.
        </p>
      </div>
      <div className="mt-10 mb-10 w-full max-w-[400px] mx-auto aspect-square rounded-lg overflow-hidden relative">
         <img 
            src="/images/lab_logo_png.png" 
            alt="scone lab logo" 
            className="w-full h-full object-contain drop-shadow-sm opacity-90"
         />
      </div>
      
    </section>
  );
};

export default Home;