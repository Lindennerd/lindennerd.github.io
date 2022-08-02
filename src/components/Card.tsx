import Avatar from "./Avatar";
import Name from "./Name";

export default function PresentationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 shadow-md rounded border bg-white text-black  dark:bg-purple-900 dark:border-0">
      {children}
    </div>
  );
}
