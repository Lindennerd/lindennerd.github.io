import React, { useEffect, useState } from "react";
import { Tab } from "./Tab";

interface ITabProps {
  id: string;
  title: string;
  icon: React.ReactElement;
}

interface ITabsContent {
  id: string;
  component: React.ReactElement;
}

export function TabList({
  tabs,
  tabsContent,
}: {
  tabs: ITabProps[] | undefined;
  tabsContent: ITabsContent[] | undefined;
}) {
  const [activeTab, setActiveTab] = useState(!tabs ? null : tabs[0].id);

  return (
    <>
      <ul className="flex justify-between px-8 bg-purple-600 shadow-md dark:bg-purple-900 text-white p-1 rounded-md">
        {tabs?.map((tab) => {
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
      <div>
        {tabsContent &&
          tabsContent.map((tabContent) => {
            return (
              <div
                className={activeTab === tabContent.id ? "block" : "hidden"}
                key={tabContent.id}
              >
                {tabContent.component}
              </div>
            );
          })}
      </div>
    </>
  );
}
