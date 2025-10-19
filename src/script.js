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

  // Add archive notice banner before hits
  const hitsContainer = document.getElementById('hits');
  if (hitsContainer) {
    const banner = document.createElement('div');
    banner.id = 'archiveNotice';
    banner.setAttribute('role', 'alert');
    banner.innerHTML =
      '<strong>Archive Notice:</strong> This project has been archived. The underlying Reddit API is no longer available, so data updates have been discontinued. The data displayed is frozen as of January 19, 2023.';
    hitsContainer.parentNode.insertBefore(banner, hitsContainer);
  }
})();
