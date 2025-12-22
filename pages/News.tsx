import React from "react";
import { NewsItem } from "../types";

/* =========================
   News data
========================= */

const newsData: NewsItem[] = [
  /* 새로운 뉴스 생길 때마다, 제일 위에 얹기 */
  {
    id: "0001",
    date: "Sep 2025",
    title: "Attention to Real-World Scenes",
    content: "Gaeun’s new paper has been featured on the Psychonomic Society’s blog.",
    url: "https://featuredcontent.psychonomic.org/using-generative-ai-to-uncover-how-we-attend-to-complex-scene-features/",
  },
  {
    id: "0000",
    date: "Sep 2025",
    content:
      "The SCONE Lab in the Department of Psychology at Sungshin Women’s University has begun its lab meetings for the Fall 2025 semester.",
  },
];

/* =========================
   Component
========================= */

const News: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">
        News
      </h2>

      <ul className="space-4">
        {newsData.map((item) => (
          <li
            key={item.id}
            className="
              flex flex-col sm:flex-row items-start sm:items-baseline
              border-b border-dashed border-gray-100
              pb-4 last:border-0
            "
          >
            {/* Date */}
            <div className="w-32 shrink-0 mb-1 sm:mb-0 text-sm font-semibold text-[#888]">
              {item.date}
            </div>

            {/* Content */}
            <div className="text-base text-[#333] leading-6">
              {item.title && (
                <span className="font-medium italic text-[#2c3e50]">
                  “{item.title}”
                </span>
              )}
              {item.title && " "}
              {item.content}
              {item.url && (
                <>
                  {" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-[#6b4f3f] font-small
                      underline underline-offset-2
                      hover:text-[#3498db]
                      transition-colors
                    "
                  >
                    Read more
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
