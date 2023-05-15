class ProductManager {
    
    constructor(){
     this.products = []; 
     this.newID = 1  
  }

    addProduct(title,description,price,thumbnail,code,stock){

        const productoExistente = this.products.find((producto) => producto.code === code);

        if (productoExistente) {
            console.log(`El producto ${title} tiene un error, el código ${code} es igual al de otro producto existente ${productoExistente}`);
            return
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios en el producto ${title}  que está tratando de ingresar`);
        }
        else{
            const producto = {
            id: this.newID++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,   
        };
        this.products.push(producto); {
            console.log(`El producto ${producto.title} se agregó correctamente`);
        }
    }

    }
    getProducts() {
        return this.products;
    }
    getProductsById(id) {
        const productId = this.products.find((producto) => producto.id === id);
        {
            if (!productId) {
                console.log(`"ERROR" el id N° "${id}" del producto no existe`);
            }
            else {
                console.log((`El producto con el id "${id}" fue encontrado`));
                return productId;
            }
        }
    }
}

const producto = new ProductManager();
producto.addProduct(`producto prueba1`, `Este es un producto prueba`, 200, `Sin imagén`, `abc123`, 25);
producto.addProduct(`producto prueba2`, `Este es un producto prueba`, 200, `Sin imagén`, `abc124`, 25);
producto.addProduct(`producto prueba3`, `Este es un producto prueba`, 200, `Sin imagén`, `abc125`, 25);
console.log(producto.getProducts())

producto.getProductsById(4);
