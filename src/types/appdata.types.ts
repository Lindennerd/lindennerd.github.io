export type Presentation = {
  firstLine: string;
  secondLine: string;
};

export type Tab = {
  id: string;
  title: string;
  icon: string;
};

export type Tecnology = {
  id: string;
  title: string;
  url: string;
  description: string;
};

export type Language = {
  id: string;
  title: string;
  description: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type AppData = {
  presentation: Presentation;
  tabs: Tab[];
  tecnologies: Tecnology[];
  languages: Language[];
  experience: Experience[];
};

export interface InternationalizationData {
  ptBr: AppData;
  enUs: AppData;
}
