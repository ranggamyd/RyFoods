import './restaurant-review-item';

class ReviewList extends HTMLElement {
  /**
   * @param {any} reviews
   */
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this._reviews.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
      this.appendChild(reviewItem);
    });

    const loader = document.querySelector('.loader');
    if (loader) loader.remove();
  }
}

customElements.define('review-list', ReviewList);
