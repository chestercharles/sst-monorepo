import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "latest-hotness",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
