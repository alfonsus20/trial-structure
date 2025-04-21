export type ApiResponse<T> = {
  data: T;
};

export type ApiRequest<T> = {
  body: T;
  params?: Record<string, string>;
  query?: Record<string, string>;
};
