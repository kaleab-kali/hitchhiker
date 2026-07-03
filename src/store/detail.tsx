import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Project } from '../data/content';

interface DetailState {
  open: boolean;
  item: Project | null;
}

interface DetailContextValue extends DetailState {
  openDetail: (item: Project) => void;
  closeDetail: () => void;
}

const DetailContext = createContext<DetailContextValue | null>(null);

export function DetailProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DetailState>({ open: false, item: null });

  const openDetail = useCallback((item: Project) => {
    setState({ open: true, item });
  }, []);

  const closeDetail = useCallback(() => {
    setState({ open: false, item: null });
  }, []);

  const value = useMemo(
    () => ({ ...state, openDetail, closeDetail }),
    [state, openDetail, closeDetail]
  );

  return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

export function useDetail(): DetailContextValue {
  const ctx = useContext(DetailContext);
  if (!ctx) throw new Error('useDetail must be used within DetailProvider');
  return ctx;
}
