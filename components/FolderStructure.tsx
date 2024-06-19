import { useRouter } from "next/navigation";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";

const FolderStructure = ({
  setOpenFolder,
}: {
  setOpenFolder: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleOpenFolderChange = (name: string) => {
    setOpenFolder(name);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-20">
      <div
        className="cursor-pointer flex flex-col items-center"
        onClick={() => handleOpenFolderChange("about")}
      >
        <IoMdDocument className="text-[#43b243] text-4xl" />
        <p className="text-white">About.txt</p>
      </div>
      <div
        className="cursor-pointer flex flex-col items-center"
        onClick={() => handleOpenFolderChange("projects")}
      >
        <FaRegFolderOpen className="text-[#43b243] text-4xl" />
        <p className="text-white max-w-[130px] text-center">Projects</p>
      </div>
    </div>
  );
};

export default FolderStructure;
