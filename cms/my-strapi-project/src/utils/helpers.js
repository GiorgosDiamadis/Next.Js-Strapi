const shortcodeMng = require("../Shortcode");
const shortcodeManager = shortcodeMng.getInstance();

module.exports.ControllerFind = async (ctx, strapi, model) => {
  const {slug} = ctx.query;
  var data;
  const populate = [
    "Seo",
    "thumbnail",
    "banking_methods",
    "providers_",
    "deposit_bonuses",
    "compatible_devices",
    "customer_supports",
    "games_"
  ]
  if (slug !== undefined) {
    data = await strapi.entityService.findMany(model, {
      filters: {slug},
      populate
    })
  } else {
    data = await strapi.entityService.findMany(model,
      {populate})
  }


  if (data[Symbol.iterator] === 'function') {
    for (const dataEntry of data) {

      dataEntry.Content = await CompileContent(dataEntry.Content)
    }

    return data;
  }

  data.Content = await CompileContent(data.Content)

  return data;
}
const CompileContent = async (content) => {
  if (!content)
    return content
  content = content.replace(/"\//g, '"http://localhost:1337/')
  content = await shortcodeManager.transform(content)
  return content;
}

module.exports.CompileContent = CompileContent;

module.exports.AfterCreate = async (event, model) => {
  const {result} = event;
  const url = model === 'page' ? `/${result.slug}` : `/${model}/${result.slug}`;


  await strapi.entityService.create("api::menu-item.menu-item", {
    data: {
      Label: result.title,
      Url: url,
      State: "Published"
    }
  })
}
module.exports.BeforeUpdate = async (event, model) => {
  const {params} = event;

  let existing = await strapi.entityService.findOne(`api::${model}.${model}`, params.where.id, {
    fields: ["slug"]
  })
  let url = model === 'page' ? `/${existing.slug}` : `/${model}/${existing.slug}`;

  console.log(url)

  const menuItem = await strapi.entityService.findMany("api::menu-item.menu-item", {
    fields: ["id"],
    filters: {Url: url}
  })

  if (params.data.slug !== undefined) {
    url = model === 'page' ? `/${params.data.slug}` : `/${model}/${params.data.slug}`;
    await strapi.entityService.update("api::menu-item.menu-item", menuItem[0].id, {
      data: {
        Label: params.data.title,
        Url: url,
        State: "Published"
      }
    })
  }

}

module.exports.BeforeDelete = async (event, model) => {
  const deleted = event.params.where.id;
  let existing = await strapi.entityService.findMany(`api::${model}.${model}`, {
    fields: ["slug"],
    filters: {id: deleted}

  })
  let url = model === 'page' ? `/${existing[0].slug}` : `/${model}/${existing[0].slug}`;

  const menuItem = await strapi.entityService.findMany("api::menu-item.menu-item", {
    fields: ["id"],
    filters: {Url: url}
  })
  if (menuItem[0] !== undefined)
    await strapi.entityService.delete("api::menu-item.menu-item", menuItem[0].id, {})
}
