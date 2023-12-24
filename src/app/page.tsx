import TopicCreateForm from '@/component/topics/topic-create-form';
import TopicList from '@/component/topics/topic-list';
import { Divider } from '@nextui-org/react';
import PostList from '@/component/post/post-list';
import { fetchTopPost } from '@/db/queries/post';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <aside className="col-span-3">
        <section>
          <h1>top posts </h1>
          <PostList fetchData={() => fetchTopPost()} />
        </section>
      </aside>
      <aside className="col-span-1  p-4 border-2 rounded-xl">
        <TopicCreateForm />
        <Divider className="mt-4" />
        <TopicList />
      </aside>
    </div>
  );
}
