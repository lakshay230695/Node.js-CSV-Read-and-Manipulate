import { csvInjectionProtector } from "csv-injection-protector";

test("test '=' sign CSV sanitization", () => {
const testStr = "=Risky string for CSV";
const expectedStr = "Risky string for CSV";
const sanitizedStr = csvInjectionProtector(testStr);

expect(sanitizedStr).toBe(expectedStr);
});

test("test '@' sign CSV sanitization", () => {
const testStr = "@Risky string for CSV";
const expectedStr = "Risky string for CSV";
const sanitizedStr = csvInjectionProtector(testStr);

expect(sanitizedStr).toBe(expectedStr);
});

test("test '+' sign CSV sanitization", () => {
const testStr = "+Risky string for CSV";
const expectedStr = "Risky string for CSV";
const sanitizedStr = csvInjectionProtector(testStr);

expect(sanitizedStr).toBe(expectedStr);
});

test("test '-' sign CSV sanitization", () => {
const testStr = "-Risky string for CSV";
const expectedStr = "Risky string for CSV";
const sanitizedStr = csvInjectionProtector(testStr);

expect(sanitizedStr).toBe(expectedStr);
});
