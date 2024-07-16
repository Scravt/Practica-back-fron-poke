export interface Region {
    region_id:   number;
    name:        string;
    description: string;
}

export interface RegionesResponse {
    regions: Region[];
}