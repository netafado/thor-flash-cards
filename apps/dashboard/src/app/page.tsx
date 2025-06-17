'use client';

import {
  Content,
  AppSidebar,
  Backdrop,
  AppHeader,
  useSidebar,
  Section,
} from '@thor-commerce/ui';

export default function Index() {
  const {
    isExpanded,
    isHovered,
    isMobileOpen,
    setIsHovered,
    toggleMobileSidebar,
    toggleSidebar,
  } = useSidebar();

  return (
    <div className="min-h-screen xl:flex border-gray-200 bg-white lg:border-b dark:border-gray-800 dark:bg-gray-900">
      <AppSidebar {...{ isExpanded, isMobileOpen, isHovered, setIsHovered }} />
      <Backdrop {...{ isMobileOpen, toggleMobileSidebar }} />
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${
          isExpanded && !isMobileOpen ? 'ml-[290px]' : 'ml-[90px]'
        } ${isMobileOpen ? 'ml-0' : ''}`}
      >
        <AppHeader
          {...{ isExpanded, isMobileOpen, toggleSidebar, toggleMobileSidebar }}
        />
        <Content title="Dashboard" pages={['Home', 'Dashboard']}>
          <Section>
            <div className="col-span-12 space-y-6 xl:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                <div className="rounded-md border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                      Card Title Here
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    Start putting content on grids or panels, you can also use
                    different combinations of grids.Please check out the
                    dashboard and other pages
                  </p>
                </div>
                <div className="rounded-md border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                  <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                    Card Title Here
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    Start putting content on grids or panels, you can also use
                    different combinations of grids.Please check out the
                    dashboard and other pages
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-md border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/[0.03]"></div>
            </div>

            <div className="col-span-12 xl:col-span-5">
              <div className="rounded-md border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                  Card Title Here
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  Start putting content on grids or panels, you can also use
                  different combinations of grids.Please check out the dashboard
                  and other pages
                </p>
                <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                  Card Title Here
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  Start putting content on grids or panels, you can also use
                  different combinations of grids.Please check out the dashboard
                  and other pages
                </p>
              </div>
            </div>
          </Section>
        </Content>
      </div>
    </div>
  );
}
