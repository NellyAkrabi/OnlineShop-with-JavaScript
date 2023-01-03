

class Products {


    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, price}) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img scr="${img}" />
                    <span>${price}</span>
                    <button>Add to back</button>
                </li>
            `;
        });
        const html = `
            <ul>
                ${htmlCatalog}
            </ul>        
        `
    }
}

const productsPage = new Products();
productsPage.render()