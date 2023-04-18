import { Menue } from '@prisma/client'
import { Collection } from 'typescript';
export interface IData {
    title: string;
    sub: ISub[]
}
export interface ISub {
    title: string;
    stalls: string;
    days: string;
}

export const itemsData: IData[] = [
    {
        title: "Garma Garam",
        sub: [
            {
                title: "Alootkki",
                days: "",
                stalls: ""
            },
            {
                title: "Chilla",
                days: "",
                stalls: ""
            },
            {
                title: "Green Samosa",
                days: "",
                stalls: ""
            },
            {
                title: "Red Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Red Chhat",
                days: "",
                stalls: ""
            },
            {
                title: "Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Pink Bol",
                days: "",
                stalls: ""
            },
        ]
    },
    {
        title: "Cold Collection",
        sub: [
            {
                title: "Gol Gappe",
                days: "",
                stalls: ""
            },
            {
                title: "Raju Kachori",
                days: "",
                stalls: ""
            },
            {
                title: "Bada",
                days: "",
                stalls: ""
            },
            {
                title: "Puri",
                days: "",
                stalls: ""
            },
            {
                title: "Chadap",
                days: "",
                stalls: ""
            },
            {
                title: "Best Tasty",
                days: "",
                stalls: ""
            },
            {
                title: "Pink Bol",
                days: "",
                stalls: ""
            },
        ]
    },
    {
        title: "Garma Garam",
        sub: [
            {
                title: "Alootkki",
                days: "",
                stalls: ""
            },
            {
                title: "Chilla",
                days: "",
                stalls: ""
            },
            {
                title: "Green Samosa",
                days: "",
                stalls: ""
            },
            {
                title: "Red Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Red Chhat",
                days: "",
                stalls: ""
            },
            {
                title: "Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Pink Bol",
                days: "",
                stalls: ""
            },
        ]
    },
    {
        title: "Deserts",
        sub: [
            {
                title: "Rasgulla",
                days: "",
                stalls: ""
            },
            {
                title: "Sponge",
                days: "",
                stalls: ""
            },
            {
                title: "Kulfi",
                days: "",
                stalls: ""
            },
            {
                title: "Rasmalai",
                days: "",
                stalls: ""
            }
        ]
    },
    {
        title: "Combos",
        sub: [
            {
                title: "Pao Bhaji",
                days: "",
                stalls: ""
            },
            {
                title: "Xyz",
                days: "",
                stalls: ""
            },
            {
                title: "Abcd",
                days: "",
                stalls: ""
            },
            {
                title: "Wxyz",
                days: "",
                stalls: ""
            },
            {
                title: "Daal Roti",
                days: "",
                stalls: ""
            },
        ]
    },
    {
        title: "South Special",
        sub: [
            {
                title: "Idli",
                days: "",
                stalls: ""
            },
            {
                title: "Sambhar",
                days: "",
                stalls: ""
            },
            {
                title: "uppma",
                days: "",
                stalls: ""
            },
            {
                title: "Sweet",
                days: "",
                stalls: ""
            }
        ]
    },
]


export const functionsConstants = {
    breakfast: "Breakfast",
    dinner: "Dinner",
    hightea: "Hightea",
    lunch: "Lunch"
} as {
        [key in Menue["function"]]: Menue["function"]
    }