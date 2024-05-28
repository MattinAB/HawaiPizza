import { onRequest } from "firebase-functions/v2/https";
//const { locations: locationsMock } = require("./geocodeLocationMock");
import * as url from "url";

export const geocodeRequest = onRequest((req, res) => {
  const query = url.parse(req.url, true).query;
  // const locationMock = locationsMock[city];
  res.send(JSON.stringify(query));
  
});

