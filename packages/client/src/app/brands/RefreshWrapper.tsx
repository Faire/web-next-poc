"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const RefreshWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      {isPending && <p>Refreshing...</p>}
      <div style={{ height: 16 }} />
      {children}
    </div>
  );
};
