import { BASE_URL } from '@/lib/constants';
import { PlayerType } from '@/lib/playerSchema';
import toast from 'react-hot-toast';

export const postPlayer = async (data: PlayerType) => {
  toast.loading('Sending Request ', { id: '1' });
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

    toast.success('Player Posted Successfully', { id: '1' });

    return await res.json();
  } catch (error: any) {
    toast.error(` ${error.message} `, { id: '1' });
  } finally {
    window.location.assign('/');
  }
};
