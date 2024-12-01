
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
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model Grocery
 * 
 */
export type Grocery = $Result.DefaultSelection<Prisma.$GroceryPayload>
/**
 * Model PriceRecord
 * 
 */
export type PriceRecord = $Result.DefaultSelection<Prisma.$PriceRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Level: {
  Info: 'Info',
  Warn: 'Warn',
  Error: 'Error'
};

export type Level = (typeof Level)[keyof typeof Level]


export const Frequency: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  ANNUALLY: 'ANNUALLY'
};

export type Frequency = (typeof Frequency)[keyof typeof Frequency]

}

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

export type Frequency = $Enums.Frequency

export const Frequency: typeof $Enums.Frequency

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logs
 * const logs = await prisma.log.findMany()
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
   * // Fetch zero or more Logs
   * const logs = await prisma.log.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs>;

  /**
   * `prisma.grocery`: Exposes CRUD operations for the **Grocery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groceries
    * const groceries = await prisma.grocery.findMany()
    * ```
    */
  get grocery(): Prisma.GroceryDelegate<ExtArgs>;

  /**
   * `prisma.priceRecord`: Exposes CRUD operations for the **PriceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceRecords
    * const priceRecords = await prisma.priceRecord.findMany()
    * ```
    */
  get priceRecord(): Prisma.PriceRecordDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
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
    Log: 'Log',
    User: 'User',
    Household: 'Household',
    Grocery: 'Grocery',
    PriceRecord: 'PriceRecord'
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
      modelProps: "log" | "user" | "household" | "grocery" | "priceRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      Grocery: {
        payload: Prisma.$GroceryPayload<ExtArgs>
        fields: Prisma.GroceryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroceryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroceryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          findFirst: {
            args: Prisma.GroceryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroceryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          findMany: {
            args: Prisma.GroceryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          create: {
            args: Prisma.GroceryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          createMany: {
            args: Prisma.GroceryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroceryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          delete: {
            args: Prisma.GroceryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          update: {
            args: Prisma.GroceryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          deleteMany: {
            args: Prisma.GroceryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroceryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroceryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          aggregate: {
            args: Prisma.GroceryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrocery>
          }
          groupBy: {
            args: Prisma.GroceryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroceryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroceryCountArgs<ExtArgs>
            result: $Utils.Optional<GroceryCountAggregateOutputType> | number
          }
        }
      }
      PriceRecord: {
        payload: Prisma.$PriceRecordPayload<ExtArgs>
        fields: Prisma.PriceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          findFirst: {
            args: Prisma.PriceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          findMany: {
            args: Prisma.PriceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>[]
          }
          create: {
            args: Prisma.PriceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          createMany: {
            args: Prisma.PriceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>[]
          }
          delete: {
            args: Prisma.PriceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          update: {
            args: Prisma.PriceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          deleteMany: {
            args: Prisma.PriceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          aggregate: {
            args: Prisma.PriceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceRecord>
          }
          groupBy: {
            args: Prisma.PriceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PriceRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    households: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    households?: boolean | UserCountOutputTypeCountHouseholdsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHouseholdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
  }


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    groceries: number
    members: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groceries?: boolean | HouseholdCountOutputTypeCountGroceriesArgs
    members?: boolean | HouseholdCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountGroceriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type GroceryCountOutputType
   */

  export type GroceryCountOutputType = {
    priceRecords: number
  }

  export type GroceryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceRecords?: boolean | GroceryCountOutputTypeCountPriceRecordsArgs
  }

  // Custom InputTypes
  /**
   * GroceryCountOutputType without action
   */
  export type GroceryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCountOutputType
     */
    select?: GroceryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroceryCountOutputType without action
   */
  export type GroceryCountOutputTypeCountPriceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    level: $Enums.Level | null
    message: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    level: $Enums.Level | null
    message: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    level: number
    message: number
    meta: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    level?: true
    message?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    level?: true
    message?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    level?: true
    message?: true
    meta?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    level: $Enums.Level
    message: string
    meta: JsonValue
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    meta?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    meta?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    level?: boolean
    message?: boolean
    meta?: boolean
  }


  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: $Enums.Level
      message: string
      meta: Prisma.JsonValue
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly level: FieldRef<"Log", 'Level'>
    readonly message: FieldRef<"Log", 'String'>
    readonly meta: FieldRef<"Log", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    households?: boolean | User$householdsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    households?: boolean | User$householdsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      households: Prisma.$HouseholdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    households<T extends User$householdsArgs<ExtArgs> = {}>(args?: Subset<T, User$householdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.households
   */
  export type User$householdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    cursor?: HouseholdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HouseholdMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: string
    name: string
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groceries?: boolean | Household$groceriesArgs<ExtArgs>
    members?: boolean | Household$membersArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groceries?: boolean | Household$groceriesArgs<ExtArgs>
    members?: boolean | Household$membersArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseholdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      groceries: Prisma.$GroceryPayload<ExtArgs>[]
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Households and returns the data saved in the database.
     * @param {HouseholdCreateManyAndReturnArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
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
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groceries<T extends Household$groceriesArgs<ExtArgs> = {}>(args?: Subset<T, Household$groceriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends Household$membersArgs<ExtArgs> = {}>(args?: Subset<T, Household$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Household model
   */ 
  interface HouseholdFieldRefs {
    readonly id: FieldRef<"Household", 'String'>
    readonly name: FieldRef<"Household", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household createManyAndReturn
   */
  export type HouseholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
  }

  /**
   * Household.groceries
   */
  export type Household$groceriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    where?: GroceryWhereInput
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    cursor?: GroceryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Household.members
   */
  export type Household$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model Grocery
   */

  export type AggregateGrocery = {
    _count: GroceryCountAggregateOutputType | null
    _min: GroceryMinAggregateOutputType | null
    _max: GroceryMaxAggregateOutputType | null
  }

  export type GroceryMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    purchaseFrequency: $Enums.Frequency | null
    householdId: string | null
    link: string | null
  }

  export type GroceryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    purchaseFrequency: $Enums.Frequency | null
    householdId: string | null
    link: string | null
  }

  export type GroceryCountAggregateOutputType = {
    id: number
    name: number
    category: number
    purchaseFrequency: number
    householdId: number
    link: number
    _all: number
  }


  export type GroceryMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    purchaseFrequency?: true
    householdId?: true
    link?: true
  }

  export type GroceryMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    purchaseFrequency?: true
    householdId?: true
    link?: true
  }

  export type GroceryCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    purchaseFrequency?: true
    householdId?: true
    link?: true
    _all?: true
  }

  export type GroceryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grocery to aggregate.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groceries
    **/
    _count?: true | GroceryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroceryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroceryMaxAggregateInputType
  }

  export type GetGroceryAggregateType<T extends GroceryAggregateArgs> = {
        [P in keyof T & keyof AggregateGrocery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrocery[P]>
      : GetScalarType<T[P], AggregateGrocery[P]>
  }




  export type GroceryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryWhereInput
    orderBy?: GroceryOrderByWithAggregationInput | GroceryOrderByWithAggregationInput[]
    by: GroceryScalarFieldEnum[] | GroceryScalarFieldEnum
    having?: GroceryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroceryCountAggregateInputType | true
    _min?: GroceryMinAggregateInputType
    _max?: GroceryMaxAggregateInputType
  }

  export type GroceryGroupByOutputType = {
    id: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    householdId: string
    link: string | null
    _count: GroceryCountAggregateOutputType | null
    _min: GroceryMinAggregateOutputType | null
    _max: GroceryMaxAggregateOutputType | null
  }

  type GetGroceryGroupByPayload<T extends GroceryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroceryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroceryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryGroupByOutputType[P]>
        }
      >
    >


  export type GrocerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    purchaseFrequency?: boolean
    householdId?: boolean
    link?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    priceRecords?: boolean | Grocery$priceRecordsArgs<ExtArgs>
    _count?: boolean | GroceryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    purchaseFrequency?: boolean
    householdId?: boolean
    link?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    purchaseFrequency?: boolean
    householdId?: boolean
    link?: boolean
  }

  export type GroceryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    priceRecords?: boolean | Grocery$priceRecordsArgs<ExtArgs>
    _count?: boolean | GroceryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroceryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }

  export type $GroceryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grocery"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      priceRecords: Prisma.$PriceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      purchaseFrequency: $Enums.Frequency
      householdId: string
      link: string | null
    }, ExtArgs["result"]["grocery"]>
    composites: {}
  }

  type GroceryGetPayload<S extends boolean | null | undefined | GroceryDefaultArgs> = $Result.GetResult<Prisma.$GroceryPayload, S>

  type GroceryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroceryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroceryCountAggregateInputType | true
    }

  export interface GroceryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grocery'], meta: { name: 'Grocery' } }
    /**
     * Find zero or one Grocery that matches the filter.
     * @param {GroceryFindUniqueArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryFindUniqueArgs>(args: SelectSubset<T, GroceryFindUniqueArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Grocery that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroceryFindUniqueOrThrowArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryFindUniqueOrThrowArgs>(args: SelectSubset<T, GroceryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Grocery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindFirstArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryFindFirstArgs>(args?: SelectSubset<T, GroceryFindFirstArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Grocery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindFirstOrThrowArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryFindFirstOrThrowArgs>(args?: SelectSubset<T, GroceryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Groceries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groceries
     * const groceries = await prisma.grocery.findMany()
     * 
     * // Get first 10 Groceries
     * const groceries = await prisma.grocery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groceryWithIdOnly = await prisma.grocery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroceryFindManyArgs>(args?: SelectSubset<T, GroceryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Grocery.
     * @param {GroceryCreateArgs} args - Arguments to create a Grocery.
     * @example
     * // Create one Grocery
     * const Grocery = await prisma.grocery.create({
     *   data: {
     *     // ... data to create a Grocery
     *   }
     * })
     * 
     */
    create<T extends GroceryCreateArgs>(args: SelectSubset<T, GroceryCreateArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Groceries.
     * @param {GroceryCreateManyArgs} args - Arguments to create many Groceries.
     * @example
     * // Create many Groceries
     * const grocery = await prisma.grocery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroceryCreateManyArgs>(args?: SelectSubset<T, GroceryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groceries and returns the data saved in the database.
     * @param {GroceryCreateManyAndReturnArgs} args - Arguments to create many Groceries.
     * @example
     * // Create many Groceries
     * const grocery = await prisma.grocery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groceries and only return the `id`
     * const groceryWithIdOnly = await prisma.grocery.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroceryCreateManyAndReturnArgs>(args?: SelectSubset<T, GroceryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Grocery.
     * @param {GroceryDeleteArgs} args - Arguments to delete one Grocery.
     * @example
     * // Delete one Grocery
     * const Grocery = await prisma.grocery.delete({
     *   where: {
     *     // ... filter to delete one Grocery
     *   }
     * })
     * 
     */
    delete<T extends GroceryDeleteArgs>(args: SelectSubset<T, GroceryDeleteArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Grocery.
     * @param {GroceryUpdateArgs} args - Arguments to update one Grocery.
     * @example
     * // Update one Grocery
     * const grocery = await prisma.grocery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroceryUpdateArgs>(args: SelectSubset<T, GroceryUpdateArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Groceries.
     * @param {GroceryDeleteManyArgs} args - Arguments to filter Groceries to delete.
     * @example
     * // Delete a few Groceries
     * const { count } = await prisma.grocery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroceryDeleteManyArgs>(args?: SelectSubset<T, GroceryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groceries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groceries
     * const grocery = await prisma.grocery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroceryUpdateManyArgs>(args: SelectSubset<T, GroceryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grocery.
     * @param {GroceryUpsertArgs} args - Arguments to update or create a Grocery.
     * @example
     * // Update or create a Grocery
     * const grocery = await prisma.grocery.upsert({
     *   create: {
     *     // ... data to create a Grocery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grocery we want to update
     *   }
     * })
     */
    upsert<T extends GroceryUpsertArgs>(args: SelectSubset<T, GroceryUpsertArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Groceries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCountArgs} args - Arguments to filter Groceries to count.
     * @example
     * // Count the number of Groceries
     * const count = await prisma.grocery.count({
     *   where: {
     *     // ... the filter for the Groceries we want to count
     *   }
     * })
    **/
    count<T extends GroceryCountArgs>(
      args?: Subset<T, GroceryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grocery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroceryAggregateArgs>(args: Subset<T, GroceryAggregateArgs>): Prisma.PrismaPromise<GetGroceryAggregateType<T>>

    /**
     * Group by Grocery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryGroupByArgs} args - Group by arguments.
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
      T extends GroceryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryGroupByArgs['orderBy'] }
        : { orderBy?: GroceryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroceryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroceryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grocery model
   */
  readonly fields: GroceryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grocery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    priceRecords<T extends Grocery$priceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Grocery$priceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Grocery model
   */ 
  interface GroceryFieldRefs {
    readonly id: FieldRef<"Grocery", 'String'>
    readonly name: FieldRef<"Grocery", 'String'>
    readonly category: FieldRef<"Grocery", 'String'>
    readonly purchaseFrequency: FieldRef<"Grocery", 'Frequency'>
    readonly householdId: FieldRef<"Grocery", 'String'>
    readonly link: FieldRef<"Grocery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Grocery findUnique
   */
  export type GroceryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery findUniqueOrThrow
   */
  export type GroceryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery findFirst
   */
  export type GroceryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery findFirstOrThrow
   */
  export type GroceryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery findMany
   */
  export type GroceryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * Filter, which Groceries to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery create
   */
  export type GroceryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * The data needed to create a Grocery.
     */
    data: XOR<GroceryCreateInput, GroceryUncheckedCreateInput>
  }

  /**
   * Grocery createMany
   */
  export type GroceryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groceries.
     */
    data: GroceryCreateManyInput | GroceryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grocery createManyAndReturn
   */
  export type GroceryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Groceries.
     */
    data: GroceryCreateManyInput | GroceryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grocery update
   */
  export type GroceryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * The data needed to update a Grocery.
     */
    data: XOR<GroceryUpdateInput, GroceryUncheckedUpdateInput>
    /**
     * Choose, which Grocery to update.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery updateMany
   */
  export type GroceryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groceries.
     */
    data: XOR<GroceryUpdateManyMutationInput, GroceryUncheckedUpdateManyInput>
    /**
     * Filter which Groceries to update
     */
    where?: GroceryWhereInput
  }

  /**
   * Grocery upsert
   */
  export type GroceryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * The filter to search for the Grocery to update in case it exists.
     */
    where: GroceryWhereUniqueInput
    /**
     * In case the Grocery found by the `where` argument doesn't exist, create a new Grocery with this data.
     */
    create: XOR<GroceryCreateInput, GroceryUncheckedCreateInput>
    /**
     * In case the Grocery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryUpdateInput, GroceryUncheckedUpdateInput>
  }

  /**
   * Grocery delete
   */
  export type GroceryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
    /**
     * Filter which Grocery to delete.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery deleteMany
   */
  export type GroceryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groceries to delete
     */
    where?: GroceryWhereInput
  }

  /**
   * Grocery.priceRecords
   */
  export type Grocery$priceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    where?: PriceRecordWhereInput
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    cursor?: PriceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * Grocery without action
   */
  export type GroceryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryInclude<ExtArgs> | null
  }


  /**
   * Model PriceRecord
   */

  export type AggregatePriceRecord = {
    _count: PriceRecordCountAggregateOutputType | null
    _avg: PriceRecordAvgAggregateOutputType | null
    _sum: PriceRecordSumAggregateOutputType | null
    _min: PriceRecordMinAggregateOutputType | null
    _max: PriceRecordMaxAggregateOutputType | null
  }

  export type PriceRecordAvgAggregateOutputType = {
    price: number | null
  }

  export type PriceRecordSumAggregateOutputType = {
    price: number | null
  }

  export type PriceRecordMinAggregateOutputType = {
    id: string | null
    groceryId: string | null
    price: number | null
    date: Date | null
    store: string | null
  }

  export type PriceRecordMaxAggregateOutputType = {
    id: string | null
    groceryId: string | null
    price: number | null
    date: Date | null
    store: string | null
  }

  export type PriceRecordCountAggregateOutputType = {
    id: number
    groceryId: number
    price: number
    date: number
    store: number
    _all: number
  }


  export type PriceRecordAvgAggregateInputType = {
    price?: true
  }

  export type PriceRecordSumAggregateInputType = {
    price?: true
  }

  export type PriceRecordMinAggregateInputType = {
    id?: true
    groceryId?: true
    price?: true
    date?: true
    store?: true
  }

  export type PriceRecordMaxAggregateInputType = {
    id?: true
    groceryId?: true
    price?: true
    date?: true
    store?: true
  }

  export type PriceRecordCountAggregateInputType = {
    id?: true
    groceryId?: true
    price?: true
    date?: true
    store?: true
    _all?: true
  }

  export type PriceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRecord to aggregate.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceRecords
    **/
    _count?: true | PriceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceRecordMaxAggregateInputType
  }

  export type GetPriceRecordAggregateType<T extends PriceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceRecord[P]>
      : GetScalarType<T[P], AggregatePriceRecord[P]>
  }




  export type PriceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceRecordWhereInput
    orderBy?: PriceRecordOrderByWithAggregationInput | PriceRecordOrderByWithAggregationInput[]
    by: PriceRecordScalarFieldEnum[] | PriceRecordScalarFieldEnum
    having?: PriceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceRecordCountAggregateInputType | true
    _avg?: PriceRecordAvgAggregateInputType
    _sum?: PriceRecordSumAggregateInputType
    _min?: PriceRecordMinAggregateInputType
    _max?: PriceRecordMaxAggregateInputType
  }

  export type PriceRecordGroupByOutputType = {
    id: string
    groceryId: string
    price: number
    date: Date
    store: string | null
    _count: PriceRecordCountAggregateOutputType | null
    _avg: PriceRecordAvgAggregateOutputType | null
    _sum: PriceRecordSumAggregateOutputType | null
    _min: PriceRecordMinAggregateOutputType | null
    _max: PriceRecordMaxAggregateOutputType | null
  }

  type GetPriceRecordGroupByPayload<T extends PriceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PriceRecordGroupByOutputType[P]>
        }
      >
    >


  export type PriceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groceryId?: boolean
    price?: boolean
    date?: boolean
    store?: boolean
    grocery?: boolean | GroceryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceRecord"]>

  export type PriceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groceryId?: boolean
    price?: boolean
    date?: boolean
    store?: boolean
    grocery?: boolean | GroceryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceRecord"]>

  export type PriceRecordSelectScalar = {
    id?: boolean
    groceryId?: boolean
    price?: boolean
    date?: boolean
    store?: boolean
  }

  export type PriceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grocery?: boolean | GroceryDefaultArgs<ExtArgs>
  }
  export type PriceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grocery?: boolean | GroceryDefaultArgs<ExtArgs>
  }

  export type $PriceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceRecord"
    objects: {
      grocery: Prisma.$GroceryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groceryId: string
      price: number
      date: Date
      store: string | null
    }, ExtArgs["result"]["priceRecord"]>
    composites: {}
  }

  type PriceRecordGetPayload<S extends boolean | null | undefined | PriceRecordDefaultArgs> = $Result.GetResult<Prisma.$PriceRecordPayload, S>

  type PriceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceRecordCountAggregateInputType | true
    }

  export interface PriceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceRecord'], meta: { name: 'PriceRecord' } }
    /**
     * Find zero or one PriceRecord that matches the filter.
     * @param {PriceRecordFindUniqueArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceRecordFindUniqueArgs>(args: SelectSubset<T, PriceRecordFindUniqueArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceRecordFindUniqueOrThrowArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordFindFirstArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceRecordFindFirstArgs>(args?: SelectSubset<T, PriceRecordFindFirstArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordFindFirstOrThrowArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceRecords
     * const priceRecords = await prisma.priceRecord.findMany()
     * 
     * // Get first 10 PriceRecords
     * const priceRecords = await prisma.priceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceRecordWithIdOnly = await prisma.priceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceRecordFindManyArgs>(args?: SelectSubset<T, PriceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceRecord.
     * @param {PriceRecordCreateArgs} args - Arguments to create a PriceRecord.
     * @example
     * // Create one PriceRecord
     * const PriceRecord = await prisma.priceRecord.create({
     *   data: {
     *     // ... data to create a PriceRecord
     *   }
     * })
     * 
     */
    create<T extends PriceRecordCreateArgs>(args: SelectSubset<T, PriceRecordCreateArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceRecords.
     * @param {PriceRecordCreateManyArgs} args - Arguments to create many PriceRecords.
     * @example
     * // Create many PriceRecords
     * const priceRecord = await prisma.priceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceRecordCreateManyArgs>(args?: SelectSubset<T, PriceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceRecords and returns the data saved in the database.
     * @param {PriceRecordCreateManyAndReturnArgs} args - Arguments to create many PriceRecords.
     * @example
     * // Create many PriceRecords
     * const priceRecord = await prisma.priceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceRecords and only return the `id`
     * const priceRecordWithIdOnly = await prisma.priceRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceRecord.
     * @param {PriceRecordDeleteArgs} args - Arguments to delete one PriceRecord.
     * @example
     * // Delete one PriceRecord
     * const PriceRecord = await prisma.priceRecord.delete({
     *   where: {
     *     // ... filter to delete one PriceRecord
     *   }
     * })
     * 
     */
    delete<T extends PriceRecordDeleteArgs>(args: SelectSubset<T, PriceRecordDeleteArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceRecord.
     * @param {PriceRecordUpdateArgs} args - Arguments to update one PriceRecord.
     * @example
     * // Update one PriceRecord
     * const priceRecord = await prisma.priceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceRecordUpdateArgs>(args: SelectSubset<T, PriceRecordUpdateArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceRecords.
     * @param {PriceRecordDeleteManyArgs} args - Arguments to filter PriceRecords to delete.
     * @example
     * // Delete a few PriceRecords
     * const { count } = await prisma.priceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceRecordDeleteManyArgs>(args?: SelectSubset<T, PriceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceRecords
     * const priceRecord = await prisma.priceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceRecordUpdateManyArgs>(args: SelectSubset<T, PriceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceRecord.
     * @param {PriceRecordUpsertArgs} args - Arguments to update or create a PriceRecord.
     * @example
     * // Update or create a PriceRecord
     * const priceRecord = await prisma.priceRecord.upsert({
     *   create: {
     *     // ... data to create a PriceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceRecord we want to update
     *   }
     * })
     */
    upsert<T extends PriceRecordUpsertArgs>(args: SelectSubset<T, PriceRecordUpsertArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordCountArgs} args - Arguments to filter PriceRecords to count.
     * @example
     * // Count the number of PriceRecords
     * const count = await prisma.priceRecord.count({
     *   where: {
     *     // ... the filter for the PriceRecords we want to count
     *   }
     * })
    **/
    count<T extends PriceRecordCountArgs>(
      args?: Subset<T, PriceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceRecordAggregateArgs>(args: Subset<T, PriceRecordAggregateArgs>): Prisma.PrismaPromise<GetPriceRecordAggregateType<T>>

    /**
     * Group by PriceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordGroupByArgs} args - Group by arguments.
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
      T extends PriceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceRecordGroupByArgs['orderBy'] }
        : { orderBy?: PriceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceRecord model
   */
  readonly fields: PriceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grocery<T extends GroceryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroceryDefaultArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PriceRecord model
   */ 
  interface PriceRecordFieldRefs {
    readonly id: FieldRef<"PriceRecord", 'String'>
    readonly groceryId: FieldRef<"PriceRecord", 'String'>
    readonly price: FieldRef<"PriceRecord", 'Float'>
    readonly date: FieldRef<"PriceRecord", 'DateTime'>
    readonly store: FieldRef<"PriceRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceRecord findUnique
   */
  export type PriceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord findUniqueOrThrow
   */
  export type PriceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord findFirst
   */
  export type PriceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRecords.
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRecords.
     */
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * PriceRecord findFirstOrThrow
   */
  export type PriceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRecords.
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRecords.
     */
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * PriceRecord findMany
   */
  export type PriceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * Filter, which PriceRecords to fetch.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceRecords.
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * PriceRecord create
   */
  export type PriceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceRecord.
     */
    data: XOR<PriceRecordCreateInput, PriceRecordUncheckedCreateInput>
  }

  /**
   * PriceRecord createMany
   */
  export type PriceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceRecords.
     */
    data: PriceRecordCreateManyInput | PriceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRecord createManyAndReturn
   */
  export type PriceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceRecords.
     */
    data: PriceRecordCreateManyInput | PriceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceRecord update
   */
  export type PriceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceRecord.
     */
    data: XOR<PriceRecordUpdateInput, PriceRecordUncheckedUpdateInput>
    /**
     * Choose, which PriceRecord to update.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord updateMany
   */
  export type PriceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceRecords.
     */
    data: XOR<PriceRecordUpdateManyMutationInput, PriceRecordUncheckedUpdateManyInput>
    /**
     * Filter which PriceRecords to update
     */
    where?: PriceRecordWhereInput
  }

  /**
   * PriceRecord upsert
   */
  export type PriceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceRecord to update in case it exists.
     */
    where: PriceRecordWhereUniqueInput
    /**
     * In case the PriceRecord found by the `where` argument doesn't exist, create a new PriceRecord with this data.
     */
    create: XOR<PriceRecordCreateInput, PriceRecordUncheckedCreateInput>
    /**
     * In case the PriceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceRecordUpdateInput, PriceRecordUncheckedUpdateInput>
  }

  /**
   * PriceRecord delete
   */
  export type PriceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
    /**
     * Filter which PriceRecord to delete.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord deleteMany
   */
  export type PriceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRecords to delete
     */
    where?: PriceRecordWhereInput
  }

  /**
   * PriceRecord without action
   */
  export type PriceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    message: 'message',
    meta: 'meta'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HouseholdScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const GroceryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    purchaseFrequency: 'purchaseFrequency',
    householdId: 'householdId',
    link: 'link'
  };

  export type GroceryScalarFieldEnum = (typeof GroceryScalarFieldEnum)[keyof typeof GroceryScalarFieldEnum]


  export const PriceRecordScalarFieldEnum: {
    id: 'id',
    groceryId: 'groceryId',
    price: 'price',
    date: 'date',
    store: 'store'
  };

  export type PriceRecordScalarFieldEnum = (typeof PriceRecordScalarFieldEnum)[keyof typeof PriceRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Frequency'
   */
  export type EnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency'>
    


  /**
   * Reference to a field of type 'Frequency[]'
   */
  export type ListEnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    level?: EnumLevelFilter<"Log"> | $Enums.Level
    message?: StringFilter<"Log"> | string
    meta?: JsonFilter<"Log">
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    level?: EnumLevelFilter<"Log"> | $Enums.Level
    message?: StringFilter<"Log"> | string
    meta?: JsonFilter<"Log">
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    level?: EnumLevelWithAggregatesFilter<"Log"> | $Enums.Level
    message?: StringWithAggregatesFilter<"Log"> | string
    meta?: JsonWithAggregatesFilter<"Log">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    households?: HouseholdListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    households?: HouseholdOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    households?: HouseholdListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
    groceries?: GroceryListRelationFilter
    members?: UserListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    groceries?: GroceryOrderByRelationAggregateInput
    members?: UserOrderByRelationAggregateInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    name?: StringFilter<"Household"> | string
    groceries?: GroceryListRelationFilter
    members?: UserListRelationFilter
  }, "id">

  export type HouseholdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Household"> | string
    name?: StringWithAggregatesFilter<"Household"> | string
  }

  export type GroceryWhereInput = {
    AND?: GroceryWhereInput | GroceryWhereInput[]
    OR?: GroceryWhereInput[]
    NOT?: GroceryWhereInput | GroceryWhereInput[]
    id?: StringFilter<"Grocery"> | string
    name?: StringFilter<"Grocery"> | string
    category?: StringFilter<"Grocery"> | string
    purchaseFrequency?: EnumFrequencyFilter<"Grocery"> | $Enums.Frequency
    householdId?: StringFilter<"Grocery"> | string
    link?: StringNullableFilter<"Grocery"> | string | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    priceRecords?: PriceRecordListRelationFilter
  }

  export type GroceryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    purchaseFrequency?: SortOrder
    householdId?: SortOrder
    link?: SortOrderInput | SortOrder
    household?: HouseholdOrderByWithRelationInput
    priceRecords?: PriceRecordOrderByRelationAggregateInput
  }

  export type GroceryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroceryWhereInput | GroceryWhereInput[]
    OR?: GroceryWhereInput[]
    NOT?: GroceryWhereInput | GroceryWhereInput[]
    name?: StringFilter<"Grocery"> | string
    category?: StringFilter<"Grocery"> | string
    purchaseFrequency?: EnumFrequencyFilter<"Grocery"> | $Enums.Frequency
    householdId?: StringFilter<"Grocery"> | string
    link?: StringNullableFilter<"Grocery"> | string | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    priceRecords?: PriceRecordListRelationFilter
  }, "id">

  export type GroceryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    purchaseFrequency?: SortOrder
    householdId?: SortOrder
    link?: SortOrderInput | SortOrder
    _count?: GroceryCountOrderByAggregateInput
    _max?: GroceryMaxOrderByAggregateInput
    _min?: GroceryMinOrderByAggregateInput
  }

  export type GroceryScalarWhereWithAggregatesInput = {
    AND?: GroceryScalarWhereWithAggregatesInput | GroceryScalarWhereWithAggregatesInput[]
    OR?: GroceryScalarWhereWithAggregatesInput[]
    NOT?: GroceryScalarWhereWithAggregatesInput | GroceryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grocery"> | string
    name?: StringWithAggregatesFilter<"Grocery"> | string
    category?: StringWithAggregatesFilter<"Grocery"> | string
    purchaseFrequency?: EnumFrequencyWithAggregatesFilter<"Grocery"> | $Enums.Frequency
    householdId?: StringWithAggregatesFilter<"Grocery"> | string
    link?: StringNullableWithAggregatesFilter<"Grocery"> | string | null
  }

  export type PriceRecordWhereInput = {
    AND?: PriceRecordWhereInput | PriceRecordWhereInput[]
    OR?: PriceRecordWhereInput[]
    NOT?: PriceRecordWhereInput | PriceRecordWhereInput[]
    id?: StringFilter<"PriceRecord"> | string
    groceryId?: StringFilter<"PriceRecord"> | string
    price?: FloatFilter<"PriceRecord"> | number
    date?: DateTimeFilter<"PriceRecord"> | Date | string
    store?: StringNullableFilter<"PriceRecord"> | string | null
    grocery?: XOR<GroceryScalarRelationFilter, GroceryWhereInput>
  }

  export type PriceRecordOrderByWithRelationInput = {
    id?: SortOrder
    groceryId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    store?: SortOrderInput | SortOrder
    grocery?: GroceryOrderByWithRelationInput
  }

  export type PriceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceRecordWhereInput | PriceRecordWhereInput[]
    OR?: PriceRecordWhereInput[]
    NOT?: PriceRecordWhereInput | PriceRecordWhereInput[]
    groceryId?: StringFilter<"PriceRecord"> | string
    price?: FloatFilter<"PriceRecord"> | number
    date?: DateTimeFilter<"PriceRecord"> | Date | string
    store?: StringNullableFilter<"PriceRecord"> | string | null
    grocery?: XOR<GroceryScalarRelationFilter, GroceryWhereInput>
  }, "id">

  export type PriceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    groceryId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    store?: SortOrderInput | SortOrder
    _count?: PriceRecordCountOrderByAggregateInput
    _avg?: PriceRecordAvgOrderByAggregateInput
    _max?: PriceRecordMaxOrderByAggregateInput
    _min?: PriceRecordMinOrderByAggregateInput
    _sum?: PriceRecordSumOrderByAggregateInput
  }

  export type PriceRecordScalarWhereWithAggregatesInput = {
    AND?: PriceRecordScalarWhereWithAggregatesInput | PriceRecordScalarWhereWithAggregatesInput[]
    OR?: PriceRecordScalarWhereWithAggregatesInput[]
    NOT?: PriceRecordScalarWhereWithAggregatesInput | PriceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceRecord"> | string
    groceryId?: StringWithAggregatesFilter<"PriceRecord"> | string
    price?: FloatWithAggregatesFilter<"PriceRecord"> | number
    date?: DateTimeWithAggregatesFilter<"PriceRecord"> | Date | string
    store?: StringNullableWithAggregatesFilter<"PriceRecord"> | string | null
  }

  export type LogCreateInput = {
    level: $Enums.Level
    message: string
    meta: JsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedCreateInput = {
    id?: number
    level: $Enums.Level
    message: string
    meta: JsonNullValueInput | InputJsonValue
  }

  export type LogUpdateInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type LogCreateManyInput = {
    id?: number
    level: $Enums.Level
    message: string
    meta: JsonNullValueInput | InputJsonValue
  }

  export type LogUpdateManyMutationInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    households?: HouseholdCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    households?: HouseholdUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    households?: HouseholdUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    households?: HouseholdUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HouseholdCreateInput = {
    id?: string
    name: string
    groceries?: GroceryCreateNestedManyWithoutHouseholdInput
    members?: UserCreateNestedManyWithoutHouseholdsInput
  }

  export type HouseholdUncheckedCreateInput = {
    id?: string
    name: string
    groceries?: GroceryUncheckedCreateNestedManyWithoutHouseholdInput
    members?: UserUncheckedCreateNestedManyWithoutHouseholdsInput
  }

  export type HouseholdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groceries?: GroceryUpdateManyWithoutHouseholdNestedInput
    members?: UserUpdateManyWithoutHouseholdsNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groceries?: GroceryUncheckedUpdateManyWithoutHouseholdNestedInput
    members?: UserUncheckedUpdateManyWithoutHouseholdsNestedInput
  }

  export type HouseholdCreateManyInput = {
    id?: string
    name: string
  }

  export type HouseholdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroceryCreateInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    link?: string | null
    household: HouseholdCreateNestedOneWithoutGroceriesInput
    priceRecords?: PriceRecordCreateNestedManyWithoutGroceryInput
  }

  export type GroceryUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    householdId: string
    link?: string | null
    priceRecords?: PriceRecordUncheckedCreateNestedManyWithoutGroceryInput
  }

  export type GroceryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    link?: NullableStringFieldUpdateOperationsInput | string | null
    household?: HouseholdUpdateOneRequiredWithoutGroceriesNestedInput
    priceRecords?: PriceRecordUpdateManyWithoutGroceryNestedInput
  }

  export type GroceryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    householdId?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priceRecords?: PriceRecordUncheckedUpdateManyWithoutGroceryNestedInput
  }

  export type GroceryCreateManyInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    householdId: string
    link?: string | null
  }

  export type GroceryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroceryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    householdId?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceRecordCreateInput = {
    id?: string
    price: number
    date?: Date | string
    store?: string | null
    grocery: GroceryCreateNestedOneWithoutPriceRecordsInput
  }

  export type PriceRecordUncheckedCreateInput = {
    id?: string
    groceryId: string
    price: number
    date?: Date | string
    store?: string | null
  }

  export type PriceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
    grocery?: GroceryUpdateOneRequiredWithoutPriceRecordsNestedInput
  }

  export type PriceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groceryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceRecordCreateManyInput = {
    id?: string
    groceryId: string
    price: number
    date?: Date | string
    store?: string | null
  }

  export type PriceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groceryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type HouseholdListRelationFilter = {
    every?: HouseholdWhereInput
    some?: HouseholdWhereInput
    none?: HouseholdWhereInput
  }

  export type HouseholdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type GroceryListRelationFilter = {
    every?: GroceryWhereInput
    some?: GroceryWhereInput
    none?: GroceryWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GroceryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type PriceRecordListRelationFilter = {
    every?: PriceRecordWhereInput
    some?: PriceRecordWhereInput
    none?: PriceRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PriceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroceryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    purchaseFrequency?: SortOrder
    householdId?: SortOrder
    link?: SortOrder
  }

  export type GroceryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    purchaseFrequency?: SortOrder
    householdId?: SortOrder
    link?: SortOrder
  }

  export type GroceryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    purchaseFrequency?: SortOrder
    householdId?: SortOrder
    link?: SortOrder
  }

  export type EnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFrequencyFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type GroceryScalarRelationFilter = {
    is?: GroceryWhereInput
    isNot?: GroceryWhereInput
  }

  export type PriceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    groceryId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    store?: SortOrder
  }

  export type PriceRecordAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PriceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    groceryId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    store?: SortOrder
  }

  export type PriceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    groceryId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    store?: SortOrder
  }

  export type PriceRecordSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
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

  export type HouseholdCreateNestedManyWithoutMembersInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput> | HouseholdCreateWithoutMembersInput[] | HouseholdUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput | HouseholdCreateOrConnectWithoutMembersInput[]
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
  }

  export type HouseholdUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput> | HouseholdCreateWithoutMembersInput[] | HouseholdUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput | HouseholdCreateOrConnectWithoutMembersInput[]
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
  }

  export type HouseholdUpdateManyWithoutMembersNestedInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput> | HouseholdCreateWithoutMembersInput[] | HouseholdUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput | HouseholdCreateOrConnectWithoutMembersInput[]
    upsert?: HouseholdUpsertWithWhereUniqueWithoutMembersInput | HouseholdUpsertWithWhereUniqueWithoutMembersInput[]
    set?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    disconnect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    delete?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    update?: HouseholdUpdateWithWhereUniqueWithoutMembersInput | HouseholdUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: HouseholdUpdateManyWithWhereWithoutMembersInput | HouseholdUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
  }

  export type HouseholdUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput> | HouseholdCreateWithoutMembersInput[] | HouseholdUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput | HouseholdCreateOrConnectWithoutMembersInput[]
    upsert?: HouseholdUpsertWithWhereUniqueWithoutMembersInput | HouseholdUpsertWithWhereUniqueWithoutMembersInput[]
    set?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    disconnect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    delete?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    update?: HouseholdUpdateWithWhereUniqueWithoutMembersInput | HouseholdUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: HouseholdUpdateManyWithWhereWithoutMembersInput | HouseholdUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
  }

  export type GroceryCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<GroceryCreateWithoutHouseholdInput, GroceryUncheckedCreateWithoutHouseholdInput> | GroceryCreateWithoutHouseholdInput[] | GroceryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: GroceryCreateOrConnectWithoutHouseholdInput | GroceryCreateOrConnectWithoutHouseholdInput[]
    createMany?: GroceryCreateManyHouseholdInputEnvelope
    connect?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutHouseholdsInput = {
    create?: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput> | UserCreateWithoutHouseholdsInput[] | UserUncheckedCreateWithoutHouseholdsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdsInput | UserCreateOrConnectWithoutHouseholdsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroceryUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<GroceryCreateWithoutHouseholdInput, GroceryUncheckedCreateWithoutHouseholdInput> | GroceryCreateWithoutHouseholdInput[] | GroceryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: GroceryCreateOrConnectWithoutHouseholdInput | GroceryCreateOrConnectWithoutHouseholdInput[]
    createMany?: GroceryCreateManyHouseholdInputEnvelope
    connect?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHouseholdsInput = {
    create?: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput> | UserCreateWithoutHouseholdsInput[] | UserUncheckedCreateWithoutHouseholdsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdsInput | UserCreateOrConnectWithoutHouseholdsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroceryUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<GroceryCreateWithoutHouseholdInput, GroceryUncheckedCreateWithoutHouseholdInput> | GroceryCreateWithoutHouseholdInput[] | GroceryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: GroceryCreateOrConnectWithoutHouseholdInput | GroceryCreateOrConnectWithoutHouseholdInput[]
    upsert?: GroceryUpsertWithWhereUniqueWithoutHouseholdInput | GroceryUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: GroceryCreateManyHouseholdInputEnvelope
    set?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    disconnect?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    delete?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    connect?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    update?: GroceryUpdateWithWhereUniqueWithoutHouseholdInput | GroceryUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: GroceryUpdateManyWithWhereWithoutHouseholdInput | GroceryUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: GroceryScalarWhereInput | GroceryScalarWhereInput[]
  }

  export type UserUpdateManyWithoutHouseholdsNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput> | UserCreateWithoutHouseholdsInput[] | UserUncheckedCreateWithoutHouseholdsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdsInput | UserCreateOrConnectWithoutHouseholdsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHouseholdsInput | UserUpsertWithWhereUniqueWithoutHouseholdsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHouseholdsInput | UserUpdateWithWhereUniqueWithoutHouseholdsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHouseholdsInput | UserUpdateManyWithWhereWithoutHouseholdsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroceryUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<GroceryCreateWithoutHouseholdInput, GroceryUncheckedCreateWithoutHouseholdInput> | GroceryCreateWithoutHouseholdInput[] | GroceryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: GroceryCreateOrConnectWithoutHouseholdInput | GroceryCreateOrConnectWithoutHouseholdInput[]
    upsert?: GroceryUpsertWithWhereUniqueWithoutHouseholdInput | GroceryUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: GroceryCreateManyHouseholdInputEnvelope
    set?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    disconnect?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    delete?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    connect?: GroceryWhereUniqueInput | GroceryWhereUniqueInput[]
    update?: GroceryUpdateWithWhereUniqueWithoutHouseholdInput | GroceryUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: GroceryUpdateManyWithWhereWithoutHouseholdInput | GroceryUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: GroceryScalarWhereInput | GroceryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHouseholdsNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput> | UserCreateWithoutHouseholdsInput[] | UserUncheckedCreateWithoutHouseholdsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdsInput | UserCreateOrConnectWithoutHouseholdsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHouseholdsInput | UserUpsertWithWhereUniqueWithoutHouseholdsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHouseholdsInput | UserUpdateWithWhereUniqueWithoutHouseholdsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHouseholdsInput | UserUpdateManyWithWhereWithoutHouseholdsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HouseholdCreateNestedOneWithoutGroceriesInput = {
    create?: XOR<HouseholdCreateWithoutGroceriesInput, HouseholdUncheckedCreateWithoutGroceriesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutGroceriesInput
    connect?: HouseholdWhereUniqueInput
  }

  export type PriceRecordCreateNestedManyWithoutGroceryInput = {
    create?: XOR<PriceRecordCreateWithoutGroceryInput, PriceRecordUncheckedCreateWithoutGroceryInput> | PriceRecordCreateWithoutGroceryInput[] | PriceRecordUncheckedCreateWithoutGroceryInput[]
    connectOrCreate?: PriceRecordCreateOrConnectWithoutGroceryInput | PriceRecordCreateOrConnectWithoutGroceryInput[]
    createMany?: PriceRecordCreateManyGroceryInputEnvelope
    connect?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
  }

  export type PriceRecordUncheckedCreateNestedManyWithoutGroceryInput = {
    create?: XOR<PriceRecordCreateWithoutGroceryInput, PriceRecordUncheckedCreateWithoutGroceryInput> | PriceRecordCreateWithoutGroceryInput[] | PriceRecordUncheckedCreateWithoutGroceryInput[]
    connectOrCreate?: PriceRecordCreateOrConnectWithoutGroceryInput | PriceRecordCreateOrConnectWithoutGroceryInput[]
    createMany?: PriceRecordCreateManyGroceryInputEnvelope
    connect?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
  }

  export type EnumFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.Frequency
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HouseholdUpdateOneRequiredWithoutGroceriesNestedInput = {
    create?: XOR<HouseholdCreateWithoutGroceriesInput, HouseholdUncheckedCreateWithoutGroceriesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutGroceriesInput
    upsert?: HouseholdUpsertWithoutGroceriesInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutGroceriesInput, HouseholdUpdateWithoutGroceriesInput>, HouseholdUncheckedUpdateWithoutGroceriesInput>
  }

  export type PriceRecordUpdateManyWithoutGroceryNestedInput = {
    create?: XOR<PriceRecordCreateWithoutGroceryInput, PriceRecordUncheckedCreateWithoutGroceryInput> | PriceRecordCreateWithoutGroceryInput[] | PriceRecordUncheckedCreateWithoutGroceryInput[]
    connectOrCreate?: PriceRecordCreateOrConnectWithoutGroceryInput | PriceRecordCreateOrConnectWithoutGroceryInput[]
    upsert?: PriceRecordUpsertWithWhereUniqueWithoutGroceryInput | PriceRecordUpsertWithWhereUniqueWithoutGroceryInput[]
    createMany?: PriceRecordCreateManyGroceryInputEnvelope
    set?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    disconnect?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    delete?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    connect?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    update?: PriceRecordUpdateWithWhereUniqueWithoutGroceryInput | PriceRecordUpdateWithWhereUniqueWithoutGroceryInput[]
    updateMany?: PriceRecordUpdateManyWithWhereWithoutGroceryInput | PriceRecordUpdateManyWithWhereWithoutGroceryInput[]
    deleteMany?: PriceRecordScalarWhereInput | PriceRecordScalarWhereInput[]
  }

  export type PriceRecordUncheckedUpdateManyWithoutGroceryNestedInput = {
    create?: XOR<PriceRecordCreateWithoutGroceryInput, PriceRecordUncheckedCreateWithoutGroceryInput> | PriceRecordCreateWithoutGroceryInput[] | PriceRecordUncheckedCreateWithoutGroceryInput[]
    connectOrCreate?: PriceRecordCreateOrConnectWithoutGroceryInput | PriceRecordCreateOrConnectWithoutGroceryInput[]
    upsert?: PriceRecordUpsertWithWhereUniqueWithoutGroceryInput | PriceRecordUpsertWithWhereUniqueWithoutGroceryInput[]
    createMany?: PriceRecordCreateManyGroceryInputEnvelope
    set?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    disconnect?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    delete?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    connect?: PriceRecordWhereUniqueInput | PriceRecordWhereUniqueInput[]
    update?: PriceRecordUpdateWithWhereUniqueWithoutGroceryInput | PriceRecordUpdateWithWhereUniqueWithoutGroceryInput[]
    updateMany?: PriceRecordUpdateManyWithWhereWithoutGroceryInput | PriceRecordUpdateManyWithWhereWithoutGroceryInput[]
    deleteMany?: PriceRecordScalarWhereInput | PriceRecordScalarWhereInput[]
  }

  export type GroceryCreateNestedOneWithoutPriceRecordsInput = {
    create?: XOR<GroceryCreateWithoutPriceRecordsInput, GroceryUncheckedCreateWithoutPriceRecordsInput>
    connectOrCreate?: GroceryCreateOrConnectWithoutPriceRecordsInput
    connect?: GroceryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroceryUpdateOneRequiredWithoutPriceRecordsNestedInput = {
    create?: XOR<GroceryCreateWithoutPriceRecordsInput, GroceryUncheckedCreateWithoutPriceRecordsInput>
    connectOrCreate?: GroceryCreateOrConnectWithoutPriceRecordsInput
    upsert?: GroceryUpsertWithoutPriceRecordsInput
    connect?: GroceryWhereUniqueInput
    update?: XOR<XOR<GroceryUpdateToOneWithWhereWithoutPriceRecordsInput, GroceryUpdateWithoutPriceRecordsInput>, GroceryUncheckedUpdateWithoutPriceRecordsInput>
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

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
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

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFrequencyFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type HouseholdCreateWithoutMembersInput = {
    id?: string
    name: string
    groceries?: GroceryCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    groceries?: GroceryUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
  }

  export type HouseholdUpsertWithWhereUniqueWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    update: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
  }

  export type HouseholdUpdateWithWhereUniqueWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    data: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type HouseholdUpdateManyWithWhereWithoutMembersInput = {
    where: HouseholdScalarWhereInput
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyWithoutMembersInput>
  }

  export type HouseholdScalarWhereInput = {
    AND?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
    OR?: HouseholdScalarWhereInput[]
    NOT?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
    id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
  }

  export type GroceryCreateWithoutHouseholdInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    link?: string | null
    priceRecords?: PriceRecordCreateNestedManyWithoutGroceryInput
  }

  export type GroceryUncheckedCreateWithoutHouseholdInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    link?: string | null
    priceRecords?: PriceRecordUncheckedCreateNestedManyWithoutGroceryInput
  }

  export type GroceryCreateOrConnectWithoutHouseholdInput = {
    where: GroceryWhereUniqueInput
    create: XOR<GroceryCreateWithoutHouseholdInput, GroceryUncheckedCreateWithoutHouseholdInput>
  }

  export type GroceryCreateManyHouseholdInputEnvelope = {
    data: GroceryCreateManyHouseholdInput | GroceryCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutHouseholdsInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type UserUncheckedCreateWithoutHouseholdsInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type UserCreateOrConnectWithoutHouseholdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput>
  }

  export type GroceryUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: GroceryWhereUniqueInput
    update: XOR<GroceryUpdateWithoutHouseholdInput, GroceryUncheckedUpdateWithoutHouseholdInput>
    create: XOR<GroceryCreateWithoutHouseholdInput, GroceryUncheckedCreateWithoutHouseholdInput>
  }

  export type GroceryUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: GroceryWhereUniqueInput
    data: XOR<GroceryUpdateWithoutHouseholdInput, GroceryUncheckedUpdateWithoutHouseholdInput>
  }

  export type GroceryUpdateManyWithWhereWithoutHouseholdInput = {
    where: GroceryScalarWhereInput
    data: XOR<GroceryUpdateManyMutationInput, GroceryUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type GroceryScalarWhereInput = {
    AND?: GroceryScalarWhereInput | GroceryScalarWhereInput[]
    OR?: GroceryScalarWhereInput[]
    NOT?: GroceryScalarWhereInput | GroceryScalarWhereInput[]
    id?: StringFilter<"Grocery"> | string
    name?: StringFilter<"Grocery"> | string
    category?: StringFilter<"Grocery"> | string
    purchaseFrequency?: EnumFrequencyFilter<"Grocery"> | $Enums.Frequency
    householdId?: StringFilter<"Grocery"> | string
    link?: StringNullableFilter<"Grocery"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutHouseholdsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHouseholdsInput, UserUncheckedUpdateWithoutHouseholdsInput>
    create: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHouseholdsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHouseholdsInput, UserUncheckedUpdateWithoutHouseholdsInput>
  }

  export type UserUpdateManyWithWhereWithoutHouseholdsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHouseholdsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }

  export type HouseholdCreateWithoutGroceriesInput = {
    id?: string
    name: string
    members?: UserCreateNestedManyWithoutHouseholdsInput
  }

  export type HouseholdUncheckedCreateWithoutGroceriesInput = {
    id?: string
    name: string
    members?: UserUncheckedCreateNestedManyWithoutHouseholdsInput
  }

  export type HouseholdCreateOrConnectWithoutGroceriesInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutGroceriesInput, HouseholdUncheckedCreateWithoutGroceriesInput>
  }

  export type PriceRecordCreateWithoutGroceryInput = {
    id?: string
    price: number
    date?: Date | string
    store?: string | null
  }

  export type PriceRecordUncheckedCreateWithoutGroceryInput = {
    id?: string
    price: number
    date?: Date | string
    store?: string | null
  }

  export type PriceRecordCreateOrConnectWithoutGroceryInput = {
    where: PriceRecordWhereUniqueInput
    create: XOR<PriceRecordCreateWithoutGroceryInput, PriceRecordUncheckedCreateWithoutGroceryInput>
  }

  export type PriceRecordCreateManyGroceryInputEnvelope = {
    data: PriceRecordCreateManyGroceryInput | PriceRecordCreateManyGroceryInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithoutGroceriesInput = {
    update: XOR<HouseholdUpdateWithoutGroceriesInput, HouseholdUncheckedUpdateWithoutGroceriesInput>
    create: XOR<HouseholdCreateWithoutGroceriesInput, HouseholdUncheckedCreateWithoutGroceriesInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutGroceriesInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutGroceriesInput, HouseholdUncheckedUpdateWithoutGroceriesInput>
  }

  export type HouseholdUpdateWithoutGroceriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: UserUpdateManyWithoutHouseholdsNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutGroceriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutHouseholdsNestedInput
  }

  export type PriceRecordUpsertWithWhereUniqueWithoutGroceryInput = {
    where: PriceRecordWhereUniqueInput
    update: XOR<PriceRecordUpdateWithoutGroceryInput, PriceRecordUncheckedUpdateWithoutGroceryInput>
    create: XOR<PriceRecordCreateWithoutGroceryInput, PriceRecordUncheckedCreateWithoutGroceryInput>
  }

  export type PriceRecordUpdateWithWhereUniqueWithoutGroceryInput = {
    where: PriceRecordWhereUniqueInput
    data: XOR<PriceRecordUpdateWithoutGroceryInput, PriceRecordUncheckedUpdateWithoutGroceryInput>
  }

  export type PriceRecordUpdateManyWithWhereWithoutGroceryInput = {
    where: PriceRecordScalarWhereInput
    data: XOR<PriceRecordUpdateManyMutationInput, PriceRecordUncheckedUpdateManyWithoutGroceryInput>
  }

  export type PriceRecordScalarWhereInput = {
    AND?: PriceRecordScalarWhereInput | PriceRecordScalarWhereInput[]
    OR?: PriceRecordScalarWhereInput[]
    NOT?: PriceRecordScalarWhereInput | PriceRecordScalarWhereInput[]
    id?: StringFilter<"PriceRecord"> | string
    groceryId?: StringFilter<"PriceRecord"> | string
    price?: FloatFilter<"PriceRecord"> | number
    date?: DateTimeFilter<"PriceRecord"> | Date | string
    store?: StringNullableFilter<"PriceRecord"> | string | null
  }

  export type GroceryCreateWithoutPriceRecordsInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    link?: string | null
    household: HouseholdCreateNestedOneWithoutGroceriesInput
  }

  export type GroceryUncheckedCreateWithoutPriceRecordsInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    householdId: string
    link?: string | null
  }

  export type GroceryCreateOrConnectWithoutPriceRecordsInput = {
    where: GroceryWhereUniqueInput
    create: XOR<GroceryCreateWithoutPriceRecordsInput, GroceryUncheckedCreateWithoutPriceRecordsInput>
  }

  export type GroceryUpsertWithoutPriceRecordsInput = {
    update: XOR<GroceryUpdateWithoutPriceRecordsInput, GroceryUncheckedUpdateWithoutPriceRecordsInput>
    create: XOR<GroceryCreateWithoutPriceRecordsInput, GroceryUncheckedCreateWithoutPriceRecordsInput>
    where?: GroceryWhereInput
  }

  export type GroceryUpdateToOneWithWhereWithoutPriceRecordsInput = {
    where?: GroceryWhereInput
    data: XOR<GroceryUpdateWithoutPriceRecordsInput, GroceryUncheckedUpdateWithoutPriceRecordsInput>
  }

  export type GroceryUpdateWithoutPriceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    link?: NullableStringFieldUpdateOperationsInput | string | null
    household?: HouseholdUpdateOneRequiredWithoutGroceriesNestedInput
  }

  export type GroceryUncheckedUpdateWithoutPriceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    householdId?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HouseholdUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groceries?: GroceryUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groceries?: GroceryUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroceryCreateManyHouseholdInput = {
    id?: string
    name: string
    category: string
    purchaseFrequency: $Enums.Frequency
    link?: string | null
  }

  export type GroceryUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priceRecords?: PriceRecordUpdateManyWithoutGroceryNestedInput
  }

  export type GroceryUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priceRecords?: PriceRecordUncheckedUpdateManyWithoutGroceryNestedInput
  }

  export type GroceryUncheckedUpdateManyWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    purchaseFrequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutHouseholdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutHouseholdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyWithoutHouseholdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceRecordCreateManyGroceryInput = {
    id?: string
    price: number
    date?: Date | string
    store?: string | null
  }

  export type PriceRecordUpdateWithoutGroceryInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceRecordUncheckedUpdateWithoutGroceryInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceRecordUncheckedUpdateManyWithoutGroceryInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HouseholdCountOutputTypeDefaultArgs instead
     */
    export type HouseholdCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HouseholdCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroceryCountOutputTypeDefaultArgs instead
     */
    export type GroceryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroceryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogDefaultArgs instead
     */
    export type LogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HouseholdDefaultArgs instead
     */
    export type HouseholdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HouseholdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroceryDefaultArgs instead
     */
    export type GroceryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroceryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceRecordDefaultArgs instead
     */
    export type PriceRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceRecordDefaultArgs<ExtArgs>

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