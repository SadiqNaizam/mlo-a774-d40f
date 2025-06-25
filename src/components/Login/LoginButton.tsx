import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ className, isLoading, ...props }) => {
  return (
    <Button
      className={cn("w-full rounded-lg h-11 text-base font-semibold", className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Login
    </Button>
  );
};

export default LoginButton;
