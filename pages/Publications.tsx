import React from "react";

type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  paperUrl?: string;
  codeUrl?: string;
};

const publications: Publication[] = [
  {
    id: "paper-006",
    title: "Attention to complex scene features",
    authors: "Son, G., Mack, M. L., Walther, D. B.",
    venue: "Attention, Perception, & Psychophysics",
    year: 2025,
    paperUrl: "https://link.springer.com/article/10.3758/s13414-025-03081-y",
    codeUrl: "https://osf.io/ufgc3/",
  },
  {
    id: "paper-005",
    title: "Brief category learning distorts perceptual space for complex scenes",
    authors: "Son, G., Walther, D. B., & Mack, M. L.",
    venue: "Psychonomic Bulletin & Review",
    year: 2024,
    paperUrl: "https://link.springer.com/article/10.3758/s13423-024-02484-6",
    codeUrl: "https://osf.io/bajsp/",
  },
  {
    id: "paper-004",
    title: "Americans weigh an attended emotion more than Koreans in overall mood judgments",
    authors: "Son, G. Im, H. Y., Albohn, D. N., Kveraga, K., Adams Jr., R. B., Sun., J., & Chong, S. C.",
    venue: "Scientific Reports",
    year: 2023,
    paperUrl: "https://www.nature.com/articles/s41598-023-46723-7",
    codeUrl: "https://osf.io/6w42k/",
  },
  {
    id: "paper-003",
    title: "Similarity-based clustering of multifeature objects in visual working memory",
    authors: "Son, G. & Chong, S. C.",
    venue: "Attention, Perception, & Psychophysics",
    year: 2023,
    paperUrl: "http://link.springer.com/article/10.3758/s13414-023-02687-4",
    codeUrl: "https://osf.io/ywtd8/",
  },
  {
    id: "paper-002",
    title: "Scene wheels: Measuring perception and memory of real-world scenes with a continuous stimulus space",
    authors: "Son, G., Walther, D. B., & Mack, M. L.",
    venue: "Behavior Research Methods",
    year: 2022,
    paperUrl: "https://link.springer.com/article/10.3758/s13428-021-01630-5",
    codeUrl: "https://osf.io/h5wpk/",
  },
  {
    id: "paper-001",
    title: "Similarity-based clusters are representational units of visual working memory",
    authors: "Son, G., Oh, B. I., Kang, M. S., & Chong, S. C.",
    venue: "Journal of Experimental Psychology: Learning, Memory, and Cognition",
    year: 2020,
    paperUrl: "https://psycnet.apa.org/record/2019-25318-001",
    codeUrl: "https://osf.io/cqf43/",
  },
  {
    id: "paper-000",
    title: "Novel procedure for generating continuous flash suppression: Seurat meets Mondrian",
    authors: "Cha, O., Son, G., Chong, S. C., Tovar, D. A., & Blake, R.",
    venue: "Journal of Vision",
    year: 2019,
    paperUrl: "https://jov.arvojournals.org/article.aspx?articleid=2756954",
    codeUrl: "https://github.com/oakyoon/pretina-fabric"
  },
];

const Publications: React.FC = () => {
  // 최신 연도부터
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">
        Publications
      </h2>

      <div className="space-y-10 max-w-[900px] mx-auto">
        {sorted.map((pub) => (
          <div
            key={pub.id}
            className="pb-6 border-b border-[#eaeaea] last:border-0"
          >
            <h3 className="text-lg font-medium text-[#444] mb-1">
              {pub.title}
            </h3>
            <p className="text-sm text-[#666] mb-1">{pub.authors}</p>
            <p className="text-sm text-[#888] mb-3">
              {pub.venue} ({pub.year})
            </p>

            <div className="flex gap-3">
              {pub.paperUrl && (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm border border-[#ccc] rounded hover:border-[#2c3e50] hover:text-[#2c3e50] transition bg-white"
                >
                  Paper
                </a>
              )}
              {pub.codeUrl && (
                <a
                  href={pub.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm border border-[#ccc] rounded hover:border-[#2c3e50] hover:text-[#2c3e50] transition bg-white"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
