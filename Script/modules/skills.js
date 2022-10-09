export default function skills() {

    const barras = document.querySelectorAll("[data-barra]");
    const porcentagem = document.querySelectorAll("[data-skill]");

    function aumentarBarras(){
        let cont =0;
        barras.forEach((item)=>{
            let timer = setInterval(()=>{
                item.style.width = (cont++) + "%";
                if(cont > item.dataset.barra){
                    clearInterval(timer);
                }
            },60);
        })
    }

    function aumentarPorcentagem(){
        let cont =0;
        porcentagem.forEach((item,index)=>{
            let timer = setInterval(()=>{
                item.innerText = (cont++) + "%";
                if(cont > barras[index].dataset.barra){
                    clearInterval(timer);
                    item.innerText = barras[index].dataset.barra + "%";
                }
            },60);
        }
        )}

    function starSkill(){
        if (window.scrollY >= 3613) {
            aumentarBarras();
            aumentarPorcentagem();
            window.removeEventListener('scroll',starSkill);
        }
    }

    window.addEventListener('scroll',starSkill);


}
