import { BASE_URL } from '@/lib/constants';
import toast from 'react-hot-toast';

export const deletePlayer = async (id: string) => {
  toast.loading('Deleting Request ', { id: '2' });
  try {
    const res = await fetch(`${BASE_URL}/api/players/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete player.');
    }

    toast.success(`Player  Deleted Successfully'`, { id: '2' });
  } catch (error: any) {
    toast.error(` ${error.message} `, { id: '2' });
  } finally {
    window.location.assign('/');
  }
};
