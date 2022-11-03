import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { name } = this._restaurant;
    const { pictureId } = this._restaurant;
    const pictureUrl = CONFIG.BASE_IMAGE_URL('small') + pictureId;
    const { rating } = this._restaurant;
    const { id } = this._restaurant;
    const { description } = this._restaurant;

    this.innerHTML = `
      <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" data-src="${pictureUrl}" alt="Gambar ${name}">
        <div class="restaurant-item__header__rating">
          <p>⭐️<span class="restaurant-item__header__rating__score">${rating}</span></p>
        </div>
      </div>
      <div class="restaurant-item__content">
          <h3><a href="/#/detail/${id}">${name}</a></h3>
          <p>${description}</p>
      </div>
    `;
  }

  generateCard() {
    this.innerHTML = `
      <div class="restaurant-item__headerSkeleton"></div>
      <div class="restaurant-item__contentSkeleton"></div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
