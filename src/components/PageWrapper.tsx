import type { ReactNode } from 'react';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="p-4">{children}</div>;
};
