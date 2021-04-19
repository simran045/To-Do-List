/* Name -Kumari Simran
  Registration No- 2019CA15 */

var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
