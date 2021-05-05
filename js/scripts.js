$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const interestAnswer = parseInt($("input:radio[name=interest]:checked").val());
    const difficultyAnswer = parseInt($("input:radio[name=difficulty]:checked").val());
    const experienceAnswer = parseInt($("input:radio[name=experience]:checked").val());
    const foodAnswer = parseInt($("input:radio[name=food]:checked").val());
    const colorAnswer = parseInt($("input:radio[name=color]:checked").val());
    const answerTotal = interestAnswer + difficultyAnswer + experienceAnswer + foodAnswer + colorAnswer;

    if(answerTotal === 5) {
      $("#javascript").show().siblings().hide();
    } else if(answerTotal > 5 && answerTotal <= 10) {
      $("#css").show().siblings().hide();
    } else if(answerTotal > 10 && answerTotal <=15) {
      $("#html").show().siblings().hide();
    } else {
      $("#error").show().siblings().hide();
    }

    event.preventDefault();
  });
});