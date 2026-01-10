import type { ReactNode } from 'react';

import { Checkbox } from '@/components/ui/checkbox.tsx';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item.tsx';

export const PaymentCard = ({
  name,
  lastDigits,
  icon,
  checked,
  onCheckedChange,
}: {
  name: string;
  lastDigits: string;
  icon: ReactNode;
  checked: boolean;
  onCheckedChange: () => void;
}) => {
  return (
    <Item variant="outline" size="sm">
      <ItemMedia variant="icon">{icon}</ItemMedia>

      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>Ending with {lastDigits}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
      </ItemActions>
    </Item>
  );
};
