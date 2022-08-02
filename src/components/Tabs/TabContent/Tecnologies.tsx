import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import { Tecnology } from "@/types/appdata.types";
import { BiCodeCurly } from "react-icons/bi";

export function Tecnologies({ items }: { items: Tecnology[] }) {
  return (
    <div className="flex justify-between flex-wrap">
      {items &&
        items.map((tecnology, index) => {
          return (
            <div className="mt-2 mr-2 mb-2 w-full md:w-[30%]" key={index}>
              <Card>
                <CardTitle
                  icon={<BiCodeCurly />}
                  title={tecnology.title}
                  url={tecnology.url}
                />
                <div className="border-l-2 dark:text-white p-2 mt-2">
                  {tecnology.description}
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
