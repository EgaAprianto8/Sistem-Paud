"use client";

import Link from "next/link";
import React, { useState } from "react";

const TabelPerkembanganHarian = () => {
  const [students, setStudents] = useState([
    { name: "", scores: Array(6).fill("") },
  ]);
  const [indicators, setIndicators] = useState(["", "", "", "", "", ""]);
  const [group, setGroup] = useState("");
  const [date, setDate] = useState("");
  const [teacher, setTeacher] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const addStudent = () => {
    setStudents([...students, { name: "", scores: Array(6).fill("") }]);
  };

  const handleStudentChange = (index: any, value: any) => {
    const newStudents = [...students];
    newStudents[index].name = value;
    setStudents(newStudents);
  };

  const handleScoreChange = (
    studentIndex: any,
    scoreIndex: any,
    value: any
  ) => {
    const newStudents = [...students];
    newStudents[studentIndex].scores[scoreIndex] = value;
    setStudents(newStudents);
  };

  const handleIndicatorChange = (index: any, value: any) => {
    const newIndicators = [...indicators];
    newIndicators[index] = value;
    setIndicators(newIndicators);
  };

  return (
    <>
      <div className="mt-4  py-3 flex">
        <Link href="/dashboard/progress/progressharian">
          <button className="px-4 py-2 bg-[#2660c4] text-white hover:bg-[#3d62a2]">
            Kembali
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-center">
          <h1 className="font-black text-3xl text-center text-black w-1/2">
            FORMAT SKALA CAPAIAN PERKEMBANGAN HARIAN PAUD KOBER BANI RUQOYAH
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="px-6 py-3">
            <label className="block text-gray-700 dark:text-gray-400">
              Kelompok Umur:
              <input
                type="text"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                placeholder="Contoh: 4-5 Tahun"
                className="w-full px-2 py-1 mt-1 border rounded"
              />
            </label>
          </div>
          <div className="px-6 py-3">
            <label className="block text-gray-700 dark:text-gray-400">
              Tanggal:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-2 py-1 mt-1 border rounded"
              />
            </label>
          </div>
          <div className="w-full justify-end flex">
            <div className="mt-4 px-6 py-3 flex">
              <button
                onClick={addStudent}
                className="px-4 py-2 bg-[#26c438] text-white hover:bg-[#1c912a]"
              >
                Tambah Siswa
              </button>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Indikator Penilaian
              </th>
              {students.map((_, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  <input
                    type="text"
                    value={students[index].name}
                    onChange={(e) => handleStudentChange(index, e.target.value)}
                    placeholder="Nama Siswa"
                    className="w-full px-2 py-1 border rounded"
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {indicators.map((indicator, index) => (
              <tr
                key={index}
                className={`bg-${
                  index % 2 === 0 ? "white" : "gray-50"
                } dark:bg-${
                  index % 2 === 0 ? "gray-900" : "gray-800"
                } border-b dark:border-gray-700`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={indicator}
                    onChange={(e) =>
                      handleIndicatorChange(index, e.target.value)
                    }
                    placeholder="Indikator"
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                {students.map((student, studentIndex) => (
                  <td className="px-6 py-4" key={studentIndex}>
                    <input
                      type="text"
                      value={student.scores[index]}
                      onChange={(e) =>
                        handleScoreChange(studentIndex, index, e.target.value)
                      }
                      placeholder="BB / MB / BSH / BSB"
                      className="w-full px-2 py-1 border rounded"
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
            <p>Kepala Sekolah</p>
            <br />
            <br />
            <br />
            <p>Tis Nurnalis, S.Pd.I</p>
          </div>
          <div className="text-gray-700 dark:text-gray-400 text-right">
            <label className="mt-2">
              Guru Kelompok Usia:
              <br />
              <input
                type="text"
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                placeholder="Contoh: 4-5 Tahun"
                className="w-full px-2 py-1 mt-1 border rounded"
              />
            </label>
            <label>
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

export default TabelPerkembanganHarian;
