import { Maybe } from "@/graphql/graphql-operations";
import moment from "moment";
import { useRouter } from "next/router";

export default function useDateFormatter() {
  const { locale } = useRouter();

  return function formatDate(date: Maybe<string> | undefined) {
    const format = locale === "pt-Br" ? "DD/MM/YYYY" : "MM/DD/YYYY";
    return moment(date).format(format);
  };
}
