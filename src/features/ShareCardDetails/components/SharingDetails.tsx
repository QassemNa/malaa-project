import {
  ArrowLeftRightIcon,
  HandCoinsIcon,
  LandmarkIcon,
  type LucideIcon,
  UserIcon,
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';

type Shard = {
  id: number;
  icon: LucideIcon;
  title: string;
  subTitle: string;
  description: string;
};

const dataToBeShared: Shard[] = [
  {
    id: 1,
    icon: LandmarkIcon,
    title: 'Account Details',
    subTitle: 'some info',
    description: 'A lot of info',
  },
  {
    id: 2,
    icon: HandCoinsIcon,
    title: 'Regular payments',
    subTitle: 'some info',
    description: 'A lot of info',
  },
  {
    id: 3,
    icon: ArrowLeftRightIcon,
    title: 'Account transactions',
    subTitle: 'some info',
    description: 'A lot of info',
  },
  {
    id: 4,
    icon: UserIcon,
    title: 'Contact and party details',
    subTitle: 'some info',
    description: 'A lot of info',
  },
];
export const SharingDetails = () => {
  return (
    <div>
      <h3 className="text-xs font-semibold">
        You'll be sharing the following data
      </h3>

      <div className="mb-2" />
      <Accordion type="single" collapsible>
        <div className="grid grid-rows-1 gap-2">
          {dataToBeShared?.map((section) => {
            const Icon = section.icon;
            return (
              <AccordionItem value={String(section.id)} key={section.id}>
                <AccordionTrigger>
                  <div className="flex w-fit items-center gap-4">
                    <div>
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm">{section.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {section.subTitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{section.subTitle}</AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
};
