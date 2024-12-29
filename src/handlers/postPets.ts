import { postPetsHandler } from "../generated/openApi";

export const postPets: postPetsHandler = async (req) => {
  req.logger!.info("Creating pet");

  return {
    status: 200,
    body: {
      id: 1,
      name: "Fluffy",
      species: "cat",
      owner_id: 1,
    },
  };
};
