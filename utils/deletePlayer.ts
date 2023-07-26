import { BASE_URL } from '@/lib/constants';

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
