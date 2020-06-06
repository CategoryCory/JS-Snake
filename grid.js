import { config } from "./config.js";

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * config.GRID_SIZE) + 1,
        y: Math.floor(Math.random() * config.GRID_SIZE) + 1,
    };
}

export function outsideGrid(position) {
    return (
        position.x < 1 ||
        position.x > config.GRID_SIZE ||
        position.y < 1 ||
        position.y > config.GRID_SIZE
    );
}
