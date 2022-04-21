const {AfterCreate, BeforeUpdate, BeforeDelete} = require("../../../../utils/helpers");

module.exports = {
  async afterCreate(event) {
    await AfterCreate(event, "page")
  },
  async beforeUpdate(event) {
    await BeforeUpdate(event, "page")
  },

  async beforeDelete(event) {
    await BeforeDelete(event, "page")
  }
};
