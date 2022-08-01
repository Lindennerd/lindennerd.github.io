import { useInternationalization } from "@/context/InternationalizationContext";

export const AboutMe = () => {
  const internationalization = useInternationalization();

  return (
    <div className="border-l-4 p-4">
      <span className="font-light">
        {internationalization?.appData?.presentation.firstLine}
        <p className="mt-2">
          {internationalization?.appData?.presentation.secondLine}
        </p>
      </span>
    </div>
  );
};
