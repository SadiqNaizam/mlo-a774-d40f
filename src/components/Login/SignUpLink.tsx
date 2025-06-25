import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SignUpLinkProps {
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ className }) => {
  return (
    <p className={cn("text-sm text-center text-muted-foreground", className)}>
      Don't have an account?{' '}
      <Button
        variant="link"
        className="p-0 h-auto text-sm font-semibold text-primary hover:no-underline"
      >
        SignUp
      </Button>
    </p>
  );
};

export default SignUpLink;
