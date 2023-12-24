import { redirect } from 'next/navigation';
import PostList from '@/component/post/post-list';
import { fetchPostsBySearch } from '@/db/queries/post';
interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect('/');
  }

  return (
    <>
      <PostList fetchData={() => fetchPostsBySearch(term)} />
    </>
  );
}
