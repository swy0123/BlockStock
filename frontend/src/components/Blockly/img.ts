// // Blob을 이미지로 변환하기 위한 함수
// function convertBlobToImage(blob, callback) {
//     var img = new Image();
//     img.onload = function () {
//       callback(img);
//     };
//     img.src = URL.createObjectURL(blob);
//   }
  
//   // Blob을 이미지로 변환한 후 PNG로 저장
//   convertBlobToImage(blob, function (image) {
//     var canvas = document.createElement('canvas');
//     canvas.width = image.width;
//     canvas.height = image.height;
//     var ctx = canvas.getContext('2d');
//     ctx.drawImage(image, 0, 0);
  
//     // Canvas에서 PNG 이미지로 저장
//     canvas.toBlob(function (pngBlob) {
//       var url = URL.createObjectURL(pngBlob);
  
//       // PNG 이미지를 다운로드할 수 있는 링크 생성
//       var a = document.createElement('a');
//       a.href = url;
//       a.download = 'image.png';
//       a.click();
  
//     //   // 더 이상 사용하지 않는 URL 객체 해제
//     //   URL.revokeObjectURL(url);
//     }, 'image/png');
//   });
  

// SVG 문자열 생성
var svgString = '<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="75" r="50" stroke="black" stroke-width="2" fill="red" /></svg>';

// SVG 문자열을 DOM 요소로 파싱
var parser = new DOMParser();
var svgDoc = parser.parseFromString(svgString, "image/svg+xml");
var svgElement = svgDoc.documentElement;

// SVG 요소의 경계 상자 가져오기
var bbox = svgElement.getBBox();

// 너비와 높이 가져오기
var originalWidth = bbox.width;
var originalHeight = bbox.height;

console.log("원래 너비: " + originalWidth);
console.log("원래 높이: " + originalHeight);