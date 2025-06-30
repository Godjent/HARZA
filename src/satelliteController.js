// SatelliteController.js
import * as THREE from 'three';
import { EventDispatcher } from 'three';

class SatelliteController extends THREE.EventDispatcher{
    constructor(model, camera, scene) {
        super()
        this.model = model; // 3D модель спутника
        this.camera = camera; // Камера сцены
        this.scene = scene; // Сцена Three.js

        this.velocity = new THREE.Vector3(0, 0, 0); // Скорость
        this.acceleration = new THREE.Vector3(0, 0, 0); // Ускорение

        this.thrust = 0; // Тяга
        this.minThrust = 0; // Минимальная тяга
        this.maxThrust = 100; // Максимальная тяга
        this.accelerationFactor = 0.01; // Коэффициент тяги
        this.maxSpeed = 1; // Максимальная скорость

        this.rotationVelocity = new THREE.Vector3(0, 0, 0); // Скорость вращения
        this.rotationAcceleration = new THREE.Vector3(0, 0, 0); // Ускорение вращения
        this.inertiaFactor = .99; // Коэффициент инерции для поступательного движения
        this.rotationInertiaFactor = .99; // Коэффициент инерции для вращения

        this.verticalVelocity = new THREE.Vector3(0, 0, 0); // Скорость движения вверх/вниз
        this.verticalAcceleration = new THREE.Vector3(0, 0, 0); // Ускорение вертикального движения
        this.horizontalVelocity = new THREE.Vector3(0, 0, 0);
        this.horizontalAcceleration = new THREE.Vector3(0, 0, 0);
        this.verticalThrust = 0; // Тяга для маневров вверх/вниз
        this.horizontalThrust = 0;
        this.horizontalAccelerationFactor = .1;
        this.maxHorizontalSpeed = 1;
        this.verticalAccelerationFactor = 0.1; // Коэффициент вертикальной тяги
        this.maxVerticalSpeed = 1; // Максимальная вертикальная скорость

        this.increaseThrust = false; // Флаг для увеличения тяги
        this.decreaseThrust = false; // Флаг для уменьшения тяги

        this.rcsIndex = 0;
        this.thrustValue = 0;
        this.engineWorkcheck;

        this.initControls();
    }

    setThrustValue(thrust){
        this.thrustValue = thrust
        this.dispatchEvent({
            type: 'thrustChange',
            value: this.thrustValue
        }) 
    }

    setIndex(index) {
        this.rcsIndex = index
        this.dispatchEvent({
            type: 'rcsIndexChange', 
            value: this.rcsIndex })
    }

    // set EnginePower(bool){
    //     this.engineWorkcheck = bool
    //     this._onStateChange()
    // }

    // get EnginePower() {
    //     return this.engineWorkcheck
    // }

