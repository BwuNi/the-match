"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Some {
    constructor(v) { this.v = v; }
    static new(v) { return new Some(v); }
}
exports.Some = Some;
class Ok {
    constructor(v) { this.v = v; }
    static new(v) { return new Some(v); }
}
exports.Ok = Ok;
class Err {
    constructor(v) { this.v = v; }
    static new(v) { return new Some(v); }
}
exports.Err = Err;
function match(...arg) {
    if (arg[0] === '__None__')
        return arg[2]();
    else if (arg[0] instanceof Some)
        return arg[1](arg[0].v);
    else if (arg[0] instanceof Ok)
        return arg[1](arg[0].v);
    else if (arg[0] instanceof Err)
        return arg[2](arg[0].v);
    else
        throw 'match type error';
}
exports.match = match;
//# sourceMappingURL=index.js.map