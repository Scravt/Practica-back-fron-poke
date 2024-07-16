import api from "./api";
import { RegionesResponse } from "../types/regions";
import { AxiosResponse, AxiosRequestConfig } from "axios";

export const getRequestRegions = async (endpoint: string, params?: Record<string, any>): Promise<AxiosResponse<RegionesResponse>> => {
    const config: AxiosRequestConfig = {
        params: params,
    };
    return api.get<RegionesResponse>(endpoint, config);
};