import { Locale } from "./types";

export const IntlProvider: React.FC<{
  locale: Locale;
  defaultLocale: Locale;
  messages: Record<string, string>;
  children: React.ReactNode;
}> = ({ children }) => {
  return <>{children}</>;
};
