import * as dotenv from "node:dotenv";
import type { Root } from "../../types";
import type { PagesFunction } from "@cloudflare/workers-types";
import { jsonResponse } from "../../utils/jsonResponse";
dotenv.config();

export const onRequestGet = async ({ request, section }) => {
  const NYT_API_KEY = process.env.NYT_API_KEY;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    form: {},
  };
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${NYT_API_KEY}`,
      options
    );

    const data: Root = await response.json();

    return jsonResponse(data);
  } catch (e) {
    console.error(e);
    return jsonResponse(
      {
        error:
          "Something went wrong on New York Times' end. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
};
