export type UseSearchParams<T> = {
  onSearch: (debouncedSearchFormValue: string) => T[];
};

export type SearchFormData = {
  search: string;
};
