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
  getAllCustomersService: async (limit, page) => {
    let result = null;
    try {
      if (limit && page) {
        let offset = (page - 1) * limit;
        result = await Customer.find({}).skip(offset).limit(limit).exec();
      } else {
        result = Customer.find({});
      }
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  updateCustomerService: async (idCustomer, customerData) => {
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
  },
  deleteArrayCustomerService: async (ids) => {
    try {
      let result = Customer.delete({ _id: { $in: ids } });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
