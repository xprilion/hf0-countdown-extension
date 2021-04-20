window.onload = function() {
    var links = [
        "fQVHIzPiBJE",
        "zXLe6k6LaP8",
        "K-CXfyN5fTs",
        "Bm6s_kLIr-Q",
        "s0jkx5xSb0U"
    ];

    randomLinkCode = links[Math.floor(Math.random() * links.length)];
    randomLink = "<iframe src='https://www.youtube.com/embed/" + randomLinkCode + "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1' frameborder='0' allowfullscreen></iframe>"
    document.getElementById("video").innerHTML = randomLink;
};

(function() {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "May 31, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "Demo Day";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());