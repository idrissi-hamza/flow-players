import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const player = await prisma.player.findUnique({
    where: {
      id,
    },
  });

  if (!player) {
    return new NextResponse('No player with ID found', { status: 404 });
  }

  return NextResponse.json(player);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  let json = await request.json();

  // Check if a player with the same firstname and lastname already exists
  const existingPlayer = await prisma.player.findFirst({
    where: {
      firstname: json.firstname,
      lastname: json.lastname,
      NOT: {
        id: id,
      },
    },
  });

  if (existingPlayer) {
    // Return an error response if the player already exists
    return new NextResponse(
      'Player with the same firstname and lastname already exists',
      { status: 409 }
    );
  }

  const updated_player = await prisma.player.update({
    where: { id },
    data: json,
  });

  if (!updated_player) {
    return new NextResponse('No player with ID found', { status: 404 });
  }
  revalidatePath('/');

  return NextResponse.json(updated_player);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const playerToDelete = await prisma.player.findUnique({ where: { id } });

    if (!playerToDelete) {
      return new NextResponse('No player with ID found', { status: 404 });
    }

    const deletedPlayerName = `${playerToDelete.firstname} ${playerToDelete.lastname}`;
    await prisma.player.delete({
      where: { id },
    });

    return new NextResponse(
      `Player ${deletedPlayerName} has been deleted successfully`,
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
