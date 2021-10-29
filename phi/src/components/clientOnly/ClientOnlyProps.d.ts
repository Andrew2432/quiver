import React from 'react';

export interface ClientOnlyProps {
  children?: React.ReactNode;
  delegated?: Record<string, unknown>[];
}
