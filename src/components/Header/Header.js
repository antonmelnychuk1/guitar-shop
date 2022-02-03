class Header {

    handleOpenCartPage() {
        cartPage.render();
    }
    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handleOpenCartPage();">🎸${count}</div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

