import bcrypt from "bcrypt";
async function testBcrypt() {
  const plainText = "123";
  const hash = await bcrypt.hash("123", 10);
  console.log(hash);
  const hashed = "$2b$10$8cldtaF2WRjItyXyJFV1CuVaBrX7Ep1EZm.8IMvAGvMT7E5hcjHIC";
  console.log(hashed);
  let result = await bcrypt.compare(plainText, hashed);
  console.log("Test match:", result);
  result = await bcrypt.compare(plainText, hash);
  console.log("Test match:", result);
}

testBcrypt();
