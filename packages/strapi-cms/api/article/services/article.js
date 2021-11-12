"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async getSanitizedEntity(id) {
    const entity = await strapi.services.article.findOne({ id });

    if (entity == null) {
      return null;
    }

    return sanitizeEntity(entity, {
      model: strapi.models.article,
    });
  },

  async incrementArticleViews(article) {
    const newView = article.views == null ? 1 : parseInt(article.views) + 1;

    const updatedEntity = await strapi.query("article").update(
      { id: article.id },
      {
        views: newView,
      }
    );

    return updatedEntity;
  },

  async incrementArticleHits(article) {
    const newHits = article.hits == null ? 1 : parseInt(article.hits) + 1;

    const updatedEntity = await strapi.query("article").update(
      { id: article.id },
      {
        hits: newHits,
      }
    );

    return updatedEntity;
  },

  articleNotFound(ctx) {
    ctx.response.status = 404;
    ctx.response.message = "Article not found";
    return ctx.response;
  },

  viewsUpdateSuccess(ctx) {
    ctx.response.status = 200;
    ctx.response.message = "View updated successfully";
    return ctx.response;
  },

  hitsUpdateSuccess(ctx) {
    ctx.response.status = 200;
    ctx.response.message = "Hits updated successfully";
    return ctx.response;
  },
};
