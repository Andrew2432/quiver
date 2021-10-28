import React from 'react';

export interface SafeKeyedChildrenProps {
  children?: React.ReactNode;
  list: Record<unknown, unknown>[];
  transformer: (props: typeof list) => JSX.Element;
}
