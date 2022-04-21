const {AfterCreate, BeforeUpdate, BeforeDelete} = require("../../../../utils/helpers");

module.exports = {
  async afterCreate(event) {
    await AfterCreate(event, "casino")
  },
  async beforeUpdate(event) {
    await BeforeUpdate(event, "casino")
  },

  async beforeDelete(event) {
    await BeforeDelete(event, "casino")
  }
};
