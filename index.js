function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];


// http://myjson.dit.upm.es/api/bins/aaeh // server
fetch('src/server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 800);
        
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });