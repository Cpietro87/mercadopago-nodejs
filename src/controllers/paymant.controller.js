import mercadopago from "mercadopago";

export const createOrder = async (req , res) => {

    mercadopago.configure({
        access_token: "TEST-2963955042825191-060711-b3c5ee22b05bcb22c50ada22c07b4c52-1393591194"
    });

   const result = await mercadopago.preferences.create({
        items:[
            {
                title: "Laptop Prueba",
                unit_price: 500,
                currency_id: "ARS",
                quantity: 1,
            }
        ]
    });

    console.log(result);

    res.send('creating order')
}