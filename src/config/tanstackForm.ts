import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

import { CheckboxField } from '@/components/form/CheckboxField.tsx';
import { SubmitButton } from '@/components/form/SubmitButton.tsx';

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    CheckboxField,
  },
  formComponents: { SubmitButton },
  fieldContext,
  formContext,
});
