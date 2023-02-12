require('dotenv/config');
const hash = require("./hash")

describe("TESTING HELPER HASH", () => { 
    test("test func hash dan compare password", async () => {
        const res = await hash.hashPassword("123456")
        expect(res).toBeDefined()
        expect(await hash.compare("123456", res)).toBeTruthy()
    })
    test("test func compare password return false", async () => {
        const res = await hash.hashPassword("123456")
        expect(res).toBeDefined()
        expect(await hash.compare("1234567", res)).toBeFalsy()
    })   
})