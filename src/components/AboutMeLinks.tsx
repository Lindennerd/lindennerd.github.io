import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

export default function AboutMeLinks({
  login,
  company,
  location,
  email,
}: {
  login: string | undefined | null;
  company: string | undefined | null;
  location: string | undefined | null;
  email: string | undefined | null;
}) {
  return (
    <>
      <Link href={`https://github.com/${login}`}>
        <a className="text-lg flex justify-start items-center">
          <BsGithub />
          <span className="ml-2">{login}</span>
        </a>
      </Link>
      <div className="text-lg flex justify-start items-center">
        <HiOutlineOfficeBuilding /> <span className="ml-2">{company}</span>
      </div>
      <div className="text-lg flex justify-start items-center">
        <HiOutlineLocationMarker /> <span className="ml-2">{location}</span>
      </div>
      <Link href={`mailto:${email}`}>
        <a className="text-lg flex justify-start items-center">
          <HiOutlineMail /> <span className="ml-2">{email}</span>
        </a>
      </Link>
    </>
  );
}
