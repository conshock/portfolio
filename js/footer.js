class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class='footer'>
                <p class='footer-title'>Connect with me</p>
                <a href="#">My GitHub</a>        
                <a href="#">Bellevue</a>        
                <a href="#">Web-330 Youtube</a>        
                <a href="#">Web-330 Github</a>       
            </footer>`;
    }
}

customElements.define("footer-component", Footer);