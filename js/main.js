var grid;

// Our servise
(function ($) {
    $(function () {

        $('div.our-services-list').on('click', 'div:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.our-services').find('div.our-services-content').hide().removeClass('active')
                .eq($(this).index()).addClass('active').fadeIn(400);
        });
    });
})($);

// Our Amazing Work

var counter = 0 // to count button clicks
$('#but1').on('click', function () {
    counter++;
    if (counter == 1) {
        $('#but1').css('visibility', 'hidden')
        $('.loader').css('display', 'block')
        $('.loader').append(`
					<div class="animation-wrapper">
			<div class = "centered">
					<div class = "animate-block"></div>
				</div>
			</div>

	`)
        setTimeout(function () {
            $('.gallery-container').css('maxHeight', '1200px')
            $('#but1').css('visibility', 'visible')
            $('.loader').css('display', 'none')
        }, 5000)
    }
    else {
        $('#but1').css('visibility', 'hidden')
        $('.loader').css('display', 'block')
        $('.loader').append(`
					<div class="animation-wrapper">
			<div class = "centered">
					<div class = "animate-block"></div>
				</div>
			</div>

	`)
        setTimeout(function () {
            $('.gallery-container').css('maxHeight', '1800px')
            $('#but1').css('display', 'none')
            $('.loader').css('display', 'none')
        }, 5000)
    }
})

function filter() {
    function filterTarget(target) {
        var fActive = 'all';
        if (counter == 0 && fActive != target) {
            $('.sort').hide().filter(':not(.' + target + ')');
            $('.sort:lt(12)').filter('.' + target).fadeIn();
            fActive = target;
        }
        else if (counter == 1 && fActive != target) {
            $('.sort').hide().filter(':not(.' + target + ')');
            $('.sort:lt(24)').filter('.' + target).fadeIn();
            fActive = target;
        }
        else {
            if (fActive != target) {
                $('#but1').css('display', 'none')
                $('.sort').hide().filter(':not(.' + target + ')');
                $('.sort:lt(36)').filter('.' + target).fadeIn();
                fActive = target;
            }
        }
    }

    $('.amazing-list div').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.f-graphic').click(function () {
        filterTarget('graphic');
        $('#but1').css('display', 'none')
        $('.gallery-container').css('overflow', 'hidden')
    });
    $('.f-web').click(function () {
        filterTarget('web');
        $('#but1').css('display', 'none')
    });
    $('.f-landing').click(function () {
        filterTarget('landing');
        $('#but1').css('display', 'none')
    });
    $('.f-wordpress').click(function () {
        filterTarget('wordpress');
        $('#but1').css('display', 'none')
    });
    $('.f-all').click(function () {
        if (counter != 2) {
            $('#but1').css('display', 'block')
        }
        filterTarget('all');
        $('.sort').fadeIn(400);
        fActive = 'all';
    });
}

filter()

$('.gallery-item').mouseover(function () {
    var text = this.classList[2];// text for inner in the hover-div
    $(this).append(`<div class="img-hover">
						<div class="elipse-1">
							<img src="images/icons/Forma1.png">
						</div>
						<div class="elipse-2">
							<i class="fas fa-search"></i>
						</div>
						<div class="text-container">
							<div class="text-1">${text}</div>
							<div class="text-2">${text}</div>
						</div>
					</div>`)

});

$('.gallery-item').mouseleave(function () {
    $(this).find('.img-hover').remove();
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel-container'
});

$('.carousel-container').slick({
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    prevArrow: '<button class="prev-but"> < </button>',
    nextArrow: '<button class="next-but"> > </button>',
    variableWidth: true,
    draggable: false,
    cssEase: 'linear',
    speed: 550
});

setTimeout(function () {
    var grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 40
    })
}, 1000)

$('#but2').on('click', function () {

    $('.loader').css('display', 'block')
    $('.loader').append(`
					<div class="animation-wrapper">
			<div class = "centered">
					<div class = "animate-block"></div>
				</div>
			</div>
	`)

    var elems = `	
				<div class="grid-item grid-block-6">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/gallery17.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/gallery18.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/gallery19.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/gallery20.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/gallery21.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/gallery22.jpg">
				</div>
			
			  <div class="grid-item">
			  	<img class="grid-item--width5 grid-item--height5" src="images/Gallery of best images/gallery23.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height5" src="images/Gallery of best images/gallery24.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--height3 grid-item--width4" src="images/Gallery of best images/gallery25.jpg">
			  </div>
			
			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height5" src="images/Gallery of best images/gallery26.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width5 grid-item--height5" src="images/Gallery of best images/gallery27.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--height3 grid-item--width4" src="images/Gallery of best images/gallery28.jpg">
			  </div>
				<div class="grid-item">
			  		<img class="grid-item--width4 grid-item--height5" src="images/Gallery of best images/gallery29.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--height3 grid-item--width4" src="images/Gallery of best images/gallery30.jpg">
			  </div>
				`;
    var elems = $(elems);
    setTimeout(function () {
        var grid = $('.grid');
        grid.append(elems).masonry('appended', elems).masonry();
        gridItemHov();
        $('.section-7').css('padding-bottom', '0px')
        $('.loader').css('display', 'none')
    }, 5000, elems)

    $('#but2').css('visibility', 'hidden')
});

function gridItemHov() {
    $('.grid-item img').mouseenter(function () {
        var offset = $(this).offset()
        var width = $(this).width()
        var height = $(this).height()
        $('.grid-item-hover').css('display', 'grid')
        $('.grid-item-hover').offset(offset).width(width).height(height)
    });

    $('.grid-item-hover').mouseleave(function () {
        $('.grid-item-hover').css('display', 'none')
        $(this).css('left', '-9000px')

    });
}

gridItemHov()

$('.link-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 2000)
})