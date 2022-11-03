import UrlParser from '../routes/url-parser';
import RestaurantDbSource from '../data/restaurantdb-source';
import { createAlertTemplate } from '../views/templates/template-creator';
import '../views/components/restaurant-review-list';

const ReviewFormInitiator = {
  init({ inputName, inputReview }) {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;

    const customerReview = {
      id,
      name: inputName.value,
      review: inputReview.value,
    };

    createAlertTemplate.confirm('Your review will be sent!').then((result) => {
      if (result.isConfirmed) this._review(customerReview);
    });
  },

  async _review(customerReview) {
    const response = await RestaurantDbSource.addReview(customerReview);
    if (response.error) {
      createAlertTemplate.alert('error', 'Error!', 'failed to add review!');
    } else {
      createAlertTemplate.alert(
        'success',
        'Success!',
        'Your review has been added successfully!',
      );

      const reviewList = document.querySelector('review-list');
      reviewList.innerHTML = '';
      reviewList.reviews = response;
    }
  },
};

export default ReviewFormInitiator;
