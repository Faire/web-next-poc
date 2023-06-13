export type Locale = "en" | "fr";

export type LocalizedPageProps = {
  params: {
    lang: Locale;
  };
};
