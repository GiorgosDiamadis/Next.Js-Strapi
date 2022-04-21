'use strict';

/**
 * banking-method service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::banking-method.banking-method');
