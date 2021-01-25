"use strict";
//*****  To Up Component Start *****
const toTop = document.getElementById('to-top');
const hiddenToTop = () => {
    if (scrollY === 0) {
        let styles = toTop === null || toTop === void 0 ? void 0 : toTop.style;
        styles.opacity = 0;
    }
    else if (scrollY > 100) {
        let styles = toTop === null || toTop === void 0 ? void 0 : toTop.style;
        styles.opacity = 1;
    }
};
const action = () => window.scroll(0, 0);
toTop === null || toTop === void 0 ? void 0 : toTop.addEventListener('click', action);
addEventListener('scroll', hiddenToTop);
//*****  To Up Component End *****
