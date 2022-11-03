class ReviewItem extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const { name } = this._review;
    const { review } = this._review;
    const { date } = this._review;

    this.innerHTML = `
      <h4><b>${name}</b></h4> 
      <p>${review}</p> 
      <small>${date}</small> 
    `;
  }
}

customElements.define('review-item', ReviewItem);
