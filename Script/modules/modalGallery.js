export default function initModalGallery(){
    const galleryImage = document.querySelectorAll('[data-image]');
    const gallery = document.querySelectorAll('[data-gallery]');
    const closeBtn = document.querySelectorAll('[data-close]');
    const menuHeader = document.querySelector(".header");
    const imageModal = document.querySelectorAll(".modal_gallery__image");
    
    function handleGallery(index){
        gallery[index].classList.add('active');
        imageModal[index].addEventListener('click', ()=>{
            closeModal(index);
        })
    }
    
    function closeModal(index){
        gallery[index].classList.remove('active');
    }
    
    closeBtn.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            closeModal(index);
        });
    })
    
    galleryImage.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            handleGallery(index);
        });
    })
}

