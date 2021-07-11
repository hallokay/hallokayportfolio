//notibox 공지 지우기
const notiClose = document.getElementById('noti_closebtn'),
    notiBox = document.getElementById('notibox');

if(notiBox && notiClose) {
    notiClose.addEventListener('click', () => {
        notiBox.classList.add('dn');
    })
}




// 더 간단한 코드가 있는지 물어보기

// 액티브 함수 만들어보기 - 모듈


function activeList (lis, act) {

    const lists = document.querySelectorAll(lis);

    lists.forEach( l => {

        function activeLi (e) {
            const chooseLi = e.target;
            lists.forEach( l => {
                l.classList.remove(act);
            })

            chooseLi.classList.add(act);
        };

        l.addEventListener('click', activeLi);

    } )

};

// // HEADER 유틸 languege active
activeList('#langue a', 'fw_bold');
// 예약박스 액티브
activeList('.reserve_way', 'reserve_active');






// menu _ toggle

const navMenu = document.getElementById('nav_menu'),
    menuBtn = document.querySelector('.menu_btn'),
    closeBtn = document.getElementById('menu_closebtn');

if(navMenu && menuBtn) {

    function showMenu() {
        navMenu.classList.toggle('show_menu');
    }

    menuBtn.addEventListener('click',showMenu);
    closeBtn.addEventListener('click', showMenu)
}




 

