class TopBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="Hamburger Button">☰</button>
      </div>
      <div class="app-bar__brand">
        <img src="./logo.png" alt="RyFood's Logo" style="height: 37px; vertical-align: bottom;">
        <h1>RyFoods</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a target="_blank" href="https://github.com/ranggamyd" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('top-bar', TopBar);
