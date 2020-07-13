var images = [document.getElementById("elulahedane"), document.getElementById("taiendus"), document.getElementById("kaasav"), document.getElementById("koostoine"), document.getElementById("kogukond"), document.getElementById("vanemad"), document.getElementById("liikumine"), document.getElementById("meetodid"), document.getElementById("opetajad"), document.getElementById("paindlikkus"), document.getElementById("tehnoloogia"), document.getElementById("hindamine"), document.getElementById("turvalisus")];
var links = new Array("https://postimees.ee/1", "https://postimees.ee/2", "https://postimees.ee/3", "https://postimees.ee/4", "https://postimees.ee/5", "https://postimees.ee/6", "https://postimees.ee/7", "https://postimees.ee/8", "https://postimees.ee/9", "https://postimees.ee/10", "https://postimees.ee/11", "https://postimees.ee/12", "https://postimees.ee/13");

var sectors = images.length;
var radiuses = new Array();
var coords = new Array();

function showCanvas() {
    var toggle1 = document.getElementById("questions");
    if (toggle1.style.display === "none") {
        toggle1.style.display = "block";
    } else {
        toggle1.style.display = "none";
    }
}

function setValues() {
    var qa1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    var qa2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    var qa3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
    var qa4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
    var qa5 = parseInt(document.querySelector('input[name="q5"]:checked').value);
    var qa6 = parseInt(document.querySelector('input[name="q6"]:checked').value);
    var qa7 = parseInt(document.querySelector('input[name="q7"]:checked').value);
    var qa8 = parseInt(document.querySelector('input[name="q8"]:checked').value);
    var qa9 = parseInt(document.querySelector('input[name="q9"]:checked').value);
    var qa10 = parseInt(document.querySelector('input[name="q10"]:checked').value);
    var qa11 = parseInt(document.querySelector('input[name="q11"]:checked').value);
    var qa12 = parseInt(document.querySelector('input[name="q12"]:checked').value);
    var qa13 = parseInt(document.querySelector('input[name="q13"]:checked').value);
    var qa14 = parseInt(document.querySelector('input[name="q14"]:checked').value);
    var qa15 = parseInt(document.querySelector('input[name="q15"]:checked').value);
    var qa16 = parseInt(document.querySelector('input[name="q16"]:checked').value);
    var qa17 = parseInt(document.querySelector('input[name="q17"]:checked').value);
    var qa18 = parseInt(document.querySelector('input[name="q18"]:checked').value);
    var qa19 = parseInt(document.querySelector('input[name="q19"]:checked').value);
    var qa20 = parseInt(document.querySelector('input[name="q20"]:checked').value);
    var qa21 = parseInt(document.querySelector('input[name="q21"]:checked').value);
    var qa22 = parseInt(document.querySelector('input[name="q22"]:checked').value);
    var qa23 = parseInt(document.querySelector('input[name="q23"]:checked').value);
    var qa24 = parseInt(document.querySelector('input[name="q24"]:checked').value);
    var qa25 = parseInt(document.querySelector('input[name="q25"]:checked').value);
    var qa26 = parseInt(document.querySelector('input[name="q26"]:checked').value);
    var qa27 = parseInt(document.querySelector('input[name="q27"]:checked').value);
    var qa28 = parseInt(document.querySelector('input[name="q28"]:checked').value);
    var qa29 = parseInt(document.querySelector('input[name="q29"]:checked').value);
    var qa30 = parseInt(document.querySelector('input[name="q30"]:checked').value);
    var qa31 = parseInt(document.querySelector('input[name="q31"]:checked').value);
    var qa32 = parseInt(document.querySelector('input[name="q32"]:checked').value);
    var qa33 = parseInt(document.querySelector('input[name="q33"]:checked').value);
    var qa34 = parseInt(document.querySelector('input[name="q34"]:checked').value);
    var qa35 = parseInt(document.querySelector('input[name="q35"]:checked').value);
    var qa36 = parseInt(document.querySelector('input[name="q36"]:checked').value);
    var qa37 = parseInt(document.querySelector('input[name="q37"]:checked').value);
    var qa38 = parseInt(document.querySelector('input[name="q38"]:checked').value);
    var qa39 = parseInt(document.querySelector('input[name="q39"]:checked').value);
    var qa40 = parseInt(document.querySelector('input[name="q40"]:checked').value);
    var qa41 = parseInt(document.querySelector('input[name="q41"]:checked').value);

    var t1Val = (qa1 + qa17 + qa31) / 3;			// T1
    var t2Val = (qa3 + qa33) / 2;					// T2
    var t3Val = (qa14 + qa35) / 2;					// T3
    var t4Val = (qa2 + qa8 + qa40) / 3;				// T4
    var t5Val = (qa5 + qa12 + qa32 + qa37) / 4;		// T5
    var t6Val = (qa7 + qa9 + qa41) / 3;				// T6
    var t7Val = (qa20 + qa22 + qa27 + qa39) / 4;	// T7
    var t8Val = (qa23 + qa29) / 2;					// T8
    var t9Val = (qa15 + qa16 + qa18) / 3;			// T9
    var t10Val = (qa10 + qa19 + qa28 + qa38) / 4;	// T10
    var t11Val = (qa4 + qa25 + qa26 + qa30) / 4;	// T11
    var t12Val = (qa6 + qa13 + qa34) / 3;			// T12
    var t13Val = (qa11 + qa21 + qa24 + qa36) / 4;	// T13

    radiuses = [t1Val / 5, t2Val / 5, t3Val / 5, t4Val / 5, t5Val / 5, t6Val / 5, t7Val / 5, t8Val / 5, t9Val / 5, t10Val / 5, t11Val / 5, t12Val / 5, t13Val / 5];
}

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = window.innerWidth - 100;
myCanvas.height = window.innerHeight - 100;

