import React from "react";
import { Input, InputProps } from "@stellar/design-system";

interface PubKeyPickerProps extends Omit<InputProps, "fieldSize"> {
  id: string;
  fieldSize?: "sm" | "md" | "lg";
  label: string;
  labelSuffix?: string | React.ReactNode;
  placeholder?: string;
  value: string;
  error: string | undefined;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const PubKeyPicker = ({
  id,
  fieldSize = "md",
  label,
  labelSuffix,
  placeholder = "Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG",
  value,
  error,
  onChange,
  ...props
}: PubKeyPickerProps) => {
  return (
    <Input
      id={id}
      fieldSize={fieldSize}
      label={label}
      labelSuffix={labelSuffix}
      placeholder={placeholder}
      value={value}
      error={error}
      onChange={onChange}
      {...props}
    />
  );
};