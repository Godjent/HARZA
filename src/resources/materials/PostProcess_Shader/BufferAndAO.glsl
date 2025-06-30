precision highp float;

in vec3 vNormal;
in vec3 mvPosition;

//layout(location = 0) out vec4 SSAOtexture;
layout(location = 0) out vec4 normalBuffer;

void main() { 

     //SSAOtexture = vec4(1.);
     normalBuffer = vec4(normalize(vNormal  * 0.5 + 0.5), 1.);
}