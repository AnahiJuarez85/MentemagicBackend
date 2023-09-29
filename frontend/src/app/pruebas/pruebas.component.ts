import { Component, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  imagenes = new Map<string, string[]>([
    
    ['O', ['assets/img/oso.png', 'assets/img/olla.png', 'assets/img/ojo.png']],
    ['A', ['assets/img/abeja.png', 'assets/img/arbol.png', 'assets/img/arcoiris.png']],
    ['I', ['assets/img/iman.png', 'assets/img/iglu.png', 'assets/img/iguana.png']],
    ['U', ['assets/img/unicornio.png', 'assets/img/uña.png', 'assets/img/uva.png']],
    ['E', ['assets/img/estrella.png', 'assets/img/elefante.png', 'assets/img/escalera.png']],
    ['M', ['assets/img/manzana.png', 'assets/img/mesa.png', 'assets/img/mono.png']],
    ['P', ['assets/img/pera.png', 'assets/img/pato.png', 'assets/img/piano.png']] ,
    ['L', ['assets/img/lapiz.png', 'assets/img/libro.png', 'assets/img/leon.png']],
    ['S', ['assets/img/sol.png', 'assets/img/sandia.png', 'assets/img/serpiente.png']],
    ['D', ['assets/img/delfin.png', 'assets/img/dona.png', 'assets/img/dino.png']],
    ['N', ['assets/img/nido.png', 'assets/img/naranja.png', 'assets/img/nube.png']],
    ['F', ['assets/img/foco.png', 'assets/img/fuente.png', 'assets/img/familia.png']],
    ['T', ['assets/img/tomate.png', 'assets/img/taco.png', 'assets/img/telefono.png']],
    ['R', ['assets/img/rosa.png', 'assets/img/regalo.png', 'assets/img/rloro.png']],
    ['B', ['assets/img/barco.png', 'assets/img/bigote.png', 'assets/img/botas.png']],
    ['V', ['assets/img/vaca.png', 'assets/img/volcan.png', 'assets/img/ventana.png']],
    ['G', ['assets/img/gato.png', 'assets/img/gusano.png', 'assets/img/galleta.png']],
    ['J', ['assets/img/jirafa.png', 'assets/img/juguete.png', 'assets/img/jabon.png']],
    ['C', ['assets/img/coco.png', 'assets/img/casa.png', 'assets/img/cubeta.png']],
    ['Q', ['assets/img/queso.png', 'assets/img/quimica.png', 'assets/img/quince.png']],
    ['Z', ['assets/img/zanahoria.png', 'assets/img/zapato.png', 'assets/img/zorro.png']],
    ['H', ['assets/img/helado.png', 'assets/img/hipopotamo.png', 'assets/img/hoja.png']],
    ['K', ['assets/img/kiwi.png', 'assets/img/karate.png', 'assets/img/koala.png']],
    ['Ñ', ['assets/img/ñoño.png', 'assets/img/piña.png', 'assets/img/niño.png']],
    ['X', ['assets/img/xilofono.png', 'assets/img/xboxeo.png', 'assets/img/xtaxi.png']],
    ['W', ['assets/img/wanda.png', 'assets/img/waterpolo.png', 'assets/img/wafles.png']],
    ['Y', ['assets/img/yoyo.png', 'assets/img/yogur.png', 'assets/img/yema.png']],
  ]);

  audios = new Map<string, string[]>([
    ['O', ['oso', 'olla', 'ojo']],
    ['A', ['abeja', 'árbol', 'arcoiris']],
    ['I', ['iman', 'iglu', 'iguana']],
    ['U', ['unicornio', 'uña', 'uva']],
    ['E', ['estrella', 'elefante', 'escalera']],
    ['M', ['manzana', 'mesa', 'mono']],
    ['P', ['pera', 'pato', 'piano']] ,
    ['L', ['lapiz', 'libro', 'leon']],
    ['S', ['sol', 'sandia', 'serpiente']],
    ['D', ['delfin', 'dona', 'dino']],
    ['N', ['nido', 'naranja', 'nube']],
    ['F', ['foco', 'fuente', 'familia']],
    ['T', ['tomate', 'taco', 'telefono']],
    ['R', ['rosa', 'regalo', 'rloro']],
    ['B', ['barco', 'bigote', 'botas']],
    ['V', ['vaca', 'volcan', 'ventana']],
    ['G', ['gato', 'gusano', 'galleta']],
    ['J', ['jirafa', 'juguete', 'jabon']],
    ['C', ['coco', 'casa', 'cubeta']],
    ['Q', ['queso', 'quimica', 'quince']],
    ['Z', ['zanahoria', 'zapato', 'zorro']],
    ['H', ['helado', 'hipopotamo', 'hoja']],
    ['K', ['kiwi', 'karate', 'koala']],
    ['Ñ', ['ñoño', 'piña', 'niño']],
    ['X', ['xilofono', 'xboxeo', 'xtaxi']],
    ['W', ['wanda', 'waterpolo', 'wafles']],
    ['Y', ['yoyo', 'yogur', 'yema']],
  ]);

letras: string[] = [];
id: string;

imagenesMostradas: string[][] = []; 
audiosCargados: { [id: string]: string[] } = {};  

selectedLeftImage: string;
selectedRightImage: string;
punteo: number = 0;
intentos: number = 0;
resultado: string = '';

constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
 }


  ngOnInit() {

    if(this.id =='1'){
      this.letras = ['A','E','I','O','U'];
    }else if(this.id == '2'){
      this.letras = ['M','P','S','C','D'];
    }else{
      this.letras = ['B','F','G','J','K'];
      
    }

    this.letras.forEach((letra: string) => {
      this.imagenesMostradas.push([letra, this.imagenes.get(letra)[0]]);
    })
  }

  playAudio(audioNombre: string) {
    const audio = new Audio('assets/sonidos/' + audioNombre);
    audio.play();
  }

  selectLeftImage(imageName: string) {
    this.selectedLeftImage = imageName;
    this.tryToMatchImages();
  }

  selectRightImage(imageName: string) {
    this.selectedRightImage = imageName;
    this.tryToMatchImages();
  }

  tryToMatchImages() {
  if (this.selectedLeftImage && this.selectedRightImage) {

    if (this.selectedLeftImage.toLowerCase() === this.selectedRightImage.toLowerCase()) {
      // Las imágenes coinciden

      console.log('¡Coincidencia de imágenes!');
      
      document.getElementById(this.selectedLeftImage.toUpperCase() + 'i').className = 'btn btn-success disabled';
      document.getElementById(this.selectedRightImage.toUpperCase() + 'd').className = 'btn btn-success disabled';
      
      this.punteo++;

    } else {
      // Las imágenes no coinciden

      console.log('Las imágenes no coinciden');

      document.getElementById(this.selectedLeftImage.toUpperCase() + 'i').className = 'btn btn-danger disabled';
      document.getElementById(this.selectedRightImage.toUpperCase() + 'd').className = 'btn btn-danger disabled';
    }

    this.intentos++;

    // Reinicia la selección
    this.selectedLeftImage = null;
    this.selectedRightImage = null;

    if(this.intentos == 5){
      if(this.punteo < 3){
        this.resultado = 'assets/img/malo.png';
      }else if(this.punteo <= 4){
        this.resultado = 'assets/img/bueno.png';    
      }else{
        this.resultado = 'assets/img/excelente.png';
      }
    }
  }
}

}
