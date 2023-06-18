module.exports = {
    name: "role add",
    code: `
    $giveRole[$guildID;$mentioned[1;false];$mentionedRoles[1;false]]
    $onlyIf[$mentioned[1;false]!=;You need to mention someone to give the role to.{deleteIn:5s}]
    $onlyIf[$mentionedRoles[1;false]!=;You need to mention a role so i can give to the user.{deleteIn:5s}]
    $onlyPerms[manageroles;You don't have perms to use this command!{deleteIn:5s}]
    $title[Role Added]
    $description[
        User: $username[$mentioned[1;false]
        Role Added: <@&$mentionedRoles[1;false]>]
        Author: $username[$authorID]
    ]
    $color[D4F5F5]
    `
}