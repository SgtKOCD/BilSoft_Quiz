(function(){

    
    angular
        .module("bilsoftQuiz")
        .factory("quizMetrics", QuizMetrics); 

        /*
        Fabrika İşlevi, yapıcı işlevlere/sınıf işlevlerine benzer,
        ancak bir nesne oluşturmak için new işlevini kullanmak yerine fabrika işlevleri yalnızca bir nesne oluşturur ve onu döndürür.
        Fabrika İşlevleri, JavaScript'te çok kullanışlı bir araçtır.
        JavaScript'teki Fabrika İşlevleri: 
        -Yapıcı işlevlere/sınıf işlevlerine benzer,
        ancak iç değerler için ' this ' anahtar sözcüğünün kullanılmasını 
        veya yeni nesneler başlatılırken ' new ' anahtar sözcüğünün kullanılmasını gerektirmezler.
        -Fabrika İşlevleri, normal normal işlevler gibi iç değerler, yöntemler vb. içerebilir.
        -Fabrika İşlevleri, her zaman herhangi bir değer, yöntem vb. içeren bir nesne döndürdükleri için normal işlevlerden farklıdır.
        */ 

        QuizMetrics.$inject = ['DataService'];

        
        function QuizMetrics(DataService){

            
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState, 
                correctAnswers: [],
                markQuiz: markQuiz, 
                numCorrect: 0
            };

            
            return quizObj;

            /*

            burda cevaplarla durumun değişme işlemi gerçekleştirilir.
             
             */
            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                }else if(metric === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }
            }

            
             /*
            markQuiz fonksiyonu cevap karşılaştırması yapacaktır ve bunu correctte belirtecektir
             */
             
            function markQuiz(){
                quizObj.correctAnswers = DataService.correctAnswers;
                for(var i = 0; i < DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                        DataService.quizQuestions[i].correct = true;
                        quizObj.numCorrect++;
                    }else{
                        DataService.quizQuestions[i].correct = false;
                    }
                }
            }

        }

})();
