import Link from 'next/link'
import React from 'react'

const InputRapotSemester = () => {
  return (
    <>
     <div className="mt-4  py-3 flex">
        <Link href="/dashboard/rapotsemester">
          <button className="px-4 py-2 bg-[#2660c4] text-white hover:bg-[#3d62a2]">
            Kembali
          </button>
        </Link>
      </div>
    <div className="p-6">
    <div className="bg-white shadow-md rounded p-4">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">LAPORAN PERKEMBANGAN PESERTA DIDIK</h1>
        <h2 className="text-lg">PENDIDIKAN ANAK USIA DINI</h2>
        <h3 className="text-md">KELOMPOK USIA 5 - 6 TAHUN</h3>
      </div>
      <div className="flex justify-between mb-2">
        <div>SEMESTER: I (Satu)</div>
        <div>TAHUN AJARAN: 2023/2024</div>
      </div>
      <div className="flex justify-between mb-2">
        <div>NAMA ANAK: Rezky Aryuna R.</div>
        <div>NO INDUK / NISN: 22230284</div>
      </div>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-2 py-1">LINGKUP PENGEMBANGAN DAN KOMPETENSI DASAR</th>
            <th className="border border-gray-400 px-2 py-1">INDIKATOR</th>
            <th className="border border-gray-400 px-2 py-1">CAPAIAN PERKEMBANGAN ANAK</th>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1" colSpan={2}></td>
            <td className="border border-gray-400 px-2 py-1 text-center">
              <div className="grid grid-cols-4 gap-2">
                <span>BB</span>
                <span>MB</span>
                <span>BSH</span>
                <span>BSB</span>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1" colSpan={3}><strong>A. NILAI AGAMA DAN MORAL</strong></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">1.1 Mempercayai adanya Tuhan melalui ciptaan-Nya</td>
            <td className="border border-gray-400 px-2 py-1">Terbiasa menyebut kalimat pujian terhadap ciptaan Tuhan sebagai perwujudan dan mengenal agamanya</td>
            <td className="border border-gray-400 px-2 py-1">
              <div className="grid grid-cols-4 gap-2 justify-center">
                <input title='BB' type="checkbox" />
                <input title='MB' type="checkbox" />
                <input title='BSH' type="checkbox" />
                <input title='BSB' type="checkbox" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">1.2 Menghargai diri sendiri, orang lain, dan lingkungan sekitar sebagai rasa syukur kepada Tuhan</td>
            <td className="border border-gray-400 px-2 py-1">Terbiasa bersyukur terhadap diri sendiri, seorang merawat tanaman dan binatang ciptaan Tuhan, serta menghormati teman, orang tua, dan guru</td>
            <td className="border border-gray-400 px-2 py-1">
              <div className="grid grid-cols-4 gap-2 justify-center">
                <input title='BB' type="checkbox" />
                <input title='MB' type="checkbox" />
                <input title='BSH' type="checkbox" />
                <input title='BSB' type="checkbox" />
              </div>
            </td>
          </tr>
          {/* Add more rows as needed */}
          <tr>
            <td className="border border-gray-400 px-2 py-1" colSpan={3}><strong>B. FISIK MOTORIK</strong></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">2.1 Memiliki perilaku yang mencerminkan hidup sehat</td>
            <td className="border border-gray-400 px-2 py-1">Menciptakan kebersihan diri dan lingkungan secara reguler</td>
            <td className="border border-gray-400 px-2 py-1">
              <div className="grid grid-cols-4 gap-2 justify-center">
                <input title='BB' type="checkbox" />
                <input title='MB' type="checkbox" />
                <input title='BSH' type="checkbox" />
                <input title='BSB' type="checkbox" />
              </div>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
    </>
  )
}

export default InputRapotSemester
