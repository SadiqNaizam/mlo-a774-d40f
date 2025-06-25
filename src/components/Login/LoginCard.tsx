import React from 'react';
import { Card } from '@/components/ui/card';
import FormHeading from './FormHeading';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ForgotPasswordLink from './ForgotPasswordLink';
import LoginButton from './LoginButton';
import SignUpLink from './SignUpLink';

const LoginCard: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Logging in with:', { email, password });
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-96 bg-card text-card-foreground p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center w-full">
        <FormHeading />
        <form onSubmit={handleLogin} className="w-full mt-8">
          <div className="flex flex-col gap-6">
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <div className="flex flex-col gap-2">
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <ForgotPasswordLink />
            </div>
          </div>
          <LoginButton isLoading={isLoading} type="submit" className="mt-8" />
        </form>
        <div className="mt-6">
          <SignUpLink />
        </div>
      </div>
    </Card>
  );
};

export default LoginCard;
