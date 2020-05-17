export default ({ price: priceA }, { price: priceB }) =>
  parseFloat(priceA) - parseFloat(priceB);
