import camelize from "camelize";
import { locations } from "./mock/mockLocation";

export const locationRequest = (searchTerm) => {};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
