import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// POST endpoint
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { firstname, lastname, salary, goal, devise, pictureURL } =
      await req.json();
    const player = await prisma.player.create({
      data: { firstname, lastname, salary, goal, devise, pictureURL },
    });
    return NextResponse.json({ message: 'Success', player }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

// GET endpoint
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const players = await prisma.player.findMany();

    return NextResponse.json(players, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
