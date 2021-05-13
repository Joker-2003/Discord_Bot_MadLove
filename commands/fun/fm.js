module.exports={
    name: 'fm',
    description : 'shows what u r playing',
    usage : '<lastfm username>',
    async execute(msg,args) {
        const snekfetch = require("snekfetch");
        const Discord = require('discord.js');
        if (!args.length){
            msg.reply("Please send your last fm name along with the command.. ``!fm <lastfm name>``");
            return;
        }
        try {
            
        
        username = args[0];
        const { api_key, secret } = require('../../config.json');
        let url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${api_key}&format=json`;
            // console.log(url, /URL/)
            let response1 = (await snekfetch.get(url));
            let response = response1.body;
            //console.log(response.recenttracks.track, /RESPONSE/);
            let info = response.recenttracks;
            let total = info["@attr"].total;

            let track = { album: info.track[0].album["#text"], artist: info.track[0].artist["#text"], name: info.track[0].name, image: info.track[0].image.pop()["#text"], date: info.track[0].date ? "Played: " + info.track[0].date["#text"] : "Now playing" };

            let trackRequest = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&username=${username}&api_key=${api_key}&track=${encodeURIComponent(track.name)}&artist=${encodeURIComponent(track.artist)}&api_key=${api_key}&format=json`;
            let artistRequest = `http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&username=${username}&api_key=${api_key}&track=${encodeURIComponent(track.name)}&artist=${encodeURIComponent(track.artist)}&api_key=${api_key}&format=json`;
            let albumRequest = `http://ws.audioscrobbler.com/2.0/?method=album.getInfo&username=${username}&api_key=${api_key}&album=${encodeURIComponent(track.album)}&artist=${encodeURIComponent(track.artist)}&api_key=${api_key}&format=json`;
            let trackPlay = {};
            let artistPlay = {};
            let albumPlay = {};
            try {
                trackPlay = (await snekfetch.get(trackRequest)).body;
                
                artistPlay = (await snekfetch.get(artistRequest)).body;
                albumPlay = (await snekfetch.get(albumRequest)).body;
            } catch (e) {console.log(e, /ERROR/)}

            function us_pl(us_in) {
                //  In: https://www.last.fm/music/Starset/_/TELEKINETIC
                // Out: https://www.last.fm/user/pootusmaximus/library/music/Starset/_/TELEKINETIC
                return us_in.replace("last.fm/music", `last.fm/user/${username}/library/music`)
            }

            let embed = new Discord.MessageEmbed().setColor(msg.member.displayHexColor);
            embed.setTitle(`${username}'s FM`);
            embed.addField("Title", (track.name ? track.name : "No Title") + `  \n[${trackPlay.track ? trackPlay.track.userplaycount : 0} plays](${us_pl(trackPlay.track ? trackPlay.track.url : "https://www.last.fm")})`, true);
            embed.addField("Album", (track.album ? track.album : "No Album") + `  \n[${albumPlay.album ? albumPlay.album.userplaycount : 0} plays](${us_pl(albumPlay.album ? albumPlay.album.url : "https://www.last.fm")})`, true);
            embed.addField("Artist", (track.artist ? track.artist : "No Artist") + `  \n${(artistPlay.artist && artistPlay.artist.stats) ? artistPlay.artist.stats.userplaycount : 0} plays`, true);
            embed.setThumbnail(track.image ? track.image : "http://orig14.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg");
            // embed.addField("\u200b", "<:UpFCE300:664678209157333016> Like <:DownFCE300:664678208981172225> Dislike <:questionmarkFCE300:664678208578256908> Never heard");
            embed.setFooter(track.date);
            embed.setAuthor(total + " total scrobbles", "http://icons.iconarchive.com/icons/sicons/flat-shadow-social/512/lastfm-icon.png", `https://www.last.fm/user/${username}`);
             msg.channel.send(embed);
            } catch (error) {
                msg.channel.send('enter valid username');
            }
    }

};