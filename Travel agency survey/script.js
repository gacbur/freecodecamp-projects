//  navbar 
const openBtn = document.querySelector('#openBtn');
const menuMobile = document.querySelector('nav ul');

openBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('openMenu');
});

// navbar end

// login modal

const logsignBtns = document.querySelectorAll('.logbtns');

logsignBtns.forEach((logsignBtn) => {
    logsignBtn.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget;
        if (currentBtn.classList.contains('LogIn')) {
            modal.classList.add('on');
            if (modal.classList.contains('off')) {
                modal.classList.remove('off');
            }
            logBtnchoose.click()
        }
        else if (currentBtn.classList.contains('SignIn')) {
            modal.classList.add('on');
            signBtnchoose.click();
            if (modal.classList.contains('off')) {
                modal.classList.remove('off');
            }
        }
    })
})

const modal = document.querySelector('.modal');
const modalOn = document.querySelector('.hero-btn');
const modalOff = document.querySelector('.modal-off');



modalOn.addEventListener('click', () => {
    if (modal.classList.contains('off')) {
        modal.classList.remove('off');
    }

    modal.classList.add('on');

})

modalOff.addEventListener('click', () => {
    if (modal.classList.contains('on')) {
        modal.classList.remove('on');
    }

    modal.classList.add('off');
});

const formLog = document.querySelector('.form-log');
const formSign = document.querySelector('.form-sign');
const logBtnchoose = document.querySelector('.Logmodal');
const signBtnchoose = document.querySelector('.Signmodal');

logBtnchoose.addEventListener('click', () => {
    if (formLog.classList.contains('hide')) {
        formLog.classList.remove('hide');
        formSign.classList.remove('show');
    }
})

signBtnchoose.addEventListener('click', () => {
    formSign.classList.add('show');
    formLog.classList.add('hide');
})