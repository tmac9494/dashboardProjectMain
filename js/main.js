
$(document).ready(function() {

//chart js
// ===============traffic chart(line)
function createLineChart(time) {
	var myTrafficChart = new Chart($('#traffic-chart'), {
		type: 'line',
		data:  {
			datasets: [{
				data: [
				{
					t:"2018-3-16",
					y: 250,
				},
				{
					t:"2018-3-22",
					y:750
				}, {
					t:"2018-3-29",
					y:1250
				}, {
					t:"2018-4-3",
					y:1000
				}, {
					t:"2018-4-9",
					y:1500
				}, {
					t:"2018-4-16",
					y:2000
				}, {
					t:"2018-4-23",
					y:1500
				}, {
					t:"2018-4-26",
					y:1750
				}, {
					t:"2018-5-3",
					y:1250
				}, {
					t:"2018-5-10",
					y:1750
				}, {
					t:"2018-5-17",
					y:2250
				}, {
					t:"2018-5-24",
					y:1750
				}, {
					t:"2018-5-31",
					y:2250
				}],
			}],
			// labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '23', '26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		},
	    options: {
	    	legend: {
	    		display:false
	    	},
	    	elements: {
	    		line: {
	    			tension:0,
	    			backgroundColor:'rgba(40,53,147,0.25)',
	    			borderColor: 'rgba(40,53,147,0.95)',
	    			borderWidth: '1px',
	    		},
	    		point: {
	    			backgroundColor: '#fafafa',
	    			borderColor: 'rgba(40,53,147,0.95)',
	    			borderWidth: '2',
	    			radius: '5',
	    			hoverRadius: '7',
	    		}
	    	},

	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true,
	                    max:2750,
	                    min:250,
	                    // suggestedMin: 500,
	                    stepSize: 500,
	                    // callback: function(value, index, values) {
	                    // 	if (value === 2750) {
	                    // 		return '';
	                    // 	} else {
	                    // 		return value + 250;
	                    // 	}
	                    // },

	                },
	            }],
	            xAxes: [{
	            	type: 'time',
	            	distribution: 'series',
	            	time: {
	            		unit: time,
	                    // max: new Date("2018-5-31"),
	                    // min: new Date("2018-3-16"),
	                    displayFormats: {week:'M-D'},
	                    bounds: 'data',
	                    ticks: {
	                    	source: 'data',
	                    },
	            	},
	            }]
	        }
	    }
	});
}
createLineChart('week');

//chart nav
$('.chart-nav li').click(function() {
	$('#traffic-chart').remove();
	$('.chart-nav').after('<canvas id="traffic-chart"></canvas>')
	createLineChart($(this).attr('data-time'));
})



//=================daily traffic chart(bar)


var myBarChart = new Chart($('#traffic-bar-chart'), {
	type: 'bar',
	data: {
		datasets: [{
			data: [
				{
					t: '2018-3-11',
					y: 75,
				},{
					t: '2018-3-12',
					y: 100,
				},{
					t: '2018-3-13',
					y: 175,
				},{
					t: '2018-3-14',
					y: 125,
				},{
					t: '2018-3-15',
					y: 225,
				},{
					t: '2018-3-16',
					y: 200,
				},{
					t: '2018-3-17',
					y: 100,
				}
			],
			backgroundColor: '#3949AB',
			radius: '5px',
		}],

	},
	options: {
		legend: {
			display:false
		},
		scales: {
			xAxes: [{
				type: 'time',
				time: {
					unit: 'day',
					displayFormats: {day:'dd',},
				},
				min: new Date('2018-3-11'),
				max: new Date('2018-3-17'), 
			}],
			yAxes: [{
				type: 'linear',
				ticks: {
					min: 25,
					max: 275,
					stepSize: 25,
				},
			}]
		}
	},
});








//=======================mobile-users(pie)


var myPieChart = new Chart($('#mobile-users-chart'), {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [123, 620, 225],
			backgroundColor: ['#6239ab','#3949AB','#3982ab']
		}],
		labels: ['tablet', 'phone', 'desktop']
	},
	options: {},
});







