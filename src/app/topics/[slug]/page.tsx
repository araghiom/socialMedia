import PostCreateForm from '@/component/post/post-create-form';
import { Divider } from '@nextui-org/react';
import { fetchPostsByTopicSlug } from '@/db/queries/post';
import PostList from '@/component/post/post-list';

interface TopicShowProps {
  params: {
    slug: string;
  };
}

export default function TopicShow({ params }: TopicShowProps) {
  const { slug } = params;
  return (
    <>
      <div className="grid grid-cols-4 gap-4 ">
        <aside className="col-span-3">
          <p className="text-xl p-4">{slug}</p>
          <section>
            <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
          </section>
        </aside>
        <aside className="col-span-1 border-2">
          <PostCreateForm slug={slug} />
          <Divider />
        </aside>
      </div>
    </>
  );
}
