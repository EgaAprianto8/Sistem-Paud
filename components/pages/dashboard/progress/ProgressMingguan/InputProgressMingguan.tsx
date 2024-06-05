"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

const InputProgressMingguan = () => {
  const [teacher, setTeacher] = useState("");
  return (
    <>
      <div className="mt-4  py-3 flex">
        <Link href="/dashboard/progress/progressmingguan">
          <button className="px-4 py-2 bg-[#2660c4] text-white hover:bg-[#3d62a2]">
            Kembali
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-center">
          <h1 className="font-black text-3xl text-center text-black w-1/2 my-4">
            SKALA CAPAIAN PERKEMBANGAN MINGGUAN PAUD KB BANI RUQOYAH
          </h1>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="px-6 py-3">
              <label className="block text-gray-700 dark:text-gray-400">
                Nama Anak
                <input
                  type="text"
                  placeholder="Masukan Nama Anak"
                  className="w-full px-2 py-1 mt-1 border rounded"
                />
              </label>
            </div>
            <div className="px-6 py-3">
              <label className="block text-gray-700 dark:text-gray-400">
                Hari/Tanggal
                <input
                  type="date"
                  placeholder="Masukan Hari/Tanggal"
                  className="w-full px-2 py-1 mt-1 border rounded"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="px-6 py-3">
              <label className="block text-gray-700 dark:text-gray-400">
                Minggu ke-
                <input
                  type="number"
                  placeholder="Masukan Minggu ke-"
                  className="w-full px-2 py-1 mt-1 border rounded"
                />
              </label>
            </div>
            <div className="px-6 py-3">
              <label className="block text-gray-700 dark:text-gray-400">
                Kelompok
                <input
                  type="text"
                  placeholder="Masukan Kelompok"
                  className="w-full px-2 py-1 mt-1 border rounded"
                />
              </label>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                LP
              </th>
              <th scope="col" className="px-6 py-3">
                Indikator Capaian Perkembangan
              </th>
              <th scope="col" className="px-6 py-3">
                BB
              </th>
              <th scope="col" className="px-6 py-3">
                MB
              </th>
              <th scope="col" className="px-6 py-3">
                BSH
              </th>
              <th scope="col" className="px-6 py-3">
                BSB
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "NAM",
              "FM",
              "Kognitif",
              "Bahasa",
              "Sosial Emosional",
              "Seni",
            ].map((lp, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {lp}
                </th>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    className="block w-full py-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-gray-300"
                    placeholder="Indikator Capaian Perkembangan"
                  />
                </td>
                {["BB", "MB", "BSH", "BSB"].map((category, i) => (
                  <td key={i} className="px-6 py-4 text-center">
                    <input
                      title="checkbox"
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 px-6 py-3">
          <p className="text-gray-700 dark:text-gray-400">Keterangan:</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
            <li>BB : Belum Berkembang</li>
            <li>MB : Mulai Berkembang</li>
            <li>BSH : Berkembang Sesuai Harapan</li>
            <li>BSB : Berkembang Sangat Baik</li>
          </ul>
        </div>
        <div className="mt-4 px-6 py-3 flex justify-between">
          <div className="text-gray-700 dark:text-gray-400">
            <p>Mengetahui</p>
            <p>Kepala Pengelola</p>
            <br />
            <br />
            <br />
            <p>Tis Nurnalis, S.Pd.I</p>
          </div>
          <div className="text-gray-700 dark:text-gray-400 text-right">
            <label>
              Guru Kelompok:
              <br />
              <input
                type="text"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                placeholder="Nama Guru"
                className="w-full px-2 py-1 mt-1 border rounded"
              />
            </label>
            <br />
            <br />
            <br />
            <p>{teacher}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputProgressMingguan;
