const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const streamPASS = process.env.streamPASS

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        // "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    // if (message.content == "hi"){
    //     message.reply("Hello World!")
    // }

    if (message.content == "t!pw"){
        message.reply("The password is " + streamPASS)
    }



    // help command
    if (message.content == "t!help"){
        message.reply(
            // "t!pw - for the stream password\n
            // t!gs - for fribbles gearscore calculator\n
            // ")
    }

})

// Adding Welcome Message to the server
const welcomeChannelID = "929741941606875146"
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`, 
        files: [img]
    })
})

client.login(process.env.TOKEN)