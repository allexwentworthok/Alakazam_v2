import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var mapboxgl: any;

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.page.html',
  styleUrls: ['./comercios.page.scss'],
})
export class ComerciosPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {

   
  }

    ngAfterViewInit() {

      mapboxgl.accessToken = 'pk.eyJ1Ijoid2VudGFwcHMiLCJhIjoiY2p3cXhweDRhMG1jeTQ0cWkyOGhyNXpoNiJ9.bCmbT74FvRcl57jSMDOxbg';
      const map = new mapboxgl.Map({
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-55.89608, -27.3670807],
        zoom: 15.5,
        pitch: 45,
        bearing: -17.6,
        container: 'map'
      });

      map.on('load', () => {


        map.resize();

        // marker California I
        new mapboxgl.Marker()
        .setLngLat([-55.89652, -27.36748])
        .addTo(map);
         // marker California II
        new mapboxgl.Marker()
        .setLngLat([-55.89713, -27.37354])
        .addTo(map);
         // marker California III
        new mapboxgl.Marker()
         .setLngLat([-55.89557, -27.35974])
         .addTo(map);
          // marker Changomas Cabo de hornos
        new mapboxgl.Marker()
          .setLngLat([-55.9327, -27.4252])
          .addTo(map);
           // marker Changomas T. de Tacuari
        new mapboxgl.Marker()
         .setLngLat([-55.92651, -27.36754])
         .addTo(map);
          // marker Multiexpress T. de Tacuari
        new mapboxgl.Marker()
         .setLngLat([-55.94493, -27.36566])
         .addTo(map);
          // marker California VI
        new mapboxgl.Marker()
          .setLngLat([-55.94825, -27.36529])
          .addTo(map);




        });


    }

}
