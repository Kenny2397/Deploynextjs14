import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About description',
};

export default function GeneralLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex flex-col items-center p-24'>
      { children }
    </main>
  )
}