import { BASE_URL } from '@/lib/constants';
import { PlayerType } from '@/lib/playerSchema';

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
