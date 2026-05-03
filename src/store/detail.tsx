import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Article, Project } from '../data/content';

export type DetailKind = 'project' | 'article';
export type DetailItem = Project | Article;

interface DetailState {
  open: boolean;
  kind: DetailKind | null;
  item: DetailItem | null;
}

interface DetailContextValue extends DetailState {
  openDetail: (kind: DetailKind, item: DetailItem) => void;
  closeDetail: () => void;
}

const DetailContext = createContext<DetailContextValue | null>(null);

export function DetailProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DetailState>({ open: false, kind: null, item: null });

  const openDetail = useCallback((kind: DetailKind, item: DetailItem) => {
    setState({ open: true, kind, item });
  }, []);

  const closeDetail = useCallback(() => {
    setState({ open: false, kind: null, item: null });
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
