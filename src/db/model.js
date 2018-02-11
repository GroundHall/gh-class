/**
 * This file handles the model/models for
 * the perticular microservice
 */

import Joi from 'joi';

export const ClassModel = Joi.object({
  graduationYear: Joi.number(),
  members: Joi.array().items(Joi.string()),
  hashtag_id: Joi.string()
}).required();

export const ClassModelRequired = Joi.object({
  graduationYear: Joi.number().required(),
  members: Joi.array().items(Joi.string()).default([]),
  hashtag_id: Joi.string()
}).required();
