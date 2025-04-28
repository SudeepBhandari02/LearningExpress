const {createProduct,getProducts,updateProduct,deleteProduct} = require('./controllers/crudController');

const main = async () =>{
    await createProduct({ name: 'Tablet', price: 300 });

    let products = await getProducts();
    console.log('Products:', products);

    await updateProduct({ name: 'Tablet' }, { price: 350 });

     products = await getProducts();
    console.log('Products:', products);

    await deleteProduct({ name: 'Tablet' });

     products = await getProducts();
    console.log('Products:', products);
}

main();