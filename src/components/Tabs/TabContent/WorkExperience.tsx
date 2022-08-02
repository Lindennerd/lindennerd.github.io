import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import { Experience } from "@/types/appdata.types";
import { FaBriefcase } from "react-icons/fa";

export function WorkExperience({
  experiences,
}: {
  experiences: Experience[] | undefined;
}) {
  return (
    <div className="flex justify-start flex-wrap">
      {experiences &&
        experiences.map((exp, index) => {
          return (
            <div className="w-full mt-2 md:w-[25%] mr-2" key={index}>
              <Card>
                <CardTitle icon={<FaBriefcase />} title={exp.title} />
                <div className="border-l-2 dark:text-white p-2">
                  {exp.description}
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
