class PrivateSingleton {

  constructor() {
    this.shortcodes = {};
  }


  register(fn) {
    this.shortcodes[fn.name.toLowerCase()] = fn;
  }

  async transform(content){
    const regExp = /\[(.*?)\]/g;
    var shortcodes = [...content.matchAll(regExp)].map((match) => {
      var shortcodeExp = match[1].split(" ");
      var args = {};
      [...shortcodeExp].slice(1).forEach((arg) => {
        const params = arg.split("=");
        args[params[0]] = [...params[1]].slice(1, params[1].length - 1).join("");
      })
      return {
        shortcode: shortcodeExp[0],
        args,
        start: match.index,
        end: match.index + match[1].length + 1
      }
    });
    for (let i = shortcodes.length - 1; i >= 0; i--) {
      const res = await this.exec(shortcodes[i].shortcode, shortcodes[i].args)
      content = content.substr(0, shortcodes[i].start)
        + res
        + content.substr(shortcodes[i].end + 1)
    }


    return content;
  }

  async exec(name,args){
    return await this.shortcodes[name](args)
  }
}

class Shortcode {
  constructor() {
  }

  static getInstance() {
    if (!Shortcode.instance) {
      Shortcode.instance = new PrivateSingleton();
    }
    return Shortcode.instance;
  }
}

module.exports = Shortcode;
