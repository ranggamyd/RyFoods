import '../../components/restaurant-list';
import '../../components/restaurant-item';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content" id="/content">
        <h2 class="content__heading">Your Favorited Restaurant</h2>
        <input type="text" id="query" placeholder="Type your favorited restaurant ..">
        <restaurant-list></restaurant-list>
      </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('keyup', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;

    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    const restaurantList = document.querySelector('restaurant-list');

    restaurantList.innerHTML = '';

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;

        restaurantList.appendChild(restaurantItem);
      });
    } else {
      restaurantList.innerHTML = this._getEmptyRestaurantTemplate();
    }

    document
      .querySelector('restaurant-list')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
