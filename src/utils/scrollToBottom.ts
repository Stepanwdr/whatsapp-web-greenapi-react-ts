export const scroll = () => {
    setTimeout(() => {
        const objDiv = document.getElementById('scroll-to-bottom');

        if (objDiv) objDiv.scrollTo({top: objDiv.scrollHeight, behavior: 'smooth'});
    }, 500);
}