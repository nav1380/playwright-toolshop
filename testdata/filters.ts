export const Hammers = [
  'Sheet Sander',
  'Belt Sander',
  'Circular Saw',
  'Cordless Drill 24V',
  'Cordless Drill 12V',
];

export interface Filters {
  scenario: string;
  label: string;
  expected: string
}

export const priceFilter: Filters[] = [
  {
    scenario: "low to high",
    label: "Price (Low - High)",
    expected: " Washers "
  },
  {
    scenario: "high to low",
    label: "Price (High - Low)",
    expected: " Drawer Tool Cabinet "
  },
];

export const nameFilter: Filters[] = [
  {
    scenario: "A - Z",
    label: "Name (A - Z)",
    expected: " Adjustable Wrench "
  },
  {
    scenario: "Z - A",
    label: "Name (Z - A)",
    expected: " Wood Saw "
  },
];