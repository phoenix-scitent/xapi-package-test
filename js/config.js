var CONFIG = (function(){

  var branding = {};

  var information = {
    id: 'http://aaas-review.scitent.us/reading-in-the-science-classroom',
    title: 'Reading In The Science Classroom',
    name: 'Reading In The Science Classroom'
  };

  var lmsData = {
    plans: {},
    poll: {}
  };

  return {
    information: information,
    lmsData: lmsData
  }

}());

jQuery(document).on('tincan::ready', function(){

  //////////////////
  // SESSION DATA //
  //////////////////

    var _PLAN_DATA = {};

  ///////////////
  // LIFECYCLE //
  ///////////////

    jQuery(document).on('activity::setup', function(event, state){

      ////////////
      // TINCAN //
      ////////////

      jQuery(document).trigger('tincan::start');

      /////////////////
      // ACTION PLAN //
      /////////////////

      $(document).trigger('tincan::getActionPlanData', ['action-plan-1', function(plans){

        //TODO: relying on this completing before user leaves first page... may need more complex logic to handle embeds

        Actionplan.configure({
          events: jQuery(document),
          resume: plans
        });

      }]);

      $(document).on('actionplan::update', function(event, planId, questionId, response, PLANS){

        _PLAN_DATA[planId] = PLANS;

      });

      /////////////
      // POLLING //
      /////////////

      Pollr.configure({
        events: jQuery(document)
      });

      Pollr.init({
        'poll-1-version-1': {
          name: 'Poll 4',
          question: '<h1 class="text-center purple-txt">Do you rely solely on a textbook(s) when teaching science in your classroom/lab?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            }
          },
          answer: {
            type: 'chart'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page3'])
          }
        },
        'poll-1-version-2': {
          name: 'Poll 5',
          question: '<h1 class="text-center purple-txt">Do you incorporate science trade books into your science classroom?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            }
          },
          answer: {
            type: 'chart'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page4'])
          }
        },
        'poll-1-version-4': {
          name: 'Poll 7',
          question: '<h1 class="text-center purple-txt">If you do use science trade books, how do you tie them into your classroom lessons?</h1>',
          input: {
            type: 'text',
            placeholder: 'Please enter your answer here'
          },
          markup: {
            back: {
              expertAnswer: '<div class="row smee-poll-txt">'+
                            '<div class="col-lg-2">'+
                            '<img src="images/author.png" class="avatar-img-feedback">'+
                            '</div>'+
                            '<div class="col-lg-10">'+
                            '<h3 class="text-left">Smee: text lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam urna fringilla, pretium risus ac, scelerisque libero. Donec est elit, lobortis eget lectus a, vulputate vulputate velit. Donec fermentum auctor dui, sit amet blandit ex elementum at. Maecenas at semper lectus, vitae efficitur enim.</h3>'+
                            '</div>'+
                            '</div>',
              yourAnswer:   '<div class="row your-answer-poll-txt">'+
                            '<div class="col-lg-12">'+
                            '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                            '</div>'+
                            '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'listing',
            expert: 'SMEE text here...'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page6'])
          }
        },
        'poll-2-version-1': {
          name: 'Poll 10',
          question: '<h1 class="text-center purple-txt">Has your state/school district adopted the common core? and/ or NGSS?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'chart'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page12'])
          }
        },
        'poll-2-version-2': {
          name: 'Poll 11',
          question: '<h1 class="text-center purple-txt">Does your school district curriculum require that you incorporate informational texts into your school district\'s science reading curriculum?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'chart'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page13'])
          }
        },
        'poll-2-version-3': {
          name: 'Poll 12',
          question: '<h1 class="text-center purple-txt">Does your school district curriculum require that you incorporate informational (or more specifically science) texts into your school district’s math curriculum?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'chart'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page14'])
          }
        },
        'poll-2-version-4': {
          name: 'Poll 13',
          question: '<h1 class="text-center purple-txt">Does your school district curriculum require that you incorporate informational (or more specifically science) texts into your school district’s science curriculum?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'chart'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page15'])
          }
        },
        'poll-3-version-1': {
          name: 'Poll 17',
          question: '<h1 class="text-center purple-txt">How similar is your school district science curriculum to the curriculum outlined on the Atlas concept maps?</h1>',
          input: {
            type: 'text',
            placeholder: 'Please enter your answer here'
          },
          markup: {
            back: {
              expertAnswer: '<div class="row smee-poll-txt">'+
                            '<div class="col-lg-2">'+
                            '<img src="images/author.png" class="avatar-img-feedback">'+
                            '</div>'+
                            '<div class="col-lg-10">'+
                            '<h3 class="text-left">Smee: text lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam urna fringilla, pretium risus ac, scelerisque libero. Donec est elit, lobortis eget lectus a, vulputate vulputate velit. Donec fermentum auctor dui, sit amet blandit ex elementum at. Maecenas at semper lectus, vitae efficitur enim.</h3>'+
                            '</div>'+
                            '</div>',
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'listing',
            expert: 'SMEE text here...'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page21'])
          }
        },
        'poll-3-version-3': {
          name: 'Poll 19',
          question: '<h1 class="text-center purple-txt">What kind of selection process is used in your school building/district to select high quality informational texts and science trade books?</h1>',
          input: {
            type: 'text',
            placeholder: 'Please enter your answer here'
          },
          markup: {
            back: {
              expertAnswer: '<div class="row smee-poll-txt">'+
                            '<div class="col-lg-2">'+
                            '<img src="images/author.png" class="avatar-img-feedback">'+
                            '</div>'+
                            '<div class="col-lg-10">'+
                            '<h3 class="text-left">Smee: text lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam urna fringilla, pretium risus ac, scelerisque libero. Donec est elit, lobortis eget lectus a, vulputate vulputate velit. Donec fermentum auctor dui, sit amet blandit ex elementum at. Maecenas at semper lectus, vitae efficitur enim.</h3>'+
                            '</div>'+
                            '</div>',
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'listing',
            expert: 'SMEE text here...'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page23'])
          }
        },
        'poll-3-version-4': {
          name: 'Poll 20',
          question: '<h1 class="text-center purple-txt">Have you ever read and used reviews to select science trade books?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'chart',
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page24'])
          }
        },
        'poll-3-version-5': {
          name: 'Poll 21',
          question: '<h1 class="text-center purple-txt">Do reading specialists and science teachers in your building collaborate to find high quality science trade books which could be used as informational texts in the reading classroom and for content information in the science classroom?</h1>',
          input: {
            type: 'button',
            choices: [
              {value: 'Yes', element: 'a', classes: 'btn btn-main btn-lg inline-pad'},
              {value: 'No', element: 'a', classes: 'btn btn-main btn-lg inline-pad'}
            ]
          },
          markup: {
            back: {
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'chart',
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page25'])
          }
        },
        'poll-4-version-2': {
          name: 'Poll 24',
          question: '<h1 class="text-center purple-txt">What are the basic reading skills you expect your students to master at the end of primary school?</h1>',
          input: {
            type: 'text',
            placeholder: 'Please enter your answer here'
          },
          markup: {
            back: {
              expertAnswer: '<div class="row smee-poll-txt">'+
                            '<div class="col-lg-2">'+
                            '<img src="images/author.png" class="avatar-img-feedback">'+
                            '</div>'+
                            '<div class="col-lg-10">'+
                            '<h3 class="text-left">Smee: text lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam urna fringilla, pretium risus ac, scelerisque libero. Donec est elit, lobortis eget lectus a, vulputate vulputate velit. Donec fermentum auctor dui, sit amet blandit ex elementum at. Maecenas at semper lectus, vitae efficitur enim.</h3>'+
                            '</div>'+
                            '</div>',
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'listing',
            expert: 'SMEE text here...'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page30'])
          }
        },
        'poll-4-version-3': {
          name: 'Poll 25',
          question: '<h1 class="text-center purple-txt">How do these skills prep them for reading at the middle school level?</h1>',
          input: {
            type: 'text',
            placeholder: 'Please enter your answer here'
          },
          markup: {
            back: {
              expertAnswer: '<div class="row smee-poll-txt">'+
                            '<div class="col-lg-2">'+
                            '<img src="images/author.png" class="avatar-img-feedback">'+
                            '</div>'+
                            '<div class="col-lg-10">'+
                            '<h3 class="text-left">Smee: text lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam urna fringilla, pretium risus ac, scelerisque libero. Donec est elit, lobortis eget lectus a, vulputate vulputate velit. Donec fermentum auctor dui, sit amet blandit ex elementum at. Maecenas at semper lectus, vitae efficitur enim.</h3>'+
                            '</div>'+
                            '</div>',
              yourAnswer: '<div class="row your-answer-poll-txt">'+
                          '<div class="col-lg-12">'+
                          '<h3 class="text-center"><span class="blue-txt">Your answer:</span> <span data-pollr-your-answer></span></h3>'+
                          '</div>'+
                          '</div>',
              continue: '<a data-pollr-continue class="btn btn-main btn-lg inline-pad">Continue</a>'
            },
            front: {
              submission: '<a data-pollr-submission class="btn btn-main btn-lg inline-pad">Submit</a>'
            }
          },
          answer: {
            type: 'listing',
            expert: 'SMEE text here...'
          },
          changeType: 'standard', // flip
          continue: function () {
            $(document).trigger('hucklebuck', ['page31'])
          }
        }
      });

      jQuery(document).on('poll::submitted', function(event, poll, polls, identifier, type, question, submission){
        $(document).trigger('tincan::polled', [ identifier, type, question, submission ]);
      });

      ///////////
      ///PAGES///
      ///////////

      var getData = function(identifier, callback){

        // local or tincan STUB \\
        setTimeout(function(){

          var mydata = {
            'poll-1-version-1': null,
            'poll-1-version-2': null,
            'poll-1-version-4': null,
            'poll-2-version-1': null,
            'poll-2-version-2': null,
            'poll-2-version-3': null,
            'poll-2-version-4': null,
            'poll-3-version-1': null,
            'poll-3-version-3': null,
            'poll-3-version-4': null,
            'poll-3-version-5': null,
            'poll-4-version-2': null,
            'poll-4-version-3': null,
          };

          var theirdata = {
            'poll-1-version-1': [{ value: 'Yes' }, { value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'Yes' }],
            'poll-1-version-2': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'Yes' }, { value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'Yes' }, { value: 'Yes' }, { value: 'Yes' }],
            'poll-1-version-4': [{ value: 'show all peer responses if > ~20?' }],
            'poll-2-version-1': [{ value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'Yes' }],
            'poll-2-version-2': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }],
            'poll-2-version-3': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }],
            'poll-2-version-4': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }],
            'poll-3-version-1': [{ value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'No' }, { value: 'Yes' }],
            'poll-3-version-3': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }],
            'poll-3-version-4': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }],
            'poll-3-version-5': [{ value: 'show all peer responses if > ~20?' }],
            'poll-4-version-2': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }],
            'poll-4-version-3': [{ value: 'Yes' }, { value: 'Yes' }, { value: 'No' }, { value: 'No' }]
          };

          callback({ submission: mydata[identifier], submissions: theirdata[identifier] });

        }, 1000)
      };

      $(document).on('hucklebucked', function(event, contentId){
        if(contentId === 'page2'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-1-version-1', function(data){
            Pollr.embed({poll: 'poll-1-version-1', mount: '#button-poll', data: data });
          }]);
        } else if(contentId === 'page3'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-1-version-2', function(data){
            Pollr.embed({poll: 'poll-1-version-2', mount: '#button-poll-2', data: data });
          }]);
        } else if(contentId === 'page4'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you incorporate science trade books into your lessons to augment content in your classroom/lab?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 1: Introduction']
              }
            },
            mount: '#action-plan-1'
          });
        } else if(contentId === 'page5'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-1-version-4', function(data){
            Pollr.embed({poll: 'poll-1-version-4', mount: '#button-poll-4', data: data });
          }]);
        } else if(contentId === 'page6'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you incorporate trade books into your current science lessons to augment content teaching?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 1: Introduction']
              }
            },
            mount: '#action-plan-2'
          });
        } else if(contentId === 'page7'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you use science trade books to meet your current district science standards?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 1: Introduction']
              }
            },
            mount: '#action-plan-3'
          });
        } else if(contentId === 'page11'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-2-version-1', function(data){
            Pollr.embed({poll: 'poll-2-version-1', mount: '#button-poll-7', data: data });
          }]);
        } else if(contentId === 'page12'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-2-version-2', function(data){
            Pollr.embed({poll: 'poll-2-version-2', mount: '#button-poll-8', data: data });
          }]);
        } else if(contentId === 'page13'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-2-version-3', function(data){
            Pollr.embed({poll: 'poll-2-version-3', mount: '#button-poll-9', data: data });
          }]);
        } else if(contentId === 'page14'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-2-version-4', function(data){
            Pollr.embed({poll: 'poll-2-version-4', mount: '#button-poll-10', data: data });
          }]);
        } else if(contentId === 'page15'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you “bundle” school district science, math and ELA standards together at the grade(s) level you currently teach?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 2: Science Concept Maps']
              }
            },
            mount: '#action-plan-4'
          });
        } else if(contentId === 'page16'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'List several “content-rich texts” (preferably science trade books and excluding a textbook) that would be appropriate to teach the convergence of bundled standards in #5 above.',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 2: Science Concept Maps']
              }
            },
            mount: '#action-plan-5'
          });
        } else if(contentId === 'page17'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-2-version-7', function(data){
            Pollr.embed({poll: 'poll-2-version-7', mount: '#button-poll-13', data: data });
          }]);
        } else if(contentId === 'page20'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-3-version-1', function(data){
            Pollr.embed({poll: 'poll-3-version-1', mount: '#button-poll-14', data: data });
          }]);
        } else if(contentId === 'page21'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'List science books you have read in the past that correspond to the concepts on the map.',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 3: Science Trade Books']
              }
            },
            mount: '#action-plan-6'
          });
        } else if(contentId === 'page22'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-3-version-3', function(data){
            Pollr.embed({poll: 'poll-3-version-3', mount: '#button-poll-16', data: data });
          }]);
        } else if(contentId === 'page23'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-3-version-4', function(data){
            Pollr.embed({poll: 'poll-3-version-4', mount: '#button-poll-17', data: data });
          }]);
        } else if(contentId === 'page24'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-3-version-5', function(data){
            Pollr.embed({poll: 'poll-3-version-5', mount: '#button-poll-18', data: data });
          }]);
        } else if(contentId === 'page25'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'What are some things you  could you and your science & reading colleagues build a district-wide library collection of high quality science trade books to enhance both reading and science skills and content at the grade(s) level you teach?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 3: Science Trade Books']
              }
            },
            mount: '#action-plan-7'
          });
        } else if(contentId === 'page28'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'What kinds of high quality science trade books will you look for to fulfill both the needs of Reading to Learn and teaching quality science content?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 4: Reading To Learn']
              }
            },
            mount: '#action-plan-8'
          });
        } else if(contentId === 'page29'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-4-version-2', function(data){
            Pollr.embed({poll: 'poll-4-version-2', mount: '#button-poll-21', data: data });
          }]);
        } else if(contentId === 'page30'){
          //$('html,body').scrollTop(0);
          $(document).trigger('tincan::getPollData', ['poll-4-version-3', function(data){
            Pollr.embed({poll: 'poll-4-version-3', mount: '#button-poll-22', data: data });
          }]);
        } else if(contentId === 'page31'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'What kind of dialog should be promoted between reading specialists and science teachers in your school/district?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 4: Reading To Learn']
              }
            },
            mount: '#action-plan-9'
          });
        } else if(contentId === 'page33'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you implement Science in the Classroom articles in your upper level science courses?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 4: Reading To Learn']
              }
            },
            mount: '#action-plan-10'
          });
        } else if(contentId === 'page34'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you use the Science in the Classroom to introduce student production of annotated bibliographies?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 4: Reading To Learn']
              }
            },
            mount: '#action-plan-11'
          });
        } else if(contentId === 'page35'){
          //$('html,body').scrollTop(0);
          Actionplan.embed({
            plan: {
              id: 'action-plan-1',
              title: 'action-plan-1'
            },
            element: {
              type: 'question',
              meta: {
                text: 'How could you use the journal Science to introduce student production of annotated bibliographies?',
                markup: '<h1 class="purple-txt text-center pad-bottom" data-actionplan-question-text></h1>',
                context: ['Section 4: Reading To Learn']
              }
            },
            mount: '#action-plan-12'
          });
        } else {}
      });

    });

    jQuery(document).on('activity::breakdown', function(event, state){

      for(planId in _PLAN_DATA){
        jQuery(document).trigger('tincan::actionPlanUpdate', [ planId, _PLAN_DATA[planId] ]);
      }

      ////////////
      // TINCAN //
      ////////////

      jQuery(document).trigger('tincan::storeAttemptState', [ state ]);

    });

    $(document).trigger('activityReady');

  //////////////
  // SECTIONS //
  //////////////

  // pull them in from index, ONLY global setup/breakdown no section specific
  // pull in from index only if referenced, if no index at reference then use local html, or throw error page

});