import { MdLightMode, MdNightlight } from "react-icons/md";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full border-2 border-gray-600 hover:border-gray-700 hover:bg-gray-100 hover:text-gray-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MdLightMode /> : <MdNightlight />}
    </button>
  );
}
