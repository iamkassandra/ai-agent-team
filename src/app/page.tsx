'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-slate-200 font-bold text-lg">KW</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Private Workspace</h1>
          <p className="text-slate-400 text-sm">Personal development environment</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 text-center">
          <Lock className="w-8 h-8 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-300 mb-6 text-sm">
            This is a private workspace. Access is restricted to authorized users only.
          </p>

          <Button
            className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 border-slate-600"
            onClick={() => window.location.href = '/login'}
          >
            Access Portal
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs">
            © 2024 Private Workspace. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
