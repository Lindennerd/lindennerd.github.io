import Avatar from "./Avatar";
import Name from "./Name";

export default function PresentationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 shadow-md bg-purple-700 text-white rounded dark:bg-purple-900">
      {children}
    </div>
  );
}
