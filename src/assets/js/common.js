(function (){
    window.onload = function() {
        document.addEventListener('click', clickHandler);

        $('.partners__list').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    }
                },
            ]
        })

        $('.performances__slider-track').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                },
            ]
        })

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