import express from 'express'
import { UserActor } from '../actor/UserActor/UserActor'

export const actor = express.Router()

UserActor.post("/", UserActor.createProduct)