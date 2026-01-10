import { useQuery } from '@tanstack/react-query';
import {
  BanknoteIcon,
  BriefcaseIcon,
  CreditCardIcon,
  type LucideIcon,
  PlaneIcon,
} from 'lucide-react';

export type PaymentCardIconKey =
  | 'banknote'
  | 'airPlan'
  | 'baggage'
  | 'creditCard';

export type PaymentCardType = {
  id: number;
  name: string;
  lastDigit: string;
  icon: PaymentCardIconKey;
  isPrimary?: boolean;
};

export const paymentCardIconMap: { [key in PaymentCardIconKey]: LucideIcon } = {
  banknote: BanknoteIcon,
  airPlan: PlaneIcon,
  baggage: BriefcaseIcon,
  creditCard: CreditCardIcon,
};

export const useGetUserPaymentCard = () => {
  return useQuery({
    queryKey: ['userPaymentCards'],
    queryFn: (): {
      accounts: PaymentCardType[];
      creditCards: PaymentCardType[];
    } => {
      return {
        accounts: [
          {
            id: 1,
            name: 'Primary account',
            lastDigit: '3785',
            icon: 'banknote',
            isPrimary: true,
          },
          {
            id: 2,
            name: 'Sub account name',
            lastDigit: '2141',
            icon: 'airPlan',
            isPrimary: false,
          },
          {
            id: 3,
            name: 'Sub account name',
            lastDigit: '6789',
            icon: 'baggage',
            isPrimary: false,
          },
        ],
        creditCards: [
          {
            id: 1,
            name: 'Pretty credit card',
            lastDigit: '1457',
            icon: 'creditCard',
            isPrimary: true,
          },
          {
            id: 2,
            name: 'Cashback credit card',
            lastDigit: '7806',
            icon: 'creditCard',
            isPrimary: false,
          },
        ],
      };
    },
  });
};
