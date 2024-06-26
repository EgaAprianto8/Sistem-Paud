'use client';

import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function BuatAkun() {
    const [userName, setUserName] = useState('');
    const [userPw, setUserPw] = useState('');
    const [akun, setAkun] = useState([]);
    const router = useRouter();
    const { toast } = useToast();

    if (akun.length == 0) {
        const user = await prisma.users.create({
            data: {
                id: 1,
                username: 'admin',
                email: 'admin@admin.org',
                password: '123admin',
            },
        });
    }

    useEffect(() => {
        fetchAkun();
    }, []);

    const fetchAkun = async () => {
        const response = await axios.get('/api/akun');
        setAkun(response.data);
    };

    const handleLogin = () => {
        if (typeof window !== 'undefined') {
            const adminName = akun[0]['username'];
            const adminPw = akun[0]['password'];

            if (userName === adminName && userPw === adminPw) {
                localStorage.setItem('sudahMasuk', 'true');
                router.push('/dashboard');
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Terjadi kesalahan',
                    description: 'Mungkin Username atau Password yang Anda Masukkan Salah.',
                });
            }
        }
    };

    return (
        <div className="w-full h-screen flex justify-center bg-body gap-10">
            <div className="my-auto w-full max-w-sm p-4 bg-white border border-gray-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6">
                    <h5 className="text-xl font-medium text-form-input dark:text-white">Login</h5>
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-form-input dark:text-white"
                        >
                            Masukan Username
                        </label>
                        <input
                            type="text"
                            value={userName}
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-form-input text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Masukan Nama"
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-form-input dark:text-white"
                        >
                            Masukan Password
                        </label>
                        <input
                            type="password"
                            value={userPw}
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-form-input text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            onChange={(e) => setUserPw(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="w-full bg-[#3C50E0] hover:bg-[#2a3371] focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BuatAkun;
