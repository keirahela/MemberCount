const discord = require("discord.js");
const client = new discord.Client()
const { token } = require("./config.json")
const memberCount = require('./member-count')



client.on("ready", () => {

  console.log("Bot online")
  client.user.setActivity("Counting members")
  memberCount(client)
})




















client.login(token)