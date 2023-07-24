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

export const getPlayerById = async (playerId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/players/${playerId}`, {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to get player by ID');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePlayer = async ({
  data,
  id,
}: {
  data: PlayerType;
  id: string;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/api/players/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to update post.');
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const deletePlayer = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/players/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete player.');
    }
    return;
    // return res.json();
  } catch (error) {
    throw error;
  }
};
