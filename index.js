function render() {

  productsPage.render()

  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);

};


let CATALOG = [];


// API ->   fetch ('https://api.npoint.io/93ce953c6ce93c5214c7')
fetch ('server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;
    render();
})
.catch (error =>{
    console.log('error');
})
