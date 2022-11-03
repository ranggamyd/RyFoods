import './restaurant-review-list';
import { createLoaderTemplate } from '../templates/template-creator';
import ReviewFormInitiator from '../../utils/review-form-initiator';

class RestaurantReviews extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h3>Add Review</h3>
      <form class="reviewForm" enctype="application/json" method="post">
        <input type="text" name="name" placeholder="Your Name" required />
        <div class="inputReview">
            <input type="text" name="review" placeholder="Write something .." />
            <button type="submit">Send</button>
        </div>
      </form>
      <h3>Customer Reviews</h3>
      <review-list></review-list>
    `;

    const reviewList = document.querySelector('review-list');
    reviewList.innerHTML = createLoaderTemplate;

    if (this._reviews.length > 0) {
      reviewList.reviews = this._reviews;
    } else {
      reviewList.innerHTML = "Oops.. Review isn't available";
    }

    document.querySelector('.reviewForm').addEventListener('submit', (e) => {
      e.preventDefault();

      ReviewFormInitiator.init({
        inputName: document.querySelector('input[name="name"]'),
        inputReview: document.querySelector('input[name="review"]'),
      });
    });
  }
}

customElements.define('restaurant-reviews', RestaurantReviews);
