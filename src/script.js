const theme = require('norska/theme');
const lazyloadHelper = require('norska/frontend/algolia/lazyload');

(async () => {
  await theme.init({
    hitName: 'picture',
    placeholder: 'Search for any place, landscape or country',
    transforms: {
      img(item) {
        const originUrl = item.picture.url;
        const options = {
          imoen: item.picture,
          uuid: item.objectID,
          cacheBusting: false,
        };
        const img = lazyloadHelper.attributes(originUrl, options);

        return img;
      },
    },
  });
})();
