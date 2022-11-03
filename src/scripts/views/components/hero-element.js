/* eslint-disable import/no-unresolved */
import heroImage from '../../../public/heros/hero-image_4.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350';
import heroImageWebp from '../../../public/heros/hero-image_4.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350&format=webp';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture>
        ${this.createSourceElement(heroImage, 'jpeg')}
        ${this.createSourceElement(heroImageWebp, 'webp')}
        <img
          src="${heroImage.src}"        
          width="${heroImage.width}"
          height="${heroImage.height}"
          loading="lazy"
          alt="Gambar Hero"
        />
      </picture>
      <div class="hero_inner">
        <h1 class="hero_title">RyFoods</h1>
        <p class="hero_subtitle">Explore any Cozy Place and Instagramable Restaurants</p>
      </div>
      `;
  }

  createSourceElement({ images }, type) {
    let html = '';
    images.forEach(({ path, width }, index) => {
      html += `
          <source type="image/${type}"
            media=${
  index < images.length - 1
    ? `'(max-width: ${width}px)'`
    : `'(min-width: ${images[index - 1].width}px)'`
}
            srcset="${path}">
        `;
    });
    return html;
  }
}

customElements.define('hero-element', HeroElement);
