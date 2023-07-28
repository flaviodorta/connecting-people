export type CursorVariants =
  | 'default'
  | 'variant-1'
  | 'variant-2'
  | 'variant-3';

export type ICard = {
  title: string;
  description?: string;
};

export type IStep = {
  state: number;
  icon: React.ReactNode;
};
