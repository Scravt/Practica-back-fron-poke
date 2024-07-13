import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './api';
import { GymResponse } from '../types/gym';

export const getRequestGym = async (endpoint: string, params?: Record<string, any>): Promise<AxiosResponse<GymResponse>> => {
    const config: AxiosRequestConfig = {
        params: params,
    };
    return api.get<GymResponse>(endpoint, config);
};