const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.article.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  async addViews(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.article.getSanitizedEntity(id);

    if (entity == null) {
      return strapi.services.article.articleNotFound(ctx);
    }

    await strapi.services.article.incrementArticleViews(entity);

    return strapi.services.article.viewsUpdateSuccess(ctx);
  },

  async addHits(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.article.getSanitizedEntity(id);

    if (entity == null) {
      return strapi.services.article.articleNotFound(ctx);
    }

    await strapi.services.article.incrementArticleHits(entity);

    return strapi.services.article.hitsUpdateSuccess(ctx);
  },
};
