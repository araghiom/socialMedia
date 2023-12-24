'use client';

import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import * as action from '@/actions';

export function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={action?.search}>
      <Input defaultValue={searchParams.get('term') || ' '} name="term" />
    </form>
  );
}
