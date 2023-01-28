require("dotenv").config();
const axios = require("axios");
const puppeteer = require("puppeteer");

const user = {
  username: "purushottam",
  password: "khedre",
  email: "puru@khedre.com",
};

const getRes = async (client) => {
  try {
    const loginRes = await client.post(`/api/users/login`, { user });
    return loginRes;
  } catch (e) {
    console.log("error while checking api: " + e);
    process.exit(1);
  }
};

async function signUpUser() {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  it("Load registration page", async () => {
    await page.goto(`http://localhost:${process.env.PORT || 3000}/register`, {
      waitUntil: "load",
      timeout: 60000,
    });
  }, 60000);

  it("fill user details in form", async () => {
    await page.type("input[placeholder=Username]", user.username);
    await page.type("input[placeholder=Password]", user.password);
    await page.type("input[placeholder=Email]", user.email);

    await page.evaluate(() => {
      document.querySelector("input[type=submit]").click();
    });
  }, 15000);
}

signUpUser()
  .then(async () => {
    const client = axios.create({
      baseURL: `http://localhost:${process.env.PORT || 3000}`,
      timeout: 10 * 1000,
    });

    const loginRes = await getRes(client);

    if (!loginRes.data.user) {
      console.log(`=!=!=!=!= ERROR: No user will found`);
      process.exit(1);
    }

    if (!loginRes.data.user?.image) {
      console.log(`=!=!=!=!= ERROR: No image will found`);
      process.exit(1);
    }

    const regx = /^data:.+\/(.+);base64,(.*)$/;

    if (regx.test(loginRes.data.user.image) === false) {
      console.log(
        `=!=!=!=!= ERROR: Image url is not match with base64 data url`
      );
      process.exit(1);
    }
  })
  .catch((e) => {
    console.log("error while checking api: " + e);
    process.exit(1);
  });
