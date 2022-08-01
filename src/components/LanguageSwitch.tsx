import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const { locale, asPath } = useRouter();

  return (
    <Link href={asPath} locale={locale === "en-Us" ? "pt-Br" : "en-Us"}>
      <a className="p-2 rounded-full hover:border-2 border-gray-600 hover:border-gray-700 hover:bg-gray-100 hover:text-gray-700">
        {locale === "en-Us" ? "ptBr" : "enUs"}
      </a>
    </Link>
  );
}
