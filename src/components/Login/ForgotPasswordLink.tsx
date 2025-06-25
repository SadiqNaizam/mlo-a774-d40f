import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ForgotPasswordLinkProps {
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ className }) => {
  return (
    <Button
      variant="link"
      className={cn(
        "p-0 h-auto self-end text-sm font-normal text-muted-foreground hover:text-primary hover:no-underline",
        className
      )}
    >
      Forgot Password
    </Button>
  );
};

export default ForgotPasswordLink;
