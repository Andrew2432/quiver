import { Children } from 'react';
import { SafeKeyedChildrenProps } from './SafeKeyedChildrenProps';

function SafeKeyedChildren({
  children,
  list,
  transformer,
}: SafeKeyedChildrenProps) {
  return (
    <>
      {Children.toArray(list.map(transformer))}
      {children}
    </>
  );
}

export default SafeKeyedChildren;
