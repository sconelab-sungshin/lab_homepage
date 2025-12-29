import React, { useState } from "react";
// import ContactEmail from "../components/ContactEmail";

const PI = {
  name: "Gaeun Son",
  role: "Principal Investigator",
  email: "songaeun@sungshin.ac.kr",
  image: `${import.meta.env.BASE_URL}images/profiles/GaeunSon.jpg`,
  description:
    "I am an Assistant Professor in the Department of Psychology at Sungshin Women's University. " +
    "My research focuses on understanding the mechanisms of visual perception and memory in naturalistic settings. " +
    "I combine behaviour and neuroimaging data with deep vision models to investigate how we build representations of the multidimensional visual world. ",
  links: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=bgY8jz0AAAAJ&hl=en&oi=ao",
    },
    {
      label: "Curriculum Vitae",
      url: "https://drive.google.com/file/d/1rfRNjNAaW1an8H6shF2r0I3-jgDYtBG1/view?usp=sharing",
    },
  ],
};

const labMembers = [
  {
    name: "Jiyun Park",
    role: "Research Assistant",
    email: "student1@sungshin.ac.kr",
    image: `${import.meta.env.BASE_URL}images/lab_logo_preliminary.png`,
  },
  {
    name: "Geonhee Kang",
    role: "Research Assistant",
    email: "student2@sungshin.ac.kr",
    image: `${import.meta.env.BASE_URL}images/lab_logo_preliminary.png`,
    description: "I am an undergraduate psychology student at Sungshin Women’s University. "+
    "My academic interests center on visual perception and memory, with a focus on how people perceive and remember real-world scenes. "+
    "I enjoy thinking about perception as a way of understanding how we experience the world. "+
    "My personal motto is to approach both research and life with curiosity, courage, and a willingness to take on new challenges."
  },
  {
    name: "Ariyoung Song",
    role: "Research Assistant",
    email: "student3@sungshin.ac.kr",
    image: `${import.meta.env.BASE_URL}images/profiles/AriyoungSong.jpg`,
    description: "Hello, my name is Ariyoung Song."+
    "I am a senior majoring in Psychology at Sungshin Women’s University. " +
    "I am interested in cognitive psychology, especially visual perception and related cognitive processes. "+
    "In my free time, I enjoy playing video games and exploring new delicious restaurants."
  },
];

const Alumni = [
  {
    name: "Angelica Angelio",
    role: "Research Assistant (2025 Fall)",
    email: "student1@sungshin.ac.kr",
    image: `${import.meta.env.BASE_URL}images/lab_logo_preliminary.png`,
  },
]

type ContactEmailProps = {
  email: string;
  label?: string; // 기본값 "Contact:"
  className?: string; // 필요하면 바깥 p 스타일 커스터마이즈
};

const ContactEmail: React.FC<ContactEmailProps> = ({
  email,
  label = "Contact:",
  className = "text-sm text-[#777] mb-6",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard가 막힌 환경 대비(거의 드물지만)
      setCopied(false);
    }
  };

  return (
    <p className={className}>
      {label}{" "}
      <button
        type="button"
        onClick={handleCopy}
        title="Click to copy email address"
        className="underline underline-offset-2 hover:text-[#3498db] transition-colors"
      >
        {email}
      </button>
      {copied && <span className="ml-2 text-xs text-purple-600">Copied!</span>}
    </p>
  );
};

type ProfileProps = {
  name: string;
  role: string;
  email: string;
  image: string;
  description: string;
  links?: { label: string; url: string }[];
};

const ProfileCard: React.FC<ProfileProps> = ({
  name,
  role,
  email,
  image,
  description,
  links = [],
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-12">
      {/* Profile Image */}
      <div className="shrink-0">
        <div className="w-[170px] h-[170px] bg-[#eee] rounded-full overflow-hidden shadow-sm">
          <img src={image} alt={`${name} photo`} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-medium text-[#444] mb-1">{name}</h3>
        <p className="text-sm text-[#777] mb-1">{role}</p>

        <p className="text-[#555] mb-2 leading-7">{description}</p>

        <ContactEmail email={email} />

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#ccc] rounded text-sm text-[#555]
                           hover:border-[#3498db] hover:text-[#3498db] transition-all bg-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const People: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-medium mb-8 text-[#444]">Principal Investigator</h2>
      <ProfileCard {...PI} />

      <div className="mt-16 pt-10 border-t border-[#eee]">
        <h2 className="text-2xl font-medium mb-8 text-[#444]">Lab Members</h2>
        {labMembers.map((member) => (
          <ProfileCard key={member.email} {...member} />
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-[#eee]">
        <h2 className="text-2xl font-medium mb-8 text-[#444]">Alumni</h2>
        {Alumni.map((member) => (
          <ProfileCard key={member.email} {...member} />
        ))}
      </div>
    </section>
  );
};


export default People;