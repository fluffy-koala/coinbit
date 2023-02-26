import { Input } from '@components';
import React, { useCallback, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { useDebounce } from '../useDebounce';
import type { SearchFormData, UseSearchParams } from './useSearch.types';

const useSearch = <T extends unknown>({ onSearch }: UseSearchParams<T>) => {
  const formMethods = useForm<SearchFormData>({
    defaultValues: {
      search: '',
    },
  });
  const searchFormValue = useWatch({
    control: formMethods.control,
    name: 'search',
  });

  const debouncedSearchFormValue = useDebounce({
    delay: 300,
    value: searchFormValue,
  });

  const results = useMemo(() => {
    return onSearch(debouncedSearchFormValue);
  }, [debouncedSearchFormValue, onSearch]);

  const SearchInput = useCallback(() => {
    return (
      <FormProvider {...formMethods}>
        <Input<SearchFormData> name="search" placeholder="Search..." />
      </FormProvider>
    );
  }, [formMethods]);

  return {
    SearchInput,
    results,
  };
};

export default useSearch;
