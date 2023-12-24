"use server";
import { title } from "process";
import { z } from "zod";
import { auth } from "@/auth";
import { Post } from "@prisma/client";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import paths from "@/path";
import { redirect } from "next/navigation";

const createPostFormSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result?.error?.flatten()?.fieldErrors };
  }
  const session = await auth();

  if (!session?.user) {
    return {
      errors: {
        _form: [" you must be signed firstly"],
      },
    };
  }
  const topic = await db.topic.findFirst({
    where: { slug },
  });

  let post: Post;
  try {
    if (!!topic) {
      post = await db.post.create({
        data: {
          title: result?.data?.title,
          content: result?.data?.content,
          userId: session?.user?.id,
          topicId: topic?.id,
        },
      });
    } else {
      return {
        errors: {
          _form: ["something must be wrong"],
        },
      };
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err?.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["something must be wrong"],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(topic?.slug));
  redirect(paths.showPost(slug,post.id));
}
