"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FolderStructure from "./FolderStructure";

const Folders = ({
  openFolder,
  setOpenFolder,
}: {
  openFolder: string;
  setOpenFolder: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="absolute left-6 top-[5%] z-[999]">
      <div className="xl:hidden">
        <Sheet>
          <SheetTrigger className="bg-white p-1">Open</SheetTrigger>
          <SheetContent
            side="left"
            className="bg-stone-900 z-[999] text-white border-[#43b243]"
          >
            <SheetHeader className="h-full">
              <SheetDescription className="flex flex-col justify-center h-full">
                <SheetClose>
                  <FolderStructure setOpenFolder={setOpenFolder} />
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden xl:block">
        <FolderStructure setOpenFolder={setOpenFolder} />
      </div>
    </div>
  );
};

export default Folders;
