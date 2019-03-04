# 一个提供 Option 和 Result  的 TypeScript 库
ts-match
========

A small matching library for TypeScript. The API is a single function defined as:

```typescript
function match<T, R>(input: T, defaultCase: IDefaultCase<R>, ...cases: ICase<T, R>[]): R
````

Example:

```typescript
import { Some, Ok, Err, None, match } from 'the-match'

const o:Option<String>[]= [Some.new('some'),None.new()]
const r:Result<string,number>[] = [Err.new(0),Ok.new('Ok')]


match(r[0],
    (ok: string)=>`msg: ${ok}`,
    (err: number)=>`code: ${err}`
)

match<string,string>(o[0],
    (some: string)=>`some: ${some}`,
    ()=>`none`
)
```