const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document
    .getElementById("three-container")
    .appendChild(renderer.domElement);

camera.position.z = 5;

// STARS

const starGeometry =
    new THREE.BufferGeometry();

const starCount = 5000;

const starPositions = [];

for (let i = 0; i < starCount; i++) {

    starPositions.push(
        (Math.random() - 0.5) * 200
    );

    starPositions.push(
        (Math.random() - 0.5) * 200
    );

    starPositions.push(
        (Math.random() - 0.5) * 200
    );
}

starGeometry.setAttribute(

    'position',

    new THREE.Float32BufferAttribute(
        starPositions,
        3
    )

);

const starMaterial =
    new THREE.PointsMaterial({

        color: 0xffffff,

        size: 0.15

    });

const stars =
    new THREE.Points(
        starGeometry,
        starMaterial
    );

scene.add(stars);

// ANIMATION

function animate() {

    requestAnimationFrame(
        animate
    );

    stars.rotation.y += 0.0005;

    stars.rotation.x += 0.0001;

    renderer.render(
        scene,
        camera
    );
}

animate();

// RESIZE

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);