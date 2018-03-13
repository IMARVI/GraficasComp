var container;
var camera, scene, renderer,light;

var mainMenu;


var floorUrl = "imagenes/terreno.jpeg";


function createScene(canvas) 
{
  renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio( window.devicePixelRatio );
  window.addEventListener( 'resize', onWindowResize);

    
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf5f0f0 );
    
  light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 );
  scene.add( light );

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1010;
  camera.position.y = 200;
  camera.rotation.x = -Math.PI/6;
  scene.add(camera);
        
    
  document.addEventListener('mousedown', onDocumentMouseDown);

  // floor
  var map = new THREE.TextureLoader().load(floorUrl);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(8, 8);

  var floorGeometry = new THREE.PlaneGeometry( 2000, 2000, 30, 30 );
  var floor = new THREE.Mesh(floorGeometry, new THREE.MeshPhongMaterial({color:0xffffff, map:map, side:THREE.DoubleSide}));
  floor.rotation.x = -Math.PI / 2;
  scene.add( floor );

  //Menu Options
  mainMenu = document.getElementById( 'mainMenu' );
}


function run() 
{
  requestAnimationFrame( run );
  render();
}

function render() 
{
  renderer.render( scene, camera );
}

function onWindowResize() 
{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}


function onDocumentMouseDown(event)
{
  event.preventDefault();
}

function menuDisplay()
{
  //Colocamos la camara
  camera.position.z = 1010;
  camera.position.y = 200;
  camera.rotation.x = -Math.PI/6;
  //desplegamos el menu
  mainMenu.style.display= "";

}