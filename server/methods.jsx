
Meteor.methods({
  'translate'(posts, lang) {
    const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
    const params = {
      key: Meteor.settings.private.APIKEY,
      text: null,
      lang,
      format: 'plain',
    };

    return posts.map((post) => {
      params.text = post.text;
      const convertAsyncToSync = Meteor.wrapAsync(HTTP.get);
      const result = convertAsyncToSync(url, { params });
      console.log(result);
      return result;
    });
  },
});
