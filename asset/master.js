let _li = document.querySelectorAll("ul li")
    let _div = document.querySelectorAll('article')
    let _img = document.querySelectorAll('img')


    _li[0].classList.toggle("white");
    _div[0].classList.toggle('show');
    _img[0].classList.toggle('show');

    for (i = 0; i < _li.length; i++) {
        _li[i].setAttribute('data-index', i)
    }


    _li.forEach((s) => {
        s.addEventListener('click', ()=>{
            let index = s.getAttribute('data-index')

            for (i = 0; i < _li.length; i++) {
                _li[i].classList.remove("white");
                _div[i].classList.remove('show');
                _img[i].classList.remove('show');
            }

            _li[index].classList.add("white");
            _div[index].classList.add('show');
            _img[index].classList.add('show');

        })

    })