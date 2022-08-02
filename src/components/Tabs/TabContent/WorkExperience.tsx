import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import { Experience } from "@/types/appdata.types";
import { FaBriefcase } from "react-icons/fa";
import { TbDoorExit, TbDoorEnter } from "react-icons/tb";

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
            <div className="w-full mt-2 md:w-[30%] mr-2" key={index}>
              <Card>
                <CardTitle icon={<FaBriefcase />} title={exp.title} />
                <div className="p-2 dark:text-white">
                  <div>@ {exp.company}</div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <TbDoorEnter className="mr-2" />
                      {exp.startDate}
                    </span>
                    <span className="flex items-center">
                      <TbDoorExit className="mr-2" /> {exp.endDate}
                    </span>
                  </div>
                  <div className="border-l-2 px-4 mt-4">{exp.description}</div>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
