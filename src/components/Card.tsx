import Avatar from "./Avatar";
import Name from "./Name";

export default function PresentationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 shadow-md bg-white rounded dark:bg-gray-600">
      {children}
    </div>
  );
}
