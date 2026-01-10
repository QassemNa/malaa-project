import { Button } from '@/components/ui/button.tsx';

import { useFormContext } from '@/config/tanstackForm.ts';

export const SubmitButton = ({
  label,
}: {
  label: string;
  isLoading?: boolean;
}) => {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : label}
        </Button>
      )}
    </form.Subscribe>
  );
};
