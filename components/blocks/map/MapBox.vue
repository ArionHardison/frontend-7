<template>
    <div id="map" class="block">
        <div class="map">
            <div class="img object-fit">
                <div class="object-fit-cover">
                    <div id="mapbox"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';
    import MapBoxGeo from './mapBoxGeo.json';

    export default {
        name: 'MapBox',
        data() {
            return {
                mapGeo: MapBoxGeo.mapBoxGeo
            }
        },
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWR2ZWl0cyIsImEiOiJja3FjNWRkaTkweGcxMnNxdGgzd2tkcDZnIn0.1pulnkWs-9uN43NKgVe9dw';

            let mapBoxGeoJson = this.mapGeo;

            let mapBox = new mapboxgl.Map( {
                container: 'mapbox',
                style: 'mapbox://styles/adveits/ckqbb3vwg31dl18n3bxmgtwut',
                center: mapBoxGeoJson[0]['coordinates'],
                zoom: 4
            } );

            mapBox.scrollZoom.disable();
            mapBox.addControl( new mapboxgl.NavigationControl() );

            mapBox.on( 'load', function() {
                mapBoxGeoJson.forEach( function( marker, index ) {
                    let el       = document.createElement( 'div' );
                    el.className = 'adv-marker';

                    if ( marker.style == 1 ) {
                        el.innerHTML = '<div class="adv-marker-content style-1">' + marker.title + '</div>';
                    } else {
                        el.innerHTML = '<div class="adv-marker-content style-2">' + marker.title + '</div>';
                    }

                    let mapBoxPopup = new mapboxgl.Popup( { offset: 25 } ).setHTML(
                        '<p class="mb-0 after">' + marker.description + '</p>'
                    );

                    new mapboxgl.Marker( el, { anchor: 'bottom' } ).setLngLat( marker.coordinates ).setPopup( mapBoxPopup ).addTo( mapBox );
                } );
            } );
        }
    }
</script>

