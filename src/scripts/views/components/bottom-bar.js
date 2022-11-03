class BottomBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<p>Copyright © 2022 - RyFoods</p>';
  }
}

customElements.define('bottom-bar', BottomBar);
