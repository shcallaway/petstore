import { getPets } from "./generated/openApi";

const baseUrl = "http://localhost:3000";

console.log("Getting pets...");

getPets({ baseUrl }).then((res) => {
  console.log("Got pets!");
  console.log(`Status: ${res.status}`);
  console.log("Body:", "\n", JSON.stringify(res.body, null, 2));
});
