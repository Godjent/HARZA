import * as THREE from 'three';
// SolarPanelManager Class
class SolarPanelManager {
    constructor(model, animations) {
        this.model = model; // 3D модель
        this.animations = animations; // Анимационные клипы
        this.mixer = new THREE.AnimationMixer(this.model); // AnimationMixer для модели
        this.currentAction = null; // Текущее действие
        this.panelsOpen = false; // Состояние панелей
    }

    // Открыть солнечные панели
    openPanels() {
        this._playAnimation(1); // Вперёд
        console.log("Solar panels opening...");
        this.panelsOpen = true;
    }

    // Закрыть солнечные панели
    closePanels() {
        this._playAnimation(-1); // Назад
        console.log("Solar panels closing...");
        this.panelsOpen = false;
    }
    
    arePanelsOpen() {
        return this.panelsOpen;
    }

    // Общий метод для воспроизведения анимации
    _playAnimation(timeScale) {
        if (!this.animations || this.animations.length === 0) {
            console.error("No animations available for solar panels.");
            return;
        }

        this.animations.forEach((clip) => {
            const action = this.mixer.clipAction(clip, this.model);

            if (this.currentAction && this.currentAction.getClip() === clip) {
                action.time = this.currentAction.time; // Сохраняем текущее время
            } else {
                action.reset(); // Сбрасываем анимацию
                action.time = timeScale > 0 ? 0 : clip.duration; // Начало или конец
            }

            action.timeScale = timeScale; // Устанавливаем направление
            action.setLoop(THREE.LoopOnce, 1); // Один цикл
            action.clampWhenFinished = true; // Остановка на последнем кадре
            action.play();

            this.currentAction = action; // Сохраняем текущую анимацию
        });
    }

    // Обновление AnimationMixer (вызывается в основном цикле)
    update(deltaTime) {
        if (this.mixer) {
            this.mixer.update(deltaTime);
        }
    }
}
export default SolarPanelManager;