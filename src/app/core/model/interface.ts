export interface FileDetail{
    name: string ;
    size: string ;
    type: string ;
}

export interface PlantFullInfo {
    common_name: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    observations: string;
    image_url: string;
    genus: string;
    family: string;
    images: Images;
    common_names: string[];
    distribution: string[];
    sources: Source[];
    synonyms: Synonym[];
    edible: string[];
    medical: string[];
}

export interface PlantLimitedInfo{
    link: string[] ;
    common_name: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    observations: string;
    image_url: string;
    genus: string;
    family: string;
}

export interface Synonym {
    name: string;
    author: string;
}

export interface Source {
    name: string;
    url: string;
    citation?: string;
}

export interface Images {
    fruit: Fruit[];
    leaf: Fruit[];
    flower: Fruit[];
}

export interface Fruit {
    image_url: string;
    copyright: string;
}
