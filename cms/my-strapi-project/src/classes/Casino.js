const shortcode = require("../Shortcode");
const shortcodeInstance = shortcode.getInstance();

class Casino {

  constructor() {
    shortcodeInstance.register(this.Casinos)
  }


  async Casinos(args) {
    var query = {};
    Object.keys(args).forEach((key) => {
      if (key.includes("_")) {
        query[key] = {slug: {$in: args[key].split("_")}}
      } else {
        query[key] = args[key]
      }
    })

    const data = await strapi.db.query("api::casino.casino").findMany(
      {
        populate: ["banking_methods"],
        where: query
      });


    var output = `<ul>`;
    data.forEach((casino) => {
      output += `<li>${casino.title}</li>`
    })
    output += `</ul>`;

    return output;
  }
}

module.exports = Casino
