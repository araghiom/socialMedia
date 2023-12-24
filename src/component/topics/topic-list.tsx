import { db } from "@/db";
import Link from "next/link";
import paths from "@/path";
import { Chip } from "@nextui-org/react";

export default async function TopicList() {
  const topics = await db?.topic?.findMany();

  const renderedTopic = topics?.map((topic, id) => {
    return (
      <li key={id}>
        <Link href={`${paths.topicShow(topic?.slug)}`}>
          <Chip color="success" variant="shadow" className="p-4">
            {topic?.slug}
          </Chip>
        </Link>
      </li>
    );
  });

  return (
    <>
      <section className="pb-4 ">
        <h1 className="text-xl p-4 ">Topics</h1>
        <ul className="flex flex-col gap-4">{renderedTopic}</ul>
      </section>
    </>
  );
}
