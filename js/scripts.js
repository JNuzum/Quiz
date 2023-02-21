const questions =[['What color is the sky?','blue'], ['if the bus has 10 kids and 4 got off how many kids are left on the bus?', '6'],['What year did the Miami Dolphins go undefeated?', '1972'],]
var questionNo = 1;
var score = 0;

function clickButton(){
    check();
   questions.shift();
   questionNo++;
   setup();

}

function setup(){
    if(questions.length !=0){

    document.getElementById("question").innerHTML = questions[0][0];
    document.getElementById('questionNo').innerHTML = "Question" + questionNo;
}
else{
    document.getElementById('questionNo').innerHTML = 'Youre Done!';
    document.getElementById('question').innerHTML = 'Your score is: ' + score;
    document.getElementById9('text-field').remove();
    document.getElementById('buton').remove();
}

    }

    function check(){
        if(document.getElementById('text-field').value == questions[0][1]){
            console.log('correct');
            score++;
            document.getElementById('text-field').value ='';
            
        }
    }
    