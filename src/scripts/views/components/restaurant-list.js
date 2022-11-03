import './restaurant-item';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantList extends HTMLElement {
  /**
   * @param {any} restaurants
   */
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  connectedCallback() {
    this.renderSkeleton();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }

  renderSkeleton() {
    const LENGTH = 6;
    for (let i = 0; i < LENGTH; i++) {
      const element = document.createElement('restaurant-item');
      element.generateCard();
      this.appendChild(element);
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
