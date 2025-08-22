'use client';

import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = (user: any, token: string) => {
    localStorage.setItem('auth_token', token);
    router.push('/dashboard');
  };

  const handleLoginError = (error: string) => {
    console.error('Login error:', error);
  };

  return (
    <LoginForm
      onLoginSuccess={handleLoginSuccess}
      onLoginError={handleLoginError}
    />
  );
}
