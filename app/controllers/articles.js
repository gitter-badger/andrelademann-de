var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/articles', function (req, res, next) {
  Article.find()
    .limit(10)
    .sort({updated: -1})
    .exec(function (err, articles) {
      if (err) return next(err);
      res.render('articles', {
        title: 'Articles',
        articles: articles,
        pagination: {
          page: 1,
          pageCount: 10
        }
      });

    });
});

router.get('/article/:id', function (req, res, next) {
  console.log(req.params.id);
  Article.findOne({'_id': req.params.id})
    .exec(function (err, article) {
      if (err) return next(err);
      res.render('article', {
        article: article
      });

    });
});


router.post('/articles/add', function (req, res) {

  new Article({
    title: req.body.title,
    state: req.body.state,
    image: req.body.image,
    teaser: req.body.teaser,
    text: req.body.text
  }).save();

  res.redirect('/articles');
});