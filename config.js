const schema = {
  type: 'object',
  required: ['apiKey'],
  properties: {
    apiKey:{
      type: 'string',
      default: 'sk-xxxxxxxxxxxxxxxxxxxxxx'
    },
  }
}
// 加载配置
const options = {
  schema: schema,
  dotenv: true
}
//config
const config = {
  apiKey: process.env.OPENAI_API_KEY,
};

module.exports =   { schema, options, config }

