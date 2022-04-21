'use strict';

const {ControllerFind} = require("../../../utils/helpers");
/**
 *  slot controller
 */

const {createCoreController} = require('@strapi/strapi').factories;


module.exports = createCoreController('api::slot.slot', ({strapi}) => ({

  async find(ctx) {

    return await ControllerFind(ctx, strapi, 'api::slot.slot')
  },
}));
