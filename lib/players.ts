import { BASE_URL } from '@/lib/constants';
import { PlayerType } from './playerSchema';
import prisma from './prisma';

export const getPlayers = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const res = await fetch(
    `${BASE_URL}/api/players?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const postPlayer = async (data: PlayerType) => {
  try {
    const res = await fetch(`${BASE_URL}/api/players`, {
      method: 'POST',
      body: JSON.stringify(data),
      //@ts-ignore
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 409) {
      throw new Error('Player already exists');
    }

    if (!res.ok) {
      throw new Error('Failed to post blog. Status: ' + res.status);
    }

    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};