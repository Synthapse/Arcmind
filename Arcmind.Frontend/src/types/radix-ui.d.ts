declare module '@radix-ui/react-checkbox' {
  import * as React from 'react';

  type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
  
  interface CheckboxProps extends PrimitiveButtonProps {
    checked?: boolean;
    defaultChecked?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
  }

  interface CheckboxIndicatorProps extends React.ComponentPropsWithoutRef<'span'> {
    forceMount?: boolean;
  }

  const Root: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
  const Indicator: React.ForwardRefExoticComponent<CheckboxIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

  export { Root, Indicator };
} 