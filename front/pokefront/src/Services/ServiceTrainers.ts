import { TrainerResponse } from "../types/trainers";
import api from "./api";
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const getRequestTrainers = async (endpoint: string, params?: Record<string, any>): Promise<AxiosResponse<TrainerResponse>> => {
    const config: AxiosRequestConfig = {
        params: params,
    };
    return api.get<TrainerResponse>(endpoint, config);
};