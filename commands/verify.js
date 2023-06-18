module.exports = [{
    name: "verify",
    code: `
    $title[Verify to Access the server!]
    $description[Press the button below to Verify yourself!]
    $onlyForIDs[744721459682738216;]
    $color[779CAB]
    $addButton[1;Verify!;3;verified;false;<:whiteverify:1115355481901387897>]
    `
},{
    name: "verified",
    type: "interaction",
    prototype: "button",
    code: `
    $takeRole[$guildID;$authorID;1115358523828731985]
    $giveRole[$guildID;$authorID;1115192566032375838]
    $channelSendMessage[1115304037210935317;<@744721459682738216> $username[$authorID] Got Verified!]
    $interactionReply[You got verified successfully!;;;;users;true]
    `
}]