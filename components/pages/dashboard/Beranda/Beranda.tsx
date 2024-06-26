import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Beranda() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center p-8">
        <div className="mt-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <h2 className="text-center mt-5 font-bold">Nama Admin</h2>

        <div className="mt-12 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-8 text-lg w-full">
          <Button
            variant="outline"
            className="py-12 px-8 sm:px-12 lg:px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black"
          >
            Data Siswa
          </Button>
          <Button
            variant="outline"
            className="py-12 px-8 sm:px-12 lg:px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black"
          >
            Progres Harian
          </Button>
          <Button
            variant="outline"
            className="py-12 px-8 sm:px-12 lg:px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black"
          >
            Rapot Semester
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Beranda;
