varying vec3 vNormal;
varying vec3 vPosition;
uniform vec3 u_sDirection;
uniform vec3 u_atmoDay;
uniform vec3 u_atmoNight;
uniform sampler2D u_pNormal;

//uniform float u_time;


void main()
{
    vec3 viewDir = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
  
    vec3 color = vec3(1.0);
    //Sun
    float sOrient = dot(u_sDirection, normal);
    //sOrient = clamp(sOrient, 0., 1.);

    //Atmo
    float fresnel = dot(viewDir, normal) + 1.;
    fresnel = pow(fresnel, 3.);

    float atmoMix = smoothstep(-.8, 1., sOrient);
    vec3 atmoColor = mix(u_atmoNight, u_atmoDay, atmoMix);

    //Alpha
    float edge = dot(viewDir, normal);
    edge = smoothstep(0., .95, edge);
    atmoColor *= edge;

    float dayAlpha = smoothstep(-.5, .0, sOrient);
    float alpha = edge * dayAlpha;



    //Color
    vec3 Color = vec3(edge, edge, edge);

    gl_FragColor = vec4(atmoColor, alpha);
    // #include <tonemapping_fragment>
    // #include <colorspace_fragment>
}