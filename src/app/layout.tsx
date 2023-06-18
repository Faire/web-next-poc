// eslint-disable-next-line import/no-unassigned-import
import "./index.css";
import { Providers } from "./Providers";
import * as styles from "./styles.css";
import { TopOfPageContent } from "./TopOfPageContent/TopOfPageContent";

export const metadata = {
  title: "Faire | Online Wholesale Marketplace for Retailers & Brands",
  description: "Online Wholesale Marketplace",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Providers>
          <TopOfPageContent />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
