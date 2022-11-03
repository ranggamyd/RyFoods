import CONFIG from '../../globals/config';
import './restaurant-reviews';

class RestaurantDetail extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { pictureId } = this._restaurant;
    const pictureUrl = CONFIG.BASE_IMAGE_URL('medium') + pictureId;
    const { name } = this._restaurant;
    const { rating } = this._restaurant;
    const { categories } = this._restaurant;
    const { city } = this._restaurant;
    const { address } = this._restaurant;
    const { description } = this._restaurant;
    const { foods } = this._restaurant.menus;
    const { drinks } = this._restaurant.menus;

    this.innerHTML = `
      <img class="restaurant__poster" src="${pictureUrl}" alt="${name}" />
      <h2 class="restaurant__name">${name}</h2>
      <div class="restaurant__info-1">
        <h4>Rating</h4>
        <p>⭐️ ${rating}</p>
        <h4>Categories</h4>
        <ul class="categories">
          ${categories
    .map((category) => `<li>${category.name}</li>`)
    .join(', ')}
        </ul>
      </div>
      <div class="restaurant__info-2">
        <h4>City</h4>
        <p>${city}</p>
        <h4>Address</h4>
        <p>${address}</p>
      </div>
      <div class="restaurant__description">
        <h3>Description</h3>
        <p>${description}</p>
      </div>
      <h3 class="restaurant__menus-title">Restaurant's Menus</h3>
      <div class="restaurant__food-menus">
        <h3>Foods</h3>
        <ul class="foods">
          ${foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="restaurant__drink-menus">
        <h3>Drinks</h3>
        <ul class="drinks">
          ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
      <restaurant-reviews></restaurant-reviews>
    `;

    const reviews = this._restaurant.customerReviews;
    const restaurantReviews = document.querySelector('restaurant-reviews');
    restaurantReviews.reviews = reviews;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
