import express from "express";

import { getPets } from "./handlers/getPets";
import { postPets } from "./handlers/postPets";

import { useHandler } from "./middleware/useHandler";
import { sendResponse } from "./middleware/sendResponse";
import { useResponseBodyValidator } from "./middleware/useResponseBodyValidator";
import { defaultErrorHandler } from "./middleware/defaultErrorHandler";
import { useRequestBodyValidator } from "./middleware/useRequestBodyValidator";
import { requestValidationErrorHandler } from "./middleware/requestValidationErrorHandler";
import { responseValidationErrorHandler } from "./middleware/responseValidationErrorHandler";

import {
  CreatePetRequestBodySchema,
  ListPetsResponseBodySchema,
  PetSchema,
} from "./generated/openApi";

import { addLogger } from "./middleware/addLogger";

const app = express();
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to add logger to request
app.use(addLogger);

// Set content-type header for all responses
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Log request method and path for all routes
app.use((req, res, next) => {
  req.logger!.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get(
  "/pets",
  useHandler(getPets),
  useResponseBodyValidator(ListPetsResponseBodySchema),
  sendResponse
);

app.post(
  "/pets",
  useRequestBodyValidator(CreatePetRequestBodySchema),
  useHandler(postPets),
  useResponseBodyValidator(PetSchema),
  sendResponse
);

// Error handling middleware should be last
app.use(requestValidationErrorHandler);
app.use(responseValidationErrorHandler);
app.use(defaultErrorHandler);
