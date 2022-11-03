const assert = require('assert');

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});

Scenario('favoriting one restaurant', async ({ I }) => {
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
