import { RequestHandler } from "express";
import { EnvironmentStore } from "./EnvironmentStore";

export const getGlobalZoneProperties = () => ({
  envName: EnvironmentStore.get().envName,
  releaseVersion: EnvironmentStore.get().releaseVersion,
});

export const zone: RequestHandler = async (_, __, next) => {
  Zone.current
    .fork({
      name: "express",
      properties: getGlobalZoneProperties(),
    })
    .run(next);
};
