varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
uniform float u_time;
uniform vec3 C1;
uniform vec3 C2;
uniform float u_sMovment;
uniform sampler2D DirNoise;



float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}


void main()
{
vec2 UV = vUv;
float UVy = UV.y;


float UVy_Contrast_Mask = remap(UVy - .1, -0.2, 1.2, 0., 1.);
UVy_Contrast_Mask = pow(UVy_Contrast_Mask , 2.0);
//UVy_Contrast_Mask *= clamp(UVy - .2, 0., 1.);

//ChaoticEmission
float sc = clamp(0., 1.,
sin(u_time + 2.) * (cos(u_time * 2.) * -2.));
float ChaoticEmission = mix(.8, 1., sc);
vec3 vDir = normalize(cameraPosition - vPosition);
float F = dot(vDir, normalize(vNormal));



//HeatMask
float hValueH = mix(4., 9., ChaoticEmission);
float HeatMask = remap(pow(UVy, 6.5), 0., hValueH, 0., 1.);


//AlphaMask
float aContrast = .85;
float hValueA = mix(9. , 6.9, ChaoticEmission);
float cValueA = mix((aContrast * 1.7), aContrast, ChaoticEmission);
float AlphaMask = remap(pow(UVy, cValueA),
.1, 6.9, 0., 1.5);

//FX
float SpeedFX = 2.9; 
float noiseRight = texture2D(DirNoise, 
UV + vec2(u_time * -SpeedFX, 0.)).r;
noiseRight = pow(noiseRight, 2.);
float noiseLeft = texture2D(DirNoise, 
UV  + u_time * SpeedFX).g;
noiseLeft = pow(noiseLeft, 2.);
float alphaNoise = noiseLeft * noiseRight;
alphaNoise = pow(alphaNoise, .5);
alphaNoise *= pow(AlphaMask, 2.);
alphaNoise += HeatMask;
alphaNoise = clamp(0., 1., alphaNoise);
vec3 colorNoise = vec3(mix(C1, C2, alphaNoise));

//EngineAlpha Check
if(u_sMovment <= 0.) {
  alphaNoise = 0.;
}

colorNoise *= pow(F, 2.);

// u_sMovment = 15.;
colorNoise *= mix(u_sMovment * 10., (u_sMovment * 10.) * .5, ChaoticEmission); 


vec4 tTextureLol = texture2D(DirNoise, UV);

//vec3 normal = normalize(vNormal);
colorNoise *= UVy_Contrast_Mask;

//colorNoise = vec3(UVy_Contrast_Mask);

gl_FragColor = vec4(colorNoise,
pow(alphaNoise, .75));
}