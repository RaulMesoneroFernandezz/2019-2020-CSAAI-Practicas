

const main = document.getElementById("main")
const videoUno = document.getElementById("videoUno");
const videoDos = document.getElementById("videoDos");
const videoTres = document.getElementById("videoTres");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const stop = document.getElementById("stop");

video1.width = 150;
video1.height = 90;
video2.width = 150;
video2.height = 90;
video3.width = 150;
video3.height = 90;
main.width = 400;
main.height = 250;

video1.src = "http://techslides.com/demos/sample-videos/small.mp4";
video2.src = "https://www.radiantmediaplayer.com/media/bbb-360p.mp4";
video3.src = "http://media.w3.org/2010/05/sintel/trailer.mp4";

main.poster="https://images3.alphacoders.com/992/992673.jpg";

const play = document.getElementById("play")

play.onclick = () => {
	video1.muted = true;
	video2.muted = true;
	video3.muted = true;
	video1.play();
	video2.play();
	video3.play();
}

videoUno.onclick = () => {
	main.src = video1.src;
	main.muted = false;
	main.controls = true;
	main.play();
	
}

videoDos.onclick = () => {
	main.src = video2.src;
	main.muted = false;
	main.controls = true;
	main.play();
}

videoTres.onclick = () => {
	main.src = video3.src;
	main.muted = false;
	main.controls = true;
	main.play();
}

stop.onclick = () => {
	main.src = "";
	main.controls = false;
	main.poster="https://images3.alphacoders.com/992/992673.jpg";
}


	

