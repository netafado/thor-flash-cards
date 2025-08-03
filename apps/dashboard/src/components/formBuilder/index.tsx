'use client';
import { Button, Input } from '@lib/ui';
import { FormBuilderProps } from './types';
import { FC } from 'react';
import clx from 'clsx';
const FormBuilder: FC<FormBuilderProps> = ({
  formAction: formCall,
  fields,
}) => {
  return (
    <form action={formCall} className="space-y-6">
      {fields.map(
        ({
          name,
          id,
          type,
          placeholder,
          errorMessage,
          label,
          className,
          ...rest
        }) => (
          <div key={name || label} className="space-y-2">
            {label && (
              <label
                htmlFor={id || name}
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-600"
              >
                {label}
              </label>
            )}

            <div className="mt-2">
              <Input
                id={id}
                name={name}
                type={type || 'text'}
                placeholder={placeholder}
                className={clx('block', className)}
                {...rest}
              />
            </div>
            {errorMessage && (
              <div className="text-red-600 text-sm/6 bg-red-50 p-2 rounded-md">
                {errorMessage}
              </div>
            )}
          </div>
        )
      )}
      <div>
        <Button className="flex w-full justify-center py-1.5 text-sm/6">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormBuilder;
