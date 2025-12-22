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
        <p className="text-[1.1rem] max-w-[700px] mx-auto mt-[0.6rem] text-center text-[#555]">
          We are based in the Department of Psychology at Sungshin Women's University, Seoul.
        </p>
        <p className="text-[1.1rem] max-w-[800px] mx-auto mt-[0.6rem] text-center text-[#555]">
          Our research focuses on understanding how humans perceive and remember the complex real-world scenes. To investigate this question, we use a combination of psychophysics, neuroimaging (EEG, fMRI), and computational modeling.
        </p>
      </div>
      
      {/* Optional Hero Image for the Home Page could go here */}
      <div className="mt-12 w-full max-w-[600px] mx-auto aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
         <img 
            src="/images/lab_logo_preliminary.png" 
            alt="scone lab logo" 
            className="w-full h-full object-contain opacity-80"
         />
      </div>
    </section>
  );
};

export default Home;