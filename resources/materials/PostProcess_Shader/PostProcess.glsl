uniform sampler2D tDiffuse;
uniform sampler2D tNoise;
uniform float u_time;
uniform vec2 u_resolution;
uniform bool uPixelated;
uniform float uPixels;
uniform bool uLowres;
uniform float uShades;
uniform bool uDistort;
uniform float uDistortValue;
uniform bool uBW;
uniform float uColorTransition;
uniform float uDistortTransition;
uniform sampler2D uDepth;
uniform sampler2D uColor;
uniform vec2 uCameraPlanes;



varying vec2 vUv;
varying vec3 vNormal;
varying vec3 Position;

#define PI 3.141592

#define SSAO 1.0

#define DIMS uPixels
#define SHADES uShades
#define DIST_STRENGTH uDistortValue

float rand(vec3 n)
{
   return fract(abs(sin(dot(n,vec3(4.3357,-5.8464,6.7645))*52.47))*256.75+0.325);   
}

float pixelNoise(vec2 uv, float tile)
{
    vec3 p = vec3(uv * tile,0.0);
    float pNoise = (rand(floor(p/64.0))*0.5+rand(floor(p/32.0))*0.3+rand(floor(p/16.0))*0.2);
    return pNoise;
}

vec3 saturate(vec3 x) {
  return clamp(x, vec3(0.0), vec3(1.0));
}

float saturate_GS(float x) {
    return clamp(x, 0., 1.);
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}

vec2 computeUV( vec2 uv, float k, float kcube ){
    
    vec2 t = uv - .5;
    float r2 = t.x * t.x + t.y * t.y;
	float f = 0.;
    
    if( kcube == 0.0){
        f = 1. + r2 * k;
    }else{
        f = 1. + r2 * ( k + kcube * sqrt( r2 ) );
    }
    
    vec2 nUv = f * t + .5;
    //nUv.y = 1. - nUv.y;
 
    return nUv;
}

float linearToRelativeLuminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
}

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}


float UI_Square(vec2 UV, vec2 Size, float Thickkkk, vec2 Res){

    vec2 UI_uv = UV - .5;

    UI_uv = vec2( UI_uv.x * ((Res.x + Size.x) / Res.x), 
    UI_uv.y * ((Res.y + Size.y) / Res.y));

    UI_uv += .5;


    vec2 L_Square = step(vec2(0.),UI_uv);
    vec2 R_Square = step(vec2(0.),1. - UI_uv);

    vec2 L_Square_i = step(vec2(Thickkkk * 0.001 / 2., Thickkkk * 0.001),UI_uv);
    vec2 R_Square_i = step(vec2(Thickkkk * 0.001 / 2., Thickkkk * 0.001),1. - UI_uv);

    float UI_Sqr = 
    ((L_Square.x * L_Square.y) * 
    (R_Square.x * R_Square.y))
    - 
    ((L_Square_i.x * L_Square_i.y) * 
    (R_Square_i.x * R_Square_i.y));

    return UI_Sqr;
}

vec3 normalFromDepth(float depth, vec2 uv)
{   
    vec2 UV = gl_FragCoord.xy / (u_resolution.xy * 1.25);

    vec2 offset1 = vec2(.0, .001);
    vec2 offset2 = vec2(.001, .0);

    float depth1 = texture(uDepth, UV + offset1).r;
    float depth2 = texture(uDepth, UV + offset2).r;
    
    vec3 p1 = vec3(offset1, depth1 - depth);
    vec3 p2 = vec3(offset2, depth2 - depth);

    vec3 normal = cross(p1, p2);
    normal.z = -normal.z;

    return normalize(normal);

    // float textureOffset = 1.;

    // vec2 s = 1.0/vec2(u_resolution.x, u_resolution.y).xy;
    
    // float p = texture(uDepth, UV).x;
    // float h1 = texture(uDepth, UV + s * vec2(textureOffset,0)).x;
    // float v1 = texture(uDepth, UV + s * vec2(0,textureOffset)).x;
    // float normalStrngth = 15.;

    // return vec3(((p - vec2(h1, v1)) * normalStrngth) + .1, 1.);    
    
}
    

