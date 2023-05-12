import react from "react";

export type MockDataTeamType = {
  id: Number;
  name: String;
  email: String;
  age: Number;
  phone: String;
  access: String;
};

export type MockDataContactsType = {
  id: Number;
  name: String;
  email: String;
  age: Number;
  phone: String;
  address: String;
  city: String;
  zipCode: String;
  registrarId: Number;
};

export type MockDataInvoicesType = {
  id: Number;
  name: String;
  email: String;
  cost: String;
  phone: String;
  date: String;
};

export type MockTransactionsType = {
  txId: String;
  user: String;
  date: String;
  cost: String;
};

export type MockBarDataType = {
  country: String;
  "hot dog": Number;
  "hot dogColor": String;
  burger: Number;
  burgerColor: String;
  kebab: Number;
  kebabColor: String;
  donut: Number;
  donutColor: String;
};

export type MockPieDataType = {
  id: String;
  label: String;
  value: Number;
  color: String;
};

type LineDataType = {
  x: String;
  y: Number;
};

export type MockLineDataType = {
  id: String;
  data: LineDataType[];
};
