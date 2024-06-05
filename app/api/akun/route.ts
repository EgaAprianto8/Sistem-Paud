// app/api/siswa/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.users.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error('GET Error:', error);
    }
}
