import { createContext, useContext, useEffect, useState } from "react";
import i18nData from "@/data/data.json";
import { useRouter } from "next/router";
import { AppData, InternationalizationData } from "@/types/appdata.types";

interface InternationalizationContext {
  appData: AppData | null;
}

const InternationalizationContext = createContext<InternationalizationContext>({
  appData: null,
});

export function useInternationalization() {
  return useContext(InternationalizationContext);
}

export function InternationalizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useRouter();
  const [appData, setAppData] = useState<AppData | null>(null);

  useEffect(() => {
    const data = i18nData as InternationalizationData;
    setAppData(locale === "pt-Br" ? data.ptBr : data.enUs);
  }, [locale]);

  return (
    <InternationalizationContext.Provider value={{ appData }}>
      {children}
    </InternationalizationContext.Provider>
  );
}
