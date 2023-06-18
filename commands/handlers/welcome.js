module.exports = {
    type: "join",
    channel: "1115195276018331668",
    code: `
    $description[$username Joined the server, now we have $membersCount members!]
    $if[$isBot[$authorID]==false;$giveRole[$guildID;$authorID;1115358523828731985]]
    $color[DFFFD6]
    `
}