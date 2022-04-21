'use strict';

const {ControllerFind} = require("../../../utils/helpers");
/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({

  async find(ctx) {
    return await ControllerFind(ctx,strapi,'api::article.article')
  },
}));
