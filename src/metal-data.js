export function MetalData() {

    return [{
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Crypt/3540303557'>Ritual Crypt</a>",
        "country": "Indonesia",
        "genre": "Black Metal",
        "state": "<span class=\"split_up\">Split-up</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Day/9876'>Ritual Day</a>",
        "country": "China",
        "genre": "Melodic Black Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_de_Muerte/3540431025'>Ritual de Muerte</a>",
        "country": "Bolivia",
        "genre": "Death/Black Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Death/3540411939'>Ritual Death</a>",
        "country": "Norway",
        "genre": "Black/Death Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Decay/3540376007'>Ritual Decay</a>",
        "country": "United States",
        "genre": "Black/Death Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Desecration/78119'>Ritual Desecration</a>",
        "country": "Chile",
        "genre": "Death/Black Metal",
        "state": "<span class=\"unknown\">Unknown</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Flail/3540455403'>Ritual Flail</a>",
        "country": "United Kingdom",
        "genre": "Ambient Black Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Flesh/3540388690'>Ritual Flesh</a>",
        "country": "Australia",
        "genre": "Black Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Funebre/3540416305'>Ritual Funebre</a>",
        "country": "Bolivia",
        "genre": "Black/Doom Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Genocide/3540397111'>Ritual Genocide</a>",
        "country": "United States",
        "genre": "Black/Death Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_in_Ruin/3540462753'>Ritual in Ruin</a>",
        "country": "Canada",
        "genre": "Death/Black Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Killer/41652'>Ritual Killer</a>",
        "country": "United States",
        "genre": "Black Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Knife/3540398928'>Ritual Knife</a>",
        "country": "United States",
        "genre": "Black Metal/Punk",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Laceration/3540454455'>Ritual Laceration</a>",
        "country": "United States",
        "genre": "Black/Death Metal",
        "state": "<span class=\"active\">Active</span>"
    },
    {
        "title": "<a href='https://www.metal-archives.com/bands/Ritual_Lair/3540334802'>Ritual Lair</a>",
        "country": "Poland",
        "genre": "Black Metal",
        "state": "<span class=\"active\">Active</span>"
    }]
}
export function renderMetalTitle(state, val) {
    return (
        state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
}