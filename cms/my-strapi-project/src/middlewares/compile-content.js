'use strict';
const {CompileContent} = require("../utils/helpers")

/**
 * `compile-content` middleware.
 */

module.exports = (config, {strapi}) => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.url.includes("content-manager"))
      return;

    if (ctx.response.body[Symbol.iterator] === 'function') {
      for (const dataEntry of ctx.response.body) {

        dataEntry.Content = await CompileContent(dataEntry.Content)
      }
    }

    ctx.response.body.Content = await CompileContent(ctx.response.body.Content)
  };
};
