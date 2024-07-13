import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './api';
import { PokemonResponse } from '../types/pokemon';


export const getRequestPokemon = async (endpoint: string, params?: Record<string, any>): Promise<AxiosResponse<PokemonResponse>> => {
    const config: AxiosRequestConfig = {
        params: params,
    };
    return api.get<PokemonResponse>(endpoint, config);
};

export const postRequestPokemon = async <T, U>(endpoint: string, data: U): Promise<AxiosResponse<PokemonResponse>> => {
    return api.post<PokemonResponse>(endpoint, data);
};
