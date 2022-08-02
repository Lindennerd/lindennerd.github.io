import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import { Language } from "@/types/appdata.types";
import { FaLanguage } from "react-icons/fa";

export function Languages({
  languages,
}: {
  languages: Language[] | undefined;
}) {
  return (
    <div className="flex justify-start flex-wrap">
      {languages &&
        languages.map((lang, index) => {
          return (
            <div className="w-full mt-2 md:w-[25%] mr-2">
              <Card>
                <CardTitle icon={<FaLanguage />} title={lang.title} />
                <div className="border-l-2 dark:text-white p-2">
                  {lang.description}
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
