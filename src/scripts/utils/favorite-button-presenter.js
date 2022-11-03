import {
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
  createAlertTemplate,
} from '../views/templates/template-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const response = await this._favoriteRestaurants.putRestaurant(
        this._restaurant,
      );
      if (response) {
        createAlertTemplate.alert(
          'success',
          'Success!',
          'Restaurant added to favorite!',
        );
      } else {
        createAlertTemplate.alert(
          'error',
          'Error!',
          'failed to add restaurant!',
        );
      }
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const response = await this._favoriteRestaurants.deleteRestaurant(
        this._restaurant.id,
      );
      if (!response) {
        createAlertTemplate.alert(
          'success',
          'Success!',
          'Restaurant removed from favorite!',
        );
      } else {
        createAlertTemplate.alert(
          'error',
          'Error!',
          'failed to remove restaurant!',
        );
      }
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
