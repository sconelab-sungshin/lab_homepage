import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "People", path: "/people" },
    { name: "Research", path: null }, // Research는 페이지 이동 없음
    { name: "Resources", path: "/resources" },
    { name: "News", path: "/news" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Photos", path: "/photos" },
  ];

  return (
    <nav className="sticky top-0 bg-[#fcfcfc] z-50 border-y border-[#eee] mt-8">
      <div className="max-w-[900px] mx-auto px-5">
        <ul className="flex flex-wrap justify-center list-none py-4">
          {navItems.map((item) => {
            if (item.name === "Research") {
              return (
                <li
                  key={item.name}
                  className="relative mx-2 md:mx-4 my-1 group"
                >
                  {/* Research (hover only) */}
                  <span
                    className="
                      text-sm font-medium uppercase tracking-widest
                      text-[#888] hover:text-[#2c3e50]
                      transition-colors duration-300
                      cursor-default
                    "
                  >
                    Research
                  </span>

                  {/* Submenu */}
                  <ul
                    className="
                      absolute left-1/2 -translate-x-1/2
                      top-full mt-3
                      bg-white border border-[#eee]
                      rounded shadow-sm
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                      min-w-[170px]
                      text-center
                      z-50
                    "
                  >
                    <li>
                      <NavLink
                        to="/projects"
                        className="block px-4 py-2 text-sm text-[#666] hover:text-[#2c3e50] hover:bg-[#fafafa]"
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/publications"
                        className="block px-4 py-2 text-sm text-[#666] hover:text-[#2c3e50] hover:bg-[#fafafa]"
                      >
                        Publications
                      </NavLink>
                    </li>
                  </ul>
                </li>
              );
            }

            // 나머지 메뉴
            return (
              <li key={item.name} className="mx-2 md:mx-4 my-1">
                <NavLink
                  to={item.path!}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-[#2c3e50]"
                        : "text-[#888] hover:text-[#2c3e50]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
