export type ServiceResponseLastNews<T> = {
    success: boolean;
    data: T;
    error?: string;
    xWpTotalpages: number | null
  };
  