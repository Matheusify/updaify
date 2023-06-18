module.exports = {
    name: "role remove",
    code: `
    $takeRole[$guildID;$mentioned[1;false];$mentionedRoles[1;false]]
    $onlyIf[$mentioned[1;false]!=;You need to mention someone to remove the role to.{deleteIn:5s}]
    $onlyIf[$mentionedRoles[1;false]!=;You need to mention a role so i can remove it from the user.{deleteIn:5s}]
    $onlyPerms[manageroles;You don't have perms to use this command!{deleteIn:5s}]
    $title[Role Removed]
    $description[
        User: $username[$mentioned[1;false]
        Role Removed: <@&$mentionedRoles[1;false]>]
        Author: $username[$authorID]
    ]
    $color[96031A]
    `
}