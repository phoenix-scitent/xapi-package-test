$(document).on('activityReady', function(){

	var progress = { pages: {}, lastPage: null };

  $(document).trigger('activity::setup', [ progress ]);

	var updateNav = function(){
		Object.keys(progress.pages).forEach(function(slideId){
		$('li').children('[data-nav="'+slideId+'"]').children('i').removeClass('fa-circle-thin fa-question-circle-o').addClass('fa').addClass('green-txt fa-check-circle')	
		})
	};

  var slides = $('[data-type="slide"]').map(function(index, element){
    return { name: $(element).attr('data-name'), id: $(element).attr('id')}
  });

  slides.each(function(index, slide){
    $('#mount-list').append('<li class="cust-btn" data-target="'+slide.id+'"><i></i> ' + slide.name + '</li>')
  });

	var updateProgress = function(contentId){
		progress['pages'][contentId] = 'visited';
		progress['lastPage'] = contentId;
		updateNav();
	};

	var swapContent = function(newContentId){
		$('#content-container').html($('#' + newContentId).html())
	};

  var hucklebuck = function(contentId){
    swapContent(contentId);
    updateProgress(contentId);
    $(document).trigger('hucklebucked', [contentId]);
    $('html,body').scrollTop(0);
    $(document).trigger('home-height');
  };

  hucklebuck('page1');

  $(document).on('hucklebuck', function(event, contentId){
    hucklebuck(contentId)
  });

  $(document).on('resumeProgress', function(e, resumedCompletionState){
    hucklebuck(resumedCompletionState['lastPage']);
    progress = resumedCompletionState;
    updateNav();
  });

  $(document).on('click','[data-nav]', function(event){
    var next = $(event.target).closest('[data-nav]').attr('data-nav');
    $(document).trigger('hucklebuck', [next]);
  });

  $(document).on('click','#next-up', function(event){
    var next = $(event.target).attr('data-next-up');
    $(document).trigger('hucklebuck', [next]);
  });

	$(document).on('click', '.cust-btn', function(event){
    var $target = $(event.currentTarget);
    var contentId = $target.attr('data-target');
    hucklebuck(contentId);
  });

	$(document).on('click','#trump', function(event){
		$(document).trigger('tincan::complete');
		window.close()
	});

	window.onbeforeunload = function(event) {
    $(document).trigger('activity::breakdown', [ progress ]);
    return null;
	};

});