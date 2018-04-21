
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  createUser: () => {
    return {
      firstName: 'Chris',
      lastName: 'McAnally',
      username: 'cmcanally',
    }
  }

};

module.exports = functions;
