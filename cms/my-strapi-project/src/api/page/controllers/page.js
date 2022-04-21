'use strict';
const {ControllerFind} = require("../../../utils/helpers");

/**
 *  page controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({strapi}) => ({

  async find(ctx) {

    return await ControllerFind(ctx, strapi, 'api::page.page')

  },
}));
