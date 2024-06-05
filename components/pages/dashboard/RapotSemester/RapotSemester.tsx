import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

function RapotSem() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold flex items-center gap-8 py-3">
        RAPOT SEMESTER : <span className="text-green-500">Ganjil / Genap</span>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Kelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pilih">--Pilih--</SelectItem>
              <SelectItem value="kelas1">Kelas 1/A</SelectItem>
              <SelectItem value="kelas2">Kelas 2/B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </h1>
      <div className="w-full justify-end flex">
        <div className="mt-4 px-6 py-3 flex">
          <Link href="/dashboard/rapotsemester/inputrapot">
            <button className="px-4 py-2 bg-[#26c438] text-white hover:bg-[#1c912a]">
              Tambah Data Rapot Siswa
            </button>
          </Link>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Nomor Induk/ NISN
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Nama Siswa
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Semester
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Tahun Ajaran
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Dokumen Rapot
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
            <td>22700600gatau</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Delvan Ramadhan
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Ganjil
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              2023/2024
            </td>
            <td className="items-center flex justify-center py-2 h-auto">
              <Link href="/dashboard/rapotsemester/inputrapot" className="flex">
                <button className=" bg-[#49a2fb] p-2 text-[#ffff] rounded-lg font-bold dark:bg-blue-500 hover:bg-[#325d88]">
                  Tampilkan
                </button>
              </Link>
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
            <td>22700600gatau</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Delvan Ramadhan
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Ganjil
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              2023/2024
            </td>
            <td className="items-center flex justify-center py-2 h-auto">
              <Link href="/dashboard/rapotsemester/inputrapot" className="flex">
                <button className=" bg-[#49a2fb] p-2 text-[#ffff] rounded-lg font-bold dark:bg-blue-500 hover:bg-[#325d88]">
                  Tampilkan
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RapotSem;