var ctx = myCanvas.getContext("2d");

var centerX = myCanvas.width / 2;
var centerY = myCanvas.height / 2;

var imageSize = 50;
var offset = 40;

function drawSlice(ctx, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawArc(ctx, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

function drawIcons(ctx, radius, startAngle, endAngle, image) {
    ctx.drawImage(image, centerX - imageSize / 2 + (radius - offset) * Math.cos((startAngle + endAngle) / 2), centerY - imageSize / 2 + (radius - offset) * Math.sin((startAngle + endAngle) / 2), imageSize, imageSize);
}

function draw() {
    if (myCanvas.height < 400) {
        myCanvas.height = 400;
    }

    if (radiuses.length == images.length) {
        myCanvas.style.display = "block";

        for (var i = 0; i <= (Math.min(myCanvas.height, myCanvas.width)) / 2 + 1; i += (Math.min(myCanvas.height, myCanvas.width)) / 20) {
            drawArc(ctx, i, 0, 2 * Math.PI);
        }

        for (var j = 0, i = 0; j < sectors; i += 2 / sectors * Math.PI, j++) {
            if (j % 2 == 0) {
                drawSlice(ctx, (Math.min(myCanvas.height, myCanvas.width)) / 2 * radiuses[j], i, i + 2 / sectors * Math.PI, "rgb(255,0,0)");
                coords[j] = [(Math.min(myCanvas.height, myCanvas.width)) / 2 * radiuses[j], i, i + 2 / sectors * Math.PI];
            }
            else {
                drawSlice(ctx, (Math.min(myCanvas.height, myCanvas.width)) / 2 * radiuses[j], i, i + 2 / sectors * Math.PI, "rgb(0,255,0)");
                coords[j] = [(Math.min(myCanvas.height, myCanvas.width)) / 2 * radiuses[j], i, i + 2 / sectors * Math.PI];
            }
        }

        for (j = 0, i = 0; j < sectors; i += 2 / sectors * Math.PI, j++) {
            if (radiuses[j] < 0.5) {
                imageSize = 30;
                offset = 20;
            }
            else {
                imageSize = 50;
                offset = 40;
            }
            drawIcons(ctx, (Math.min(myCanvas.height, myCanvas.width)) / 2 * radiuses[j], i, i + 2 / sectors * Math.PI, images[j]);
        }
    }
}

function getMousePosition() {
    try {
        var x = event.clientX - 50;
        var y = event.clientY - 50;
        var clickRadius = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        var clickAngle = ((Math.atan2(y - centerY, x - centerX)) < 0 ? (Math.atan2(y - centerY, x - centerX)) + 2 * Math.PI : (Math.atan2(y - centerY, x - centerX)));

        for (i = 0, j = 0; i < sectors; i++, j += 2 / sectors * Math.PI) {
            if (clickAngle > coords[i][1] && clickAngle < coords[i][2] && clickRadius < coords[i][0]) {
                window.open(links[i]);
            }
        }
    }
    catch (err) { }
}

var onResize = e => {
    myCanvas.width = e.target.innerWidth - 100;
    myCanvas.height = e.target.innerHeight - 100;

    centerX = myCanvas.width / 2;
    centerY = myCanvas.height / 2;

    draw();

}

document.getElementById("sendBtn").addEventListener("click", draw);
window.addEventListener("mousedown", getMousePosition);
window.addEventListener("resize", onResize);
