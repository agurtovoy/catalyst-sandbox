import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react';

import { cs } from '../../utils/cs';

export const RectangleList = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithRef<typeof RadioGroupPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cs('flex flex-wrap gap-4', className)}
    orientation="horizontal"
    ref={ref}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Root>
));

export const RectangleListItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    className={cs(
      'focus:ring-primary-blue/20 border-2 py-2.5 px-6 font-semibold text-black hover:border-blue-primary focus:outline-none focus:ring-4 disabled:border-gray-100 disabled:text-gray-400 disabled:hover:border-gray-100',
      'data-[state=checked]:border-blue-primary',
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Item>
));