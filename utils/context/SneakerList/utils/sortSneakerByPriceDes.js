export default ({ price: priceA }, { price: priceB }) =>
  parseFloat(priceB) - parseFloat(priceA);
