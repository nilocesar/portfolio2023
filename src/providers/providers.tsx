'use client';

import React, { ReactNode } from 'react';

import { PageProviders } from 'context';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <PageProviders>{children}</PageProviders>;
};
