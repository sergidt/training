export enum DeviceType {
    Camera, DMS
}

export enum CameraType {
    Movable, Fixed
}

export class Device {
    constructor(public name: string, public deviceType: DeviceType) {}
}

export class Camera extends Device {
    constructor(public name: string, public cameraType: CameraType) {
        super(name, DeviceType.Camera);
    }

    isFixed(): boolean {
        return this.cameraType === CameraType.Fixed;
    }
}

export let devices = [
    new Device('DMS1', DeviceType.DMS),
    new Camera('Camera1', CameraType.Movable),
    new Device('DMS2', DeviceType.DMS),
    new Camera('Camera2', CameraType.Fixed),
    new Camera('Camera3', CameraType.Movable),
    new Camera('Camera4', CameraType.Fixed),
    new Camera('Camera4', CameraType.Fixed)
];