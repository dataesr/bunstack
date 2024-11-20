import { treaty } from '@elysiajs/eden';
import { ApiTypes } from '~/types';

const { api } = treaty<ApiTypes>(window.location.origin);

export default api;
