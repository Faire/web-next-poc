"use client";

import { QueryClientProvider } from "@faire/web/common/reactQuery";

import { StyledComponentsRegistry } from "./StyledComponentsRegistry";

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </QueryClientProvider>
  );
};
