const {AfterCreate, BeforeUpdate, BeforeDelete} = require("../../../../utils/helpers");

module.exports = {
  async afterCreate(event) {
    await AfterCreate(event, "article")
  },
  async beforeUpdate(event) {
    await BeforeUpdate(event, "article")
  },

  async beforeDelete(event) {
    await BeforeDelete(event, "article")
  }
};
