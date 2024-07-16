import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "./api";
import  {ObjetResponse}  from "../types/objet";

export const getRequestObjet = async (endpoint: string, params?: Record<string, any>): Promise<AxiosResponse<ObjetResponse>> => {
    const config: AxiosRequestConfig = {
        params: params,
    };
    return api.get<ObjetResponse>(endpoint, config);
};