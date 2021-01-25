//*****  To Up Component Start *****
const toTop: HTMLElement | null = document.getElementById('to-top')

const hiddenToTop = () => {
    if(scrollY === 0){
        let styles:any = toTop?.style
        styles.opacity = 0
    }else if(scrollY > 100){
        let styles:any = toTop?.style
        styles.opacity = 1
    }
}

const action = () => window.scroll(0, 0)

toTop?.addEventListener('click', action)

addEventListener('scroll', hiddenToTop)
//*****  To Up Component End *****