void main() {

    vec2 uv = vUv;
    vec2 UV_UI = vUv;
    vec2 Pixel = vUv * u_resolution;
    vec2 res = vUv / u_resolution;

    //Pixels
    vec2 dims = vec2(128. * DIMS,128. * DIMS);
    vec2 texUV = floor(vUv * dims) / dims;

    //PIXELATED_CONTROL
    if(uPixelated) {
    uv = texUV;
    
    //MainUV
    uv = uv * 2. - 1.;
    vec2 curveOffst = uv.yx / (PI * 1.5);
    uv += uv * curveOffst * curveOffst;
    uv = uv * .5 + .5;

    //UI_UV
    UV_UI = UV_UI * 2. - 1.;
    vec2 coUI = UV_UI.yx / (PI * 1.5);
    UV_UI += UV_UI * coUI * coUI;
    UV_UI = UV_UI * .5 + .5;

    }
    else {
    uv = vUv;
    UV_UI = vUv;
    }


    //Distort

    //float uDistortTransition = mix(0., .1 , sin(u_time));

    float SineWidth = 1.;
    float Wave1 = saturate_GS(sin((uv.y * 5.) * SineWidth
    + (u_time * 3.5) * SineWidth ));
    float Wave2 = saturate_GS(cos((uv.y * 15.) 
    + (u_time / .75) * SineWidth ));

    float maskDistort = Wave1 * Wave2;

    maskDistort = smoothstep(0., 3., maskDistort); 
    maskDistort = saturate_GS(maskDistort);

    float noiseT = texture(tNoise, uv * vec2(.05, 25.)
    + vec2(maskDistort, 0.)).b;
    noiseT = remap(noiseT, 0.2, .8, 0., 1.);
    noiseT = pow(noiseT, 3.);
    noiseT = saturate_GS(noiseT);
    noiseT = mix(0., noiseT, maskDistort);
    

    //Transition

    float transitionMask = smoothstep(0., 1., 
    vUv.x - uDistortTransition * 8.);

    float scaleDistUV = mix(1., 0.0, uDistortTransition);

    uv.y *= scaleDistUV;

    vec2 tr_d_UV = (vUv - .5) * vec2(.1, 5.) + u_time/15.;
    float tr_Distort = texture(tNoise, rotate(tr_d_UV, .5)).b;
    tr_Distort = remap(tr_Distort, .29, 1., 0., 1.);
    float tr_Noise = texture(tNoise, vUv + tr_Distort).b;

    tr_Noise = remap(tr_Noise,
    0.29, 1., 0., 1.);
    tr_Noise = smoothstep(0., 1., tr_Noise);
    tr_Noise = mix(0., tr_Noise, uDistortTransition);

    //tr_Noise *= transitionMask;


    //WaveForTransition
    float MaskMover = mix(-.5, .0, uDistortTransition);
    float WaveT = min((vUv.x - MaskMover), 
    1. - (vUv.x + MaskMover));
    WaveT = saturate_GS(WaveT);
    WaveT = smoothstep(.3, 0., WaveT);
    WaveT *= tr_Noise;


    float tr_Noise_R = smoothstep(0.3, 1., tr_Noise);
    float tr_Noise_G = smoothstep(0.0, 2., tr_Noise);
    float tr_Noise_B = smoothstep(0.0, .8, tr_Noise);

    float dOffset_R = 0.;
    float dOffset_G = 0.;
    float dOffset_B = 0.;
    

    //DistControl
    if(uDistort) {
    uv += (noiseT * DIST_STRENGTH);
    uv += mix(0., tr_Noise * .2, transitionMask);
    uv -= WaveT;
    dOffset_R = (noiseT * 2.) * DIST_STRENGTH + tr_Noise_R / 15.;
    dOffset_G = (noiseT * 1.5) * DIST_STRENGTH + tr_Noise_G / 10.;
    dOffset_B = (noiseT * 3.) * DIST_STRENGTH + tr_Noise_B / 10.;
    }


    //PixelatedFX

    vec3 pixelated = texture(tDiffuse, texUV).rgb;
    float pixelated_gs = pixelated.r + pixelated.g + pixelated.b;
    pixelated_gs = pow(pixelated_gs, .85);
    

    //LensDistortion
    float k = -.09;
    float kcube = -.15;
    float offset = 0.008;

    float red = texture( tDiffuse, computeUV( uv + dOffset_R
    , k + offset, kcube ) ).r; 
    float green = texture( tDiffuse, computeUV( uv
    + dOffset_G, k, 
    kcube) ).g; 
    float blue = texture( tDiffuse, computeUV( uv + dOffset_B
    , k - offset, kcube ) ).b; 
    
    vec3 result = pow(vec3(red, green, blue), vec3(1.08));
    

    float lmnc = linearToRelativeLuminance(result.rgb);
    float amount = smoothstep(0.1, .5, lmnc) * 3.;


    //ColorCorrection
    
    vec3 tintColor = vec3(1., 1., 1.);
    float brightAmount = .0122;
    result += brightAmount;

    float luminance = dot(result, vec3(.216, .7152, .0722));
    float saturationA = 1.1;
    result = mix(vec3(luminance), result, saturationA);

    float contrastA = 1.01;
    float midpoint = .5;
    result = (result - midpoint) * contrastA + midpoint;
    
    vec3 sg = sign(result - midpoint);
    result = sg * pow(
        abs(result - midpoint) * 2.0, 
        vec3(1.0 / contrastA)) * .5 + midpoint;

    
    //Vignette
    vec2 VgntMask = vec2(
    uv.x * (1. - uv.x),
    uv.y * (1. - uv.y));
    VgntMask = clamp(VgntMask, vec2(0.), 
    vec2(1.));
    float Vignette = VgntMask.x * VgntMask.y;

    Vignette = pow(Vignette, 1.1);
    Vignette = remap(Vignette, 0., .1, 0.1, 1.);


    //LowresControl
    vec3 result_LR = vec3(0.);
    if(uLowres){
    result_LR = floor(result * SHADES + .5) / SHADES;
    result_LR = saturate(pow(result_LR, vec3(1.05)) * 1.2);
    result_LR *= saturate_GS(Vignette * 2.);
    if(SHADES > 192.){
        float SHADES_TRANSITION = SHADES / 256.;
        result = mix(result_LR, result, SHADES_TRANSITION);
    }
    else
    {
        result = result_LR;
    }
    }


    //BW Control
    if(uBW){
    vec3 result_BW = vec3(
    result.r * .2126 + 
    result.g * .7152 + 
    result.b * .0722);
    result_BW = saturate(pow(result_BW * 1.25 + .003, vec3(.91)));
    result_BW = max(vec3(noiseT) * .05, result_BW);
    result = mix(result, result_BW, uColorTransition);
    }



    //ScreenSpaceAO
    #ifdef SSAO

    float ao_stength = 1.0;
    float base = .2;

    float area = .0075;
    float falloff = 0.000001;

    float radius = 0.0002;

    const int samples = 16;
    const vec3 sample_sphere[samples] = vec3[](
      vec3( 0.5381, 0.1856,-0.4319), vec3( 0.1379, 0.2486, 0.4430),
      vec3( 0.3371, 0.5679,-0.0057), vec3(-0.6999,-0.0451,-0.0019),
      vec3( 0.0689,-0.1598,-0.8547), vec3( 0.0560, 0.0069,-0.1843),
      vec3(-0.0146, 0.1402, 0.0762), vec3( 0.0100,-0.1924,-0.0344),
      vec3(-0.3577,-0.5301,-0.4358), vec3(-0.3169, 0.1063, 0.0158),
      vec3( 0.0103,-0.5869, 0.0046), vec3(-0.0897,-0.4940, 0.3287),
      vec3( 0.7119,-0.0154,-0.0918), vec3(-0.0533, 0.0596,-0.5411),
      vec3( 0.0352,-0.0631, 0.5460), vec3(-0.4776, 0.2847,-0.0271)
    );

    vec3 random = normalize(texture(tNoise, uv * 2.).rgb);
    // random.b = remap(random.b, -.5,3., 0., 1.);
    random.b = pow(random.b, 9.);
    random.b = saturate_GS(random.b);

    float depth = texture(uDepth, uv).r;

    vec3 position = vec3(uv, depth);

    vec3 normal = normalFromDepth(depth, uv);

    float radiusDepth = radius / depth;
    float occlusion = 0.0;

    for(int i=0; i < samples; i++) 
    {
        vec3 ray = radiusDepth * reflect(sample_sphere[i], random.bbb);
        vec3 hemi_ray = position + sign(dot(ray, normal)) * ray;

        float occ_depth = texture(uDepth, clamp(hemi_ray.xy, 0., 1.)).r;
        float difference = depth - occ_depth;

        occlusion += step(falloff, difference) *
        (1.0 - smoothstep(falloff, area, difference));
        

    }

    float ao = 1.0 - ao_stength * occlusion * (1.0 / 16.);
    ao = saturate_GS(ao - base);

    

    #endif
    




    float near = .1;
    float far = 2000.;

    float nDepth = depth * 2.0 - 1.0;

    float linearDepth = (2.0 * near * far) / (far + near - nDepth * (far - near));

    linearDepth = remap(linearDepth, -.1, 10., 0., 1.);

    linearDepth = pow(linearDepth, .7);

    gl_FragColor = vec4(result, 1.);
   
    //gl_FragDepth = log2(vFragDepth) * logDepthBuffer * .5;


    // gl_FragColor = vec4(vec3(ao), 1.);
}