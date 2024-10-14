import api from '@/api-client';
import { useQuery } from '@tanstack/react-query';

export default function usePingPong() {
  return useQuery({
    queryKey: ['ping'],
    queryFn: async () => {
      const { data } = await api.ping.get();
      return data;
    }
  })
}
