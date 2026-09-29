export interface NavigationCases {
  scenario: string;
  locator: string;
  expectedLocator: string;
}

export const navigationCases: NavigationCases[] = [
  {
    scenario: "Home",
    locator: '[data-test="nav-home"]',
    expectedLocator: '[class="img-fluid"]',
  },
  {
    scenario: "Categories",
    locator: '[data-test="nav-categories"]',
    expectedLocator: '[aria-label="nav-categories"]'
  },
  {
    scenario: "Contact",
    locator: '[data-test="nav-contact"]',
    expectedLocator: 'h3',
  },
  {
    scenario: "Sign in",
    locator: '[data-test="nav-sign-in"]',
    expectedLocator: 'h3',
  },
];
