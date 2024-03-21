//Creamos el tipado para las llaves de nuestra base de datos de los productos de guitarra
export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}
//Creamos un extends del type de arriba para agregarle una llave nueva llamada cantidad y tiparla como number
export type CartItem = Guitar & {
    quantity: number
}
