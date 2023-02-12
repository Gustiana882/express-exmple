require('dotenv/config');
const jwt = require("./jwt")

describe("TESTING HELPER JWT", () => { 
    test("test func create and decode jwt", async () => {
        const res = await jwt.createToken({ name: "gustiana" });
        expect(res).toBeDefined()
        expect(await jwt.decodeToken(res)).toMatchObject({ name: "gustiana" })
    })    
})