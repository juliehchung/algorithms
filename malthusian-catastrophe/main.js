function malthusian(foodGrowth, popMult) {
  let year = 0;
  let foodProd = 100;
  let pop = 100;
  while (foodProd <= pop) {
    foodProd += foodGrowth;
    pop *= popMult;
    year++;
  }
  return year;
}
