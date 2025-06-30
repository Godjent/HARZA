varying vec3 vNormal;
varying vec3 vPosition;
uniform vec2 resolution;
varying vec2 vUv;
uniform float u_time;


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