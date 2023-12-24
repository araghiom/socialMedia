"use client";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../ui/Form-button";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [createTopicFormState, action] = useFormState(actions?.createTopic, {
    errors: {},
  });
  return (
    <>
      <section>
        <Popover placement="left-start" className="w-1/2">
          <PopoverTrigger>
            <Button color="primary"> create new topic</Button>
          </PopoverTrigger>
          <PopoverContent style={{ width: "400px" }}>
            <form action={action}>
              <div className="flex flex-col gap-4 p-4 w-80">
                <Input
                  name="name"
                  label="name"
                  labelPlacement="outside"
                  placeholder="name"
                  color="primary"
                  isInvalid={!!createTopicFormState?.errors?.name}
                  errorMessage={createTopicFormState?.errors?.name?.join(",")}
                />

                <Textarea
                  name="description"
                  label="description"
                  labelPlacement="outside"
                  placeholder="describe your topic"
                  isInvalid={!!createTopicFormState?.errors?.description}
                  errorMessage={createTopicFormState?.errors?.description?.join(
                    ","
                  )}
                />
                {createTopicFormState?.errors?._form ? (
                  <div className="bg-red-200 border rounded-lg p-4">
                    {createTopicFormState?.errors?._form?.join(", ")}{" "}
                  </div>
                ) : null}

                <FormButton>
                  submit
                </FormButton>
              </div>
            </form>
          </PopoverContent>
        </Popover>
      </section>
    </>
  );
}
