'use strict';

const {ControllerFind} = require("../../../utils/helpers");
/**
 *  casino controller
 */

const {createCoreController} = require('@strapi/strapi').factories;
module.exports = createCoreController('api::casino.casino');
