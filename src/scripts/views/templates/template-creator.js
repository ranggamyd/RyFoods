import Swal from 'sweetalert2';

const createSkipContentTemplate = '<a href="#content" class="skip-to-content" tabindex="1">Skip to Content?</a>';
const createLoaderTemplate = '<div class="loader">Loading...</div>';

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Add to Favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Remove from Favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createAlertTemplate = {
  alert(type, title, msg) {
    return Swal.fire({
      icon: type,
      title,
      text: msg,
      showConfirmButton: false,
      timer: 1000,
    });
  },

  confirm(msg) {
    return Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: msg,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm!',
    });
  },
};

export {
  createSkipContentTemplate,
  createLoaderTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
  createAlertTemplate,
};
