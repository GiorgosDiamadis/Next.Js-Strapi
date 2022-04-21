const {AfterCreate, BeforeUpdate, BeforeDelete} = require("../../../../utils/helpers");

module.exports = {
  async afterCreate(event) {
    await AfterCreate(event, "slot")
  },
  async beforeUpdate(event) {
    await BeforeUpdate(event, "slot")
  },

  async beforeDelete(event) {
    await BeforeDelete(event, "slot")
  }
};
