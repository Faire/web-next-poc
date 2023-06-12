"use client";

import { QueryClientProvider } from "@faire/web/common/reactQuery";

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};
