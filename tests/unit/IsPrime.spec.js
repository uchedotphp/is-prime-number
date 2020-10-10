import IsPrime from "@/components/IsPrime";

describe("PrimeStuff", () => {
  test("2 is a Prime Number", () => {
    expect(IsPrime.methods.isPrime(2)).toBe(true);
  });

  test("10 is a not Prime Number", () => {
    expect(IsPrime.methods.isPrime(10)).not.toBe(true);
  });
});