import React from "react";

export default function TabList({ tabs }: { tabs: React.ReactElement[] }) {
  return (
    <ul className="flex justify-between px-8 bg-white shadow-md dark:bg-gray-600 p-1 rounded-md">
      {tabs.map((tab) => tab)}
    </ul>
  );
}

// import { VscProject } from "react-icons/vsc";
// import { FaConnectdevelop } from "react-icons/fa";
// import {
//   MdOutlineSchool,
//   MdLanguage,
//   MdOutlineWorkOutline,
// } from "react-icons/md";
// import { useState } from "react";

// export default function TabList({
//   toggleTab: toggleTab,
// }: {
//   toggleTab: (tab: number) => void;
// }) {
//   const [activeTab, setActiveTab] = useState(0);

//   function handleSetActiveTab(tab: number) {
//     setActiveTab(tab);
//     toggleTab(tab);
//   }

//   return (
//     <ul className="flex justify-between px-8 bg-white shadow-md dark:bg-gray-600 p-1 rounded-md">
//       <li>
//         <a
//           className={`tab-item ${activeTab === 0 ? "active" : ""}`}
//           onClick={(e) => {
//             handleSetActiveTab(0);
//           }}
//         >
//           <VscProject />
//           <span className="md:block hidden ml-2">Portifólio</span>
//         </a>
//       </li>
//       <li>
//         <a
//           className={`tab-item ${activeTab === 1 ? "active" : ""}`}
//           onClick={(e) => {
//             handleSetActiveTab(1);
//           }}
//         >
//           <FaConnectdevelop />
//           <span className="md:block hidden ml-2">Tecnologias</span>
//         </a>
//       </li>
//       <li>
//         <a
//           className={`tab-item ${activeTab === 2 ? "active" : ""}`}
//           onClick={(e) => {
//             handleSetActiveTab(2);
//           }}
//         >
//           <MdLanguage />
//           <span className="md:block hidden ml-2">Idiomas</span>
//         </a>
//       </li>
//       <li>
//         <a
//           className={`tab-item ${activeTab === 3 ? "active" : ""}`}
//           onClick={(e) => {
//             handleSetActiveTab(3);
//           }}
//         >
//           <MdOutlineWorkOutline />
//           <span className="md:block hidden ml-2">Experiência</span>
//         </a>
//       </li>
//       <li>
//         <a
//           className={`tab-item ${activeTab === 4 ? "active" : ""}`}
//           onClick={(e) => {
//             handleSetActiveTab(4);
//           }}
//         >
//           <MdOutlineSchool />
//           <span className="md:block hidden ml-2">Formação</span>
//         </a>
//       </li>
//     </ul>
//   );
// }
