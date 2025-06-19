'use client';

import {
  Content,
  AppSidebar,
  Backdrop,
  AppHeader,
  useSidebar,
  Section,
  Card,
  useTheme,
  Status,
  ArrowUpIcon,
  ArrowDownIcon,
  Typography,
  DotsVerticalIcon,
} from '@thor-commerce/ui';

export default function Index() {
  const {
    isExpanded,
    isHovered,
    isMobileOpen,
    isMobile,
    setIsHovered,
    toggleMobileSidebar,
    toggleSidebar,
    variant,
  } = useSidebar();

  const { toggleTheme } = useTheme();

  const classBaseVariant = {
    'mobile:expanded': 'ml-0',
    'desktop:expanded': 'ml-[290px]',
    'desktop:collapsed': 'ml-[90px]',
  };
  return (
    <div className="min-h-screen xl:flex border-gray-200 bg-gray-50 lg:border-b dark:border-gray-800 dark:bg-gray-900">
      <AppSidebar
        {...{
          isExpanded,
          isMobileOpen,
          isHovered,
          setIsHovered,
          isMobile,
          variant,
        }}
      />
      <Backdrop {...{ isMobileOpen, toggleMobileSidebar }} />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${classBaseVariant[variant]} `}
      >
        <AppHeader
          {...{
            isExpanded,
            isMobileOpen,
            toggleSidebar,
            toggleMobileSidebar,
            toggleTheme,
          }}
        />
        <Content pages={['Home', 'Dashboard']}>
          <Section>
            <Section.Item type="1/3" lg="1/3" md="1/2">
              <Card>
                <Status
                  type="success"
                  title="23,000"
                  description="Monthly Revenue"
                  leftContent={
                    <div className="flex text-xs justify-end items-center ml-5  text-base font-bold text-green-500 bg-green-400/10 rounded-full px-2 py-1">
                      +16%
                      <ArrowUpIcon className="w-4 h-4 ml-1" />
                    </div>
                  }
                />
              </Card>
            </Section.Item>
            <Section.Item type="1/3" lg="1/3" md="1/2">
              <Card>
                <Status
                  type="success"
                  title="23,000"
                  description="Monthly Revenue"
                  leftContent={
                    <div className="flex text-xs justify-end items-center ml-5  text-base font-bold text-green-500 bg-green-400/10 rounded-full px-2 py-1">
                      +16%
                      <ArrowUpIcon className="w-4 h-4 ml-1" />
                    </div>
                  }
                />
              </Card>
            </Section.Item>

            <Section.Item type="1/3" lg="1/3" md="1/2">
              <Card>
                <Status
                  type="error"
                  title="23,000"
                  description="Monthly Revenue"
                  leftContent={
                    <div className="flex text-xs justify-end items-center ml-5  text-base font-bold text-red-500 bg-red-400/10 rounded-full px-2 py-1">
                      +16%
                      <ArrowDownIcon className="w-4 h-4 ml-1" />
                    </div>
                  }
                />
              </Card>
            </Section.Item>
          </Section>

          <Section>
            <Section.Item type="full" lg="full" md="full">
              <Card>
                <div className="cart-header flex items-start justify-between mb-2">
                  <div className="mb-4 flex-1">
                    <Typography.H4>Full Width Card</Typography.H4>
                    <Typography.Paragraph className="text-gray-400 dark:text-gray-600">
                      This is a full-width card. It can contain any content you
                      like, such as text, images, or other components.
                    </Typography.Paragraph>
                  </div>

                  <button
                    onClick={toggleTheme}
                    className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-9 w-9 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <DotsVerticalIcon
                      className="hidden dark:block"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
                <div className="card-body">
                  <div className="grid rounded-lg border border-gray-200 bg-white sm:grid-cols-2 xl:grid-cols-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="border-b border-gray-200 px-6 py-5 sm:border-r xl:border-b-0 dark:border-gray-800">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Total Revenue
                      </span>
                      <div className="mt-2 flex items-end gap-3">
                        <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                          $200,45.87
                        </h4>
                        <div>
                          <span className="bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium">
                            +2.5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 px-6 py-5 xl:border-r xl:border-b-0 dark:border-gray-800">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Active Users
                      </span>
                      <div className="mt-2 flex items-end gap-3">
                        <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                          9,528
                        </h4>
                        <div>
                          <span className="bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium">
                            + 9.5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 px-6 py-5 sm:border-r sm:border-b-0 dark:border-gray-800">
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Customer Lifetime Value
                        </span>
                        <div className="mt-2 flex items-end gap-3">
                          <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                            $849.54
                          </h4>
                          <div>
                            <span className="bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium">
                              -1.6%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Customer Acquisition Cost
                      </span>
                      <div className="mt-2 flex items-end gap-3">
                        <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                          9,528
                        </h4>
                        <div>
                          <span className="bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium">
                            +3.5%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Section.Item>
          </Section>
        </Content>
      </div>
    </div>
  );
}
