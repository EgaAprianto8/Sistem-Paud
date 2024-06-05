import { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { redirect } from 'next/navigation';
import Beranda from '@/components/pages/dashboard/Beranda/Beranda';

export const metadata: Metadata = {
    title: 'Admin Dashboard | Perpustakaan',
    description: 'Admin Page untuk melakukan input dan merubah data',
};

export default function page() {
  return(
    <>
    <Beranda/>
    </>
  )
}
