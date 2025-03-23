'use client';

import * as React from 'react';
import '@/lib/env';

import { useRouter } from 'next/navigation';
export default function HomePage() {
  const router = useRouter();

  // redirect to notes page
  React.useEffect(() => {
    router.push('/notes');
  }, []);

  return <></>;
}
