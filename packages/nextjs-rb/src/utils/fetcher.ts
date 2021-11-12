import axios from "axios";

async function fetcher(url: string, payload?: string): Promise<any> {
  let response;
  if (payload) {
    response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.parse(payload),
    });
  } else {
    response = await axios.get(url);
  }
  return response;
}

export default fetcher;
