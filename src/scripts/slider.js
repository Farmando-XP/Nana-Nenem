

// Slider



// criamos a classe slider que vai conter todos os atributos e métodos que vão ser utilizados no slider
class Slider{

    constructor(){
        this.slides = document.querySelectorAll(".slide"); // cria o slider
        this.next = document.querySelector("#next"); // cria o botão de próximo
        this.back = document.querySelector("#back");// cria o botãod de voltar
        this.slide = 0; // define o primeiro slider como sendo o primeiro
        this.moving = false; // cria uma propriedade que impede que o botão seja usado enquanto a animação está sendo feia

        // adiciona os eventos aos botões
        this.next.addEventListener('click', () => this.nextSlide()); 
        this.back.addEventListener('click', ()=> this.prevSlide());
        // inicializa o primeira slide
        this.showSlide(this.slide)
    }

    // função que vai mostrar o slide escolhido
    showSlide(index){
        const slide = this.slides[index];

        slide.style.display = 'block';
        slide.classList.add("active");
    }

    //função que vai mudar o slide
    changeSlide(index){
        this.moving = true // aciona o bloqueio dos botões

        const slide = this.slides[this.slide]; // define qual slide está

        slide.classList.add("fadeOut");
        slide.classList.remove("active");

        setTimeout(()=>{
            slide.classList.remove("fadeOut");
            slide.style.display = 'none';
            this.slide = index
            this.showSlide(this.slide); // define o próximo slide
            this.moving = false // desaciona o bloqueio dos botões
        }, 500); // dura o tempo da animação do css
    }

    // função que manda o slide para frente
    nextSlide(){
        if(this.moving){
            return 0;
        }

        else if(this.slide === 2){
            const index = 0;
            this.changeSlide(index);
        }

        else{
            const index = this.slide + 1;
            this.changeSlide(index);
        }
    }

    // função que manda o slide para trás
    prevSlide(){
        if(this.moving){
            return 0;
        }

        else if(this.slide === 0){
            const index = 2
            this.changeSlide(index);
        }

        else{
            const index = this.slide - 1;
            this.changeSlide(index);
        }
    };
}
// instancia a classe slider
new Slider();