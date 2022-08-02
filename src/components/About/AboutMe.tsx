import { useInternationalization } from "@/context/InternationalizationContext";

export const AboutMe = () => {
  const internationalization = useInternationalization();

  return (
    <div className="border-l-4 p-4">
      <span className="font-light dark:text-white">
        {internationalization?.appData?.presentation.firstLine}
        <p className="mt-2 dark:text-white">
          {internationalization?.appData?.presentation.secondLine}
        </p>
      </span>
    </div>
  );
};
