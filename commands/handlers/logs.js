module.exports = [{
    type: "messageDelete",
    channel: "1115199226536796171",
    code: `
    $description[Deleted Message Logs
    Deleted Message
    
    \`\`\`$message\`\`\`

    User: $username]
    `
},{
    type: "messageUpdate",
    channel: "1115199226536796171",
    code: `
    $description[Edited Message Logs
    New Message
    
    \`\`\`$message\`\`\`

    Old Message: \`\`\`$oldMessage\`\`\`

    User: $username]
    `
    },{
        type: "roleCreate",
        channel: "1115203332617814077",
        code: `
        $description[Role Created Logs
            
            New role Created: $newRole]
        `
    },{
        type: "memberUpdate",
        channel: "1115224426066231297",
        code: `
        $description[Member Role Update Logs
        
        Changes: $newMember[roles]
        Member: $newMember[name]]
        `
    },{
        type: "channelCreate",
        channel: "1115203284488171580",
        code: `
        $description[Channel Created Logs
        
        New Channel: <#$channelID>]
        `
    },{
        type: "channelUpdate",
        channel: "1115203284488171580",
        code: `
        $description[Channel Updated Logs
        
        $oldChannel[name] ---> $newChannel[name]]
        `
    },{
        type: "channelDelete",
        channel: "1115203284488171580",
        code: `
        $description[Channel Deleted Logs
        
        Deleted Channel: $channelName]
        `
        
        
}]