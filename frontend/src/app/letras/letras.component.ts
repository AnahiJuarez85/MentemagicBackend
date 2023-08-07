import { Component, ViewChild, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';
import {ActivatedRoute} from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  providers: [SpeechRecognitionService],
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {
  mostrar: boolean = false;
 
 
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
  
  id: string;
  imagenesMostradas: string[] = [];
  audiosCargados: string[] = [];

  constructor(private speech: SpeechRecognitionService, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.imagenesMostradas = this.imagenes.get(this.id) || [];
    this.audiosCargados = this.audios.get(this.id) || [];
  }

  ngOnInit() {
  }

  playAudio(audioNombre: string) {
    const audio = new Audio('assets/sonidos/'+ audioNombre +'.mp4');
    audio.play();
    this.mostrar = true; 
  }

  pronunciar(texto: string) {
    this.speech.record('es_ES').subscribe(e => {
      console.log('estoy buscando|' + texto  + '| Tengo ' + e);

      if (texto.toUpperCase() === e.toUpperCase().trim()) {
        this.detener();

        var element = document.getElementById(texto);
        element.hidden = false;           
      }
    });
  }

  detener() {
    this.speech.stop();
    console.log("se detuvo")
  }
}
