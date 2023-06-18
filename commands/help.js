module.exports = {
    name: "help",
    code: `
    $title[Updaify Commands]
    $description[Here are all of my commands
    
    <:gear2:1116996271174070273> **Moderation Commands** (3)
    $getGuildVar[prefix]say, $getGuildVar[prefix]role add, $getGuildVar[prefix]role remove

    <:graph_up:1116996551278071930> **Fun Commands** (2)
    $getGuildVar[prefix]help, $getGuildVar[prefix]rollout]
    $footer[Command executed by $username]
    $thumbnail[$userAvatar]
    $deletecommand
    $color[FFC0BE]
    `
}