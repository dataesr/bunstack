import api from '@/api-client';
import { useQuery } from '@tanstack/react-query';

export default function useServerHealth() {
  return useQuery({
    queryKey: ['healthy'],
    queryFn: async () => {
      const { data } = await api.healthy.get();
      return data;
    },
  });
}
