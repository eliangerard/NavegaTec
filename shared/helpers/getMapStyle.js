const getMapStyle = () => {
    // Obtén la hora actual
    var date = new Date();
    var currentHour = date.getHours();

    // Decide el estilo del mapa en función de la hora
    var mapStyle;
    if (currentHour >= 5 && currentHour < 8) {
        mapStyle = 'mapbox://styles/eliangerard/clsjtu7xn03qn01p2d7w399uw?optimize=true';
    } else if (currentHour >= 8 && currentHour < 18) {
        mapStyle = 'mapbox://styles/eliangerard/clsjtuiz903qs01pbbjf4gmnc?optimize=true';
    } else if (currentHour >= 17 && currentHour < 20) {
        mapStyle = 'mapbox://styles/eliangerard/clsjt8i3z03pw01qq4ucq49tw?optimize=true';
    } else {
        mapStyle = 'mapbox://styles/eliangerard/clsjttvdr01fd01qr06za4p53?optimize=true';
    }

    // Devuelve el estilo del mapa
    return mapStyle;
}

export default getMapStyle;