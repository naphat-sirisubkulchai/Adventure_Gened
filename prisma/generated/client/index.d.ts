
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Number1
 * 
 */
export type Number1 = $Result.DefaultSelection<Prisma.$Number1Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Number1s
 * const number1s = await prisma.number1.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Number1s
   * const number1s = await prisma.number1.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.number1`: Exposes CRUD operations for the **Number1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Number1s
    * const number1s = await prisma.number1.findMany()
    * ```
    */
  get number1(): Prisma.Number1Delegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Number1: 'Number1'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "number1"
      txIsolationLevel: never
    }
    model: {
      Number1: {
        payload: Prisma.$Number1Payload<ExtArgs>
        fields: Prisma.Number1FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Number1FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Number1FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>
          }
          findFirst: {
            args: Prisma.Number1FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Number1FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>
          }
          findMany: {
            args: Prisma.Number1FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>[]
          }
          create: {
            args: Prisma.Number1CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>
          }
          createMany: {
            args: Prisma.Number1CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Number1DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>
          }
          update: {
            args: Prisma.Number1UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>
          }
          deleteMany: {
            args: Prisma.Number1DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Number1UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Number1UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Number1Payload>
          }
          aggregate: {
            args: Prisma.Number1AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumber1>
          }
          groupBy: {
            args: Prisma.Number1GroupByArgs<ExtArgs>
            result: $Utils.Optional<Number1GroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Number1FindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Number1AggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Number1CountArgs<ExtArgs>
            result: $Utils.Optional<Number1CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Number1
   */

  export type AggregateNumber1 = {
    _count: Number1CountAggregateOutputType | null
    _avg: Number1AvgAggregateOutputType | null
    _sum: Number1SumAggregateOutputType | null
    _min: Number1MinAggregateOutputType | null
    _max: Number1MaxAggregateOutputType | null
  }

  export type Number1AvgAggregateOutputType = {
    choice1: number | null
    choice2: number | null
    choice3: number | null
  }

  export type Number1SumAggregateOutputType = {
    choice1: number | null
    choice2: number | null
    choice3: number | null
  }

  export type Number1MinAggregateOutputType = {
    id: string | null
    Number: string | null
    choice1: number | null
    choice2: number | null
    choice3: number | null
  }

  export type Number1MaxAggregateOutputType = {
    id: string | null
    Number: string | null
    choice1: number | null
    choice2: number | null
    choice3: number | null
  }

  export type Number1CountAggregateOutputType = {
    id: number
    Number: number
    choice1: number
    choice2: number
    choice3: number
    _all: number
  }


  export type Number1AvgAggregateInputType = {
    choice1?: true
    choice2?: true
    choice3?: true
  }

  export type Number1SumAggregateInputType = {
    choice1?: true
    choice2?: true
    choice3?: true
  }

  export type Number1MinAggregateInputType = {
    id?: true
    Number?: true
    choice1?: true
    choice2?: true
    choice3?: true
  }

  export type Number1MaxAggregateInputType = {
    id?: true
    Number?: true
    choice1?: true
    choice2?: true
    choice3?: true
  }

  export type Number1CountAggregateInputType = {
    id?: true
    Number?: true
    choice1?: true
    choice2?: true
    choice3?: true
    _all?: true
  }

  export type Number1AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Number1 to aggregate.
     */
    where?: Number1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Number1s to fetch.
     */
    orderBy?: Number1OrderByWithRelationInput | Number1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Number1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Number1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Number1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Number1s
    **/
    _count?: true | Number1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Number1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Number1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Number1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Number1MaxAggregateInputType
  }

  export type GetNumber1AggregateType<T extends Number1AggregateArgs> = {
        [P in keyof T & keyof AggregateNumber1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumber1[P]>
      : GetScalarType<T[P], AggregateNumber1[P]>
  }




  export type Number1GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Number1WhereInput
    orderBy?: Number1OrderByWithAggregationInput | Number1OrderByWithAggregationInput[]
    by: Number1ScalarFieldEnum[] | Number1ScalarFieldEnum
    having?: Number1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Number1CountAggregateInputType | true
    _avg?: Number1AvgAggregateInputType
    _sum?: Number1SumAggregateInputType
    _min?: Number1MinAggregateInputType
    _max?: Number1MaxAggregateInputType
  }

  export type Number1GroupByOutputType = {
    id: string
    Number: string
    choice1: number
    choice2: number
    choice3: number
    _count: Number1CountAggregateOutputType | null
    _avg: Number1AvgAggregateOutputType | null
    _sum: Number1SumAggregateOutputType | null
    _min: Number1MinAggregateOutputType | null
    _max: Number1MaxAggregateOutputType | null
  }

  type GetNumber1GroupByPayload<T extends Number1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Number1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Number1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Number1GroupByOutputType[P]>
            : GetScalarType<T[P], Number1GroupByOutputType[P]>
        }
      >
    >


  export type Number1Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Number?: boolean
    choice1?: boolean
    choice2?: boolean
    choice3?: boolean
  }, ExtArgs["result"]["number1"]>


  export type Number1SelectScalar = {
    id?: boolean
    Number?: boolean
    choice1?: boolean
    choice2?: boolean
    choice3?: boolean
  }


  export type $Number1Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Number1"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Number: string
      choice1: number
      choice2: number
      choice3: number
    }, ExtArgs["result"]["number1"]>
    composites: {}
  }

  type Number1GetPayload<S extends boolean | null | undefined | Number1DefaultArgs> = $Result.GetResult<Prisma.$Number1Payload, S>

  type Number1CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Number1FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Number1CountAggregateInputType | true
    }

  export interface Number1Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Number1'], meta: { name: 'Number1' } }
    /**
     * Find zero or one Number1 that matches the filter.
     * @param {Number1FindUniqueArgs} args - Arguments to find a Number1
     * @example
     * // Get one Number1
     * const number1 = await prisma.number1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Number1FindUniqueArgs>(args: SelectSubset<T, Number1FindUniqueArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Number1 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Number1FindUniqueOrThrowArgs} args - Arguments to find a Number1
     * @example
     * // Get one Number1
     * const number1 = await prisma.number1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Number1FindUniqueOrThrowArgs>(args: SelectSubset<T, Number1FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Number1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1FindFirstArgs} args - Arguments to find a Number1
     * @example
     * // Get one Number1
     * const number1 = await prisma.number1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Number1FindFirstArgs>(args?: SelectSubset<T, Number1FindFirstArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Number1 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1FindFirstOrThrowArgs} args - Arguments to find a Number1
     * @example
     * // Get one Number1
     * const number1 = await prisma.number1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Number1FindFirstOrThrowArgs>(args?: SelectSubset<T, Number1FindFirstOrThrowArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Number1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Number1s
     * const number1s = await prisma.number1.findMany()
     * 
     * // Get first 10 Number1s
     * const number1s = await prisma.number1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const number1WithIdOnly = await prisma.number1.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Number1FindManyArgs>(args?: SelectSubset<T, Number1FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "findMany">>

    /**
     * Create a Number1.
     * @param {Number1CreateArgs} args - Arguments to create a Number1.
     * @example
     * // Create one Number1
     * const Number1 = await prisma.number1.create({
     *   data: {
     *     // ... data to create a Number1
     *   }
     * })
     * 
     */
    create<T extends Number1CreateArgs>(args: SelectSubset<T, Number1CreateArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Number1s.
     * @param {Number1CreateManyArgs} args - Arguments to create many Number1s.
     * @example
     * // Create many Number1s
     * const number1 = await prisma.number1.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Number1CreateManyArgs>(args?: SelectSubset<T, Number1CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Number1.
     * @param {Number1DeleteArgs} args - Arguments to delete one Number1.
     * @example
     * // Delete one Number1
     * const Number1 = await prisma.number1.delete({
     *   where: {
     *     // ... filter to delete one Number1
     *   }
     * })
     * 
     */
    delete<T extends Number1DeleteArgs>(args: SelectSubset<T, Number1DeleteArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Number1.
     * @param {Number1UpdateArgs} args - Arguments to update one Number1.
     * @example
     * // Update one Number1
     * const number1 = await prisma.number1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Number1UpdateArgs>(args: SelectSubset<T, Number1UpdateArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Number1s.
     * @param {Number1DeleteManyArgs} args - Arguments to filter Number1s to delete.
     * @example
     * // Delete a few Number1s
     * const { count } = await prisma.number1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Number1DeleteManyArgs>(args?: SelectSubset<T, Number1DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Number1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Number1s
     * const number1 = await prisma.number1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Number1UpdateManyArgs>(args: SelectSubset<T, Number1UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Number1.
     * @param {Number1UpsertArgs} args - Arguments to update or create a Number1.
     * @example
     * // Update or create a Number1
     * const number1 = await prisma.number1.upsert({
     *   create: {
     *     // ... data to create a Number1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Number1 we want to update
     *   }
     * })
     */
    upsert<T extends Number1UpsertArgs>(args: SelectSubset<T, Number1UpsertArgs<ExtArgs>>): Prisma__Number1Client<$Result.GetResult<Prisma.$Number1Payload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Number1s that matches the filter.
     * @param {Number1FindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const number1 = await prisma.number1.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: Number1FindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Number1.
     * @param {Number1AggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const number1 = await prisma.number1.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Number1AggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Number1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1CountArgs} args - Arguments to filter Number1s to count.
     * @example
     * // Count the number of Number1s
     * const count = await prisma.number1.count({
     *   where: {
     *     // ... the filter for the Number1s we want to count
     *   }
     * })
    **/
    count<T extends Number1CountArgs>(
      args?: Subset<T, Number1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Number1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Number1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Number1AggregateArgs>(args: Subset<T, Number1AggregateArgs>): Prisma.PrismaPromise<GetNumber1AggregateType<T>>

    /**
     * Group by Number1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Number1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Number1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Number1GroupByArgs['orderBy'] }
        : { orderBy?: Number1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Number1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumber1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Number1 model
   */
  readonly fields: Number1FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Number1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Number1Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Number1 model
   */ 
  interface Number1FieldRefs {
    readonly id: FieldRef<"Number1", 'String'>
    readonly Number: FieldRef<"Number1", 'String'>
    readonly choice1: FieldRef<"Number1", 'Int'>
    readonly choice2: FieldRef<"Number1", 'Int'>
    readonly choice3: FieldRef<"Number1", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Number1 findUnique
   */
  export type Number1FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * Filter, which Number1 to fetch.
     */
    where: Number1WhereUniqueInput
  }

  /**
   * Number1 findUniqueOrThrow
   */
  export type Number1FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * Filter, which Number1 to fetch.
     */
    where: Number1WhereUniqueInput
  }

  /**
   * Number1 findFirst
   */
  export type Number1FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * Filter, which Number1 to fetch.
     */
    where?: Number1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Number1s to fetch.
     */
    orderBy?: Number1OrderByWithRelationInput | Number1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Number1s.
     */
    cursor?: Number1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Number1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Number1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Number1s.
     */
    distinct?: Number1ScalarFieldEnum | Number1ScalarFieldEnum[]
  }

  /**
   * Number1 findFirstOrThrow
   */
  export type Number1FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * Filter, which Number1 to fetch.
     */
    where?: Number1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Number1s to fetch.
     */
    orderBy?: Number1OrderByWithRelationInput | Number1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Number1s.
     */
    cursor?: Number1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Number1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Number1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Number1s.
     */
    distinct?: Number1ScalarFieldEnum | Number1ScalarFieldEnum[]
  }

  /**
   * Number1 findMany
   */
  export type Number1FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * Filter, which Number1s to fetch.
     */
    where?: Number1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Number1s to fetch.
     */
    orderBy?: Number1OrderByWithRelationInput | Number1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Number1s.
     */
    cursor?: Number1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Number1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Number1s.
     */
    skip?: number
    distinct?: Number1ScalarFieldEnum | Number1ScalarFieldEnum[]
  }

  /**
   * Number1 create
   */
  export type Number1CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * The data needed to create a Number1.
     */
    data: XOR<Number1CreateInput, Number1UncheckedCreateInput>
  }

  /**
   * Number1 createMany
   */
  export type Number1CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Number1s.
     */
    data: Number1CreateManyInput | Number1CreateManyInput[]
  }

  /**
   * Number1 update
   */
  export type Number1UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * The data needed to update a Number1.
     */
    data: XOR<Number1UpdateInput, Number1UncheckedUpdateInput>
    /**
     * Choose, which Number1 to update.
     */
    where: Number1WhereUniqueInput
  }

  /**
   * Number1 updateMany
   */
  export type Number1UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Number1s.
     */
    data: XOR<Number1UpdateManyMutationInput, Number1UncheckedUpdateManyInput>
    /**
     * Filter which Number1s to update
     */
    where?: Number1WhereInput
  }

  /**
   * Number1 upsert
   */
  export type Number1UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * The filter to search for the Number1 to update in case it exists.
     */
    where: Number1WhereUniqueInput
    /**
     * In case the Number1 found by the `where` argument doesn't exist, create a new Number1 with this data.
     */
    create: XOR<Number1CreateInput, Number1UncheckedCreateInput>
    /**
     * In case the Number1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Number1UpdateInput, Number1UncheckedUpdateInput>
  }

  /**
   * Number1 delete
   */
  export type Number1DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
    /**
     * Filter which Number1 to delete.
     */
    where: Number1WhereUniqueInput
  }

  /**
   * Number1 deleteMany
   */
  export type Number1DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Number1s to delete
     */
    where?: Number1WhereInput
  }

  /**
   * Number1 findRaw
   */
  export type Number1FindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Number1 aggregateRaw
   */
  export type Number1AggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Number1 without action
   */
  export type Number1DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Number1
     */
    select?: Number1Select<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const Number1ScalarFieldEnum: {
    id: 'id',
    Number: 'Number',
    choice1: 'choice1',
    choice2: 'choice2',
    choice3: 'choice3'
  };

  export type Number1ScalarFieldEnum = (typeof Number1ScalarFieldEnum)[keyof typeof Number1ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Number1WhereInput = {
    AND?: Number1WhereInput | Number1WhereInput[]
    OR?: Number1WhereInput[]
    NOT?: Number1WhereInput | Number1WhereInput[]
    id?: StringFilter<"Number1"> | string
    Number?: StringFilter<"Number1"> | string
    choice1?: IntFilter<"Number1"> | number
    choice2?: IntFilter<"Number1"> | number
    choice3?: IntFilter<"Number1"> | number
  }

  export type Number1OrderByWithRelationInput = {
    id?: SortOrder
    Number?: SortOrder
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
  }

  export type Number1WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    Number?: string
    AND?: Number1WhereInput | Number1WhereInput[]
    OR?: Number1WhereInput[]
    NOT?: Number1WhereInput | Number1WhereInput[]
    choice1?: IntFilter<"Number1"> | number
    choice2?: IntFilter<"Number1"> | number
    choice3?: IntFilter<"Number1"> | number
  }, "id" | "Number">

  export type Number1OrderByWithAggregationInput = {
    id?: SortOrder
    Number?: SortOrder
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
    _count?: Number1CountOrderByAggregateInput
    _avg?: Number1AvgOrderByAggregateInput
    _max?: Number1MaxOrderByAggregateInput
    _min?: Number1MinOrderByAggregateInput
    _sum?: Number1SumOrderByAggregateInput
  }

  export type Number1ScalarWhereWithAggregatesInput = {
    AND?: Number1ScalarWhereWithAggregatesInput | Number1ScalarWhereWithAggregatesInput[]
    OR?: Number1ScalarWhereWithAggregatesInput[]
    NOT?: Number1ScalarWhereWithAggregatesInput | Number1ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Number1"> | string
    Number?: StringWithAggregatesFilter<"Number1"> | string
    choice1?: IntWithAggregatesFilter<"Number1"> | number
    choice2?: IntWithAggregatesFilter<"Number1"> | number
    choice3?: IntWithAggregatesFilter<"Number1"> | number
  }

  export type Number1CreateInput = {
    id?: string
    Number: string
    choice1?: number
    choice2?: number
    choice3?: number
  }

  export type Number1UncheckedCreateInput = {
    id?: string
    Number: string
    choice1?: number
    choice2?: number
    choice3?: number
  }

  export type Number1UpdateInput = {
    Number?: StringFieldUpdateOperationsInput | string
    choice1?: IntFieldUpdateOperationsInput | number
    choice2?: IntFieldUpdateOperationsInput | number
    choice3?: IntFieldUpdateOperationsInput | number
  }

  export type Number1UncheckedUpdateInput = {
    Number?: StringFieldUpdateOperationsInput | string
    choice1?: IntFieldUpdateOperationsInput | number
    choice2?: IntFieldUpdateOperationsInput | number
    choice3?: IntFieldUpdateOperationsInput | number
  }

  export type Number1CreateManyInput = {
    id?: string
    Number: string
    choice1?: number
    choice2?: number
    choice3?: number
  }

  export type Number1UpdateManyMutationInput = {
    Number?: StringFieldUpdateOperationsInput | string
    choice1?: IntFieldUpdateOperationsInput | number
    choice2?: IntFieldUpdateOperationsInput | number
    choice3?: IntFieldUpdateOperationsInput | number
  }

  export type Number1UncheckedUpdateManyInput = {
    Number?: StringFieldUpdateOperationsInput | string
    choice1?: IntFieldUpdateOperationsInput | number
    choice2?: IntFieldUpdateOperationsInput | number
    choice3?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Number1CountOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
  }

  export type Number1AvgOrderByAggregateInput = {
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
  }

  export type Number1MaxOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
  }

  export type Number1MinOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
  }

  export type Number1SumOrderByAggregateInput = {
    choice1?: SortOrder
    choice2?: SortOrder
    choice3?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Number1DefaultArgs instead
     */
    export type Number1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Number1DefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}