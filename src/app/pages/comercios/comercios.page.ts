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

        new mapboxgl.Marker()
        .setLngLat([-55.902849, -27.382299])
        .addTo(map);




        });


    }

}
