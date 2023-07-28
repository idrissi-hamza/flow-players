import { BASE_URL } from '@/lib/constants';
import { PlayerType } from '@/lib/playerSchema';
import toast from 'react-hot-toast';

export const updatePlayer = async ({
  data,
  id,
}: {
  data: PlayerType;
  id: string;
}) => {
  toast.loading('Sending Request ', { id: '1' });
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
    toast.success('Player Updated Successfully', { id: '1' });
    return res.json();
  } catch (error: any) {
    toast.error(` ${error.message} `, { id: '1' });
  } finally {
    window.location.assign('/');
  }
};
