const shortcode = require("../Shortcode");
const shortcodeInstance = shortcode.getInstance();

class Casino {


  constructor() {
    shortcodeInstance.register(this.Casinos)
  }


  async Casinos(args) {
    var query = {};
    var per_row = 1;
    Object.keys(args).forEach((key) => {
      if (key.includes("_")) {
        query[key] = {slug: {$in: args[key].split("_")}}
      } else if (key === "rowitems") {
        per_row = parseInt(args[key]);
      } else {
        query[key] = args[key]
      }
    })

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

    const data = await strapi.entityService.findMany("api::casino.casino",
      {
        populate,
        filters: query
      });

    const col = 12 / per_row;

    var output = `<div class="row">`

    data.forEach((item, i) => {
      if (i !== 0 && i % per_row === 0 && i !== data.length - 1) {
        output += `</div><div class="row">`
      }

      output += `<div class="col-${col}" onclick="Hey()">
                    <div class="card">
                      <img class="card-img-top" src="http://localhost:1337${item.thumbnail.url}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                 </div>`
    })
    output += `</div><script>function Hey(){alert("hey")}</script>`

    return output;
  }
}


module.exports = Casino
