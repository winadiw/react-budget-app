const add = (a, b) => {
  return a + b;
};
const generateGreeting = (name = "Anonymous") => {
  return `Hello ${name}!`;
};

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should generate greeting from name", () => {
  const result = generateGreeting("Winadi");
  expect(result).toBe("Hello Winadi!");
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
