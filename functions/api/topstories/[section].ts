
import * as dotenv from "dotenv";

dotenv.config();
export function Section({ section }: { section: string }) {
  const apiKey = process.env.NYT_API_KEY;
  console.log("apiKey", apiKey);
  const options = {
    method: "GET",
    url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`,
    headers: {
      Accept: "application/json",
    },
  };
  request(
    options.url,
    options,
    function (error: string | undefined, response: { body: any }) {
      if (error) throw new Error(error);
      return console.log(response.body);
    }
  );
}
