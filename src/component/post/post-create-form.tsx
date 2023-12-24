"use client";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import FormButton from "@/component/ui/Form-button";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [createPostFormState, action] = useFormState(
    actions?.createPost.bind(null, slug),
    {
      errors: {},
    }
  );
  return (
    <>
      <section className="p-4 flex justify-center">
        <Popover placement="left-start">
          <PopoverTrigger>
            <Button color="primary">Create Post</Button>
          </PopoverTrigger>
          <PopoverContent>
            <form action={action} className="flex flex-col gap-4 p-4">
              <Input
                label="Title"
                labelPlacement="outside"
                name="title"
                isInvalid={!!createPostFormState?.errors?.title}
                errorMessage={createPostFormState?.errors?.title?.join(", ")}
              />
              <Input
                label="Content"
                labelPlacement="outside"
                name="content"
                isInvalid={!!createPostFormState?.errors?.content}
                errorMessage={createPostFormState?.errors?.content?.join(", ")}
              />
              {createPostFormState?.errors?._form ? (
                <div className="bg-red-200 border rounded-lg p-4">
                  {createPostFormState?.errors?._form?.join(", ")}{" "}
                </div>
              ) : null}
              <FormButton> submit</FormButton>
            </form>
          </PopoverContent>
        </Popover>
      </section>
    </>
  );
}
