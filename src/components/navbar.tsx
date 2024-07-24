import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-8 py-7 ">
          <div>
            <Link href={"/"} className="font-bold text-xl">
              Photo Album App
            </Link>
          </div>
          <div className="cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <Separator />
      </nav>
    </>
  );
}
