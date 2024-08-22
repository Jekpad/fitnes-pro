import { ReactNode } from "react";

const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full min-h-svh w-full bg-color-background px-[140px] pb-8">
      {children}
    </div>
  );
};

export default ContentWrapper;
