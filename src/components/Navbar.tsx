export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" bg-white dark:bg-gray-600  shadow-md fixed top-0 w-full h-14 px-2 z-10
    flex items-center justify-between"
    >
      {children}
    </div>
  );
}
