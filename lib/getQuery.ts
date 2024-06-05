// utils/getQueryOutput.js
import prisma from './prisma';

export const dataSiswa = async () => {
    try {
        const dataSiswa = await prisma.siswa.findMany({
            include: {
                kelas: true,
            },
            orderBy: {
                kelas: {
                    nama_kelas: 'asc',
                },
            },
        });
        return dataSiswa;
    } catch (error) {
        console.log(error);
        return []; // Return an empty array on error
    }
};
