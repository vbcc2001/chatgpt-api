'use strict'

// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    // const client = new ChatGPTAPI(config);
      return { api: true }
  })
}
