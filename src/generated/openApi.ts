/* This file was auto-generated. Do not edit it directly. */

import { z } from 'zod';

/* ZOD SCHEMAS */

export const PetSchema = z.object({ "id": z.number().describe("The ID of the pet"), "name": z.string().optional().nullable().default("Fluffy").describe("The name of the pet"), "species": z.lazy(() => SpeciesSchema).default("cat"), "owner_id": z.number().describe("The ID of the owner") }).strict();

export const OwnerSchema = z.object({ "id": z.number().describe("The ID of the owner"), "name": z.string().describe("The name of the owner") }).strict();

export const SpeciesSchema = z.enum(["cat", "dog"]);

export const ListPetsResponseBodySchema = z.object({ "items": z.array(z.lazy(() => PetSchema)).default([]), "count": z.number() }).strict();

export const CreatePetRequestBodySchema = z.object({ "name": z.string().optional(), "species": z.lazy(() => SpeciesSchema).optional() }).strict();

export const PutPetsIdRequestBodySchema = z.lazy(() => CreatePetRequestBodySchema);

export const PatchPetsIdRequestBodySchema = z.lazy(() => CreatePetRequestBodySchema);

export const PostPetsRequestBodySchema = z.lazy(() => CreatePetRequestBodySchema);

export const GetOwnersIdResponseBodySchema = z.object({ "id": z.number().optional(), "name": z.string().optional() }).strict();

export const GetOwnersResponseBodySchema = z.array(z.lazy(() => OwnerSchema));

export const GetPetsIdOwnersResponseBodySchema = z.lazy(() => OwnerSchema);

export const GetPetsIdResponseBodySchema = z.lazy(() => PetSchema);

export const PutPetsIdResponseBodySchema = z.lazy(() => PetSchema);

export const PatchPetsIdResponseBodySchema = z.lazy(() => PetSchema);

export const GetPetsResponseBodySchema = z.lazy(() => ListPetsResponseBodySchema);

export const PostPetsResponseBodySchema = z.lazy(() => PetSchema);

export const GetOwnersIdPathParamsSchema = z.object({
  id: z.number()
}).strict();

export const GetPetsIdOwnersPathParamsSchema = z.object({
  id: z.number()
}).strict();

export const GetPetsIdPathParamsSchema = z.object({
  id: z.number()
}).strict();

export const PutPetsIdPathParamsSchema = z.object({
  id: z.number()
}).strict();

export const DeletePetsIdPathParamsSchema = z.object({
  id: z.number()
}).strict();

export const PatchPetsIdPathParamsSchema = z.object({
  id: z.number()
}).strict();

/* TYPES */

export type Pet = z.infer<typeof PetSchema>;

export type Owner = z.infer<typeof OwnerSchema>;

export type Species = z.infer<typeof SpeciesSchema>;

export type ListPetsResponseBody = z.infer<typeof ListPetsResponseBodySchema>;

export type CreatePetRequestBody = z.infer<typeof CreatePetRequestBodySchema>;

export type PutPetsIdRequestBody = z.infer<typeof PutPetsIdRequestBodySchema>;

export type PatchPetsIdRequestBody = z.infer<typeof PatchPetsIdRequestBodySchema>;

export type PostPetsRequestBody = z.infer<typeof PostPetsRequestBodySchema>;

export type GetOwnersIdResponseBody = z.infer<typeof GetOwnersIdResponseBodySchema>;

export type GetOwnersResponseBody = z.infer<typeof GetOwnersResponseBodySchema>;

export type GetPetsIdOwnersResponseBody = z.infer<typeof GetPetsIdOwnersResponseBodySchema>;

export type GetPetsIdResponseBody = z.infer<typeof GetPetsIdResponseBodySchema>;

export type PutPetsIdResponseBody = z.infer<typeof PutPetsIdResponseBodySchema>;

export type PatchPetsIdResponseBody = z.infer<typeof PatchPetsIdResponseBodySchema>;

export type GetPetsResponseBody = z.infer<typeof GetPetsResponseBodySchema>;

export type PostPetsResponseBody = z.infer<typeof PostPetsResponseBodySchema>;

export type GetOwnersIdPathParams = z.infer<typeof GetOwnersIdPathParamsSchema>;

export type GetPetsIdOwnersPathParams = z.infer<typeof GetPetsIdOwnersPathParamsSchema>;

export type GetPetsIdPathParams = z.infer<typeof GetPetsIdPathParamsSchema>;

export type PutPetsIdPathParams = z.infer<typeof PutPetsIdPathParamsSchema>;

export type DeletePetsIdPathParams = z.infer<typeof DeletePetsIdPathParamsSchema>;

export type PatchPetsIdPathParams = z.infer<typeof PatchPetsIdPathParamsSchema>;

/* SERVER */

export type Request<
  Body,
  PathParams extends Record<string, any>,
  QueryParams extends Record<string, any>
> = {
  body: Body;
  pathParams: PathParams;
  queryParams: QueryParams;
};

export type Response<Body> = {
  status: 200 | 404;
  body?: Body;
};

export interface Handler<
  ReqBody,
  ReqPathParams extends Record<string, any>,
  ReqQueryParams extends Record<string, any>,
  ResBody
> {
  (req: Request<ReqBody, ReqPathParams, ReqQueryParams>): Promise<Response<ResBody>>;
};

export type getOwnersIdHandler = Handler<undefined, GetOwnersIdPathParams, {}, GetOwnersIdResponseBody>;

export type getOwnersHandler = Handler<undefined, {}, {}, GetOwnersResponseBody>;

export type getPetsIdOwnersHandler = Handler<undefined, GetPetsIdOwnersPathParams, {}, GetPetsIdOwnersResponseBody>;

export type getPetsIdHandler = Handler<undefined, GetPetsIdPathParams, {}, GetPetsIdResponseBody>;

export type putPetsIdHandler = Handler<PutPetsIdRequestBody, PutPetsIdPathParams, {}, PutPetsIdResponseBody>;

export type deletePetsIdHandler = Handler<undefined, DeletePetsIdPathParams, {}, undefined>;

export type patchPetsIdHandler = Handler<PatchPetsIdRequestBody, PatchPetsIdPathParams, {}, PatchPetsIdResponseBody>;

export type getPetsHandler = Handler<undefined, {}, {}, GetPetsResponseBody>;

export type postPetsHandler = Handler<PostPetsRequestBody, {}, {}, PostPetsResponseBody>;