import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const EmailInput: React.FC<EmailInputProps> = (props) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
        Email Address
      </Label>
      <Input
        type="email"
        id="email"
        className={cn(
          'h-auto bg-transparent border-0 border-b border-input rounded-none px-1 py-2 text-base',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary'
        )}
        {...props}
      />
    </div>
  );
};

export default EmailInput;
