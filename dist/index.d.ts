declare class Some<T> {
    v: T;
    constructor(v: T);
    static new<T>(v: T): Some<T>;
}
declare class Ok<T> {
    v: T;
    constructor(v: T);
    static new<T>(v: T): Some<T>;
}
declare class Err<T> {
    v: T;
    constructor(v: T);
    static new<T>(v: T): Some<T>;
}
declare type None = '__None__';
declare type Option<T> = Some<T> | None;
declare type Result<T, S> = Ok<T> | Err<S>;
declare function match<R, T, S = void>(...arg: [Option<T>, (some: T) => R, () => R] | [Result<T, S>, (ok: T) => R, (err: S) => R]): R;
export { Some, Ok, Err, None, match };
