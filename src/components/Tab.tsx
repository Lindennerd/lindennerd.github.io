export default function Tab({
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
      className={`tab-item ${active ? "active" : ""}`}
    >
      {icon}
      <span className="md:block hidden ml-2">{title}</span>
    </a>
  );
}
