import { Checkbox } from '@/components/ui/checkbox';

import { useFieldContext } from '@/config/tanstackForm';

export function CheckboxField() {
  const field = useFieldContext<boolean>();

  return (
    <Checkbox
      id="checkbox-field"
      checked={field.state.value}
      onCheckedChange={(checked) => field.handleChange(!!checked)}
    />
  );
}
