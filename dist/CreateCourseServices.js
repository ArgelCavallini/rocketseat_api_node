"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseServices {
    execute({ name, duration, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseServices();
