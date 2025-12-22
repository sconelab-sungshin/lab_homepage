import React, { useState } from "react";

const Opportunities: React.FC = () => {
  const [copied, setCopied] = useState(false);
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">Opportunities</h2>
      
      <div className="space-y-6">
        <div className="bg-[#f8f9fa] p-8 border-l-4 border-[#3498db]">
            <h3 className="text-lg font-medium text-[#444] mb-2">Prospective Graduate Students</h3>
            <p className="text-[#555]">
                We are looking for motivated Master's and Ph.D. students interested in visual perception and cognitive neuroscience. 
                Candidates with experience in programming (Python, R, MATLAB) are preferred, but enthusiasm for learning is most important.
                Please email P.I. a brief statement of research interests and CV, if available.
            </p>
            <p classname="text-[#555] mb-4">
                Contact:{" "}
                <span
                  onClick={() => {
                    navigator.clipboard.writeText("songaeun@sungshin.ac.kr");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="cursor-pointer text-[#3498db] hover:underline"
                >
                  songaeun@sungshin.ac.kr
                </span>

                {copied && (
                  <span className="ml-2 text-sm text-purple-600">
                    Copied!
                  </span>
                )}
            </p>
        </div>

        <div className="bg-[#f8f9fa] p-8 border-l-4 border-[#3498db]">
            <h3 className="text-lg font-medium text-[#444] mb-2">Undergraduate Research Assistants</h3>
            <p className="text-[#555]">
                Sungshin Women's University undergraduates interested in gaining research experience are welcome to apply. 
                You will gain hands-on experience with experimental design and data analysis.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;