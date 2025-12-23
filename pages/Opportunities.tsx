import React from "react";
import ContactEmail from "../components/ContactEmail";

const Opportunities: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">
        Opportunities
      </h2>

      <div className="space-y-6">
        {/* Graduate */}
        <div className="bg-[#f8f9fa] p-8 border-l-4 border-[#6b4f3f]">
          <h3 className="text-lg font-medium text-[#444] mb-2">
            Prospective Graduate Students
          </h3>
          <p className="text-[#555] mb-4">
            We are looking for motivated Master's and Ph.D. students interested
            in visual perception and cognitive neuroscience. Candidates with
            experience in programming (Python, R, MATLAB) are preferred, but
            enthusiasm for learning is most important. Please email the P.I. a
            brief statement of research interests and CV, if available.
          </p>

          <ContactEmail email="songaeun@sungshin.ac.kr" />
        </div>

        {/* Undergraduate */}
        <div className="bg-[#f8f9fa] p-8 border-l-4 border-[#6b4f3f]">
          <h3 className="text-lg font-medium text-[#444] mb-2">
            Undergraduate Research Assistants
          </h3>
          <p className="text-[#555] mb-4">
            Sungshin Women's University undergraduates interested in gaining
            research experience are welcome to apply. Undergraduate research 
            assistants will participate in regular lab meetings, where we read 
            and discuss papers in cognitive psychology and visual neuroscience.  
            Students who are interested in pursuing an individual project will 
            also have the opportunity to gain hands-on experience with experimental 
            design and data analysis.
          </p>

          <ContactEmail email="songaeun@sungshin.ac.kr" />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
