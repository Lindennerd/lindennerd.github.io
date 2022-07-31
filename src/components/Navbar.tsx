export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" bg-white shadow-md fixed top-0 w-full h-14 text-center px-2 z-10
    flex items-center justify-start dark:bg-gray-600 md:justify-between"
    >
      {children}
    </div>
  );
}
