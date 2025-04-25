
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
 * Model UserInput
 * 
 */
export type UserInput = $Result.DefaultSelection<Prisma.$UserInputPayload>
/**
 * Model GeminiResponse
 * 
 */
export type GeminiResponse = $Result.DefaultSelection<Prisma.$GeminiResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserInputs
 * const userInputs = await prisma.userInput.findMany()
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
   * // Fetch zero or more UserInputs
   * const userInputs = await prisma.userInput.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userInput`: Exposes CRUD operations for the **UserInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInputs
    * const userInputs = await prisma.userInput.findMany()
    * ```
    */
  get userInput(): Prisma.UserInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.geminiResponse`: Exposes CRUD operations for the **GeminiResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeminiResponses
    * const geminiResponses = await prisma.geminiResponse.findMany()
    * ```
    */
  get geminiResponse(): Prisma.GeminiResponseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UserInput: 'UserInput',
    GeminiResponse: 'GeminiResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userInput" | "geminiResponse"
      txIsolationLevel: never
    }
    model: {
      UserInput: {
        payload: Prisma.$UserInputPayload<ExtArgs>
        fields: Prisma.UserInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>
          }
          findFirst: {
            args: Prisma.UserInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>
          }
          findMany: {
            args: Prisma.UserInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>[]
          }
          create: {
            args: Prisma.UserInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>
          }
          createMany: {
            args: Prisma.UserInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>
          }
          update: {
            args: Prisma.UserInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>
          }
          deleteMany: {
            args: Prisma.UserInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>
          }
          aggregate: {
            args: Prisma.UserInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInput>
          }
          groupBy: {
            args: Prisma.UserInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInputGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserInputFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserInputAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserInputCountArgs<ExtArgs>
            result: $Utils.Optional<UserInputCountAggregateOutputType> | number
          }
        }
      }
      GeminiResponse: {
        payload: Prisma.$GeminiResponsePayload<ExtArgs>
        fields: Prisma.GeminiResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeminiResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeminiResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>
          }
          findFirst: {
            args: Prisma.GeminiResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeminiResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>
          }
          findMany: {
            args: Prisma.GeminiResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>[]
          }
          create: {
            args: Prisma.GeminiResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>
          }
          createMany: {
            args: Prisma.GeminiResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeminiResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>
          }
          update: {
            args: Prisma.GeminiResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>
          }
          deleteMany: {
            args: Prisma.GeminiResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeminiResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeminiResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeminiResponsePayload>
          }
          aggregate: {
            args: Prisma.GeminiResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeminiResponse>
          }
          groupBy: {
            args: Prisma.GeminiResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeminiResponseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GeminiResponseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GeminiResponseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GeminiResponseCountArgs<ExtArgs>
            result: $Utils.Optional<GeminiResponseCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userInput?: UserInputOmit
    geminiResponse?: GeminiResponseOmit
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
    | 'updateManyAndReturn'
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
   * Model UserInput
   */

  export type AggregateUserInput = {
    _count: UserInputCountAggregateOutputType | null
    _avg: UserInputAvgAggregateOutputType | null
    _sum: UserInputSumAggregateOutputType | null
    _min: UserInputMinAggregateOutputType | null
    _max: UserInputMaxAggregateOutputType | null
  }

  export type UserInputAvgAggregateOutputType = {
    nights: number | null
  }

  export type UserInputSumAggregateOutputType = {
    nights: number | null
  }

  export type UserInputMinAggregateOutputType = {
    id: string | null
    tripType: string | null
    budget: string | null
    budgetType: string | null
    arrivalDate: Date | null
    depatureDate: Date | null
    nights: number | null
    originCountry: string | null
    includeFlights: boolean | null
    includeHotels: boolean | null
    createdAt: Date | null
  }

  export type UserInputMaxAggregateOutputType = {
    id: string | null
    tripType: string | null
    budget: string | null
    budgetType: string | null
    arrivalDate: Date | null
    depatureDate: Date | null
    nights: number | null
    originCountry: string | null
    includeFlights: boolean | null
    includeHotels: boolean | null
    createdAt: Date | null
  }

  export type UserInputCountAggregateOutputType = {
    id: number
    tripType: number
    budget: number
    budgetType: number
    arrivalDate: number
    depatureDate: number
    nights: number
    originCountry: number
    includeFlights: number
    includeHotels: number
    activities: number
    createdAt: number
    _all: number
  }


  export type UserInputAvgAggregateInputType = {
    nights?: true
  }

  export type UserInputSumAggregateInputType = {
    nights?: true
  }

  export type UserInputMinAggregateInputType = {
    id?: true
    tripType?: true
    budget?: true
    budgetType?: true
    arrivalDate?: true
    depatureDate?: true
    nights?: true
    originCountry?: true
    includeFlights?: true
    includeHotels?: true
    createdAt?: true
  }

  export type UserInputMaxAggregateInputType = {
    id?: true
    tripType?: true
    budget?: true
    budgetType?: true
    arrivalDate?: true
    depatureDate?: true
    nights?: true
    originCountry?: true
    includeFlights?: true
    includeHotels?: true
    createdAt?: true
  }

  export type UserInputCountAggregateInputType = {
    id?: true
    tripType?: true
    budget?: true
    budgetType?: true
    arrivalDate?: true
    depatureDate?: true
    nights?: true
    originCountry?: true
    includeFlights?: true
    includeHotels?: true
    activities?: true
    createdAt?: true
    _all?: true
  }

  export type UserInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInput to aggregate.
     */
    where?: UserInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInputs to fetch.
     */
    orderBy?: UserInputOrderByWithRelationInput | UserInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInputs
    **/
    _count?: true | UserInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInputMaxAggregateInputType
  }

  export type GetUserInputAggregateType<T extends UserInputAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInput[P]>
      : GetScalarType<T[P], AggregateUserInput[P]>
  }




  export type UserInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInputWhereInput
    orderBy?: UserInputOrderByWithAggregationInput | UserInputOrderByWithAggregationInput[]
    by: UserInputScalarFieldEnum[] | UserInputScalarFieldEnum
    having?: UserInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInputCountAggregateInputType | true
    _avg?: UserInputAvgAggregateInputType
    _sum?: UserInputSumAggregateInputType
    _min?: UserInputMinAggregateInputType
    _max?: UserInputMaxAggregateInputType
  }

  export type UserInputGroupByOutputType = {
    id: string
    tripType: string
    budget: string
    budgetType: string
    arrivalDate: Date
    depatureDate: Date
    nights: number
    originCountry: string
    includeFlights: boolean
    includeHotels: boolean
    activities: string[]
    createdAt: Date
    _count: UserInputCountAggregateOutputType | null
    _avg: UserInputAvgAggregateOutputType | null
    _sum: UserInputSumAggregateOutputType | null
    _min: UserInputMinAggregateOutputType | null
    _max: UserInputMaxAggregateOutputType | null
  }

  type GetUserInputGroupByPayload<T extends UserInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInputGroupByOutputType[P]>
            : GetScalarType<T[P], UserInputGroupByOutputType[P]>
        }
      >
    >


  export type UserInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripType?: boolean
    budget?: boolean
    budgetType?: boolean
    arrivalDate?: boolean
    depatureDate?: boolean
    nights?: boolean
    originCountry?: boolean
    includeFlights?: boolean
    includeHotels?: boolean
    activities?: boolean
    createdAt?: boolean
    response?: boolean | UserInput$responseArgs<ExtArgs>
  }, ExtArgs["result"]["userInput"]>



  export type UserInputSelectScalar = {
    id?: boolean
    tripType?: boolean
    budget?: boolean
    budgetType?: boolean
    arrivalDate?: boolean
    depatureDate?: boolean
    nights?: boolean
    originCountry?: boolean
    includeFlights?: boolean
    includeHotels?: boolean
    activities?: boolean
    createdAt?: boolean
  }

  export type UserInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripType" | "budget" | "budgetType" | "arrivalDate" | "depatureDate" | "nights" | "originCountry" | "includeFlights" | "includeHotels" | "activities" | "createdAt", ExtArgs["result"]["userInput"]>
  export type UserInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | UserInput$responseArgs<ExtArgs>
  }

  export type $UserInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInput"
    objects: {
      response: Prisma.$GeminiResponsePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripType: string
      budget: string
      budgetType: string
      arrivalDate: Date
      depatureDate: Date
      nights: number
      originCountry: string
      includeFlights: boolean
      includeHotels: boolean
      activities: string[]
      createdAt: Date
    }, ExtArgs["result"]["userInput"]>
    composites: {}
  }

  type UserInputGetPayload<S extends boolean | null | undefined | UserInputDefaultArgs> = $Result.GetResult<Prisma.$UserInputPayload, S>

  type UserInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInputCountAggregateInputType | true
    }

  export interface UserInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInput'], meta: { name: 'UserInput' } }
    /**
     * Find zero or one UserInput that matches the filter.
     * @param {UserInputFindUniqueArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInputFindUniqueArgs>(args: SelectSubset<T, UserInputFindUniqueArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInputFindUniqueOrThrowArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInputFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputFindFirstArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInputFindFirstArgs>(args?: SelectSubset<T, UserInputFindFirstArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputFindFirstOrThrowArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInputFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInputs
     * const userInputs = await prisma.userInput.findMany()
     * 
     * // Get first 10 UserInputs
     * const userInputs = await prisma.userInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInputWithIdOnly = await prisma.userInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInputFindManyArgs>(args?: SelectSubset<T, UserInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInput.
     * @param {UserInputCreateArgs} args - Arguments to create a UserInput.
     * @example
     * // Create one UserInput
     * const UserInput = await prisma.userInput.create({
     *   data: {
     *     // ... data to create a UserInput
     *   }
     * })
     * 
     */
    create<T extends UserInputCreateArgs>(args: SelectSubset<T, UserInputCreateArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInputs.
     * @param {UserInputCreateManyArgs} args - Arguments to create many UserInputs.
     * @example
     * // Create many UserInputs
     * const userInput = await prisma.userInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInputCreateManyArgs>(args?: SelectSubset<T, UserInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInput.
     * @param {UserInputDeleteArgs} args - Arguments to delete one UserInput.
     * @example
     * // Delete one UserInput
     * const UserInput = await prisma.userInput.delete({
     *   where: {
     *     // ... filter to delete one UserInput
     *   }
     * })
     * 
     */
    delete<T extends UserInputDeleteArgs>(args: SelectSubset<T, UserInputDeleteArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInput.
     * @param {UserInputUpdateArgs} args - Arguments to update one UserInput.
     * @example
     * // Update one UserInput
     * const userInput = await prisma.userInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInputUpdateArgs>(args: SelectSubset<T, UserInputUpdateArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInputs.
     * @param {UserInputDeleteManyArgs} args - Arguments to filter UserInputs to delete.
     * @example
     * // Delete a few UserInputs
     * const { count } = await prisma.userInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInputDeleteManyArgs>(args?: SelectSubset<T, UserInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInputs
     * const userInput = await prisma.userInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInputUpdateManyArgs>(args: SelectSubset<T, UserInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInput.
     * @param {UserInputUpsertArgs} args - Arguments to update or create a UserInput.
     * @example
     * // Update or create a UserInput
     * const userInput = await prisma.userInput.upsert({
     *   create: {
     *     // ... data to create a UserInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInput we want to update
     *   }
     * })
     */
    upsert<T extends UserInputUpsertArgs>(args: SelectSubset<T, UserInputUpsertArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInputs that matches the filter.
     * @param {UserInputFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userInput = await prisma.userInput.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserInputFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserInput.
     * @param {UserInputAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userInput = await prisma.userInput.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserInputAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputCountArgs} args - Arguments to filter UserInputs to count.
     * @example
     * // Count the number of UserInputs
     * const count = await prisma.userInput.count({
     *   where: {
     *     // ... the filter for the UserInputs we want to count
     *   }
     * })
    **/
    count<T extends UserInputCountArgs>(
      args?: Subset<T, UserInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInputAggregateArgs>(args: Subset<T, UserInputAggregateArgs>): Prisma.PrismaPromise<GetUserInputAggregateType<T>>

    /**
     * Group by UserInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputGroupByArgs} args - Group by arguments.
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
      T extends UserInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInputGroupByArgs['orderBy'] }
        : { orderBy?: UserInputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInput model
   */
  readonly fields: UserInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    response<T extends UserInput$responseArgs<ExtArgs> = {}>(args?: Subset<T, UserInput$responseArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserInput model
   */
  interface UserInputFieldRefs {
    readonly id: FieldRef<"UserInput", 'String'>
    readonly tripType: FieldRef<"UserInput", 'String'>
    readonly budget: FieldRef<"UserInput", 'String'>
    readonly budgetType: FieldRef<"UserInput", 'String'>
    readonly arrivalDate: FieldRef<"UserInput", 'DateTime'>
    readonly depatureDate: FieldRef<"UserInput", 'DateTime'>
    readonly nights: FieldRef<"UserInput", 'Int'>
    readonly originCountry: FieldRef<"UserInput", 'String'>
    readonly includeFlights: FieldRef<"UserInput", 'Boolean'>
    readonly includeHotels: FieldRef<"UserInput", 'Boolean'>
    readonly activities: FieldRef<"UserInput", 'String[]'>
    readonly createdAt: FieldRef<"UserInput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserInput findUnique
   */
  export type UserInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * Filter, which UserInput to fetch.
     */
    where: UserInputWhereUniqueInput
  }

  /**
   * UserInput findUniqueOrThrow
   */
  export type UserInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * Filter, which UserInput to fetch.
     */
    where: UserInputWhereUniqueInput
  }

  /**
   * UserInput findFirst
   */
  export type UserInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * Filter, which UserInput to fetch.
     */
    where?: UserInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInputs to fetch.
     */
    orderBy?: UserInputOrderByWithRelationInput | UserInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInputs.
     */
    cursor?: UserInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInputs.
     */
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[]
  }

  /**
   * UserInput findFirstOrThrow
   */
  export type UserInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * Filter, which UserInput to fetch.
     */
    where?: UserInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInputs to fetch.
     */
    orderBy?: UserInputOrderByWithRelationInput | UserInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInputs.
     */
    cursor?: UserInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInputs.
     */
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[]
  }

  /**
   * UserInput findMany
   */
  export type UserInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * Filter, which UserInputs to fetch.
     */
    where?: UserInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInputs to fetch.
     */
    orderBy?: UserInputOrderByWithRelationInput | UserInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInputs.
     */
    cursor?: UserInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInputs.
     */
    skip?: number
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[]
  }

  /**
   * UserInput create
   */
  export type UserInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInput.
     */
    data: XOR<UserInputCreateInput, UserInputUncheckedCreateInput>
  }

  /**
   * UserInput createMany
   */
  export type UserInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInputs.
     */
    data: UserInputCreateManyInput | UserInputCreateManyInput[]
  }

  /**
   * UserInput update
   */
  export type UserInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInput.
     */
    data: XOR<UserInputUpdateInput, UserInputUncheckedUpdateInput>
    /**
     * Choose, which UserInput to update.
     */
    where: UserInputWhereUniqueInput
  }

  /**
   * UserInput updateMany
   */
  export type UserInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInputs.
     */
    data: XOR<UserInputUpdateManyMutationInput, UserInputUncheckedUpdateManyInput>
    /**
     * Filter which UserInputs to update
     */
    where?: UserInputWhereInput
    /**
     * Limit how many UserInputs to update.
     */
    limit?: number
  }

  /**
   * UserInput upsert
   */
  export type UserInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInput to update in case it exists.
     */
    where: UserInputWhereUniqueInput
    /**
     * In case the UserInput found by the `where` argument doesn't exist, create a new UserInput with this data.
     */
    create: XOR<UserInputCreateInput, UserInputUncheckedCreateInput>
    /**
     * In case the UserInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInputUpdateInput, UserInputUncheckedUpdateInput>
  }

  /**
   * UserInput delete
   */
  export type UserInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
    /**
     * Filter which UserInput to delete.
     */
    where: UserInputWhereUniqueInput
  }

  /**
   * UserInput deleteMany
   */
  export type UserInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInputs to delete
     */
    where?: UserInputWhereInput
    /**
     * Limit how many UserInputs to delete.
     */
    limit?: number
  }

  /**
   * UserInput findRaw
   */
  export type UserInputFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UserInput aggregateRaw
   */
  export type UserInputAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UserInput.response
   */
  export type UserInput$responseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    where?: GeminiResponseWhereInput
  }

  /**
   * UserInput without action
   */
  export type UserInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null
  }


  /**
   * Model GeminiResponse
   */

  export type AggregateGeminiResponse = {
    _count: GeminiResponseCountAggregateOutputType | null
    _min: GeminiResponseMinAggregateOutputType | null
    _max: GeminiResponseMaxAggregateOutputType | null
  }

  export type GeminiResponseMinAggregateOutputType = {
    id: string | null
    plan: string | null
    userInputId: string | null
    createdAt: Date | null
  }

  export type GeminiResponseMaxAggregateOutputType = {
    id: string | null
    plan: string | null
    userInputId: string | null
    createdAt: Date | null
  }

  export type GeminiResponseCountAggregateOutputType = {
    id: number
    plan: number
    userInputId: number
    createdAt: number
    _all: number
  }


  export type GeminiResponseMinAggregateInputType = {
    id?: true
    plan?: true
    userInputId?: true
    createdAt?: true
  }

  export type GeminiResponseMaxAggregateInputType = {
    id?: true
    plan?: true
    userInputId?: true
    createdAt?: true
  }

  export type GeminiResponseCountAggregateInputType = {
    id?: true
    plan?: true
    userInputId?: true
    createdAt?: true
    _all?: true
  }

  export type GeminiResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeminiResponse to aggregate.
     */
    where?: GeminiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeminiResponses to fetch.
     */
    orderBy?: GeminiResponseOrderByWithRelationInput | GeminiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeminiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeminiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeminiResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeminiResponses
    **/
    _count?: true | GeminiResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeminiResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeminiResponseMaxAggregateInputType
  }

  export type GetGeminiResponseAggregateType<T extends GeminiResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateGeminiResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeminiResponse[P]>
      : GetScalarType<T[P], AggregateGeminiResponse[P]>
  }




  export type GeminiResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeminiResponseWhereInput
    orderBy?: GeminiResponseOrderByWithAggregationInput | GeminiResponseOrderByWithAggregationInput[]
    by: GeminiResponseScalarFieldEnum[] | GeminiResponseScalarFieldEnum
    having?: GeminiResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeminiResponseCountAggregateInputType | true
    _min?: GeminiResponseMinAggregateInputType
    _max?: GeminiResponseMaxAggregateInputType
  }

  export type GeminiResponseGroupByOutputType = {
    id: string
    plan: string
    userInputId: string
    createdAt: Date
    _count: GeminiResponseCountAggregateOutputType | null
    _min: GeminiResponseMinAggregateOutputType | null
    _max: GeminiResponseMaxAggregateOutputType | null
  }

  type GetGeminiResponseGroupByPayload<T extends GeminiResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeminiResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeminiResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeminiResponseGroupByOutputType[P]>
            : GetScalarType<T[P], GeminiResponseGroupByOutputType[P]>
        }
      >
    >


  export type GeminiResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    userInputId?: boolean
    createdAt?: boolean
    userInput?: boolean | UserInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geminiResponse"]>



  export type GeminiResponseSelectScalar = {
    id?: boolean
    plan?: boolean
    userInputId?: boolean
    createdAt?: boolean
  }

  export type GeminiResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan" | "userInputId" | "createdAt", ExtArgs["result"]["geminiResponse"]>
  export type GeminiResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userInput?: boolean | UserInputDefaultArgs<ExtArgs>
  }

  export type $GeminiResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeminiResponse"
    objects: {
      userInput: Prisma.$UserInputPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: string
      userInputId: string
      createdAt: Date
    }, ExtArgs["result"]["geminiResponse"]>
    composites: {}
  }

  type GeminiResponseGetPayload<S extends boolean | null | undefined | GeminiResponseDefaultArgs> = $Result.GetResult<Prisma.$GeminiResponsePayload, S>

  type GeminiResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeminiResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeminiResponseCountAggregateInputType | true
    }

  export interface GeminiResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeminiResponse'], meta: { name: 'GeminiResponse' } }
    /**
     * Find zero or one GeminiResponse that matches the filter.
     * @param {GeminiResponseFindUniqueArgs} args - Arguments to find a GeminiResponse
     * @example
     * // Get one GeminiResponse
     * const geminiResponse = await prisma.geminiResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeminiResponseFindUniqueArgs>(args: SelectSubset<T, GeminiResponseFindUniqueArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeminiResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeminiResponseFindUniqueOrThrowArgs} args - Arguments to find a GeminiResponse
     * @example
     * // Get one GeminiResponse
     * const geminiResponse = await prisma.geminiResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeminiResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, GeminiResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeminiResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseFindFirstArgs} args - Arguments to find a GeminiResponse
     * @example
     * // Get one GeminiResponse
     * const geminiResponse = await prisma.geminiResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeminiResponseFindFirstArgs>(args?: SelectSubset<T, GeminiResponseFindFirstArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeminiResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseFindFirstOrThrowArgs} args - Arguments to find a GeminiResponse
     * @example
     * // Get one GeminiResponse
     * const geminiResponse = await prisma.geminiResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeminiResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, GeminiResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeminiResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeminiResponses
     * const geminiResponses = await prisma.geminiResponse.findMany()
     * 
     * // Get first 10 GeminiResponses
     * const geminiResponses = await prisma.geminiResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geminiResponseWithIdOnly = await prisma.geminiResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeminiResponseFindManyArgs>(args?: SelectSubset<T, GeminiResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeminiResponse.
     * @param {GeminiResponseCreateArgs} args - Arguments to create a GeminiResponse.
     * @example
     * // Create one GeminiResponse
     * const GeminiResponse = await prisma.geminiResponse.create({
     *   data: {
     *     // ... data to create a GeminiResponse
     *   }
     * })
     * 
     */
    create<T extends GeminiResponseCreateArgs>(args: SelectSubset<T, GeminiResponseCreateArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeminiResponses.
     * @param {GeminiResponseCreateManyArgs} args - Arguments to create many GeminiResponses.
     * @example
     * // Create many GeminiResponses
     * const geminiResponse = await prisma.geminiResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeminiResponseCreateManyArgs>(args?: SelectSubset<T, GeminiResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeminiResponse.
     * @param {GeminiResponseDeleteArgs} args - Arguments to delete one GeminiResponse.
     * @example
     * // Delete one GeminiResponse
     * const GeminiResponse = await prisma.geminiResponse.delete({
     *   where: {
     *     // ... filter to delete one GeminiResponse
     *   }
     * })
     * 
     */
    delete<T extends GeminiResponseDeleteArgs>(args: SelectSubset<T, GeminiResponseDeleteArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeminiResponse.
     * @param {GeminiResponseUpdateArgs} args - Arguments to update one GeminiResponse.
     * @example
     * // Update one GeminiResponse
     * const geminiResponse = await prisma.geminiResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeminiResponseUpdateArgs>(args: SelectSubset<T, GeminiResponseUpdateArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeminiResponses.
     * @param {GeminiResponseDeleteManyArgs} args - Arguments to filter GeminiResponses to delete.
     * @example
     * // Delete a few GeminiResponses
     * const { count } = await prisma.geminiResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeminiResponseDeleteManyArgs>(args?: SelectSubset<T, GeminiResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeminiResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeminiResponses
     * const geminiResponse = await prisma.geminiResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeminiResponseUpdateManyArgs>(args: SelectSubset<T, GeminiResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeminiResponse.
     * @param {GeminiResponseUpsertArgs} args - Arguments to update or create a GeminiResponse.
     * @example
     * // Update or create a GeminiResponse
     * const geminiResponse = await prisma.geminiResponse.upsert({
     *   create: {
     *     // ... data to create a GeminiResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeminiResponse we want to update
     *   }
     * })
     */
    upsert<T extends GeminiResponseUpsertArgs>(args: SelectSubset<T, GeminiResponseUpsertArgs<ExtArgs>>): Prisma__GeminiResponseClient<$Result.GetResult<Prisma.$GeminiResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeminiResponses that matches the filter.
     * @param {GeminiResponseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const geminiResponse = await prisma.geminiResponse.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GeminiResponseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GeminiResponse.
     * @param {GeminiResponseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const geminiResponse = await prisma.geminiResponse.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GeminiResponseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GeminiResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseCountArgs} args - Arguments to filter GeminiResponses to count.
     * @example
     * // Count the number of GeminiResponses
     * const count = await prisma.geminiResponse.count({
     *   where: {
     *     // ... the filter for the GeminiResponses we want to count
     *   }
     * })
    **/
    count<T extends GeminiResponseCountArgs>(
      args?: Subset<T, GeminiResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeminiResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeminiResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeminiResponseAggregateArgs>(args: Subset<T, GeminiResponseAggregateArgs>): Prisma.PrismaPromise<GetGeminiResponseAggregateType<T>>

    /**
     * Group by GeminiResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeminiResponseGroupByArgs} args - Group by arguments.
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
      T extends GeminiResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeminiResponseGroupByArgs['orderBy'] }
        : { orderBy?: GeminiResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeminiResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeminiResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeminiResponse model
   */
  readonly fields: GeminiResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeminiResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeminiResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userInput<T extends UserInputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInputDefaultArgs<ExtArgs>>): Prisma__UserInputClient<$Result.GetResult<Prisma.$UserInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeminiResponse model
   */
  interface GeminiResponseFieldRefs {
    readonly id: FieldRef<"GeminiResponse", 'String'>
    readonly plan: FieldRef<"GeminiResponse", 'String'>
    readonly userInputId: FieldRef<"GeminiResponse", 'String'>
    readonly createdAt: FieldRef<"GeminiResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeminiResponse findUnique
   */
  export type GeminiResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * Filter, which GeminiResponse to fetch.
     */
    where: GeminiResponseWhereUniqueInput
  }

  /**
   * GeminiResponse findUniqueOrThrow
   */
  export type GeminiResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * Filter, which GeminiResponse to fetch.
     */
    where: GeminiResponseWhereUniqueInput
  }

  /**
   * GeminiResponse findFirst
   */
  export type GeminiResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * Filter, which GeminiResponse to fetch.
     */
    where?: GeminiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeminiResponses to fetch.
     */
    orderBy?: GeminiResponseOrderByWithRelationInput | GeminiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeminiResponses.
     */
    cursor?: GeminiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeminiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeminiResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeminiResponses.
     */
    distinct?: GeminiResponseScalarFieldEnum | GeminiResponseScalarFieldEnum[]
  }

  /**
   * GeminiResponse findFirstOrThrow
   */
  export type GeminiResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * Filter, which GeminiResponse to fetch.
     */
    where?: GeminiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeminiResponses to fetch.
     */
    orderBy?: GeminiResponseOrderByWithRelationInput | GeminiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeminiResponses.
     */
    cursor?: GeminiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeminiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeminiResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeminiResponses.
     */
    distinct?: GeminiResponseScalarFieldEnum | GeminiResponseScalarFieldEnum[]
  }

  /**
   * GeminiResponse findMany
   */
  export type GeminiResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * Filter, which GeminiResponses to fetch.
     */
    where?: GeminiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeminiResponses to fetch.
     */
    orderBy?: GeminiResponseOrderByWithRelationInput | GeminiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeminiResponses.
     */
    cursor?: GeminiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeminiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeminiResponses.
     */
    skip?: number
    distinct?: GeminiResponseScalarFieldEnum | GeminiResponseScalarFieldEnum[]
  }

  /**
   * GeminiResponse create
   */
  export type GeminiResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a GeminiResponse.
     */
    data: XOR<GeminiResponseCreateInput, GeminiResponseUncheckedCreateInput>
  }

  /**
   * GeminiResponse createMany
   */
  export type GeminiResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeminiResponses.
     */
    data: GeminiResponseCreateManyInput | GeminiResponseCreateManyInput[]
  }

  /**
   * GeminiResponse update
   */
  export type GeminiResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a GeminiResponse.
     */
    data: XOR<GeminiResponseUpdateInput, GeminiResponseUncheckedUpdateInput>
    /**
     * Choose, which GeminiResponse to update.
     */
    where: GeminiResponseWhereUniqueInput
  }

  /**
   * GeminiResponse updateMany
   */
  export type GeminiResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeminiResponses.
     */
    data: XOR<GeminiResponseUpdateManyMutationInput, GeminiResponseUncheckedUpdateManyInput>
    /**
     * Filter which GeminiResponses to update
     */
    where?: GeminiResponseWhereInput
    /**
     * Limit how many GeminiResponses to update.
     */
    limit?: number
  }

  /**
   * GeminiResponse upsert
   */
  export type GeminiResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the GeminiResponse to update in case it exists.
     */
    where: GeminiResponseWhereUniqueInput
    /**
     * In case the GeminiResponse found by the `where` argument doesn't exist, create a new GeminiResponse with this data.
     */
    create: XOR<GeminiResponseCreateInput, GeminiResponseUncheckedCreateInput>
    /**
     * In case the GeminiResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeminiResponseUpdateInput, GeminiResponseUncheckedUpdateInput>
  }

  /**
   * GeminiResponse delete
   */
  export type GeminiResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
    /**
     * Filter which GeminiResponse to delete.
     */
    where: GeminiResponseWhereUniqueInput
  }

  /**
   * GeminiResponse deleteMany
   */
  export type GeminiResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeminiResponses to delete
     */
    where?: GeminiResponseWhereInput
    /**
     * Limit how many GeminiResponses to delete.
     */
    limit?: number
  }

  /**
   * GeminiResponse findRaw
   */
  export type GeminiResponseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * GeminiResponse aggregateRaw
   */
  export type GeminiResponseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * GeminiResponse without action
   */
  export type GeminiResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeminiResponse
     */
    select?: GeminiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeminiResponse
     */
    omit?: GeminiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeminiResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserInputScalarFieldEnum: {
    id: 'id',
    tripType: 'tripType',
    budget: 'budget',
    budgetType: 'budgetType',
    arrivalDate: 'arrivalDate',
    depatureDate: 'depatureDate',
    nights: 'nights',
    originCountry: 'originCountry',
    includeFlights: 'includeFlights',
    includeHotels: 'includeHotels',
    activities: 'activities',
    createdAt: 'createdAt'
  };

  export type UserInputScalarFieldEnum = (typeof UserInputScalarFieldEnum)[keyof typeof UserInputScalarFieldEnum]


  export const GeminiResponseScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    userInputId: 'userInputId',
    createdAt: 'createdAt'
  };

  export type GeminiResponseScalarFieldEnum = (typeof GeminiResponseScalarFieldEnum)[keyof typeof GeminiResponseScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserInputWhereInput = {
    AND?: UserInputWhereInput | UserInputWhereInput[]
    OR?: UserInputWhereInput[]
    NOT?: UserInputWhereInput | UserInputWhereInput[]
    id?: StringFilter<"UserInput"> | string
    tripType?: StringFilter<"UserInput"> | string
    budget?: StringFilter<"UserInput"> | string
    budgetType?: StringFilter<"UserInput"> | string
    arrivalDate?: DateTimeFilter<"UserInput"> | Date | string
    depatureDate?: DateTimeFilter<"UserInput"> | Date | string
    nights?: IntFilter<"UserInput"> | number
    originCountry?: StringFilter<"UserInput"> | string
    includeFlights?: BoolFilter<"UserInput"> | boolean
    includeHotels?: BoolFilter<"UserInput"> | boolean
    activities?: StringNullableListFilter<"UserInput">
    createdAt?: DateTimeFilter<"UserInput"> | Date | string
    response?: XOR<GeminiResponseNullableScalarRelationFilter, GeminiResponseWhereInput> | null
  }

  export type UserInputOrderByWithRelationInput = {
    id?: SortOrder
    tripType?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    arrivalDate?: SortOrder
    depatureDate?: SortOrder
    nights?: SortOrder
    originCountry?: SortOrder
    includeFlights?: SortOrder
    includeHotels?: SortOrder
    activities?: SortOrder
    createdAt?: SortOrder
    response?: GeminiResponseOrderByWithRelationInput
  }

  export type UserInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserInputWhereInput | UserInputWhereInput[]
    OR?: UserInputWhereInput[]
    NOT?: UserInputWhereInput | UserInputWhereInput[]
    tripType?: StringFilter<"UserInput"> | string
    budget?: StringFilter<"UserInput"> | string
    budgetType?: StringFilter<"UserInput"> | string
    arrivalDate?: DateTimeFilter<"UserInput"> | Date | string
    depatureDate?: DateTimeFilter<"UserInput"> | Date | string
    nights?: IntFilter<"UserInput"> | number
    originCountry?: StringFilter<"UserInput"> | string
    includeFlights?: BoolFilter<"UserInput"> | boolean
    includeHotels?: BoolFilter<"UserInput"> | boolean
    activities?: StringNullableListFilter<"UserInput">
    createdAt?: DateTimeFilter<"UserInput"> | Date | string
    response?: XOR<GeminiResponseNullableScalarRelationFilter, GeminiResponseWhereInput> | null
  }, "id">

  export type UserInputOrderByWithAggregationInput = {
    id?: SortOrder
    tripType?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    arrivalDate?: SortOrder
    depatureDate?: SortOrder
    nights?: SortOrder
    originCountry?: SortOrder
    includeFlights?: SortOrder
    includeHotels?: SortOrder
    activities?: SortOrder
    createdAt?: SortOrder
    _count?: UserInputCountOrderByAggregateInput
    _avg?: UserInputAvgOrderByAggregateInput
    _max?: UserInputMaxOrderByAggregateInput
    _min?: UserInputMinOrderByAggregateInput
    _sum?: UserInputSumOrderByAggregateInput
  }

  export type UserInputScalarWhereWithAggregatesInput = {
    AND?: UserInputScalarWhereWithAggregatesInput | UserInputScalarWhereWithAggregatesInput[]
    OR?: UserInputScalarWhereWithAggregatesInput[]
    NOT?: UserInputScalarWhereWithAggregatesInput | UserInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserInput"> | string
    tripType?: StringWithAggregatesFilter<"UserInput"> | string
    budget?: StringWithAggregatesFilter<"UserInput"> | string
    budgetType?: StringWithAggregatesFilter<"UserInput"> | string
    arrivalDate?: DateTimeWithAggregatesFilter<"UserInput"> | Date | string
    depatureDate?: DateTimeWithAggregatesFilter<"UserInput"> | Date | string
    nights?: IntWithAggregatesFilter<"UserInput"> | number
    originCountry?: StringWithAggregatesFilter<"UserInput"> | string
    includeFlights?: BoolWithAggregatesFilter<"UserInput"> | boolean
    includeHotels?: BoolWithAggregatesFilter<"UserInput"> | boolean
    activities?: StringNullableListFilter<"UserInput">
    createdAt?: DateTimeWithAggregatesFilter<"UserInput"> | Date | string
  }

  export type GeminiResponseWhereInput = {
    AND?: GeminiResponseWhereInput | GeminiResponseWhereInput[]
    OR?: GeminiResponseWhereInput[]
    NOT?: GeminiResponseWhereInput | GeminiResponseWhereInput[]
    id?: StringFilter<"GeminiResponse"> | string
    plan?: StringFilter<"GeminiResponse"> | string
    userInputId?: StringFilter<"GeminiResponse"> | string
    createdAt?: DateTimeFilter<"GeminiResponse"> | Date | string
    userInput?: XOR<UserInputScalarRelationFilter, UserInputWhereInput>
  }

  export type GeminiResponseOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    userInputId?: SortOrder
    createdAt?: SortOrder
    userInput?: UserInputOrderByWithRelationInput
  }

  export type GeminiResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userInputId?: string
    AND?: GeminiResponseWhereInput | GeminiResponseWhereInput[]
    OR?: GeminiResponseWhereInput[]
    NOT?: GeminiResponseWhereInput | GeminiResponseWhereInput[]
    plan?: StringFilter<"GeminiResponse"> | string
    createdAt?: DateTimeFilter<"GeminiResponse"> | Date | string
    userInput?: XOR<UserInputScalarRelationFilter, UserInputWhereInput>
  }, "id" | "userInputId">

  export type GeminiResponseOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    userInputId?: SortOrder
    createdAt?: SortOrder
    _count?: GeminiResponseCountOrderByAggregateInput
    _max?: GeminiResponseMaxOrderByAggregateInput
    _min?: GeminiResponseMinOrderByAggregateInput
  }

  export type GeminiResponseScalarWhereWithAggregatesInput = {
    AND?: GeminiResponseScalarWhereWithAggregatesInput | GeminiResponseScalarWhereWithAggregatesInput[]
    OR?: GeminiResponseScalarWhereWithAggregatesInput[]
    NOT?: GeminiResponseScalarWhereWithAggregatesInput | GeminiResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeminiResponse"> | string
    plan?: StringWithAggregatesFilter<"GeminiResponse"> | string
    userInputId?: StringWithAggregatesFilter<"GeminiResponse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeminiResponse"> | Date | string
  }

  export type UserInputCreateInput = {
    id?: string
    tripType: string
    budget: string
    budgetType: string
    arrivalDate: Date | string
    depatureDate: Date | string
    nights: number
    originCountry: string
    includeFlights: boolean
    includeHotels: boolean
    activities?: UserInputCreateactivitiesInput | string[]
    createdAt?: Date | string
    response?: GeminiResponseCreateNestedOneWithoutUserInputInput
  }

  export type UserInputUncheckedCreateInput = {
    id?: string
    tripType: string
    budget: string
    budgetType: string
    arrivalDate: Date | string
    depatureDate: Date | string
    nights: number
    originCountry: string
    includeFlights: boolean
    includeHotels: boolean
    activities?: UserInputCreateactivitiesInput | string[]
    createdAt?: Date | string
    response?: GeminiResponseUncheckedCreateNestedOneWithoutUserInputInput
  }

  export type UserInputUpdateInput = {
    tripType?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    depatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    originCountry?: StringFieldUpdateOperationsInput | string
    includeFlights?: BoolFieldUpdateOperationsInput | boolean
    includeHotels?: BoolFieldUpdateOperationsInput | boolean
    activities?: UserInputUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: GeminiResponseUpdateOneWithoutUserInputNestedInput
  }

  export type UserInputUncheckedUpdateInput = {
    tripType?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    depatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    originCountry?: StringFieldUpdateOperationsInput | string
    includeFlights?: BoolFieldUpdateOperationsInput | boolean
    includeHotels?: BoolFieldUpdateOperationsInput | boolean
    activities?: UserInputUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: GeminiResponseUncheckedUpdateOneWithoutUserInputNestedInput
  }

  export type UserInputCreateManyInput = {
    id?: string
    tripType: string
    budget: string
    budgetType: string
    arrivalDate: Date | string
    depatureDate: Date | string
    nights: number
    originCountry: string
    includeFlights: boolean
    includeHotels: boolean
    activities?: UserInputCreateactivitiesInput | string[]
    createdAt?: Date | string
  }

  export type UserInputUpdateManyMutationInput = {
    tripType?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    depatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    originCountry?: StringFieldUpdateOperationsInput | string
    includeFlights?: BoolFieldUpdateOperationsInput | boolean
    includeHotels?: BoolFieldUpdateOperationsInput | boolean
    activities?: UserInputUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInputUncheckedUpdateManyInput = {
    tripType?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    depatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    originCountry?: StringFieldUpdateOperationsInput | string
    includeFlights?: BoolFieldUpdateOperationsInput | boolean
    includeHotels?: BoolFieldUpdateOperationsInput | boolean
    activities?: UserInputUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeminiResponseCreateInput = {
    id?: string
    plan: string
    createdAt?: Date | string
    userInput: UserInputCreateNestedOneWithoutResponseInput
  }

  export type GeminiResponseUncheckedCreateInput = {
    id?: string
    plan: string
    userInputId: string
    createdAt?: Date | string
  }

  export type GeminiResponseUpdateInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInput?: UserInputUpdateOneRequiredWithoutResponseNestedInput
  }

  export type GeminiResponseUncheckedUpdateInput = {
    plan?: StringFieldUpdateOperationsInput | string
    userInputId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeminiResponseCreateManyInput = {
    id?: string
    plan: string
    userInputId: string
    createdAt?: Date | string
  }

  export type GeminiResponseUpdateManyMutationInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeminiResponseUncheckedUpdateManyInput = {
    plan?: StringFieldUpdateOperationsInput | string
    userInputId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GeminiResponseNullableScalarRelationFilter = {
    is?: GeminiResponseWhereInput | null
    isNot?: GeminiResponseWhereInput | null
  }

  export type UserInputCountOrderByAggregateInput = {
    id?: SortOrder
    tripType?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    arrivalDate?: SortOrder
    depatureDate?: SortOrder
    nights?: SortOrder
    originCountry?: SortOrder
    includeFlights?: SortOrder
    includeHotels?: SortOrder
    activities?: SortOrder
    createdAt?: SortOrder
  }

  export type UserInputAvgOrderByAggregateInput = {
    nights?: SortOrder
  }

  export type UserInputMaxOrderByAggregateInput = {
    id?: SortOrder
    tripType?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    arrivalDate?: SortOrder
    depatureDate?: SortOrder
    nights?: SortOrder
    originCountry?: SortOrder
    includeFlights?: SortOrder
    includeHotels?: SortOrder
    createdAt?: SortOrder
  }

  export type UserInputMinOrderByAggregateInput = {
    id?: SortOrder
    tripType?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    arrivalDate?: SortOrder
    depatureDate?: SortOrder
    nights?: SortOrder
    originCountry?: SortOrder
    includeFlights?: SortOrder
    includeHotels?: SortOrder
    createdAt?: SortOrder
  }

  export type UserInputSumOrderByAggregateInput = {
    nights?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserInputScalarRelationFilter = {
    is?: UserInputWhereInput
    isNot?: UserInputWhereInput
  }

  export type GeminiResponseCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    userInputId?: SortOrder
    createdAt?: SortOrder
  }

  export type GeminiResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    userInputId?: SortOrder
    createdAt?: SortOrder
  }

  export type GeminiResponseMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    userInputId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserInputCreateactivitiesInput = {
    set: string[]
  }

  export type GeminiResponseCreateNestedOneWithoutUserInputInput = {
    create?: XOR<GeminiResponseCreateWithoutUserInputInput, GeminiResponseUncheckedCreateWithoutUserInputInput>
    connectOrCreate?: GeminiResponseCreateOrConnectWithoutUserInputInput
    connect?: GeminiResponseWhereUniqueInput
  }

  export type GeminiResponseUncheckedCreateNestedOneWithoutUserInputInput = {
    create?: XOR<GeminiResponseCreateWithoutUserInputInput, GeminiResponseUncheckedCreateWithoutUserInputInput>
    connectOrCreate?: GeminiResponseCreateOrConnectWithoutUserInputInput
    connect?: GeminiResponseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserInputUpdateactivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GeminiResponseUpdateOneWithoutUserInputNestedInput = {
    create?: XOR<GeminiResponseCreateWithoutUserInputInput, GeminiResponseUncheckedCreateWithoutUserInputInput>
    connectOrCreate?: GeminiResponseCreateOrConnectWithoutUserInputInput
    upsert?: GeminiResponseUpsertWithoutUserInputInput
    disconnect?: GeminiResponseWhereInput | boolean
    delete?: GeminiResponseWhereInput | boolean
    connect?: GeminiResponseWhereUniqueInput
    update?: XOR<XOR<GeminiResponseUpdateToOneWithWhereWithoutUserInputInput, GeminiResponseUpdateWithoutUserInputInput>, GeminiResponseUncheckedUpdateWithoutUserInputInput>
  }

  export type GeminiResponseUncheckedUpdateOneWithoutUserInputNestedInput = {
    create?: XOR<GeminiResponseCreateWithoutUserInputInput, GeminiResponseUncheckedCreateWithoutUserInputInput>
    connectOrCreate?: GeminiResponseCreateOrConnectWithoutUserInputInput
    upsert?: GeminiResponseUpsertWithoutUserInputInput
    disconnect?: GeminiResponseWhereInput | boolean
    delete?: GeminiResponseWhereInput | boolean
    connect?: GeminiResponseWhereUniqueInput
    update?: XOR<XOR<GeminiResponseUpdateToOneWithWhereWithoutUserInputInput, GeminiResponseUpdateWithoutUserInputInput>, GeminiResponseUncheckedUpdateWithoutUserInputInput>
  }

  export type UserInputCreateNestedOneWithoutResponseInput = {
    create?: XOR<UserInputCreateWithoutResponseInput, UserInputUncheckedCreateWithoutResponseInput>
    connectOrCreate?: UserInputCreateOrConnectWithoutResponseInput
    connect?: UserInputWhereUniqueInput
  }

  export type UserInputUpdateOneRequiredWithoutResponseNestedInput = {
    create?: XOR<UserInputCreateWithoutResponseInput, UserInputUncheckedCreateWithoutResponseInput>
    connectOrCreate?: UserInputCreateOrConnectWithoutResponseInput
    upsert?: UserInputUpsertWithoutResponseInput
    connect?: UserInputWhereUniqueInput
    update?: XOR<XOR<UserInputUpdateToOneWithWhereWithoutResponseInput, UserInputUpdateWithoutResponseInput>, UserInputUncheckedUpdateWithoutResponseInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GeminiResponseCreateWithoutUserInputInput = {
    id?: string
    plan: string
    createdAt?: Date | string
  }

  export type GeminiResponseUncheckedCreateWithoutUserInputInput = {
    id?: string
    plan: string
    createdAt?: Date | string
  }

  export type GeminiResponseCreateOrConnectWithoutUserInputInput = {
    where: GeminiResponseWhereUniqueInput
    create: XOR<GeminiResponseCreateWithoutUserInputInput, GeminiResponseUncheckedCreateWithoutUserInputInput>
  }

  export type GeminiResponseUpsertWithoutUserInputInput = {
    update: XOR<GeminiResponseUpdateWithoutUserInputInput, GeminiResponseUncheckedUpdateWithoutUserInputInput>
    create: XOR<GeminiResponseCreateWithoutUserInputInput, GeminiResponseUncheckedCreateWithoutUserInputInput>
    where?: GeminiResponseWhereInput
  }

  export type GeminiResponseUpdateToOneWithWhereWithoutUserInputInput = {
    where?: GeminiResponseWhereInput
    data: XOR<GeminiResponseUpdateWithoutUserInputInput, GeminiResponseUncheckedUpdateWithoutUserInputInput>
  }

  export type GeminiResponseUpdateWithoutUserInputInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeminiResponseUncheckedUpdateWithoutUserInputInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInputCreateWithoutResponseInput = {
    id?: string
    tripType: string
    budget: string
    budgetType: string
    arrivalDate: Date | string
    depatureDate: Date | string
    nights: number
    originCountry: string
    includeFlights: boolean
    includeHotels: boolean
    activities?: UserInputCreateactivitiesInput | string[]
    createdAt?: Date | string
  }

  export type UserInputUncheckedCreateWithoutResponseInput = {
    id?: string
    tripType: string
    budget: string
    budgetType: string
    arrivalDate: Date | string
    depatureDate: Date | string
    nights: number
    originCountry: string
    includeFlights: boolean
    includeHotels: boolean
    activities?: UserInputCreateactivitiesInput | string[]
    createdAt?: Date | string
  }

  export type UserInputCreateOrConnectWithoutResponseInput = {
    where: UserInputWhereUniqueInput
    create: XOR<UserInputCreateWithoutResponseInput, UserInputUncheckedCreateWithoutResponseInput>
  }

  export type UserInputUpsertWithoutResponseInput = {
    update: XOR<UserInputUpdateWithoutResponseInput, UserInputUncheckedUpdateWithoutResponseInput>
    create: XOR<UserInputCreateWithoutResponseInput, UserInputUncheckedCreateWithoutResponseInput>
    where?: UserInputWhereInput
  }

  export type UserInputUpdateToOneWithWhereWithoutResponseInput = {
    where?: UserInputWhereInput
    data: XOR<UserInputUpdateWithoutResponseInput, UserInputUncheckedUpdateWithoutResponseInput>
  }

  export type UserInputUpdateWithoutResponseInput = {
    tripType?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    depatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    originCountry?: StringFieldUpdateOperationsInput | string
    includeFlights?: BoolFieldUpdateOperationsInput | boolean
    includeHotels?: BoolFieldUpdateOperationsInput | boolean
    activities?: UserInputUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInputUncheckedUpdateWithoutResponseInput = {
    tripType?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    depatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    originCountry?: StringFieldUpdateOperationsInput | string
    includeFlights?: BoolFieldUpdateOperationsInput | boolean
    includeHotels?: BoolFieldUpdateOperationsInput | boolean
    activities?: UserInputUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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