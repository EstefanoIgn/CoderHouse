class ProductManager{
    constructor(){
        this.products = [ ]
        this.nuevoId = 1
    }

    //METODOS
    addProduct(titulo,descripcion,precio,rutaImagen,codigo,stock){
        const productoExiste = this.products.find((producto) => producto.code === code);
        if (productoExiste){
            console.log(`El producto ${titulo} tiene un error, el codigo ${codigo} es el mismo que otro producto existente ${productoExiste.titulo}`)
            return
        
        }

        if (!titulo || !descripcion || !precio || !rutaImagen || !codigo || !stock){
            console.log(`Todos los campos son obligatorios con el producto ${titulo} que estas intentando ingresar`)

        }else{
            const producto = {
                id : this.nuevoId++,
                titulo,
                descripcion,
                precio,
                rutaImagen,
                codigo,
                stock
            }
        
        this.products.push(producto);{
            console.log(`El producto ${producto.titulo} fue agregado correctamente`)
        }
    }

    }

    getProduct(){
        return this.products
    }

    getProductById(id){
        const productoId = this.products.find((producto) => producto.id === id);{
            if (!productoId){
                console.log(`Not Found el Id n° ${id} del producto no existe`)
            }else{
                console.log(`El producto con el id ${id} ingresado fue encontrado..`)
                return productoId
            }
        }
    }

}


let yerba = new ProductManager()
yerba.addProduct("Yerba","Yerba Mate",300,"C/Productos",3322,"Si")
console.log(yerba.getProduct())
yerba.getProductById(5)



