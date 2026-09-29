export interface Product {
  name: string;
  price: string;
}

export interface RelatedProduct {
  name: string;
}

export const products: Product[] = [
  { name: "Combination Pliers", price: "$14.15" },
  { name: "Pliers", price: "$12.01" },
  { name: "Bolt Cutters", price: "$48.41" },
  { name: "Long Nose Pliers", price: "$14.24" },
  { name: "Slip Joint Pliers", price: "$9.17" },
  { name: "Claw Hammer with Shock Reduction Grip", price: "$13.41" },
  { name: "Hammer", price: "$12.58" },
  { name: "Claw Hammer", price: "$11.48" },
  { name: "Thor Hammer", price: "$11.14" },
];

export const paginationProducts: Product[] = [
  { name: "Chisels Set", price: "$12.96" },
  { name: "Wood Carving Chisels", price: "$45.23" },
  { name: "Swiss Woodcarving Chisels", price: "$22.96" },
  { name: "Tape Measure 7.5m", price: "$7.23" },
  { name: "Measuring Tape", price: "$10.07" },
  { name: "Tape Measure 5m", price: "$12.91" },
  { name: "Square Ruler", price: "$15.75" },
  { name: "Safety Goggles", price: "$24.26" },
  { name: "Safety Helmet Face Shield", price: "$35.62" },
];

export const relatedProducts: RelatedProduct[] = [
  { name: "Pliers" },
  { name: "Bolt Cutters" },
  { name: "Long Nose Pliers" },
  { name: "Slip Joint Pliers" },
];

export const mightyCraftHardware: string[] = [
  "Claw Hammer",
  "Bolt Cutters",
  "Long Nose Pliers",
  "Slip Joint Pliers",
  "Chisels Set",
  "Belt Sander",
  "Cordless Drill 12V",
  "Drawer Tool Cabinet",
  "Screws",
];
