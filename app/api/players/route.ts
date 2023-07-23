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
  const url = new URL(req.url || '');
  const page = url.searchParams.get('page');
  const limit = url.searchParams.get('limit');

  // Check if skip and take are provided and parse them to integers
  const parsedPage = parseInt(page || '', 10) || 0;
  const take = parseInt(limit || '', 10) || 10;
  const skip = (parsedPage - 1) * take;

  try {
    const players = await prisma.player.findMany({
      skip,
      take,
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return NextResponse.json({ players, skip, take }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
