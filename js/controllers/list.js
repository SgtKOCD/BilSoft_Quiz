(function(){
    
    angular
        .module("bilsoftQuiz")
        .controller("listCtrl", ListController);
    
    
    ListController.$inject = ['quizMetrics', 'DataService'];

    
    function ListController(quizMetrics, DataService){
        var vm = this;

        /*

        Aşağıdaki değişken ve fonksiyonların tamamı testin kontrolünü oluştururlar

         */
        vm.quizMetrics = quizMetrics; 
        vm.data = DataService.egitimData;
        vm.activeEgitim = {};
        vm.changeActiveEgitim = changeActiveEgitim;
        vm.activateQuiz = activateQuiz;
        vm.search = "";

        function changeActiveEgitim(index){
            
            // sonraki soru datasına ulaşmak için aktif
            
            vm.activeEgitim = index;
        }

        function activateQuiz(){
           
            //changeState durum değiştirir. yani kullanıldığında durum true ise false olur. false ise true.
            
            quizMetrics.changeState("quiz", true);
        }
    }


})();
