export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="p-1 bg-white fixed top-0 w-full h-16 text-center
    border-b shadow-lg flex items-center justify-between"
    >
      {children}
    </div>
  );
}
