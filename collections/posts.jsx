Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  text: {
    type: String,
  },
}));


Meteor.methods({
  'Posts.insert'(text) {
    if (typeof text !== 'string') {
      throw new Error;
    }
    Posts.insert({ text });
  },
});