    initControls() {
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ShiftLeft':
                    this.increaseThrust = true;
                    break;
                case 'ControlLeft':
                    this.decreaseThrust = true;
                    break;

                case 'ArrowLeft':
                    this.rotationAcceleration.x = -0.1; // Тангаж вниз
                    this.setIndex(1)
                    break;
                case 'ArrowRight':
                    this.rotationAcceleration.x = 0.1; // Тангаж вверх
                    this.setIndex(2)
                    break;
                case 'ArrowDown':
                    this.rotationAcceleration.z = 0.1; // Крен влево
                    this.setIndex(3)
                    break;
                case 'ArrowUp':
                    this.rotationAcceleration.z = -0.1; // Крен вправо
                    this.setIndex(4)
                    break;
                case 'KeyQ':
                    this.rotationAcceleration.y = 0.1; // Рысканье влево
                    this.setIndex(5)
                    break;
                case 'KeyE':
                    this.rotationAcceleration.y = -0.1; // Рысканье вправо
                    this.setIndex(6)
                    break;
                case 'KeyW':
                    this.verticalThrust = .1; // Движение вверх
                    this.setIndex(7)
                    break;
                case 'KeyS':
                    this.verticalThrust = -.1; // Движение вниз
                    this.setIndex(8)
                    break;
                case 'KeyA':
                    this.horizontalThrust = -.1 //Влево
                    this.setIndex(9)
                    break;
                case 'KeyD':
                    this.horizontalThrust = .1 //Вправо
                    this.setIndex(10)
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            switch (event.code) {
                case 'ShiftLeft':
                    this.increaseThrust = false;
                    break;
                case 'ControlLeft':
                    this.decreaseThrust = false;
                    break;

                case 'ArrowUp':
                    this.rotationAcceleration.z = 0;
                    this.setIndex(0)
                    break;
                case 'ArrowDown':
                    this.rotationAcceleration.z = 0;
                    this.setIndex(0)
                    break;
                case 'ArrowLeft':
                    this.rotationAcceleration.x = 0;
                    this.setIndex(0)
                    break;
                case 'ArrowRight':
                    this.rotationAcceleration.x = 0;
                    this.setIndex(0)
                    break;
                case 'KeyQ':
                    this.rotationAcceleration.y = 0;
                    this.setIndex(0)
                    break;
                case 'KeyE':
                    this.rotationAcceleration.y = 0;
                    this.setIndex(0)
                    break;
                case 'KeyW':
                    this.verticalThrust = 0;
                    this.setIndex(0)
                    break;
                case 'KeyS':
                    this.verticalThrust = 0; // Остановка вертикального движения
                    this.setIndex(0)
                    break;
                case 'KeyA':
                    this.horizontalThrust = 0 //Влево
                    this.setIndex(0)
                    break;
                case 'KeyD':
                    this.horizontalThrust = 0 //Вправо
                    this.setIndex(0)
                    break;
            }
        });
    }

    update(deltaTime) {

        // Увеличение/уменьшение тяги
        if (this.increaseThrust ) {
            this.thrust = Math.min(this.thrust + 1 * deltaTime * 10, this.maxThrust);
            this.setThrustValue(this.thrust)
        }
        if (this.decreaseThrust ) {
            this.thrust = Math.max(this.thrust - 1 * deltaTime * 10, this.minThrust);
            this.setThrustValue(this.thrust)
        }

        // Рассчитываем направление тяги в мировых координатах
        const localThrust = new THREE.Vector3(1, 0, 0); // Локальное направление тяги
        const worldThrust = localThrust.applyQuaternion(this.model.quaternion).normalize();

        // Рассчитываем ускорение
        // this.acceleration.copy(worldThrust).multiplyScalar(this.thrust * this.accelerationFactor);

        // Применяем инерцию для скорости
        // this.velocity.multiplyScalar(this.inertiaFactor);

        // Обновление скорости
        // this.velocity.add(this.acceleration.clone().multiplyScalar(deltaTime));

        // Ограничение скорости
        // this.velocity.clampLength(0, this.maxSpeed);

        // Обновление позиции модели
        // this.model.position.add(this.velocity.clone().multiplyScalar(deltaTime));

        // Вертикальное движение
        const localVerticalThrust = new THREE.Vector3(0, 1, 0); // Локальное направление вертикальной тяги
        const worldVerticalThrust = localVerticalThrust.applyQuaternion(this.model.quaternion).normalize();
        this.verticalAcceleration.copy(worldVerticalThrust).multiplyScalar(this.verticalThrust * this.verticalAccelerationFactor);

        //Горизонтальное 
        const localHThrust = new THREE.Vector3(0, 0, 1); // Локальное направление вертикальной тяги
        const worldHThrust = localHThrust.applyQuaternion(this.model.quaternion).normalize();
        this.horizontalAcceleration.copy(worldHThrust).multiplyScalar(this.horizontalThrust* this.horizontalAccelerationFactor);

        // Применяем инерцию для вертикальной скорости
        this.verticalVelocity.multiplyScalar(this.inertiaFactor);
        this.horizontalVelocity.multiplyScalar(this.inertiaFactor);

        // Обновляем вертикальную скорость
        this.verticalVelocity.add(this.verticalAcceleration.clone().multiplyScalar(deltaTime));
        this.horizontalVelocity.add(this.horizontalAcceleration.clone().multiplyScalar(deltaTime));

        // Ограничиваем вертикальную скорость
        this.verticalVelocity.clampLength(0, this.maxVerticalSpeed);
        this.horizontalVelocity.clampLength(0, this.maxHorizontalSpeed);

        // Обновление вертикального положения модели
        this.model.position.add(this.verticalVelocity.clone().multiplyScalar(deltaTime));
        this.model.position.add(this.horizontalVelocity.clone().multiplyScalar(deltaTime));

        // Применяем инерцию для вращения
        this.rotationVelocity.multiplyScalar(this.rotationInertiaFactor);

        // Обновляем скорость вращения
        this.rotationVelocity.add(this.rotationAcceleration.clone().multiplyScalar(deltaTime));

        // Обновление вращения модели
        this.model.rotation.x += this.rotationVelocity.x * deltaTime; // Тангаж
        this.model.rotation.y += this.rotationVelocity.y * deltaTime; // Рысканье
        this.model.rotation.z += this.rotationVelocity.z * deltaTime; // Крен
    }
}

export default SatelliteController;
