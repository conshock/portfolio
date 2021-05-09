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
            <a href="./about.html">About</a>
            <a href="./resume.html">Resume</a>
            <a href="./project.html">Projects</a>
            <a href="./index.html">Home</a>
        </nav>
        `;
    }
}

customElements.define("nav-component", Nav);