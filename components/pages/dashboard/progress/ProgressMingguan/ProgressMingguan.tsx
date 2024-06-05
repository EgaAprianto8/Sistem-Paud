'use client'

import Link from "next/link";
import React from "react";

const ProgressMingguan = () => {
  return (
    <>
              <div className="mt-4  py-3 flex">
        <Link href="/dashboard/progress">
          <button className="px-4 py-2 bg-[#2660c4] text-white hover:bg-[#3d62a2]">
            Kembali
          </button>
        </Link>
      </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-center">
        <h1 className="font-black text-3xl text-center text-black w-1/2 my-4">
          TABEL SKALA CAPAIAN PERKEMBANGAN MINGGUAN PAUD KB BANI RUQOYAH
        </h1>
      </div>
      <div className="w-full justify-end flex">
          <div className="mt-4 px-6 py-3 flex">
            <Link href="/dashboard/progress/progressmingguan/inputprogressmingguan">
              <button className="px-4 py-2 bg-[#26c438] text-white hover:bg-[#1c912a]">
                Tambah Siswa
              </button>
            </Link>
          </div>
        </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3">
              Nama Anak
            </th>
            <th scope="col" className="px-6 py-3">
              Kelompok
            </th>
            <th scope="col" className="px-6 py-3">
              Minggu ke-
            </th>
            <th scope="col" className="px-6 py-3">
              Hari/tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Nama Anak
            </td>
            <td className="px-6 py-4 text-center">3</td>
            <td className="px-6 py-4 text-center">2</td>
            <td className="px-6 py-4 text-center">06/06/2024</td>
            <td className="px-6 py-4 flex space-x-4 justify-center">
                  <button
                    className="px-4 py-2 bg-[#2665c4] text-white font-bold hover:bg-[#1c4591]"
                  >
                    Tampilkan
                  </button>
                  <button
                    className="px-4 py-2 bg-[#26c438] text-white font-bold hover:bg-[#1c912a]"
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-[#c42626] text-white font-bold hover:bg-[#911c1c]"
                  >
                    Hapus
                  </button>
                </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ProgressMingguan;
