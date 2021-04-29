module.exports = async (client) =>{
    const guild = client.guilds.cache.get('787398103161503754');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('787398103732846637');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}