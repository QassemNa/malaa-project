import { InfoIcon } from 'lucide-react';

import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Button } from '@/components/ui/button.tsx';

import { useGetUserPaymentCard } from '@/hooks/useGetUserPaymentCard.ts';

import { PaymentCardSection } from '@/features/ShareCardDetails/components/PaymentCardSection.tsx';
import { SharingDetails } from '@/features/ShareCardDetails/components/SharingDetails.tsx';

export const ShareCardDetails = () => {
  const { data } = useGetUserPaymentCard();
  return (
    <PageWrapper>
      <img
        src={
          'https://cdn.prod.website-files.com/638700e25e7b18843bd3fe70/639f0ba16affc00ae76a3499_blogo.svg'
        }
        className="w-15"
      />
      <h1 className="text-xl font-bold">Connect with Malaa</h1>
      <div className="mb-2" />
      <p className="text-xs opacity-50">
        Select accounts and cards to share details
      </p>

      <div className="mb-4" />
      <PaymentCardSection
        title={'Bank Accounts'}
        paymentCards={data?.accounts}
      />
      <div className="mb-4" />
      <PaymentCardSection title={'Cards'} paymentCards={data?.creditCards} />

      <div className="mb-4" />
      <SharingDetails />

      <div className="mb-4" />
      <div className="rounded-md bg-muted-foreground/10 p-2">
        <p className="text-xs">
          Your data will be shared starting from 16/12/2024 until 16/12/2025
        </p>
      </div>

      <div className="mb-2" />
      <p className="text-xs">
        Malaa will have ongoing access to your data for 12 months. You can
        revoke these permissions at any time from the Settings.
      </p>

      <div className="mb-4" />
      <div className="flex w-fit flex-row items-start gap-2 rounded-md bg-muted-foreground/10 p-2">
        <InfoIcon size={34} />
        <p className="text-xs">
          By proceeding, you agree to our{' '}
          <span className="text-primary">terms & conditions</span> and will be
          securely redirected to Malaa
        </p>
      </div>

      <div className="mb-4" />
      <div className="flex w-full justify-end gap-4">
        <Button
          size={'xl'}
          variant={'destructive'}
          className="h-12 w-22 text-xs"
        >
          Deny
        </Button>
        <Button size={'xl'} className="text-xs" disabled={true}>
          Allow
        </Button>
      </div>
    </PageWrapper>
  );
};
