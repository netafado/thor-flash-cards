'use client';

import {
  Content,
  Section,
  Card,
  useTheme,
  Status,
  Typography,
  DotsVerticalIcon,
  SelectUI,
  Button,
} from '@thor-commerce/ui';
import { useRouter } from 'next/navigation';

export default function CreateDeck() {
  const { toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <Content
      title="we are here to help you in your journey"
      pages={['Home', 'Dashboard']}
    >
      <Section>
        <Section.Item type="1/3" lg="1/3" md="1/2">
          <Card
            onClick={() => {
              console.log('Card clicked');
              router.push('/decks/create');
            }}
          >
            <Status
              type="success"
              title="Create your deck"
              description="create your custom deck"
            />
          </Card>
        </Section.Item>
        <Section.Item type="1/3" lg="1/3" md="1/2">
          <Card>
            <Status
              type="warning"
              title="Find your deck"
              description="click here to starting learning"
            />
          </Card>
        </Section.Item>
        <Section.Item type="1/3" lg="1/3" md="1/2">
          <Card>
            <Status
              type="warning"
              title="Ask our IA"
              description="With our IA we can create a perfect learning path for you"
            />
          </Card>
        </Section.Item>
      </Section>

      <Section>
        <Section.Item type="full" lg="full" md="full">
          <Card>
            <div className="cart-header flex items-start justify-between mb-2">
              <div className="mb-4 flex-1">
                <Typography.H4>How is your exercise routine?</Typography.H4>
                <Typography.Paragraph className="text-gray-400 dark:text-gray-600">
                  You you want to keep your mind sharp exercise is the better
                  choice to improve your productive and mental healh.
                  <b> Download</b> our app to keep track of your progress here
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
                    your exercise this week
                  </span>
                  <div className="mt-2 flex items-end gap-3">
                    <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                      4 Hours
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
                    Did you meditate today?
                  </span>
                  <div className="mt-2 flex items-end gap-3">
                    <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                      9,528
                    </h4>
                    <div>
                      <span className="bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium">
                        10 strikes
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 px-6 py-5 sm:border-r sm:border-b-0 dark:border-gray-800">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Are you eating healthly?
                    </span>
                    <div className="mt-2 flex items-end gap-3">
                      <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                        5 strikes
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
                    How much desks have you reviews this week
                  </span>
                  <div className="mt-2 flex items-end gap-3">
                    <h4 className="text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90">
                      123
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

      <Section>
        <Section.Item type="full" lg="full" md="full">
          <Card>
            <div className="cart-header flex items-start justify-between mb-2">
              <div className="mb-4 flex-1">
                <Typography.H4>Your progress</Typography.H4>
                <Typography.Paragraph className="text-gray-400 dark:text-gray-600">
                  You are doing great keep going
                </Typography.Paragraph>
              </div>
              <div className="flex gap-2">
                <SelectUI />
                <input
                  className="dark:bg-dark-900 focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-9 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[42px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[200px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  type="text"
                  placeholder="Search..."
                />
                <Button onClick={toggleTheme} icon={<DotsVerticalIcon />}>
                  Filters
                </Button>
              </div>
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
  );
}
