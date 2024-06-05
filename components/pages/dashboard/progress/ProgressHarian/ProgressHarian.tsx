"use client";

import Link from "next/link";
import React, { useState } from "react";

const ProgressHarian = () => {
  const [entries, setEntries] = useState([
    { group: "4-5 Tahun", teacher: "Contessa Dyan, M", date: "2023-06-05" },
    // Add more entries as needed
  ]);

  const handleDelete = (index: any) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleEdit = (index: any) => {
    // Implement edit logic here
  };

  const handleView = (index: any) => {
    // Implement view logic here
  };

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
          <h1 className="font-black text-3xl text-center text-black w-1/2">
            TABEL CAPAIAN PERKEMBANGAN HARIAN PAUD KOBER BANI RUQOYAH
          </h1>
        </div>
        <div className="w-full justify-end flex">
          <div className="mt-4 px-6 py-3 flex">
            <Link href="/dashboard/progress/progressharian/inputprogressharian">
              <button className="px-4 py-2 bg-[#26c438] text-white hover:bg-[#1c912a]">
                Tambah Siswa
              </button>
            </Link>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Kelompok Usia
              </th>
              <th scope="col" className="px-6 py-3">
                Guru Kelompok
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr
                key={index}
                className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4">{entry.group}</td>
                <td className="px-6 py-4">{entry.teacher}</td>
                <td className="px-6 py-4">{entry.date}</td>
                <td className="px-6 py-4 flex space-x-4 justify-center">
                  <button
                    onClick={() => handleView(index)}
                    className="px-4 py-2 bg-[#2665c4] text-white font-bold hover:bg-[#1c4591]"
                  >
                    Tampilkan
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 bg-[#26c438] text-white font-bold hover:bg-[#1c912a]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-[#c42626] text-white font-bold hover:bg-[#911c1c]"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProgressHarian;
