module.exports = async (client) =>{
    const guild = client.guilds.cache.get('YOUR_SERVER_ID');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('YOUR_CHANNEL_ID');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count'); // <--- Delete this line, if you dont want your console to get spammed.
    }, 5000);
}
