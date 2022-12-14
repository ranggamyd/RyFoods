import '../components/hero-element';
import '../components/restaurant-list';
import RestaurantDbSource from '../../data/restaurantdb-source';

export default {
  render() {
    return `
      <hero-element></hero-element>
      <div class="content" id="/content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <restaurant-list></restaurant-list>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.list();

    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;
  },
};
