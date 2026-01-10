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
}: {
  name: string;
  lastDigits: string;
  icon: ReactNode;
}) => {
  return (
    <Item variant="outline" size="sm">
      <ItemMedia variant="icon">{icon}</ItemMedia>

      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>Ending with {lastDigits}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Checkbox />
      </ItemActions>
    </Item>
  );
};
