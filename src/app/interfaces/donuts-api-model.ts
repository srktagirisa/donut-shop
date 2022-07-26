export interface Donuts {
    results: Result[];
    }
    
export interface Result {
    id:   number | 0;
    ref:  string;
    name: string | null;
}

export interface DonutDetails {
    id:                number;
    ref:               string;
    name:              string;
    calories:          number;
    extras:            string[];
    photo:             string;
    photo_attribution: string;
    price: 1;
}


