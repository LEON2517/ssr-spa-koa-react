const fixtures = require('./fixtures');


exports.get = async function(ctx) {
    let articles = await fixtures.articles.map(function(article) {
        return article
    });
    ctx.body = articles;
};
