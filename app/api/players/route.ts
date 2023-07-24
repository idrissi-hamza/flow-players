import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// POST endpoint
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { firstname, lastname, salary, goal, devise, pictureURL } =
      await req.json();

    // Check if a player with the same firstname and lastname already exists
    const existingPlayer = await prisma.player.findFirst({
      where: {
        firstname,
        lastname,
      },
    });

    if (existingPlayer) {
      // Return an error response if the player already exists
      return NextResponse.json(
        { message: 'Player already exists', player: existingPlayer },
        { status: 409 }
      );
    }

    // If the player doesn't exist, create a new player
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
  const parsedPage = parseInt(page || '', 10) || 1;
  const take = parseInt(limit || '', 10) || 10;
  const skip = (parsedPage - 1) * take;
  
// make it reusable for all and paginated result
  try {
    let players;

    if (limit && page) {
      // If both limit and page are provided, use pagination
      players = await prisma.player.findMany({
        skip,
        take,
        orderBy: {
          updatedAt: 'desc',
        },
      });
    } else {
      // If either limit or page is missing, return all data
      players = await prisma.player.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
      });
    }

    return NextResponse.json({ players, skip, take }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
