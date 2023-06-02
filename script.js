const getElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw Error(
        `something went wrong with your ${selector}`
    );
}

const nav_btn = getElement('.nav-btn');
const nav_links = getElement('.nav-links');

nav_btn.addEventListener('click', () => {
    nav_links.classList.toggle('collapse')
})


