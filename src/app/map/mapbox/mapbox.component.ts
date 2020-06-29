import {AfterViewInit, Component, OnInit} from '@angular/core';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, AfterViewInit {

  map: mapboxgl.Map;
  clickedStateId = null;

  constructor() { }

  ngOnInit() {

  }


  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVycmUiLCJhIjoiY2s2YmYzNmxlMGhiZjNubXZ2YzJtY3kxZyJ9.mKwbVWXuigynJ_m2ePSRFA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-9.139337, 38.722252],
      zoom: 13
    });

    let t = this;
    this.map.on('load', () => { t.onMapLoaded();} );
    this.map.on('click', 'cyclewaysLayer',(e) => { t.onCyclewaysLayerClick(e) });
    this.map.on('mouseenter', 'cyclewaysLayer',() => { t.onMouseEnterCyclewaysLayer() });
    this.map.on('mouseleave', 'cyclewaysLayer',() => { t.onMouseExitCyclewaysLayer() });
    this.map.on('click', 'giraLayer',(e) => { t.onGiraLayerClick(e) });
    this.map.on('mouseenter', 'giraLayer',() => { t.onMouseEnterCyclewaysLayer() });
    this.map.on('mouseleave', 'giraLayer',() => { t.onMouseExitCyclewaysLayer() });
  }


  onMapLoaded(){
    this.loadImages();
    this.addCyclewaysSource();
    this.addCyclewaysLayer();
    this.addGiraSource();
    this.addGiraLayer();
    this.zoomTest();
  }

  zoomTest() {
    this.map.on('zoom', () => {
      console.log(this.map.getZoom())
    });
  }


  loadImages() {
    this.map.loadImage(
      'assets/map/gira.png',
      (error, image) => {
        if (error) throw error;
        this.map.addImage('gira', image);
      });
  }

  addCyclewaysSource(){
    this.map.addSource('cyclewaysData', {
      type: 'geojson',
      data: 'assets/map/export.geojson',
      // cluster: true,
      // clusterMaxZoom: 10, // Max zoom to cluster points on
      // clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
  }

  addGiraSource(){
    this.map.addSource('giraData', {
      type: 'geojson',
      data: 'assets/map/gira.geojson',
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
  }

  addCyclewaysLayer() {
    this.map.addLayer({
      'id': 'cyclewaysLayer',
      'type': 'line',
      'source': 'cyclewaysData',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#d99b15',
        'line-width': 5,
        'line-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.5
        ]
      }
    });
    //
    // this.map.addLayer({
    //   'id': 'cyclewaysLayerHighlight',
    //   'type': 'line',
    //   'source': 'cyclewaysData',
    //   'layout': {
    //     'line-join': 'round',
    //     'line-cap': 'round'
    //   },
    //   'paint': {
    //     'line-color': '#1073d9',
    //     'line-width': 5,
    //     'line-opacity': 1
    //   },
    //   'filter': ['in', 'FIPS', '']
    // });
  }

  addGiraLayerGood() {

  }

  addGiraLayer() {
    this.map.addLayer({
      'id': 'giraClustersLayer',
      'type': 'circle',
      'source': 'giraData',
      filter: ['has', 'point_count'],
      paint: {
        "circle-opacity": 0.7,
        'circle-color': '#79C144',
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          5, // count
          25,
          10, // count
          35,
          20, // count
          45,
        ]
      }
    });


    this.map.addLayer({
      id: 'giraClustersCounterLayer',
      type: 'symbol',
      source: 'giraData',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      }
    });

    this.map.addLayer({
      'id': 'giraLayer',
      'type': 'symbol',
      'source': 'giraData',
      filter: ['!', ['has', 'point_count']],
      'layout': {
        'icon-image': 'gira',
        'icon-size': 0.05,
        "icon-allow-overlap": true

      }
    });
  }

  onCyclewaysLayerClick(e) {

    let feature = e.features[0];


    let id = feature.properties["@id"];


    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(id)
      .addTo(this.map);

    if (this.clickedStateId) {
      this.map.setFeatureState(
        { source: 'cyclewaysData', id: this.clickedStateId },
        { hover: false }
      );
    }

    this.clickedStateId = feature.id; //fixme must be int
    this.map.setFeatureState(
      { source: 'cyclewaysData', id: this.clickedStateId },
      { hover: true }
    );

    console.log(feature);

  }

  onMouseEnterCyclewaysLayer() {
    this.map.getCanvas().style.cursor = 'pointer';
  }

  onMouseExitCyclewaysLayer() {
    this.map.getCanvas().style.cursor = '';
  }

  onGiraLayerClick(e) {

    let feature = e.features[0];
    if (feature.properties.cluster == true) {
      console.log({gira: feature.properties.point_count});
    } else {
      console.log({gira: 1});

    }

  }

}
