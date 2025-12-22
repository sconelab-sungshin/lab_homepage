import React from 'react';
import { ResourceItem } from '../types';

const resourcesData: ResourceItem[] = [  
  {
    id: 'scene-wheels',
    title: 'Scene Wheels Generation Tool',
    description: 'A method for generating continuous stimulus spaces of synthetic real-world scenes using GANs. This allows for precise and flexible control over high-level visual properties in psychophysics.',
    links: [
        { label: 'Paper', url: 'http://link.springer.com/article/10.3758/s13414-023-02687-4' },
        { label: 'Google Colab', url: 'https://colab.research.google.com/drive/1dkuM-2S_Ku3Yp3KMDLCmx2I4KbP1z_ts?usp=sharing' },
        { label: 'OSF', url: 'https://osf.io/h5wpk/'},
    ]
  },
  {
    id: 'mouse-reconstruction',
    title: 'jsPsych "mouse-reconstruction" Plugin',
    description: 'JavaScript-based mouse reconstruction code for jsPsych online experiments, implementing a "method of adjustment" task with probe values updated according to mouse position.',
    links: [
        { label: 'Github Repository', url: 'https://github.com/songaeun/jsPsych_mouseReconstruction_plugins'},
    ]
  }, 
  {
    id: 'lab-github',
    title: 'Lab GitHub',
    description: 'This GitHub page will host projects from our lab. Stay tuned for updates.',
    links: [
        { label: 'GitHub Profile', url: 'https://github.com/sconelab-sungshin' }
    ]
  },
];

const Resources: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">Resources</h2>
      <p className="mb-10 text-[#555]">We believe in open science. Below are tools and code repositories developed by our lab.</p>

      <div className="grid gap-6">
        {resourcesData.map((item) => (
          <div key={item.id} className="bg-white border border-[#eee] p-6 rounded hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-[#444] mb-2">{item.title}</h3>
            <p className="text-[#555] mb-6">{item.description}</p>
            
            <div className="flex flex-wrap gap-3">
                {item.links.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-[#ccc] rounded text-sm text-[#555] hover:border-[#3498db] hover:text-[#3498db] hover:bg-white transition-all bg-white"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;