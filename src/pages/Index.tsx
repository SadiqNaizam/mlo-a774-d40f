import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Login/LoginCard';

/**
 * The main login page for the application.
 * This page utilizes the `MainAppLayout` to provide a consistent, centered
 * structure and renders the `LoginCard` as its primary content.
 * It acts as the entry point for the user authentication flow.
 *
 * @returns {React.ReactElement} The rendered login page component.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
