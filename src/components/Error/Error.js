class Error {

    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>No access!</h3>
                    <p>Try to visit this page later.</p>
                </div>
            </div>
            

        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();

