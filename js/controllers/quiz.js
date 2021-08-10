(function(){

    
    angular
        .module("bilsoftQuiz")
        .controller("quizCtrl", QuizController);

    
    QuizController.$inject = ['quizMetrics', 'DataService'];

    
    function QuizController(quizMetrics, DataService){

        var vm = this;

        
        vm.quizMetrics = quizMetrics; 
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered; // adlandırılmış bir fonksiyon
        vm.setActiveQuestion = setActiveQuestion; 
        vm.selectAnswer = selectAnswer; 
        vm.finaliseAnswers = finaliseAnswers; 
        
        vm.activeQuestion = 0; // testteki cevaplanmayan soru soru ( indis )
        vm.error = false; // kullanıcının boş soru bırakmasını engellemek için tanımlanan bayrak
        vm.finalise = false; //testi bitirmek ve sonuçları görüntülemek için tanımlandı
                   

        var numQuestionsAnswered = 0; // cevaplanmış soruların sayacı

        
        function setActiveQuestion(index){ // tüm sorular bitince cevaplanmayanmayan ilk soruya geçen,
                                           // her soru cevaplanıncada testi bitiren fonksiyon            
            if(index === undefined){
                var breakOut = false;

              
                var quizLength = DataService.quizQuestions.length - 1;

                
                while(!breakOut){
                    
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                   
                    if(vm.activeQuestion === 0){
                        vm.error = true;
                    }

                    
                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }else{
                
                vm.activeQuestion = index;
                
            }

        }

        
        function questionAnswered(){ // soruların cevaplanıp cevaplanmadığını kontrol eder
            
            var quizLength = DataService.quizQuestions.length;
            
            numQuestionsAnswered = 0;
           
            for(var x = 0; x < quizLength; x++){
                if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    
                    if(numQuestionsAnswered >= quizLength){
                        // testi bitirme koşulu
                        for(var i = 0; i < quizLength; i++){
                            
                            if(DataService.quizQuestions[i].selected === null){
                                setActiveQuestion(i);
                              
                                return;
                            }
                        }
                        
                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }
                }
            }

            
            vm.setActiveQuestion();
            
        }
        
        
        function selectAnswer(index){ //cevabı seçer
            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

        
        function finaliseAnswers(){ // test sonucunu gösterir
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
    }

})();
