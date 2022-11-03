const assert = require('assert');

Feature('Review Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('restaurant-list');
  I.seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(firstRestaurant);

  I.seeElement('restaurant-reviews');
});

Scenario('review a restaurant', async ({ I }) => {
  const name = locate('input[name="name"]');
  const review = locate('input[name="review"]');
  const nameVal = 'Lorem';
  const reviewVal = `Great Resto - ${Date.now()}`;

  I.seeElement(name);
  I.seeElement(review);

  I.fillField(name, nameVal);
  I.fillField(review, reviewVal);
  I.click('button[type="submit"]');

  I.waitForElement('.swal2-popup', 5);
  I.seeElement('.swal2-popup');
  I.click('.swal2-confirm');
  I.waitToHide('.swal2-popup', 5);

  const submittedName = await I.grabTextFrom(locate('review-item h4').last());
  const submittedReview = await I.grabTextFrom(locate('review-item p').last());

  assert.strictEqual(submittedName, nameVal);
  assert.strictEqual(submittedReview, reviewVal);
});

Scenario('cancelling review', async ({ I }) => {
  const name = locate('input[name="name"]');
  const review = locate('input[name="review"]');
  const nameVal = `Lorem - ${Date.now()}`;
  const reviewVal = `Great Resto - ${Date.now()}`;

  I.seeElement(name);
  I.seeElement(review);

  I.fillField(name, nameVal);
  I.fillField(review, reviewVal);
  I.click('button[type="submit"]');

  I.waitForElement('.swal2-popup', 5);
  I.seeElement('.swal2-popup');
  I.click('.swal2-cancel');
  I.waitToHide('.swal2-popup', 5);

  const submittedName = await I.grabTextFrom(locate('review-item h4').last());
  const submittedReview = await I.grabTextFrom(locate('review-item p').last());

  assert.notStrictEqual(submittedName, nameVal);
  assert.notStrictEqual(submittedReview, reviewVal);
});
