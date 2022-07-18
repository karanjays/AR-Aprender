var cat = new Howl({
    src: ['./audio/cat.mp3']
});

var dog = new Howl({
    src: ['./audio/dog.mp3']
});


    // cat.play();
    // dog.play();

    // function playGuitar() {
    // 	guitar.play();
    // }
    // function pauseGuitar() {
    // 	guitar.pause();
    // }
    // function stopGuitar() {
    // 	guitar.stop();
    // }
    // function muteGuitar() {
    // 	guitar.mute(true);
    // }
    // function unmuteGuitar() {
    // 	guitar.mute(false);
    // }

    window.onload = function () {
        const cm = document.getElementById('cat-marker');
        const dm = document.getElementById('dog-marker');


    dm.addEventListener('markerFound', function() {
        dog.play();
    });
    dm.addEventListener('markerLost', function() {
        dog.stop();
    });
    cm.addEventListener('markerFound', function() {
        cat.play();
    });

    cm.addEventListener('markerLost', function() {
        cat.stop();
    });
}