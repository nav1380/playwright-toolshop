export interface FooterCases {
  scenario: string;
  locatorText: string;
  expectedURL: string;
}

export const footerCases: FooterCases[] = [
  {
    scenario: "Learn Test Automation",
    locatorText: "footer-learn-courses",
    expectedURL: "https://onlinecourses.testsmith.io/",
  },
  {
    scenario: "API Spector",
    locatorText: "footer-learn-spector",
    expectedURL: "https://api-spector.dev/",
  },
  {
    scenario: "GitHub",
    locatorText: "footer-learn-github",
    expectedURL: "https://github.com/testsmith-io/practice-software-testing",
  },
];
