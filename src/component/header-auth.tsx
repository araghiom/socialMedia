"use client"
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import * as actions from "@/actions";

import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session?.status === "loading") {
    return (authContent = null);
  } else if (session?.data?.user) {
    authContent = (
      <>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session?.data?.user?.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <form action={actions?.signOut} className="p-4">
              <NavbarItem className="flex gap-2">
                <Button type="submit" color="primary">
                  sign out
                </Button>
              </NavbarItem>
            </form>
          </PopoverContent>
          ;
        </Popover>
      </>
    );
  } else {
    authContent = (
      <>
        <form action={actions?.signIn}>
          <Button type="submit" color="primary">
            signIn
          </Button>
        </form>
        <form action={actions?.signOut} className="p-4">
          <NavbarItem className="flex gap-2">
            <Button type="submit" color="primary">
              sign up
            </Button>
          </NavbarItem>
        </form>
      </>
    );
  }
  return authContent
}
