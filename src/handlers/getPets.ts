import { getPetsHandler } from "../generated/openApi";

export const getPets: getPetsHandler = async (req) => {
  return {
    status: 200,
    body: {
      items: [
        {
          id: 1,
          name: "Fluffy",
          species: "cat",
          owner_id: 1,
        },
        {
          id: 2,
          name: "Rex",
          species: "dog",
          owner_id: 1,
          // Uncomment this to trigger runtime validation error
          color: "brown",
        },
      ],
      count: 2,
    },
  };
};
