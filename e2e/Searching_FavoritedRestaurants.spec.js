const assert = require('assert');

Feature('Searching Favorited Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('#query');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-item__content h3 a').at(i));
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    names.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter(
    (name) => name.indexOf(searchQuery) !== -1,
  );

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements(
    'restaurant-item',
  );
  assert.strictEqual(matchingRestaurants.length, visibleFavoritedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(
      locate('.restaurant-item__content h3').at(index + 1),
    );
    assert.strictEqual(name, visibleName);
  });
});
