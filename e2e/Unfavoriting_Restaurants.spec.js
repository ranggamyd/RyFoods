const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom(
    '.restaurant-item__content h3',
  );

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('unfavoriting favorited restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item__content h3 a');
  I.waitForClickable('.restaurant-item__content h3 a', 10);
  I.click('.restaurant-item__content h3 a');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});
