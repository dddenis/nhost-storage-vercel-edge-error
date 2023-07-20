import { NextResponse } from "next/server";
import { NhostClient } from "@nhost/nhost-js";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  const client = new NhostClient({
    authUrl: " ",
    functionsUrl: " ",
    graphqlUrl: " ",
    storageUrl: " ",
  });

  const response = await client.storage.upload({
    file: new File([], "test"),
  });

  return NextResponse.json(response);
}
