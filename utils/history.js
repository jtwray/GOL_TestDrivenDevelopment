import { createBrowserHistory, createMemoryHistory } from "history";
import { Urls } from "../types/urls";

const isTest = process.env.NODE_ENV === "test";

export const history = isTest
  ? createMemoryHistory({ initialEntries: ["/"] })
  : createBrowserHistory();
