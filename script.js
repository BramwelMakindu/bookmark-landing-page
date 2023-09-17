const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.navlinks');

openMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
})


/*-----features tabs------*/

const featureTabs = document.querySelectorAll('.features-tab');
const featureSelects = document.querySelectorAll('.feature-select');
const tabsSelect = document.querySelector('.tabs-select');

function thisLink () {
    featureSelects.forEach((featureSelect) => {
        featureSelect.classList.remove('active');
        this.classList.add('active')
    })
}

featureSelects.forEach((featureSelect) => {
    featureSelect.addEventListener('click', thisLink);
});

tabsSelect.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    if(id) {
        featureTabs.forEach((featureTab) => {
            featureTab.classList.remove('live');
        });
        const element = document.getElementById(id);
        element.classList.add('live');
    }
});


// faq-section

const faqContainers = document.querySelectorAll('.faq-container');

function openAnswer() {
    faqContainers.forEach((faqContainer) => {
        faqContainer.classList.remove('active');
        this.classList.add('active');
    })
} 

faqContainers.forEach((faqContainer) => {
    faqContainer.addEventListener('click', openAnswer);
})
 

//cta input

const inputEl = document.querySelector('.cta-input');
const submitBtn = document.querySelector('.cta-btn');
const ctaContainer = document.querySelector('.cta-input-div');
const errorMsg = document.querySelector('.error-msg');


submitBtn.addEventListener('click', () => {
    if(inputEl.value == '') {
        ctaContainer.classList.add('active');
        errorMsg.innerText = 'Email input cannot be empty'
    } else if(!inputEl.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        ctaContainer.classList.add('active');
        errorMsg.innerText = "Whoops, make sure it's an email"
    } else {
        ctaContainer.classList.remove('active')
        inputEl.value = '';
    }
});



