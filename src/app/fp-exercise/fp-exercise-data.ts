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

export function totalMovableCameras(devices: Device[]): number {
    let totalCameras = 0;
    devices.forEach((e) => {
        if (e.deviceType === DeviceType.Camera && !(<Camera>e).isFixed()) totalCameras++;
    });
    return totalCameras;
}

export type Predicate = (d: Device) => boolean;

export function totalMovableCameras2(devices: Device[], conditions: Predicate[]): number {
    let totalCameras = 0;
    devices.forEach((d) => {
        if (conditions.every(c => c(d))) totalCameras++;
    });
    return totalCameras;
}

//We can execute that function this way:
const movable = totalMovableCameras2(devices, [(d) => d.deviceType === DeviceType.Camera, (d) => !(<Camera>d).isFixed()]);

export function getDevicesCountByConditions(devices: Device[], conditions: Predicate[]): number {
    let count= 0;
    devices.forEach((d) => {
        if (conditions.every(c => c(d))) count++;
    });
    return count;
}