$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const interestAnswer = parseInt($("input:radio[name=interest]:checked").val());
    const difficultyAnswer = parseInt($("input:radio[name=difficulty]:checked").val());
    const experienceAnswer = parseInt($("input:radio[name=experience]:checked").val());
    const foodAnswer = parseInt($("input:radio[name=food]:checked").val());
    const colorAnswer = parseInt($("input:radio[name=color]:checked").val());

    
    event.preventDefault();
  });
});