const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "React",
				weight: 12.3
			}, {
				text: "TDD",
				weight: 8
			}, {
				text: "Python",
				weight: 14
			}, {
				text: "UX/UI Design",
				weight: 5
			}, {
				text: "node.js (raw - no framework)",
				weight: 7
			}, {
				text: "flask",
				weight: 10
			}, {
				text: "Deutsch",
				weight: 9
			}, {
				text: "Django",
				weight: 15
			}, {
				text: "Product Management",
				weight: 7
			}, {
				text: "AWS",
				weight: 11
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an ASP.NET Full-Stack Developer.", "love learning about code.", "specialize in custom built web apps.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
