import '../components/restaurant-detail';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createLoaderTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

export default {
  render() {
    return `
      <restaurant-detail></restaurant-detail>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const restaurantDetail = document.querySelector('restaurant-detail');
    restaurantDetail.innerHTML = createLoaderTemplate;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

    if (!restaurant) {
      restaurantDetail.innerHTML = "Oops.. Restaurant isn't available";
    } else {
      restaurantDetail.restaurant = restaurant;

      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector(
          '#favoriteButtonContainer',
        ),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          address: restaurant.address,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          categories: restaurant.categories,
          menus: restaurant.menus,
          customerReviews: restaurant.customerReviews,
        },
      });
    }

    const skipToContent = document.querySelector('.skip-to-content');
    const content = document.querySelector('.restaurant__name');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      content.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  },
};
