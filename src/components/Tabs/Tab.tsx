export function Tab({
  id,
  title,
  icon,
  active,
  toggleTab,
}: {
  id: string;
  title: string;
  icon: React.ReactElement;
  active: boolean;
  toggleTab: (tabId: string) => void;
}) {
  return (
    <a
      onClick={() => {
        toggleTab(id);
      }}
      className={`flex justify-between items-center rounded-md p-2 cursor-pointer hover:bg-purple-900 dark:hover:bg-purple-700 transition-colors ${
        active ? "bg-purple-900 dark:bg-purple-700" : ""
      }`}
    >
      {icon}
      <span className="md:block hidden ml-2">{title}</span>
    </a>
  );
}
