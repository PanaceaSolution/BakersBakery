// require("dotenv").config();

// const http = require("http");
//const { neon } = require("@neondatabase/serverless");

import dotenv from 'dotenv'
dotenv.config()

import {neon} from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL);




export default sql 