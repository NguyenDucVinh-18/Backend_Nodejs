const Customer = require("../models/customer");

module.exports = {
  createCustomerService: async (customerData) => {
    try {
      let result = Customer.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        description: customerData.description,
        image: customerData.image,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  createArrayCustomerService: async (customers) => {
    try {
      let result = Customer.insertMany(customers);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAllCustomersService: async () => {
    try {
      let result = Customer.find({});
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  updateCustomerService: async (idCustomer,customerData) => {
    try {
      let result = Customer.updateOne(
        { _id: idCustomer },
        {
          name: customerData.name,
          address: customerData.address,
          phone: customerData.phone,
          email: customerData.email,
          description: customerData.description,
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  },
  deleteACustomerService: async (idCustomer) => {
    try {
      let result = Customer.deleteById({ _id: idCustomer });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
