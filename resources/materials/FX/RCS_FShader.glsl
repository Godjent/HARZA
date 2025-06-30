varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 view;
uniform float u_time;
uniform float animDriver;
uniform sampler2D noise;
uniform float Min;
uniform float Max;
uniform float Power;



float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

float fresnel(float amount, vec3 normal, vec3 view){
	return pow(
		1.0 - clamp(dot(normalize(normal), normalize(view)), 0.0, 1.0),
		amount
	);
}

void main()
{
vec2 UV = vUv;
float UVy = UV.y;
vec3 vDir = normalize(cameraPosition - vPosition);
vec3 Normal_Main = normalize(vNormal);

//ChaoticEmission
float sc = clamp(0., 1.,
sin(u_time + 2.) * (cos(u_time * 2.) * -2.));
float ChaoticEmission = mix(.8, 1., sc);

//HeatMask
float hValueH = mix(4., 9., ChaoticEmission);
float HeatMask = remap(pow(UVy, 6.5), 0., hValueH, 0., 1.);

//FX
float fresnel_value = -.5;
vec3 Color = vec3(0.45);
//Color *= animDriver; 

float F = dot(vDir, vNormal);
F = remap(F, .5, 1., 0., 1.);



gl_FragColor = vec4(vec3(F),0.);
}