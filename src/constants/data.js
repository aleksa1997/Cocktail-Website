import images from "./images";

const sweetCocktail = [
  {
    title: "Piña Colada",
    price: "$56",
    tags: "Rum | Cream of coconut | Pineapple juice | Ice | Frozen pineapple | Lime juice ",
  },
  {
    title: "Mudslide",
    price: "$59",
    tags: "Vodka | Coffee liqueur | Irish cream | Heavy cream",
  },
  {
    title: "Hurricane",
    price: "$44",
    tags: "Dark rum | Light rum | Orange juice | Lime juice  | Passion fruit syrup | Grenadine",
  },
  {
    title: "Grasshopper",
    price: "$31",
    tags: "Crème de menthe | Crème de cacao | Heavy cream",
  },
  {
    title: "Bushwacker",
    price: "$26",
    tags: "Aged rum | Kahlua | Creme de cacao | Cream of coconut  | Milk | Ice",
  },
  {
    title: "Mai Tai",
    price: "$26",
    tags: "Aged rum | Aged rum | Lime juice | Orgeat syrup | Dark rum",
  },
];

const bitterCocktail = [
  {
    title: "Negroni",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Bitter Lover",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Citrus Highball",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "The Paper Plane",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "The Shadow Boxer",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Best Hotel Bar",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Best Neighborhood Bar",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "Best Craft Cocktail Bar",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Best Classic Bar",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { sweetCocktail, bitterCocktail, awards };
