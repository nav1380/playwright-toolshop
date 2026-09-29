export interface InvalidCases {
  email: string;
  password: string;
  locator: string;
  scenario: string;
  expected: string;
}

export const invalidCases: InvalidCases[] = [
  {
    email: "mmm@gmail.com",
    password: "INCOR",
    locator: '[data-test="login-error"]',
    scenario: "incorrect password",
    expected: "Invalid email or password",
  },
  {
    email: "nonexistent@gmail.com",
    password: "goodsWill123..",
    locator: '[data-test="login-error"]',
    scenario: "non-existent email",
    expected: "Invalid email or password",
  },
  {
    email: "",
    password: "",
    locator: '[data-test="email-error"]',
    scenario: "empty email/password",
    expected: "Email is required",
  },
  {
    email: "zzz@",
    password: "goodsWill123..",
    locator: '[data-test="email-error"]',
    scenario: "invalid email format (abc@)",
    expected: "Email format is invalid"
    },
];
