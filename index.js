//console.log(DOMStringList())
//alert(document.implementation.hasFeature('KeyboardEvent','4.0'))

var element = document.getElementById('test');

element.addEventListener('compositionstart', function (e) {
  console.log('compositionstart');
  console.log(e);
  //e.preventDefault();
  //e.stopPropagation();
});

element.addEventListener('compositionupdate', function (e) {
  console.log('compositionupdate');
  console.log(e);
  e.preventDefault();
  //e.stopPropagation();
});

element.addEventListener('compositionend', function (e) {
  console.log('compositionend');
  console.log(e);
  //e.stopPropagation();
});

element.addEventListener('keydown', function (e) {
  console.log('keydown');
  console.log(e);

  //e.stopPropagation();
});

element.addEventListener('beforeedit', function (e) {
  console.log('beforeedit');
  console.log(e);
  //e.stopPropagation();
});

element.addEventListener('edit', function (e) {
  console.log('edit');
  console.log(e);
  //e.stopPropagation();
});

element.addEventListener('keyup', function (e) {
  console.log('keyup');
  console.log(e);
  //e.stopPropagation();
});

//document.addEventListener('load',function(){
//  alert('test')
//});