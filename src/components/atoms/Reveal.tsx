import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function Reveal({ as: As = 'div', className = '', style, children }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const cls = `reveal${className ? ` ${className}` : ''}`;
  return (
    <As ref={ref} className={cls} style={style}>
      {children}
    </As>
  );
}
