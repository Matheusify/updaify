module.exports = {
    name: "say",
    code: `
    $channelSendMessage[$channelID;$noMentionMessage]
    $useChannel[1115203226627747941]
    $title[Say Command Logs]
    $description[**User: $username**
    **Message:** \`\`\`$noMentionMessage\`\`\`
    **Channel:** <#$channelID>
    **Time:** <t:$truncate[$round[$divide[$dateStamp;1000]]]:d> $hour:$minute:$second]
    $color[04A777]
    $timezone[america/sao_paulo]
    $deletecommand
    `
}