import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './favorited-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './favorited-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

export default {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });

    const skipToContent = document.querySelector('.skip-to-content');
    const content = document.querySelector('.content');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      content.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  },
};
