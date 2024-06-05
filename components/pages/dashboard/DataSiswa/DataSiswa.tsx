"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import InputDataSiswa from "@/components/button/InputDataSiswa";

const DataSiswa = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", nama_siswa: "", kelasID: "" });
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("/api/siswa");
    setStudents(response.data);
  };

  const fetchClasses = async () => {
    const response = await axios.get("/api/kelas");
    setClasses(response.data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put("/api/siswa", {
          ...form,
          kelasID: parseInt(form.kelasID, 10),
        });
      } else {
        await axios.post("/api/siswa", {
          ...form,
          kelasID: parseInt(form.kelasID, 10),
        });
      }
      setForm({ id: "", nama_siswa: "", kelasID: "" });
      fetchStudents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (student: any) => {
    setForm({
      id: student.id.toString(),
      nama_siswa: student.nama_siswa,
      kelasID: student.kelasID.toString(),
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete("/api/siswa", { data: { id } });
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <h1>Ini adalah halaman untuk CRUD data siswa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nama_siswa"
            placeholder="Nama Siswa"
            value={form.nama_siswa}
            onChange={handleChange}
            required
          />
          <select
          title="kelas"
            name="kelasID"
            value={form.kelasID}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Pilih Kelas
            </option>
            {classes.map((kelas: any) => (
              <option key={kelas.id} value={kelas.id}>
                {kelas.nama_kelas}
              </option>
            ))}
          </select>
          <button type="submit">{form.id ? "Update" : "Create"}</button>
        </form>
        <div>
          <InputDataSiswa />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Nama Siswa</th>
              <th scope="col" className="px-6 py-3">Kelas</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any) => (
              <tr key={student.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {student.nama_siswa}
                </th>
                <td className="px-6 py-4">
                  {student.kelas?.nama_kelas}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => handleEdit(student)} className="font-medium text-[#49a2fb] dark:text-blue-500 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(student.id)} className="font-medium text-[#e44f4f] dark:text-red-500 hover:underline ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataSiswa;
