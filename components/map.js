let map = function(treeData, treeInfo){
  return `
    <!--지도 생성-->
    <div id="map" class="vh-100 vw-100 rounded-sm"></div>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1e6c3e551a0c0072ccc8efbd25fd27ed"></script>

    <script>
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(36.61579155493664,127.48429521477946), // 지도의 중심좌표
            level: 2 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

    var tree_data = ${treeData}; //모든 나무 정보
    var tree_info = ${treeInfo}; //나무 종류별 정보
    var imageSrc_needle = "needle.png";
    var imageSrc_broad = "broad.png";
    var imageSize = new kakao.maps.Size(15, 15);
    var markerImage_needle = new kakao.maps.MarkerImage(imageSrc_needle, imageSize);
    var markerImage_broad = new kakao.maps.MarkerImage(imageSrc_broad, imageSize);
    var overlay_on = false;

    //locate markers on the map
    for(var p = 0; p < tree_data.length; p++){
      //create marker
      if(tree_data[p].type === "needle"){
        var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(parseFloat(tree_data[p].lat), parseFloat(tree_data[p].lng)), // 마커를 표시할 위치
        title : tree_data[p].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage_needle
        });
      }
      else {
        var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(parseFloat(tree_data[p].lat), parseFloat(tree_data[p].lng)), // 마커를 표시할 위치
        title : tree_data[p].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage_broad
        });
      }


      var content =
        '<div class="wrap"><div class="info"><div class="title">' 
        + tree_data[p].name 
        + '</div>'
        +'<div class="content">'
        +'<img class="img-thumbnail" style="max-height:100px;max-width:100px" src="/leafImages/' + tree_data[p].id + '.jpg">' 
        +'</div></div></div></div>'

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        position: marker.getPosition()
    });


    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, overlay));
    };

    function makeOverListener(map, marker, overlay){
      return function(){
      if (overlay_on === false){
          overlay_on = true;
          var markerImage = new kakao.maps.MarkerImage(
          marker.getImage().Xj,
          new kakao.maps.Size(40, 40));
          marker.setImage(markerImage);
          overlay.setMap(map);
          console.log('a')
      }
      else if(marker.getImage().Ij.width === 40){
          overlay_on = false;
          overlay.setMap(null);
          var markerImage = new kakao.maps.MarkerImage(
          marker.getImage().Xj,
          new kakao.maps.Size(15, 15));
          marker.setImage(markerImage);
      }
      }
    }
    </script>
    `
}

module.exports = map

