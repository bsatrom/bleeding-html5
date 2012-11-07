(function() {
	var recognition = new webkitSpeechRecognition();
    recognition.maxAlternatives = 5;

    recognition.onresult = function(event) { // SpeechRecognitionEvent
      if (event.result.length > 0) { // SpeechRecognitionResult
        var q = document.querySelector('#query');

        q.value = event.result[0].transcript; // SpeechRecognitionAlternative
      }
    };

    var button = document.querySelector('#search');
    button.onclick = function() {
    	recognition.start();
    };
})();