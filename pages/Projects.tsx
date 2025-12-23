import React from "react";
import { ResearchItem } from "../types";

const projectData: ResearchItem[] = [
  {
    id: "natural-scene",
    title: "Natural Scene Perception",
    description:
      "How do we rapidly understand complex scenes? We investigate the visual and semantic features that the brain utilizes when processing natural environments. We aim to understand the neural and cognitive mechanisms that support our ability to process the external world effortlessly.",
    imageUrl: "https://picsum.photos/600/400?random=10",
  },
  {
    id: "perception-memory",
    title: "Interaction between Perception and Memory",
    description:
      'Perception and memory are often treated as separate systems, but they are deeply intertwined. Our lab explores how memory systems (working memory, long-term memory) influence what we perceive, and conversely, how perceptual fidelity shapes memory storage.',
    imageUrl: "https://picsum.photos/600/400?random=11",
  },
  {
    id: "computational-modelling",
    title: "AI-based Computational Modelling",
    description:
      "We utilize state-of-the-art deep learning techniques to model human vision. By comparing human behavioral and neural data with the latent representations of AI models, we seek to bridge the gap between biological vision and artificial intelligence, developing more biologically plausible computational models.",
    imageUrl: "https://picsum.photos/600/400?random=12",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">
        Projects
      </h2>

      <div className="space-y-16">
        {projectData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-[#eaeaea] last:border-0"
          >
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-xl font-medium text-[#444] mb-3">
                {item.title}
              </h3>
              <p className="text-[#555] leading-7">{item.description}</p>
            </div>

            <div className="w-full md:w-[280px] shrink-0 order-1 md:order-2">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden rounded shadow-sm">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
