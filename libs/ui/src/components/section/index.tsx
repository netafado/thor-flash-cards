import { ReactNode } from 'react';

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div className="">
        <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
          Section title
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">{children}</div>
    </section>
  );
};
