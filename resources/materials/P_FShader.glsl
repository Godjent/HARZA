varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform sampler2D u_planetMap;
uniform sampler2D uTextureTest;
uniform vec3 u_sDirection;
uniform vec3 u_atmoDay;
uniform vec3 u_atmoNight;
uniform sampler2D u_pNormal;
uniform sampler2D u_pAO;

//uniform float u_time;


void main()
{
    vec3 viewDir = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec2 uv = vec2(vUv.x, vUv.y);
    vec3 color = vec3(uv, 1.0);
    vec3 normal_Texture = normalize((texture2D(u_pNormal, uv)).rgb* 2. - 1.);
    normal_Texture = mix(normal, normal_Texture, .55);
   //normal_Texture = vec3(normal_Texture.x, normal_Texture.y, normal_Texture.z );
    //normal = normal_Texture;


    //Sun
    float sOrient = dot(u_sDirection, normal_Texture);
    //sOrient = clamp(sOrient, 0., 1.);

    //Textures
    float pMix = smoothstep(-.25, .5, sOrient);
    vec3 dColor = texture(u_planetMap, uv).rgb;
    dColor.r *= 2.1;
    dColor *= 1.5;
    vec3 nColor =  dColor * vec3(.001, .001, .001);
    float pAO = texture(u_pAO, uv).g;
    pAO *= .3;
    float pRoughness = texture(u_pAO, uv).r;
    vec3 pColor = mix(nColor,dColor,pMix);


    //Atmo
    float fresnel = dot(viewDir, normal_Texture) + 1.;
    fresnel = pow(fresnel, 1.5) * 4.;

    float atmoMix = smoothstep(-.3, 1., sOrient);
    vec3 atmoColor = mix(u_atmoNight, u_atmoDay, atmoMix);
    pColor = mix(pColor, atmoColor, atmoMix * fresnel);
    pColor *= pAO;
    //Color
    vec3 Color = vec3(fresnel, fresnel, fresnel);

    //color = atmoMix.rrr;


    //Specular
    vec3 reflection = reflect(-u_sDirection, normal_Texture);
    float specular = -dot(reflection, viewDir);
    specular = max(specular, 0.0);
    specular = pow(specular, 5.);
    specular *= .1;
    specular *= pRoughness;

    vec3 specularColor = mix(vec3(1.0), atmoColor, fresnel);
    //specularColor *= specular;
    pColor += specular * specularColor;

    

    gl_FragColor = vec4(pColor, 1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}