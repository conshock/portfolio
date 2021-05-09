class Nav extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navBar">
            <div class ="initialsIcon">
                <p>CS</p>
            </div>
            <a href="#">About</a>
            <a href="#">Resume</a>
            <a href="#">Projects</a>
            <a href="#">Home</a>
        </nav>
        `;
    }
}

customElements.define("nav-component", Nav);