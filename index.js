const Discord = require("discord.js")
require("dotenv").config()

const streamPASS = process.env.streamPASS

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }

    if (message.content == "t!pw"){
        message.reply("The password is " + streamPASS)
    }
})

client.login(process.env.TOKEN)