import React from "react";
import Tab from "./Tab";

interface ITabProps {
  id: string;
  title: string;
  icon: React.ReactElement;
}

export default function TabList({ tabs }: { tabs: ITabProps[] | undefined }) {
  if (!tabs) return <></>;

  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <ul className="flex justify-between px-8 bg-white shadow-md dark:bg-gray-600 p-1 rounded-md">
      {tabs.map((tab) => {
        return (
          <div key={tab.id}>
            <Tab
              id={tab.id}
              icon={tab.icon}
              title={tab.title}
              active={activeTab === tab.id}
              toggleTab={setActiveTab}
            />
          </div>
        );
      })}
    </ul>
  );
}
