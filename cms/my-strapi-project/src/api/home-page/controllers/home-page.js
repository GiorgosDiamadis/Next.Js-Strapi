'use strict';

const {ControllerFind} = require("../../../utils/helpers");
/**
 *  home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-page.home-page', ({strapi}) => ({

  async find(ctx) {

    return await ControllerFind(ctx,strapi,'api::home-page.home-page')
  },
}));