//---========================----main jS

		//notifications
		$('.notify').click(function() {
			$('.notifications').slideToggle();
		});

		$users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
		//form
		$('.message input[type="text"]').keyup(function() {
			$('.user-preview-usr').remove();
			for (i = 0; i < $users.length; i += 1) {
				if ($users[i].toLowerCase().indexOf($('.message input[type="text"]').val().toLowerCase()) >= 0) {
					$('.user-preview').append('<div class="user-preview-usr"><p>'+ $users[i] +'</p></div>');
				}
			}
		});
		$('.user-preview-usr p').click(function() {
			console.log('click');
			$('.message input[type="text"]').val($(this).text());
		});
		$('.message input[type="submit"]').click(function(e) {
			e.preventDefault();
			if ($('.message input[type="text"]').val() === '') {
				$('.user-error').hide();
				$('.message input[type="text"]').after('<div class="error user-error"><p>This user does not exist.</p></div>');
			} else if ($('.message textarea').val() === '') {
				$('.user-error').hide();
				$('.message-error').hide();
				$('.message textarea').after('<div class="error message-error"><p>Please type a message.</p></div>');
			} else {
				//this is where i would write AJAX to send the form
				$('.message form').hide();
				$('.message .sect-title').after('<div class="success">Your message has been sent.</div>');
			}
		});
		// alert 
		$('.alert-exit').click(function() {
			$(this).parent().parent().fadeOut();
		});

		// if ($(window).width() <768) {
		// 	$('.chart')
		// }

		//-----------------------------fade-ins
		//new fade-ins***
		//make divs invisible
		// $('.t-fade-in').css('opacity','0');
		$windowHalfMark = $(window).height() / 1.25;
		$tFadeSpeed = '.75s';
		$tFadeDirection = 'up';
		function tFadeDirection(element) {
			if ($(element).attr('data-direct')) {
				return $(element).attr('data-direct');
			} else {
				return 'up'
			}
		}
		function tFadeSpeed(element) {
			if ($(element).attr('data-speed')) {
				return $(element).attr('data-speed');
			} else {
				return '.85s'
			}
		}
		function tFadeDelay(element) {
			if ($(element).attr('data-delay')) {
				return '' + $(element).attr('data-delay') * .35 + 's' ;
			} else {
				return '0s';
			}
		} 


		//set data attribut of distance from top
		$('.t-fade-in').each(function() {
			$(this).attr('data-offset', Math.floor($(this).offset().top - $windowHalfMark));	
		});
		$(window).on('load', function() {
			$('.t-fade-in').each(function() {
				$(this).attr('data-offset', Math.floor($(this).offset().top - $windowHalfMark));	
			});
		});


		$tWindowPosition = Math.floor($(document).scrollTop());
		$navHeightDiff = $('header').height() - $tWindowPosition;
		if ($tWindowPosition === 0) {$navHeightDiff = $('header').height() + 31.6;}
		else if ($navHeightDiff <= 0) {$navHeightDiff = 0;}
		$('nav').css('top', $navHeightDiff);

		
		$(document).scroll(function() {
		$tWindowPosition = Math.floor($(document).scrollTop());
			//change-header on scroll
			if ($tWindowPosition > 0) {
				$('header').addClass('scrolled-header');
			} else {
				$('header').removeClass('scrolled-header');
			}


			// fix nav height
			$navHeightDiff = $('header').height() - $tWindowPosition;
			if ($tWindowPosition === 0) {$navHeightDiff = $('header').height() + 31.6;}
			else if ($navHeightDiff <= 0) {$navHeightDiff = 0;}
			$('nav').css('top', $navHeightDiff);


			$('.t-fade-in').each(function(i,v) {
					if ($(window).width() >= 768) {
						if ($(this).attr('data-offset') <= $tWindowPosition || $(window).scrollTop() + $(window).height() == $(document).height()) {
								$(this).css('animation','fade-'+ tFadeDirection(v) +' '+ tFadeSpeed(v) +' ease-out '+ tFadeDelay(v) +' forwards');
						}
						
					} else {
						//show if at bottom of page
						if ($(this).attr('data-offset') <= $tWindowPosition || $(window).scrollTop() + $(window).height() == $(document).height()) {
								$(this).css('animation','fade-'+ tFadeDirection(v) +' '+ tFadeSpeed(v) +' ease-out forwards');
						}
					}
			});
		});
		$(window).ready(function() {
			$('.t-fade-in').each(function(i,v) {
				if ($(this).hasClass('load-fade')) {
					$(this).css('animation','fade-'+ tFadeDirection(v) +' '+ tFadeSpeed(v) +' ease-out '+ tFadeDelay(v) +' forwards');
				}
			});
		});


});