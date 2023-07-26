import { BASE_URL } from "@/lib/constants";

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