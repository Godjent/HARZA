varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

uniform float u_driver;


void main()
{
    vec3 viewDir = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec2 uv = vec2(vUv.x, vUv.y);
    float r = .5;
    float circle = length(uv -r);
    circle -= .2;
    circle = clamp(circle, 0., 1.);
    circle = (1. - circle);
    circle = pow(circle, 15.);



    vec3 color = vec3(circle);
    color *= vec3(0.93, 0.22, 0.09);
    circle *= .2;
    circle *= pow(uv.y, 3.5);
    circle *= 4.5;
    circle *= clamp(u_driver, 0., 1.);
    circle = clamp(circle, 0., 1.);

    gl_FragColor = vec4(color, circle);
    // #include <tonemapping_fragment>
    // #include <colorspace_fragment>
}