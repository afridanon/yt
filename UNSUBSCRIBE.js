var i = 0;

var myVar = setInterval(myTimer, 500);

function myTimer () {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector("[aria-label^='Unsubscribe from']").click();

        setTimeout(function () {

            var unSubBtn = document.getElementById("confirm-button").click();

        }, 1000);

        setTimeout(function () {

            els[i].parentNode.removeChild(els[i]);

        }, 1000);

    }

    i++;

    console.log(i + " unsubscribed by Saint");

    console.log(els.length + " remaining");

}
