import { IntlProvider } from "@/utils/localization/IntlProvider";
import { StrictLocalMsg } from "@/utils/localization/StrictLocalMsg";
import { getDictionary } from "@/utils/localization/dictionary";
import { LocalizedPageProps } from "@/utils/localization/types";

export default async function About({ params: { lang } }: LocalizedPageProps) {
  const dictionary = await getDictionary(lang, "about/page");
  return (
    <IntlProvider locale={lang} defaultLocale={lang} messages={dictionary}>
      <StrictLocalMsg defaultMessage="About Page" />
    </IntlProvider>
  );
}
