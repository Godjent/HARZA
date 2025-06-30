varying vec3 vNormal;
varying vec3 vPosition;
uniform vec2 resolution;
varying vec2 vUv;
varying vec3 view;
uniform float u_time;


void main() {	

    // Position
  vec4 modelPosition = modelMatrix * vec4(position, 1.);
  // Model normal
  vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

  vNormal = modelNormal;
  view = normalize(vec3(modelViewMatrix  * vec4(position, 1.0)).xyz);
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}