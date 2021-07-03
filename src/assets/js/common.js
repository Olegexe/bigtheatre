(function (){
    window.onload = function() {
        document.addEventListener('click', clickHandler);

        function clickHandler(e) {
            let target = e.target;

             if(target.classList.contains('burger__button')) {
                target.parentNode.querySelector('.burger__body').classList.toggle('burger__body_active');
                document.body.classList.toggle('_lock')
             }

             if(target.classList.contains('burger__close-btn')) {
                target.parentNode.classList.toggle('burger__body_active');
                document.body.classList.toggle('_lock')
             }

             if(!getParents(target, '.burger')) {
                document.querySelector('.burger__body').classList.remove('burger__body_active');
                document.body.classList.remove('_lock')
             }

            function getParents(el, selector) {
                let parents = [];
                while((el = el.parentNode) && el !== document) {
                    (!selector || el.matches(selector)) && parents.push(el);
                }

                return parents.length <= 0 ? false : parents;
            } 
        }
    }
})();