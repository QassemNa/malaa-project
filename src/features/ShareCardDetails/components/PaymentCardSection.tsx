import { PaymentCard } from '@/components/PaymentCard.tsx';

import {
  type PaymentCardType,
  paymentCardIconMap,
} from '@/hooks/useGetUserPaymentCard.ts';

export const PaymentCardSection = ({
  title,
  paymentCards,
}: {
  title: string;
  paymentCards?: PaymentCardType[];
}) => {
  return (
    <div>
      <h3 className="text-xs font-semibold">{title}</h3>

      <div className="mb-2" />
      <div className="grid grid-rows-1 gap-2">
        {paymentCards?.map((account) => {
          const Icon = paymentCardIconMap[account.icon];
          return (
            <PaymentCard
              key={account.id}
              name={account.name}
              lastDigits={account.lastDigit}
              icon={
                <Icon className={account.isPrimary ? 'text-primary' : ''} />
              }
            />
          );
        })}
      </div>
    </div>
  );
};
