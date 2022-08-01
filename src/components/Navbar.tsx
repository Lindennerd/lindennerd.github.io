export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" bg-purple-700 text-white dark:bg-purple-900  shadow-md fixed top-0 w-full h-14 px-2 z-10
    flex items-center justify-between"
    >
      {children}
    </div>
  );
}
