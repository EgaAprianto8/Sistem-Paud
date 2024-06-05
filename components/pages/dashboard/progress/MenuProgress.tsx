'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MenuProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] my-auto">
      <section className="flex flex-col items-center justify-center p-8 w-full">
        <div className="mt-auto mb-auto grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 px-8 text-lg w-full">
          <Link href="/dashboard/progress/progressharian">
            <Button
              variant="outline"
              className="py-12 px-8 sm:px-12 lg:px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black"
            >
              Tampilkan Progress Harian
            </Button>
          </Link>
          <Link href="/dashboard/progress/progressmingguan">
            <Button
              variant="outline"
              className="py-12 px-8 sm:px-12 lg:px-28 text-lg hover:bg-[#f5e0ff] hover:text-[#9B52BD] border border-black"
            >
              Tampilkan Progress Mingguan
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MenuProgress;
