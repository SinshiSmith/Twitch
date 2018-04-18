   $(function () {
       var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
       var obj = {
           online: [],
           offline: []
       };
       var requests = [];

       users.forEach(user => {
           requests.push(
               fetch("https://wind-bow.glitch.me/twitch-api/streams/" + user)
               .then(response => response.json())
               .then(json => {
                   if (json.stream) {
                       obj.online.push(json.stream);
                   } else {
                       return fetch("https://wind-bow.glitch.me/twitch-api/channels/" + user)
                           .then(response => response.json())
                           .then(json => {
                               obj.offline.push(json)
                               return json
                           })
                   }
               })
           );
       });

       Promise.all(requests).then(json => {
           App();
       })

       function App() {
           getOnline();
           getOffline();

           $("#all").click(() => {
               $(".display").html("");
               getOnline();
               getOffline();
           });
           $("#online").click(() => {
               $(".display").html("");
               getOnline();
           });
           $("#offline").click(() => {
               $(".display").html("");
               getOffline();
           });

       }

       function getOnline() {
           obj.online.forEach(online => {
               $(".display").append("<div class='user online'>" + "<div class='info'>" + "<img src='" + online.channel.logo + "' alt='logo'>" + "<a href='" + online.channel.url + "' target='_blank'>" + online.channel["display_name"] + "</a>" + "</div>" + "<div class='game'>" + "<p>" + online.game + "</p>" + "</div>" + "</div>");
           })
       }

       function getOffline() {
           obj.offline.forEach(offline => {
               $(".display").append("<div class='user offline'>" + "<div class='info'>" + "<img src='" + offline.logo + "' alt='logo'>" + "<a href='" + offline.url + "' target='_blank'>" + offline["display_name"] + "</a> </div> <div class='game'> <p>Offline</p> </div> </div>");
           })
       }





   })






   // function getOnline() {
   //     users.forEach(user => {
   //         $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + user, json => {
   //             if (json.stream) {
   //                
   //             }

   //         })
   //     })
   // }

   // function getOffline() {
   //     users.forEach(user => {
   //         $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + user, json => {
   //             if (!json.stream) {
   //                 $(".display").append("<p>" + user + ": " + "Offline" + "</p>");
   //             }

   //         })
   //     })
   // }
   // getOnline();
   // getOffline();
   // $(".all").on("click", () => {
   //     $(".display").html("");
   //     getOnline();
   //     getOffline();
   // })
   // $(".online").on("click", () => {
   //     $(".display").html("");
   //     getOnline();
   // })
   // $(".offline").on("click", () => {
   //     $(".display").html("");
   //     getOffline();
   // })




   { //    var arr = [];
       //    arr.push(
       //        fetch("https://wind-bow.glitch.me/twitch-api/channels/" + user)
       //        .then(Response => Response.json()));
       //    arr.push(fetch("https://wind-bow.glitch.me/twitch-api/streams/" + user)
       //        .then(Response => Response.json()));
   }






   //    Promise.all(test).then(all => {

   //        all.forEach(item => {
   //         item.forEach(text => {
   //             // console.log(text[0]);

   //         })
   //         //    console.log(item);

   //            if (item[0].stream) {
   //                obj.online.push({
   //                    item
   //                });
   //            } else {
   //                obj.offline.push(item);
   //            }
   //        })


   //        App();
   //    });