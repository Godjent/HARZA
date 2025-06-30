varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

varying vec3 N;
varying vec3 V;
varying vec3 E;

varying vec3 T;
varying vec3 B;


void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    // Model normal
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    // Varyings
    vUv = uv;
    vNormal = modelNormal;
    vPosition = modelPosition.xyz;
}