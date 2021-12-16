const fs = require('fs');
const path = require('path');

const productsDataPath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsDataPath, 'utf-8'));

const productsCtlr = {
    //*****INDICE DE PRODUCTOS*****\\
    index: (req, res) => {
        res.render('products', {
            products
        });
    },

    //*****DETALLE DE PRODUCTO*****\\

    detail: (req, res) => {
        let idProd = products.find(unProducto => {
            if (unProducto.id == idProd) {
                return unProducto;
            }
        });
    },

    //*****CREAR UN PRODUCTO*****\\
    create: (req, res) => {
        res.render('create');
    },

    store: (req, res) => {
        const { name, price, discount, category, description } = req.body;

        let cantidadProductos = 0;
        for (let i = 0; i < products.length; i++) {

            cantidadProductos = cantidadProductos + 1;
        }
        const data = {
            "id": cantidadProductos,
            "name": name,
            "price": price,
            "discount": discount,
            "category": category,
            "description": description,
        };
        products.push(data);

        fs.writeFileSync(productsDataPath, JSON.stringify(products), 'uft-8');

        res.send("Producto agregado con éxito!");

    },

    //*****EDITAR PRODUCTO*****\\

    edit: (req, res) => {
        let idProd = products.find(unProducto => {
            if (unProducto.id == idProd) {
                return unProducto;
            }
        });
        res.render('edit', { products })

    },

    update: (req, res) => {
        const { name, price, discount, category, description } = req.body;
        const idProd = req.params.id;
        const prodModificado = [];

        products.map(data => {
            if (data.id == idProd) {
                data.name = name,
                    data.price = price,
                    data.discount = discount,
                    data.category = category,
                    data.description = description
            }
            prodModificado.push(data);
        });

        fs.writeFileSync(productsDataPath, JSON.stringify(products), 'uft-8');
        res.send("Producto agregado con éxito!");
    },

    //*****DELETE PRODUCT*****\\

    destroy: (req, res) => {
        let idProd = req.params.id;
        const productoEliminado = [];

        products.map(data => {
            if (data.id != idProd) {
                productoEliminado.push(data);
            }
        })
        fs.writeFileSync(productsDataFile, JSON.stringify(productoEliminado), 'utf-8');
        res.send('Producto eliminado');
    }

};

module.exports = productsCtlr;