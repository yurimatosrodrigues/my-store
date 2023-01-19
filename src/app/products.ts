export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'IPhone X',
        price: 799,
        description: 'A large phone with one of the best screens'
    }, 
    {
        id: 2,
        name: 'Moto Edge 20 Lite',
        price: 499,
        description: 'A great phone with one of the best cameras'
    }, 
    {
        id: 3,
        name: 'Samsung Galaxy 9',
        price: 649,
        description: ''
    }, 

]