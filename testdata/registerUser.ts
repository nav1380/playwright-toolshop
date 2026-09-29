import { faker } from '@faker-js/faker';

export interface RegisterUser {
  firstName: string;
  lastName: string;
  dateOfBirth: string; // YYYY-MM-DD
  country: string;
  postalCode: string;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  password: string;
  existingEmail: string;
}

export const registerUser: RegisterUser = {
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1990-05-15",
  country: "AO",
  postalCode: "1234AB",
  houseNumber: "42",
  street: "Main Street",
  city: "Amsterdam",
  state: "North Holland",
  phone: "0612345678",
  email: faker.internet.email(),
  password: `.${faker.internet.password()}`,
  existingEmail: 'bbbx@gmail.com'
};

export const invalidRegisteredUser: RegisterUser = {
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1990-05-15",
  country: "AO",
  postalCode: "1234AB",
  houseNumber: "42",
  street: "Main Street",
  city: "Amsterdam",
  state: "North Holland",
  phone: "0612345678",
  email: 'existing@gmail.com',
  password: `.${faker.internet.password()}`,
  existingEmail: 'bbbx@gmail.com'
};
