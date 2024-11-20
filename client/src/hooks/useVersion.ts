import api from '@/api-client';
import { useQuery } from '@tanstack/react-query';

export default function useVersion() {
  return useQuery({
    queryKey: ['version'],
    queryFn: async () => {
      const { data } = await api.version.get();
      return data;
    },
  });
}
