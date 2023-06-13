import { Locale } from "@/utils/localization/types";

const dictionaries = (route: string) => ({
  en: () =>
    import(`@/translations/${route}/en.json`).then((module) => module.default),
  fr: () =>
    import(`@/translations/${route}/fr.json`).then((module) => module.default),
  // ...
});
export const getDictionary = async (locale: Locale, route: string) =>
  dictionaries(route)[locale]();
