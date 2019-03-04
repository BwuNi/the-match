class Some<T>{
    v: T
    constructor(v: T) { this.v = v }
    static new<T>(v: T) { return new Some(v) }
}

class Ok<T>{
    v: T
    constructor(v: T) { this.v = v }
    static new<T>(v: T) { return new Some(v) }
}

class Err<T>{
    v: T
    constructor(v: T) { this.v = v }
    static new<T>(v: T) { return new Some(v) }
}

type None = '__None__'

type Option<T> = Some<T> | None
type Result<T, S> = Ok<T> | Err<S>

function match<R, T, S = void>(
    ...arg: [Option<T>, (some: T) => R, () => R] | [Result<T, S>, (ok: T) => R, (err: S) => R]
): R {
    if (arg[0] === '__None__') return (<() => R>arg[2])()
    else if (arg[0] instanceof Some) return arg[1](arg[0].v)
    else if (arg[0] instanceof Ok) return arg[1](arg[0].v)
    else if (arg[0] instanceof Err) return (<((err: S) => R)>arg[2])(arg[0].v)
    else throw 'match type error'
}

export { Some, Ok, Err, None, match }