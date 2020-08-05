const add = (a, b) => {
  return a + b;
};
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("generates a greeting", () => {
  const name = "Shaurya";
  const greeting = generateGreeting(name);
  expect(greeting).toBe(`Hello ${name}!`);
});

test("generates greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
