export default function showMore(){
    const $downArrows = document.querySelectorAll('[data-team="arrow"]');
    const $teamText = document.querySelectorAll('[data-team="text"]');
    const $teamButton = document.querySelectorAll('[data-team="button"]');
    const $teamCard = document.querySelectorAll('[data-team="card"]');

    function showContent(index){
        $teamText[index].classList.toggle('active');
        $teamButton[index].classList.toggle('active');
        $teamCard[index].classList.toggle('active');
        if($teamCard[index].classList.contains('active')){
            $downArrows[index].innerHTML = '-';
        }else{
            $downArrows[index].innerHTML = '+';
        }   
    }

    $downArrows.forEach((item, index)=>{
        item.addEventListener('click',()=>{
            showContent(index);
        });
    });


}