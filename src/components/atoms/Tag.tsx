import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ children, active, onClick }: TagProps) {
  return (
    <button className={'tag' + (active ? ' active' : '')} onClick={onClick} data-hover>
      {children}
    </button>
  );
}
