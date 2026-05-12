window.SITE = { 
    status: {
        state: "offline",
        mood: "tired", 
        doing: "resting",
        where: "home",
    },
    nowPlaying: {
        song: "I'm Still Cheering For The 1980 U.S. Hockey Team",
        artist: "OakWood",
    },
};

document.addEventListener("DOMContentLoaded", function () {
    var s = window.SITE;

    var setText = function (id, val) {
        var el = document.getElementById(id);
        if (el) el.textContent = val;
    };
    setText("st-state", s.status.state);
    setText("st-mood", s.status.mood);
    setText("st-doing", s.status.doing);
    setText("st-where", s.status.where);

    var dot = document.getElementById("st-dot");
    if (dot) dot.className = "dot dot-" + s.status.state;

    setText("np-song", s.nowPlaying.song);
    setText("np-artist", s.nowPlaying.artist);
    setText("np-album", s.nowPlaying.album);

    var clock = document.getElementById("st-time");
    if (clock) {
        var tick = function () { clock.textContent = new Date().toLocaleTimeString(); };
        tick(); setInterval(tick, 1000);
    }

    var path = location.pathname.split("/").pop() || "home.html";
    var tabs = document.querySelectorAll(".tabs a");
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].getAttribute("href") === path) tabs[i].classList.add("active");
    } 
});