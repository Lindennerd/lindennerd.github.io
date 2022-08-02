import Link from "next/link";
import React from "react";

export default function CardTitle({
  icon,
  title,
  url,
}: {
  icon: JSX.Element;
  title: string;
  url?: string;
}) {
  return (
    <Link href={url ?? ""} target="_blank">
      <a target="_blank">
        <div
          className="flex items-center px-2 rounded-md bg-purple-600 shadow-md dark:bg-gray-800 
              text-white hover:bg-purple-700 dark:hover:bg-gray-700 transition-all"
        >
          {icon}
          <div className="p-1"></div>
          {title}
        </div>
      </a>
    </Link>
  );
}
