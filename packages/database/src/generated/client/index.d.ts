
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model PreferredNeighborhood
 * 
 */
export type PreferredNeighborhood = $Result.DefaultSelection<Prisma.$PreferredNeighborhoodPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Neighborhood
 * 
 */
export type Neighborhood = $Result.DefaultSelection<Prisma.$NeighborhoodPayload>
/**
 * Model PointOfInterest
 * 
 */
export type PointOfInterest = $Result.DefaultSelection<Prisma.$PointOfInterestPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model SavedMatch
 * 
 */
export type SavedMatch = $Result.DefaultSelection<Prisma.$SavedMatchPayload>
/**
 * Model ScrapingJob
 * 
 */
export type ScrapingJob = $Result.DefaultSelection<Prisma.$ScrapingJobPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs>;

  /**
   * `prisma.preferredNeighborhood`: Exposes CRUD operations for the **PreferredNeighborhood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreferredNeighborhoods
    * const preferredNeighborhoods = await prisma.preferredNeighborhood.findMany()
    * ```
    */
  get preferredNeighborhood(): Prisma.PreferredNeighborhoodDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.neighborhood`: Exposes CRUD operations for the **Neighborhood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Neighborhoods
    * const neighborhoods = await prisma.neighborhood.findMany()
    * ```
    */
  get neighborhood(): Prisma.NeighborhoodDelegate<ExtArgs>;

  /**
   * `prisma.pointOfInterest`: Exposes CRUD operations for the **PointOfInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointOfInterests
    * const pointOfInterests = await prisma.pointOfInterest.findMany()
    * ```
    */
  get pointOfInterest(): Prisma.PointOfInterestDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs>;

  /**
   * `prisma.savedMatch`: Exposes CRUD operations for the **SavedMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedMatches
    * const savedMatches = await prisma.savedMatch.findMany()
    * ```
    */
  get savedMatch(): Prisma.SavedMatchDelegate<ExtArgs>;

  /**
   * `prisma.scrapingJob`: Exposes CRUD operations for the **ScrapingJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapingJobs
    * const scrapingJobs = await prisma.scrapingJob.findMany()
    * ```
    */
  get scrapingJob(): Prisma.ScrapingJobDelegate<ExtArgs>;
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
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    User: 'User',
    UserPreferences: 'UserPreferences',
    PreferredNeighborhood: 'PreferredNeighborhood',
    City: 'City',
    Neighborhood: 'Neighborhood',
    PointOfInterest: 'PointOfInterest',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    SavedMatch: 'SavedMatch',
    ScrapingJob: 'ScrapingJob'
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
      modelProps: "user" | "userPreferences" | "preferredNeighborhood" | "city" | "neighborhood" | "pointOfInterest" | "property" | "propertyImage" | "savedMatch" | "scrapingJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      PreferredNeighborhood: {
        payload: Prisma.$PreferredNeighborhoodPayload<ExtArgs>
        fields: Prisma.PreferredNeighborhoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferredNeighborhoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferredNeighborhoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>
          }
          findFirst: {
            args: Prisma.PreferredNeighborhoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferredNeighborhoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>
          }
          findMany: {
            args: Prisma.PreferredNeighborhoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>[]
          }
          create: {
            args: Prisma.PreferredNeighborhoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>
          }
          createMany: {
            args: Prisma.PreferredNeighborhoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferredNeighborhoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>[]
          }
          delete: {
            args: Prisma.PreferredNeighborhoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>
          }
          update: {
            args: Prisma.PreferredNeighborhoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>
          }
          deleteMany: {
            args: Prisma.PreferredNeighborhoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferredNeighborhoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PreferredNeighborhoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredNeighborhoodPayload>
          }
          aggregate: {
            args: Prisma.PreferredNeighborhoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferredNeighborhood>
          }
          groupBy: {
            args: Prisma.PreferredNeighborhoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferredNeighborhoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferredNeighborhoodCountArgs<ExtArgs>
            result: $Utils.Optional<PreferredNeighborhoodCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Neighborhood: {
        payload: Prisma.$NeighborhoodPayload<ExtArgs>
        fields: Prisma.NeighborhoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NeighborhoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NeighborhoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>
          }
          findFirst: {
            args: Prisma.NeighborhoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NeighborhoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>
          }
          findMany: {
            args: Prisma.NeighborhoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>[]
          }
          create: {
            args: Prisma.NeighborhoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>
          }
          createMany: {
            args: Prisma.NeighborhoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NeighborhoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>[]
          }
          delete: {
            args: Prisma.NeighborhoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>
          }
          update: {
            args: Prisma.NeighborhoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>
          }
          deleteMany: {
            args: Prisma.NeighborhoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NeighborhoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NeighborhoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborhoodPayload>
          }
          aggregate: {
            args: Prisma.NeighborhoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNeighborhood>
          }
          groupBy: {
            args: Prisma.NeighborhoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<NeighborhoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.NeighborhoodCountArgs<ExtArgs>
            result: $Utils.Optional<NeighborhoodCountAggregateOutputType> | number
          }
        }
      }
      PointOfInterest: {
        payload: Prisma.$PointOfInterestPayload<ExtArgs>
        fields: Prisma.PointOfInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointOfInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointOfInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>
          }
          findFirst: {
            args: Prisma.PointOfInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointOfInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>
          }
          findMany: {
            args: Prisma.PointOfInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>[]
          }
          create: {
            args: Prisma.PointOfInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>
          }
          createMany: {
            args: Prisma.PointOfInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointOfInterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>[]
          }
          delete: {
            args: Prisma.PointOfInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>
          }
          update: {
            args: Prisma.PointOfInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>
          }
          deleteMany: {
            args: Prisma.PointOfInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointOfInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointOfInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointOfInterestPayload>
          }
          aggregate: {
            args: Prisma.PointOfInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointOfInterest>
          }
          groupBy: {
            args: Prisma.PointOfInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointOfInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointOfInterestCountArgs<ExtArgs>
            result: $Utils.Optional<PointOfInterestCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      SavedMatch: {
        payload: Prisma.$SavedMatchPayload<ExtArgs>
        fields: Prisma.SavedMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>
          }
          findFirst: {
            args: Prisma.SavedMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>
          }
          findMany: {
            args: Prisma.SavedMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>[]
          }
          create: {
            args: Prisma.SavedMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>
          }
          createMany: {
            args: Prisma.SavedMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>[]
          }
          delete: {
            args: Prisma.SavedMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>
          }
          update: {
            args: Prisma.SavedMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>
          }
          deleteMany: {
            args: Prisma.SavedMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedMatchPayload>
          }
          aggregate: {
            args: Prisma.SavedMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedMatch>
          }
          groupBy: {
            args: Prisma.SavedMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedMatchCountArgs<ExtArgs>
            result: $Utils.Optional<SavedMatchCountAggregateOutputType> | number
          }
        }
      }
      ScrapingJob: {
        payload: Prisma.$ScrapingJobPayload<ExtArgs>
        fields: Prisma.ScrapingJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapingJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapingJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          findFirst: {
            args: Prisma.ScrapingJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapingJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          findMany: {
            args: Prisma.ScrapingJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>[]
          }
          create: {
            args: Prisma.ScrapingJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          createMany: {
            args: Prisma.ScrapingJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapingJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>[]
          }
          delete: {
            args: Prisma.ScrapingJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          update: {
            args: Prisma.ScrapingJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          deleteMany: {
            args: Prisma.ScrapingJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapingJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScrapingJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          aggregate: {
            args: Prisma.ScrapingJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapingJob>
          }
          groupBy: {
            args: Prisma.ScrapingJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapingJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapingJobCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapingJobCountAggregateOutputType> | number
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
    savedMatches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedMatches?: boolean | UserCountOutputTypeCountSavedMatchesArgs
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
  export type UserCountOutputTypeCountSavedMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedMatchWhereInput
  }


  /**
   * Count Type UserPreferencesCountOutputType
   */

  export type UserPreferencesCountOutputType = {
    preferredNeighborhoods: number
  }

  export type UserPreferencesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredNeighborhoods?: boolean | UserPreferencesCountOutputTypeCountPreferredNeighborhoodsArgs
  }

  // Custom InputTypes
  /**
   * UserPreferencesCountOutputType without action
   */
  export type UserPreferencesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferencesCountOutputType
     */
    select?: UserPreferencesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPreferencesCountOutputType without action
   */
  export type UserPreferencesCountOutputTypeCountPreferredNeighborhoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferredNeighborhoodWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    neighborhoods: number
    pointsOfInterest: number
    properties: number
    userPreferences: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    neighborhoods?: boolean | CityCountOutputTypeCountNeighborhoodsArgs
    pointsOfInterest?: boolean | CityCountOutputTypeCountPointsOfInterestArgs
    properties?: boolean | CityCountOutputTypeCountPropertiesArgs
    userPreferences?: boolean | CityCountOutputTypeCountUserPreferencesArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountNeighborhoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NeighborhoodWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPointsOfInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointOfInterestWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountUserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
  }


  /**
   * Count Type NeighborhoodCountOutputType
   */

  export type NeighborhoodCountOutputType = {
    properties: number
    preferredNeighborhoods: number
  }

  export type NeighborhoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | NeighborhoodCountOutputTypeCountPropertiesArgs
    preferredNeighborhoods?: boolean | NeighborhoodCountOutputTypeCountPreferredNeighborhoodsArgs
  }

  // Custom InputTypes
  /**
   * NeighborhoodCountOutputType without action
   */
  export type NeighborhoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborhoodCountOutputType
     */
    select?: NeighborhoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NeighborhoodCountOutputType without action
   */
  export type NeighborhoodCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * NeighborhoodCountOutputType without action
   */
  export type NeighborhoodCountOutputTypeCountPreferredNeighborhoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferredNeighborhoodWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    images: number
    savedMatches: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
    savedMatches?: boolean | PropertyCountOutputTypeCountSavedMatchesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountSavedMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedMatchWhereInput
  }


  /**
   * Models
   */

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
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    passwordHash: string
    name: string
    createdAt: Date
    updatedAt: Date
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
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    savedMatches?: boolean | User$savedMatchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    savedMatches?: boolean | User$savedMatchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      savedMatches: Prisma.$SavedMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      createdAt: Date
      updatedAt: Date
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
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    savedMatches<T extends User$savedMatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.savedMatches
   */
  export type User$savedMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    where?: SavedMatchWhereInput
    orderBy?: SavedMatchOrderByWithRelationInput | SavedMatchOrderByWithRelationInput[]
    cursor?: SavedMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedMatchScalarFieldEnum | SavedMatchScalarFieldEnum[]
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
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    adultsCount: number | null
    childrenCount: number | null
    minBedrooms: number | null
    minBathrooms: number | null
    minPrice: number | null
    maxPrice: number | null
    quietnessWeight: number | null
    schoolProximityWeight: number | null
    hospitalProximityWeight: number | null
    commerceProximityWeight: number | null
    safetyWeight: number | null
    publicTransportWeight: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    adultsCount: number | null
    childrenCount: number | null
    minBedrooms: number | null
    minBathrooms: number | null
    minPrice: number | null
    maxPrice: number | null
    quietnessWeight: number | null
    schoolProximityWeight: number | null
    hospitalProximityWeight: number | null
    commerceProximityWeight: number | null
    safetyWeight: number | null
    publicTransportWeight: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    adultsCount: number | null
    childrenCount: number | null
    minBedrooms: number | null
    minBathrooms: number | null
    hasPets: boolean | null
    minPrice: number | null
    maxPrice: number | null
    transactionType: string | null
    targetCityId: string | null
    quietnessWeight: number | null
    schoolProximityWeight: number | null
    hospitalProximityWeight: number | null
    commerceProximityWeight: number | null
    safetyWeight: number | null
    publicTransportWeight: number | null
    needsParking: boolean | null
    needsGarden: boolean | null
    needsPool: boolean | null
    needsSecurity: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    adultsCount: number | null
    childrenCount: number | null
    minBedrooms: number | null
    minBathrooms: number | null
    hasPets: boolean | null
    minPrice: number | null
    maxPrice: number | null
    transactionType: string | null
    targetCityId: string | null
    quietnessWeight: number | null
    schoolProximityWeight: number | null
    hospitalProximityWeight: number | null
    commerceProximityWeight: number | null
    safetyWeight: number | null
    publicTransportWeight: number | null
    needsParking: boolean | null
    needsGarden: boolean | null
    needsPool: boolean | null
    needsSecurity: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    adultsCount: number
    childrenCount: number
    minBedrooms: number
    minBathrooms: number
    hasPets: number
    minPrice: number
    maxPrice: number
    transactionType: number
    targetCityId: number
    quietnessWeight: number
    schoolProximityWeight: number
    hospitalProximityWeight: number
    commerceProximityWeight: number
    safetyWeight: number
    publicTransportWeight: number
    needsParking: number
    needsGarden: number
    needsPool: number
    needsSecurity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    adultsCount?: true
    childrenCount?: true
    minBedrooms?: true
    minBathrooms?: true
    minPrice?: true
    maxPrice?: true
    quietnessWeight?: true
    schoolProximityWeight?: true
    hospitalProximityWeight?: true
    commerceProximityWeight?: true
    safetyWeight?: true
    publicTransportWeight?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    adultsCount?: true
    childrenCount?: true
    minBedrooms?: true
    minBathrooms?: true
    minPrice?: true
    maxPrice?: true
    quietnessWeight?: true
    schoolProximityWeight?: true
    hospitalProximityWeight?: true
    commerceProximityWeight?: true
    safetyWeight?: true
    publicTransportWeight?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    adultsCount?: true
    childrenCount?: true
    minBedrooms?: true
    minBathrooms?: true
    hasPets?: true
    minPrice?: true
    maxPrice?: true
    transactionType?: true
    targetCityId?: true
    quietnessWeight?: true
    schoolProximityWeight?: true
    hospitalProximityWeight?: true
    commerceProximityWeight?: true
    safetyWeight?: true
    publicTransportWeight?: true
    needsParking?: true
    needsGarden?: true
    needsPool?: true
    needsSecurity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    adultsCount?: true
    childrenCount?: true
    minBedrooms?: true
    minBathrooms?: true
    hasPets?: true
    minPrice?: true
    maxPrice?: true
    transactionType?: true
    targetCityId?: true
    quietnessWeight?: true
    schoolProximityWeight?: true
    hospitalProximityWeight?: true
    commerceProximityWeight?: true
    safetyWeight?: true
    publicTransportWeight?: true
    needsParking?: true
    needsGarden?: true
    needsPool?: true
    needsSecurity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    adultsCount?: true
    childrenCount?: true
    minBedrooms?: true
    minBathrooms?: true
    hasPets?: true
    minPrice?: true
    maxPrice?: true
    transactionType?: true
    targetCityId?: true
    quietnessWeight?: true
    schoolProximityWeight?: true
    hospitalProximityWeight?: true
    commerceProximityWeight?: true
    safetyWeight?: true
    publicTransportWeight?: true
    needsParking?: true
    needsGarden?: true
    needsPool?: true
    needsSecurity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    adultsCount: number
    childrenCount: number
    minBedrooms: number
    minBathrooms: number
    hasPets: boolean
    minPrice: number | null
    maxPrice: number | null
    transactionType: string
    targetCityId: string | null
    quietnessWeight: number
    schoolProximityWeight: number
    hospitalProximityWeight: number
    commerceProximityWeight: number
    safetyWeight: number
    publicTransportWeight: number
    needsParking: boolean
    needsGarden: boolean
    needsPool: boolean
    needsSecurity: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    adultsCount?: boolean
    childrenCount?: boolean
    minBedrooms?: boolean
    minBathrooms?: boolean
    hasPets?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    transactionType?: boolean
    targetCityId?: boolean
    quietnessWeight?: boolean
    schoolProximityWeight?: boolean
    hospitalProximityWeight?: boolean
    commerceProximityWeight?: boolean
    safetyWeight?: boolean
    publicTransportWeight?: boolean
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetCity?: boolean | UserPreferences$targetCityArgs<ExtArgs>
    preferredNeighborhoods?: boolean | UserPreferences$preferredNeighborhoodsArgs<ExtArgs>
    _count?: boolean | UserPreferencesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    adultsCount?: boolean
    childrenCount?: boolean
    minBedrooms?: boolean
    minBathrooms?: boolean
    hasPets?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    transactionType?: boolean
    targetCityId?: boolean
    quietnessWeight?: boolean
    schoolProximityWeight?: boolean
    hospitalProximityWeight?: boolean
    commerceProximityWeight?: boolean
    safetyWeight?: boolean
    publicTransportWeight?: boolean
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetCity?: boolean | UserPreferences$targetCityArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    adultsCount?: boolean
    childrenCount?: boolean
    minBedrooms?: boolean
    minBathrooms?: boolean
    hasPets?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    transactionType?: boolean
    targetCityId?: boolean
    quietnessWeight?: boolean
    schoolProximityWeight?: boolean
    hospitalProximityWeight?: boolean
    commerceProximityWeight?: boolean
    safetyWeight?: boolean
    publicTransportWeight?: boolean
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetCity?: boolean | UserPreferences$targetCityArgs<ExtArgs>
    preferredNeighborhoods?: boolean | UserPreferences$preferredNeighborhoodsArgs<ExtArgs>
    _count?: boolean | UserPreferencesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetCity?: boolean | UserPreferences$targetCityArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      targetCity: Prisma.$CityPayload<ExtArgs> | null
      preferredNeighborhoods: Prisma.$PreferredNeighborhoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      adultsCount: number
      childrenCount: number
      minBedrooms: number
      minBathrooms: number
      hasPets: boolean
      minPrice: number | null
      maxPrice: number | null
      transactionType: string
      targetCityId: string | null
      quietnessWeight: number
      schoolProximityWeight: number
      hospitalProximityWeight: number
      commerceProximityWeight: number
      safetyWeight: number
      publicTransportWeight: number
      needsParking: boolean
      needsGarden: boolean
      needsPool: boolean
      needsSecurity: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
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
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    targetCity<T extends UserPreferences$targetCityArgs<ExtArgs> = {}>(args?: Subset<T, UserPreferences$targetCityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    preferredNeighborhoods<T extends UserPreferences$preferredNeighborhoodsArgs<ExtArgs> = {}>(args?: Subset<T, UserPreferences$preferredNeighborhoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserPreferences model
   */ 
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly adultsCount: FieldRef<"UserPreferences", 'Int'>
    readonly childrenCount: FieldRef<"UserPreferences", 'Int'>
    readonly minBedrooms: FieldRef<"UserPreferences", 'Int'>
    readonly minBathrooms: FieldRef<"UserPreferences", 'Int'>
    readonly hasPets: FieldRef<"UserPreferences", 'Boolean'>
    readonly minPrice: FieldRef<"UserPreferences", 'Float'>
    readonly maxPrice: FieldRef<"UserPreferences", 'Float'>
    readonly transactionType: FieldRef<"UserPreferences", 'String'>
    readonly targetCityId: FieldRef<"UserPreferences", 'String'>
    readonly quietnessWeight: FieldRef<"UserPreferences", 'Int'>
    readonly schoolProximityWeight: FieldRef<"UserPreferences", 'Int'>
    readonly hospitalProximityWeight: FieldRef<"UserPreferences", 'Int'>
    readonly commerceProximityWeight: FieldRef<"UserPreferences", 'Int'>
    readonly safetyWeight: FieldRef<"UserPreferences", 'Int'>
    readonly publicTransportWeight: FieldRef<"UserPreferences", 'Int'>
    readonly needsParking: FieldRef<"UserPreferences", 'Boolean'>
    readonly needsGarden: FieldRef<"UserPreferences", 'Boolean'>
    readonly needsPool: FieldRef<"UserPreferences", 'Boolean'>
    readonly needsSecurity: FieldRef<"UserPreferences", 'Boolean'>
    readonly createdAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences.targetCity
   */
  export type UserPreferences$targetCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * UserPreferences.preferredNeighborhoods
   */
  export type UserPreferences$preferredNeighborhoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    where?: PreferredNeighborhoodWhereInput
    orderBy?: PreferredNeighborhoodOrderByWithRelationInput | PreferredNeighborhoodOrderByWithRelationInput[]
    cursor?: PreferredNeighborhoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferredNeighborhoodScalarFieldEnum | PreferredNeighborhoodScalarFieldEnum[]
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model PreferredNeighborhood
   */

  export type AggregatePreferredNeighborhood = {
    _count: PreferredNeighborhoodCountAggregateOutputType | null
    _min: PreferredNeighborhoodMinAggregateOutputType | null
    _max: PreferredNeighborhoodMaxAggregateOutputType | null
  }

  export type PreferredNeighborhoodMinAggregateOutputType = {
    id: string | null
    preferencesId: string | null
    neighborhoodId: string | null
  }

  export type PreferredNeighborhoodMaxAggregateOutputType = {
    id: string | null
    preferencesId: string | null
    neighborhoodId: string | null
  }

  export type PreferredNeighborhoodCountAggregateOutputType = {
    id: number
    preferencesId: number
    neighborhoodId: number
    _all: number
  }


  export type PreferredNeighborhoodMinAggregateInputType = {
    id?: true
    preferencesId?: true
    neighborhoodId?: true
  }

  export type PreferredNeighborhoodMaxAggregateInputType = {
    id?: true
    preferencesId?: true
    neighborhoodId?: true
  }

  export type PreferredNeighborhoodCountAggregateInputType = {
    id?: true
    preferencesId?: true
    neighborhoodId?: true
    _all?: true
  }

  export type PreferredNeighborhoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferredNeighborhood to aggregate.
     */
    where?: PreferredNeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredNeighborhoods to fetch.
     */
    orderBy?: PreferredNeighborhoodOrderByWithRelationInput | PreferredNeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferredNeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredNeighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredNeighborhoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreferredNeighborhoods
    **/
    _count?: true | PreferredNeighborhoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferredNeighborhoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferredNeighborhoodMaxAggregateInputType
  }

  export type GetPreferredNeighborhoodAggregateType<T extends PreferredNeighborhoodAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferredNeighborhood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferredNeighborhood[P]>
      : GetScalarType<T[P], AggregatePreferredNeighborhood[P]>
  }




  export type PreferredNeighborhoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferredNeighborhoodWhereInput
    orderBy?: PreferredNeighborhoodOrderByWithAggregationInput | PreferredNeighborhoodOrderByWithAggregationInput[]
    by: PreferredNeighborhoodScalarFieldEnum[] | PreferredNeighborhoodScalarFieldEnum
    having?: PreferredNeighborhoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferredNeighborhoodCountAggregateInputType | true
    _min?: PreferredNeighborhoodMinAggregateInputType
    _max?: PreferredNeighborhoodMaxAggregateInputType
  }

  export type PreferredNeighborhoodGroupByOutputType = {
    id: string
    preferencesId: string
    neighborhoodId: string
    _count: PreferredNeighborhoodCountAggregateOutputType | null
    _min: PreferredNeighborhoodMinAggregateOutputType | null
    _max: PreferredNeighborhoodMaxAggregateOutputType | null
  }

  type GetPreferredNeighborhoodGroupByPayload<T extends PreferredNeighborhoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferredNeighborhoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferredNeighborhoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferredNeighborhoodGroupByOutputType[P]>
            : GetScalarType<T[P], PreferredNeighborhoodGroupByOutputType[P]>
        }
      >
    >


  export type PreferredNeighborhoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preferencesId?: boolean
    neighborhoodId?: boolean
    preferences?: boolean | UserPreferencesDefaultArgs<ExtArgs>
    neighborhood?: boolean | NeighborhoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferredNeighborhood"]>

  export type PreferredNeighborhoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preferencesId?: boolean
    neighborhoodId?: boolean
    preferences?: boolean | UserPreferencesDefaultArgs<ExtArgs>
    neighborhood?: boolean | NeighborhoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferredNeighborhood"]>

  export type PreferredNeighborhoodSelectScalar = {
    id?: boolean
    preferencesId?: boolean
    neighborhoodId?: boolean
  }

  export type PreferredNeighborhoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | UserPreferencesDefaultArgs<ExtArgs>
    neighborhood?: boolean | NeighborhoodDefaultArgs<ExtArgs>
  }
  export type PreferredNeighborhoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | UserPreferencesDefaultArgs<ExtArgs>
    neighborhood?: boolean | NeighborhoodDefaultArgs<ExtArgs>
  }

  export type $PreferredNeighborhoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreferredNeighborhood"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs>
      neighborhood: Prisma.$NeighborhoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      preferencesId: string
      neighborhoodId: string
    }, ExtArgs["result"]["preferredNeighborhood"]>
    composites: {}
  }

  type PreferredNeighborhoodGetPayload<S extends boolean | null | undefined | PreferredNeighborhoodDefaultArgs> = $Result.GetResult<Prisma.$PreferredNeighborhoodPayload, S>

  type PreferredNeighborhoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PreferredNeighborhoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PreferredNeighborhoodCountAggregateInputType | true
    }

  export interface PreferredNeighborhoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreferredNeighborhood'], meta: { name: 'PreferredNeighborhood' } }
    /**
     * Find zero or one PreferredNeighborhood that matches the filter.
     * @param {PreferredNeighborhoodFindUniqueArgs} args - Arguments to find a PreferredNeighborhood
     * @example
     * // Get one PreferredNeighborhood
     * const preferredNeighborhood = await prisma.preferredNeighborhood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferredNeighborhoodFindUniqueArgs>(args: SelectSubset<T, PreferredNeighborhoodFindUniqueArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PreferredNeighborhood that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PreferredNeighborhoodFindUniqueOrThrowArgs} args - Arguments to find a PreferredNeighborhood
     * @example
     * // Get one PreferredNeighborhood
     * const preferredNeighborhood = await prisma.preferredNeighborhood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferredNeighborhoodFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferredNeighborhoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PreferredNeighborhood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodFindFirstArgs} args - Arguments to find a PreferredNeighborhood
     * @example
     * // Get one PreferredNeighborhood
     * const preferredNeighborhood = await prisma.preferredNeighborhood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferredNeighborhoodFindFirstArgs>(args?: SelectSubset<T, PreferredNeighborhoodFindFirstArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PreferredNeighborhood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodFindFirstOrThrowArgs} args - Arguments to find a PreferredNeighborhood
     * @example
     * // Get one PreferredNeighborhood
     * const preferredNeighborhood = await prisma.preferredNeighborhood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferredNeighborhoodFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferredNeighborhoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PreferredNeighborhoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferredNeighborhoods
     * const preferredNeighborhoods = await prisma.preferredNeighborhood.findMany()
     * 
     * // Get first 10 PreferredNeighborhoods
     * const preferredNeighborhoods = await prisma.preferredNeighborhood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferredNeighborhoodWithIdOnly = await prisma.preferredNeighborhood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferredNeighborhoodFindManyArgs>(args?: SelectSubset<T, PreferredNeighborhoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PreferredNeighborhood.
     * @param {PreferredNeighborhoodCreateArgs} args - Arguments to create a PreferredNeighborhood.
     * @example
     * // Create one PreferredNeighborhood
     * const PreferredNeighborhood = await prisma.preferredNeighborhood.create({
     *   data: {
     *     // ... data to create a PreferredNeighborhood
     *   }
     * })
     * 
     */
    create<T extends PreferredNeighborhoodCreateArgs>(args: SelectSubset<T, PreferredNeighborhoodCreateArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PreferredNeighborhoods.
     * @param {PreferredNeighborhoodCreateManyArgs} args - Arguments to create many PreferredNeighborhoods.
     * @example
     * // Create many PreferredNeighborhoods
     * const preferredNeighborhood = await prisma.preferredNeighborhood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferredNeighborhoodCreateManyArgs>(args?: SelectSubset<T, PreferredNeighborhoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreferredNeighborhoods and returns the data saved in the database.
     * @param {PreferredNeighborhoodCreateManyAndReturnArgs} args - Arguments to create many PreferredNeighborhoods.
     * @example
     * // Create many PreferredNeighborhoods
     * const preferredNeighborhood = await prisma.preferredNeighborhood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreferredNeighborhoods and only return the `id`
     * const preferredNeighborhoodWithIdOnly = await prisma.preferredNeighborhood.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferredNeighborhoodCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferredNeighborhoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PreferredNeighborhood.
     * @param {PreferredNeighborhoodDeleteArgs} args - Arguments to delete one PreferredNeighborhood.
     * @example
     * // Delete one PreferredNeighborhood
     * const PreferredNeighborhood = await prisma.preferredNeighborhood.delete({
     *   where: {
     *     // ... filter to delete one PreferredNeighborhood
     *   }
     * })
     * 
     */
    delete<T extends PreferredNeighborhoodDeleteArgs>(args: SelectSubset<T, PreferredNeighborhoodDeleteArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PreferredNeighborhood.
     * @param {PreferredNeighborhoodUpdateArgs} args - Arguments to update one PreferredNeighborhood.
     * @example
     * // Update one PreferredNeighborhood
     * const preferredNeighborhood = await prisma.preferredNeighborhood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferredNeighborhoodUpdateArgs>(args: SelectSubset<T, PreferredNeighborhoodUpdateArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PreferredNeighborhoods.
     * @param {PreferredNeighborhoodDeleteManyArgs} args - Arguments to filter PreferredNeighborhoods to delete.
     * @example
     * // Delete a few PreferredNeighborhoods
     * const { count } = await prisma.preferredNeighborhood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferredNeighborhoodDeleteManyArgs>(args?: SelectSubset<T, PreferredNeighborhoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferredNeighborhoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferredNeighborhoods
     * const preferredNeighborhood = await prisma.preferredNeighborhood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferredNeighborhoodUpdateManyArgs>(args: SelectSubset<T, PreferredNeighborhoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PreferredNeighborhood.
     * @param {PreferredNeighborhoodUpsertArgs} args - Arguments to update or create a PreferredNeighborhood.
     * @example
     * // Update or create a PreferredNeighborhood
     * const preferredNeighborhood = await prisma.preferredNeighborhood.upsert({
     *   create: {
     *     // ... data to create a PreferredNeighborhood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferredNeighborhood we want to update
     *   }
     * })
     */
    upsert<T extends PreferredNeighborhoodUpsertArgs>(args: SelectSubset<T, PreferredNeighborhoodUpsertArgs<ExtArgs>>): Prisma__PreferredNeighborhoodClient<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PreferredNeighborhoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodCountArgs} args - Arguments to filter PreferredNeighborhoods to count.
     * @example
     * // Count the number of PreferredNeighborhoods
     * const count = await prisma.preferredNeighborhood.count({
     *   where: {
     *     // ... the filter for the PreferredNeighborhoods we want to count
     *   }
     * })
    **/
    count<T extends PreferredNeighborhoodCountArgs>(
      args?: Subset<T, PreferredNeighborhoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferredNeighborhoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreferredNeighborhood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferredNeighborhoodAggregateArgs>(args: Subset<T, PreferredNeighborhoodAggregateArgs>): Prisma.PrismaPromise<GetPreferredNeighborhoodAggregateType<T>>

    /**
     * Group by PreferredNeighborhood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredNeighborhoodGroupByArgs} args - Group by arguments.
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
      T extends PreferredNeighborhoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferredNeighborhoodGroupByArgs['orderBy'] }
        : { orderBy?: PreferredNeighborhoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreferredNeighborhoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferredNeighborhoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreferredNeighborhood model
   */
  readonly fields: PreferredNeighborhoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreferredNeighborhood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferredNeighborhoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends UserPreferencesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPreferencesDefaultArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    neighborhood<T extends NeighborhoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NeighborhoodDefaultArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PreferredNeighborhood model
   */ 
  interface PreferredNeighborhoodFieldRefs {
    readonly id: FieldRef<"PreferredNeighborhood", 'String'>
    readonly preferencesId: FieldRef<"PreferredNeighborhood", 'String'>
    readonly neighborhoodId: FieldRef<"PreferredNeighborhood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PreferredNeighborhood findUnique
   */
  export type PreferredNeighborhoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which PreferredNeighborhood to fetch.
     */
    where: PreferredNeighborhoodWhereUniqueInput
  }

  /**
   * PreferredNeighborhood findUniqueOrThrow
   */
  export type PreferredNeighborhoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which PreferredNeighborhood to fetch.
     */
    where: PreferredNeighborhoodWhereUniqueInput
  }

  /**
   * PreferredNeighborhood findFirst
   */
  export type PreferredNeighborhoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which PreferredNeighborhood to fetch.
     */
    where?: PreferredNeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredNeighborhoods to fetch.
     */
    orderBy?: PreferredNeighborhoodOrderByWithRelationInput | PreferredNeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferredNeighborhoods.
     */
    cursor?: PreferredNeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredNeighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredNeighborhoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferredNeighborhoods.
     */
    distinct?: PreferredNeighborhoodScalarFieldEnum | PreferredNeighborhoodScalarFieldEnum[]
  }

  /**
   * PreferredNeighborhood findFirstOrThrow
   */
  export type PreferredNeighborhoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which PreferredNeighborhood to fetch.
     */
    where?: PreferredNeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredNeighborhoods to fetch.
     */
    orderBy?: PreferredNeighborhoodOrderByWithRelationInput | PreferredNeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferredNeighborhoods.
     */
    cursor?: PreferredNeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredNeighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredNeighborhoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferredNeighborhoods.
     */
    distinct?: PreferredNeighborhoodScalarFieldEnum | PreferredNeighborhoodScalarFieldEnum[]
  }

  /**
   * PreferredNeighborhood findMany
   */
  export type PreferredNeighborhoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which PreferredNeighborhoods to fetch.
     */
    where?: PreferredNeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredNeighborhoods to fetch.
     */
    orderBy?: PreferredNeighborhoodOrderByWithRelationInput | PreferredNeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreferredNeighborhoods.
     */
    cursor?: PreferredNeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredNeighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredNeighborhoods.
     */
    skip?: number
    distinct?: PreferredNeighborhoodScalarFieldEnum | PreferredNeighborhoodScalarFieldEnum[]
  }

  /**
   * PreferredNeighborhood create
   */
  export type PreferredNeighborhoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * The data needed to create a PreferredNeighborhood.
     */
    data: XOR<PreferredNeighborhoodCreateInput, PreferredNeighborhoodUncheckedCreateInput>
  }

  /**
   * PreferredNeighborhood createMany
   */
  export type PreferredNeighborhoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferredNeighborhoods.
     */
    data: PreferredNeighborhoodCreateManyInput | PreferredNeighborhoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreferredNeighborhood createManyAndReturn
   */
  export type PreferredNeighborhoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PreferredNeighborhoods.
     */
    data: PreferredNeighborhoodCreateManyInput | PreferredNeighborhoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreferredNeighborhood update
   */
  export type PreferredNeighborhoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * The data needed to update a PreferredNeighborhood.
     */
    data: XOR<PreferredNeighborhoodUpdateInput, PreferredNeighborhoodUncheckedUpdateInput>
    /**
     * Choose, which PreferredNeighborhood to update.
     */
    where: PreferredNeighborhoodWhereUniqueInput
  }

  /**
   * PreferredNeighborhood updateMany
   */
  export type PreferredNeighborhoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferredNeighborhoods.
     */
    data: XOR<PreferredNeighborhoodUpdateManyMutationInput, PreferredNeighborhoodUncheckedUpdateManyInput>
    /**
     * Filter which PreferredNeighborhoods to update
     */
    where?: PreferredNeighborhoodWhereInput
  }

  /**
   * PreferredNeighborhood upsert
   */
  export type PreferredNeighborhoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * The filter to search for the PreferredNeighborhood to update in case it exists.
     */
    where: PreferredNeighborhoodWhereUniqueInput
    /**
     * In case the PreferredNeighborhood found by the `where` argument doesn't exist, create a new PreferredNeighborhood with this data.
     */
    create: XOR<PreferredNeighborhoodCreateInput, PreferredNeighborhoodUncheckedCreateInput>
    /**
     * In case the PreferredNeighborhood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferredNeighborhoodUpdateInput, PreferredNeighborhoodUncheckedUpdateInput>
  }

  /**
   * PreferredNeighborhood delete
   */
  export type PreferredNeighborhoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    /**
     * Filter which PreferredNeighborhood to delete.
     */
    where: PreferredNeighborhoodWhereUniqueInput
  }

  /**
   * PreferredNeighborhood deleteMany
   */
  export type PreferredNeighborhoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferredNeighborhoods to delete
     */
    where?: PreferredNeighborhoodWhereInput
  }

  /**
   * PreferredNeighborhood without action
   */
  export type PreferredNeighborhoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type CitySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    state: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type CitySumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    state?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    state?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    state?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    state: string
    latitude: number
    longitude: number
    createdAt: Date
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    neighborhoods?: boolean | City$neighborhoodsArgs<ExtArgs>
    pointsOfInterest?: boolean | City$pointsOfInterestArgs<ExtArgs>
    properties?: boolean | City$propertiesArgs<ExtArgs>
    userPreferences?: boolean | City$userPreferencesArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    neighborhoods?: boolean | City$neighborhoodsArgs<ExtArgs>
    pointsOfInterest?: boolean | City$pointsOfInterestArgs<ExtArgs>
    properties?: boolean | City$propertiesArgs<ExtArgs>
    userPreferences?: boolean | City$userPreferencesArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      neighborhoods: Prisma.$NeighborhoodPayload<ExtArgs>[]
      pointsOfInterest: Prisma.$PointOfInterestPayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      userPreferences: Prisma.$UserPreferencesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      state: string
      latitude: number
      longitude: number
      createdAt: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    neighborhoods<T extends City$neighborhoodsArgs<ExtArgs> = {}>(args?: Subset<T, City$neighborhoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findMany"> | Null>
    pointsOfInterest<T extends City$pointsOfInterestArgs<ExtArgs> = {}>(args?: Subset<T, City$pointsOfInterestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "findMany"> | Null>
    properties<T extends City$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, City$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    userPreferences<T extends City$userPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, City$userPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly state: FieldRef<"City", 'String'>
    readonly latitude: FieldRef<"City", 'Float'>
    readonly longitude: FieldRef<"City", 'Float'>
    readonly createdAt: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }

  /**
   * City.neighborhoods
   */
  export type City$neighborhoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    where?: NeighborhoodWhereInput
    orderBy?: NeighborhoodOrderByWithRelationInput | NeighborhoodOrderByWithRelationInput[]
    cursor?: NeighborhoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NeighborhoodScalarFieldEnum | NeighborhoodScalarFieldEnum[]
  }

  /**
   * City.pointsOfInterest
   */
  export type City$pointsOfInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    where?: PointOfInterestWhereInput
    orderBy?: PointOfInterestOrderByWithRelationInput | PointOfInterestOrderByWithRelationInput[]
    cursor?: PointOfInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointOfInterestScalarFieldEnum | PointOfInterestScalarFieldEnum[]
  }

  /**
   * City.properties
   */
  export type City$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * City.userPreferences
   */
  export type City$userPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    cursor?: UserPreferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Neighborhood
   */

  export type AggregateNeighborhood = {
    _count: NeighborhoodCountAggregateOutputType | null
    _avg: NeighborhoodAvgAggregateOutputType | null
    _sum: NeighborhoodSumAggregateOutputType | null
    _min: NeighborhoodMinAggregateOutputType | null
    _max: NeighborhoodMaxAggregateOutputType | null
  }

  export type NeighborhoodAvgAggregateOutputType = {
    quietnessScore: number | null
    safetyScore: number | null
  }

  export type NeighborhoodSumAggregateOutputType = {
    quietnessScore: number | null
    safetyScore: number | null
  }

  export type NeighborhoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    cityId: string | null
    quietnessScore: number | null
    safetyScore: number | null
    createdAt: Date | null
  }

  export type NeighborhoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cityId: string | null
    quietnessScore: number | null
    safetyScore: number | null
    createdAt: Date | null
  }

  export type NeighborhoodCountAggregateOutputType = {
    id: number
    name: number
    cityId: number
    quietnessScore: number
    safetyScore: number
    createdAt: number
    _all: number
  }


  export type NeighborhoodAvgAggregateInputType = {
    quietnessScore?: true
    safetyScore?: true
  }

  export type NeighborhoodSumAggregateInputType = {
    quietnessScore?: true
    safetyScore?: true
  }

  export type NeighborhoodMinAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    quietnessScore?: true
    safetyScore?: true
    createdAt?: true
  }

  export type NeighborhoodMaxAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    quietnessScore?: true
    safetyScore?: true
    createdAt?: true
  }

  export type NeighborhoodCountAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    quietnessScore?: true
    safetyScore?: true
    createdAt?: true
    _all?: true
  }

  export type NeighborhoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Neighborhood to aggregate.
     */
    where?: NeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Neighborhoods to fetch.
     */
    orderBy?: NeighborhoodOrderByWithRelationInput | NeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Neighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Neighborhoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Neighborhoods
    **/
    _count?: true | NeighborhoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NeighborhoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NeighborhoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NeighborhoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NeighborhoodMaxAggregateInputType
  }

  export type GetNeighborhoodAggregateType<T extends NeighborhoodAggregateArgs> = {
        [P in keyof T & keyof AggregateNeighborhood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNeighborhood[P]>
      : GetScalarType<T[P], AggregateNeighborhood[P]>
  }




  export type NeighborhoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NeighborhoodWhereInput
    orderBy?: NeighborhoodOrderByWithAggregationInput | NeighborhoodOrderByWithAggregationInput[]
    by: NeighborhoodScalarFieldEnum[] | NeighborhoodScalarFieldEnum
    having?: NeighborhoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NeighborhoodCountAggregateInputType | true
    _avg?: NeighborhoodAvgAggregateInputType
    _sum?: NeighborhoodSumAggregateInputType
    _min?: NeighborhoodMinAggregateInputType
    _max?: NeighborhoodMaxAggregateInputType
  }

  export type NeighborhoodGroupByOutputType = {
    id: string
    name: string
    cityId: string
    quietnessScore: number
    safetyScore: number
    createdAt: Date
    _count: NeighborhoodCountAggregateOutputType | null
    _avg: NeighborhoodAvgAggregateOutputType | null
    _sum: NeighborhoodSumAggregateOutputType | null
    _min: NeighborhoodMinAggregateOutputType | null
    _max: NeighborhoodMaxAggregateOutputType | null
  }

  type GetNeighborhoodGroupByPayload<T extends NeighborhoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NeighborhoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NeighborhoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NeighborhoodGroupByOutputType[P]>
            : GetScalarType<T[P], NeighborhoodGroupByOutputType[P]>
        }
      >
    >


  export type NeighborhoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    quietnessScore?: boolean
    safetyScore?: boolean
    createdAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    properties?: boolean | Neighborhood$propertiesArgs<ExtArgs>
    preferredNeighborhoods?: boolean | Neighborhood$preferredNeighborhoodsArgs<ExtArgs>
    _count?: boolean | NeighborhoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["neighborhood"]>

  export type NeighborhoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    quietnessScore?: boolean
    safetyScore?: boolean
    createdAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["neighborhood"]>

  export type NeighborhoodSelectScalar = {
    id?: boolean
    name?: boolean
    cityId?: boolean
    quietnessScore?: boolean
    safetyScore?: boolean
    createdAt?: boolean
  }

  export type NeighborhoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    properties?: boolean | Neighborhood$propertiesArgs<ExtArgs>
    preferredNeighborhoods?: boolean | Neighborhood$preferredNeighborhoodsArgs<ExtArgs>
    _count?: boolean | NeighborhoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NeighborhoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $NeighborhoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Neighborhood"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      preferredNeighborhoods: Prisma.$PreferredNeighborhoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cityId: string
      quietnessScore: number
      safetyScore: number
      createdAt: Date
    }, ExtArgs["result"]["neighborhood"]>
    composites: {}
  }

  type NeighborhoodGetPayload<S extends boolean | null | undefined | NeighborhoodDefaultArgs> = $Result.GetResult<Prisma.$NeighborhoodPayload, S>

  type NeighborhoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NeighborhoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NeighborhoodCountAggregateInputType | true
    }

  export interface NeighborhoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Neighborhood'], meta: { name: 'Neighborhood' } }
    /**
     * Find zero or one Neighborhood that matches the filter.
     * @param {NeighborhoodFindUniqueArgs} args - Arguments to find a Neighborhood
     * @example
     * // Get one Neighborhood
     * const neighborhood = await prisma.neighborhood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NeighborhoodFindUniqueArgs>(args: SelectSubset<T, NeighborhoodFindUniqueArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Neighborhood that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NeighborhoodFindUniqueOrThrowArgs} args - Arguments to find a Neighborhood
     * @example
     * // Get one Neighborhood
     * const neighborhood = await prisma.neighborhood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NeighborhoodFindUniqueOrThrowArgs>(args: SelectSubset<T, NeighborhoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Neighborhood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodFindFirstArgs} args - Arguments to find a Neighborhood
     * @example
     * // Get one Neighborhood
     * const neighborhood = await prisma.neighborhood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NeighborhoodFindFirstArgs>(args?: SelectSubset<T, NeighborhoodFindFirstArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Neighborhood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodFindFirstOrThrowArgs} args - Arguments to find a Neighborhood
     * @example
     * // Get one Neighborhood
     * const neighborhood = await prisma.neighborhood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NeighborhoodFindFirstOrThrowArgs>(args?: SelectSubset<T, NeighborhoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Neighborhoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Neighborhoods
     * const neighborhoods = await prisma.neighborhood.findMany()
     * 
     * // Get first 10 Neighborhoods
     * const neighborhoods = await prisma.neighborhood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const neighborhoodWithIdOnly = await prisma.neighborhood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NeighborhoodFindManyArgs>(args?: SelectSubset<T, NeighborhoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Neighborhood.
     * @param {NeighborhoodCreateArgs} args - Arguments to create a Neighborhood.
     * @example
     * // Create one Neighborhood
     * const Neighborhood = await prisma.neighborhood.create({
     *   data: {
     *     // ... data to create a Neighborhood
     *   }
     * })
     * 
     */
    create<T extends NeighborhoodCreateArgs>(args: SelectSubset<T, NeighborhoodCreateArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Neighborhoods.
     * @param {NeighborhoodCreateManyArgs} args - Arguments to create many Neighborhoods.
     * @example
     * // Create many Neighborhoods
     * const neighborhood = await prisma.neighborhood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NeighborhoodCreateManyArgs>(args?: SelectSubset<T, NeighborhoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Neighborhoods and returns the data saved in the database.
     * @param {NeighborhoodCreateManyAndReturnArgs} args - Arguments to create many Neighborhoods.
     * @example
     * // Create many Neighborhoods
     * const neighborhood = await prisma.neighborhood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Neighborhoods and only return the `id`
     * const neighborhoodWithIdOnly = await prisma.neighborhood.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NeighborhoodCreateManyAndReturnArgs>(args?: SelectSubset<T, NeighborhoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Neighborhood.
     * @param {NeighborhoodDeleteArgs} args - Arguments to delete one Neighborhood.
     * @example
     * // Delete one Neighborhood
     * const Neighborhood = await prisma.neighborhood.delete({
     *   where: {
     *     // ... filter to delete one Neighborhood
     *   }
     * })
     * 
     */
    delete<T extends NeighborhoodDeleteArgs>(args: SelectSubset<T, NeighborhoodDeleteArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Neighborhood.
     * @param {NeighborhoodUpdateArgs} args - Arguments to update one Neighborhood.
     * @example
     * // Update one Neighborhood
     * const neighborhood = await prisma.neighborhood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NeighborhoodUpdateArgs>(args: SelectSubset<T, NeighborhoodUpdateArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Neighborhoods.
     * @param {NeighborhoodDeleteManyArgs} args - Arguments to filter Neighborhoods to delete.
     * @example
     * // Delete a few Neighborhoods
     * const { count } = await prisma.neighborhood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NeighborhoodDeleteManyArgs>(args?: SelectSubset<T, NeighborhoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Neighborhoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Neighborhoods
     * const neighborhood = await prisma.neighborhood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NeighborhoodUpdateManyArgs>(args: SelectSubset<T, NeighborhoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Neighborhood.
     * @param {NeighborhoodUpsertArgs} args - Arguments to update or create a Neighborhood.
     * @example
     * // Update or create a Neighborhood
     * const neighborhood = await prisma.neighborhood.upsert({
     *   create: {
     *     // ... data to create a Neighborhood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Neighborhood we want to update
     *   }
     * })
     */
    upsert<T extends NeighborhoodUpsertArgs>(args: SelectSubset<T, NeighborhoodUpsertArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Neighborhoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodCountArgs} args - Arguments to filter Neighborhoods to count.
     * @example
     * // Count the number of Neighborhoods
     * const count = await prisma.neighborhood.count({
     *   where: {
     *     // ... the filter for the Neighborhoods we want to count
     *   }
     * })
    **/
    count<T extends NeighborhoodCountArgs>(
      args?: Subset<T, NeighborhoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NeighborhoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Neighborhood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NeighborhoodAggregateArgs>(args: Subset<T, NeighborhoodAggregateArgs>): Prisma.PrismaPromise<GetNeighborhoodAggregateType<T>>

    /**
     * Group by Neighborhood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborhoodGroupByArgs} args - Group by arguments.
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
      T extends NeighborhoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NeighborhoodGroupByArgs['orderBy'] }
        : { orderBy?: NeighborhoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NeighborhoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNeighborhoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Neighborhood model
   */
  readonly fields: NeighborhoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Neighborhood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NeighborhoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    properties<T extends Neighborhood$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Neighborhood$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    preferredNeighborhoods<T extends Neighborhood$preferredNeighborhoodsArgs<ExtArgs> = {}>(args?: Subset<T, Neighborhood$preferredNeighborhoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredNeighborhoodPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Neighborhood model
   */ 
  interface NeighborhoodFieldRefs {
    readonly id: FieldRef<"Neighborhood", 'String'>
    readonly name: FieldRef<"Neighborhood", 'String'>
    readonly cityId: FieldRef<"Neighborhood", 'String'>
    readonly quietnessScore: FieldRef<"Neighborhood", 'Int'>
    readonly safetyScore: FieldRef<"Neighborhood", 'Int'>
    readonly createdAt: FieldRef<"Neighborhood", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Neighborhood findUnique
   */
  export type NeighborhoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which Neighborhood to fetch.
     */
    where: NeighborhoodWhereUniqueInput
  }

  /**
   * Neighborhood findUniqueOrThrow
   */
  export type NeighborhoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which Neighborhood to fetch.
     */
    where: NeighborhoodWhereUniqueInput
  }

  /**
   * Neighborhood findFirst
   */
  export type NeighborhoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which Neighborhood to fetch.
     */
    where?: NeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Neighborhoods to fetch.
     */
    orderBy?: NeighborhoodOrderByWithRelationInput | NeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Neighborhoods.
     */
    cursor?: NeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Neighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Neighborhoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Neighborhoods.
     */
    distinct?: NeighborhoodScalarFieldEnum | NeighborhoodScalarFieldEnum[]
  }

  /**
   * Neighborhood findFirstOrThrow
   */
  export type NeighborhoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which Neighborhood to fetch.
     */
    where?: NeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Neighborhoods to fetch.
     */
    orderBy?: NeighborhoodOrderByWithRelationInput | NeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Neighborhoods.
     */
    cursor?: NeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Neighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Neighborhoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Neighborhoods.
     */
    distinct?: NeighborhoodScalarFieldEnum | NeighborhoodScalarFieldEnum[]
  }

  /**
   * Neighborhood findMany
   */
  export type NeighborhoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * Filter, which Neighborhoods to fetch.
     */
    where?: NeighborhoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Neighborhoods to fetch.
     */
    orderBy?: NeighborhoodOrderByWithRelationInput | NeighborhoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Neighborhoods.
     */
    cursor?: NeighborhoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Neighborhoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Neighborhoods.
     */
    skip?: number
    distinct?: NeighborhoodScalarFieldEnum | NeighborhoodScalarFieldEnum[]
  }

  /**
   * Neighborhood create
   */
  export type NeighborhoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Neighborhood.
     */
    data: XOR<NeighborhoodCreateInput, NeighborhoodUncheckedCreateInput>
  }

  /**
   * Neighborhood createMany
   */
  export type NeighborhoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Neighborhoods.
     */
    data: NeighborhoodCreateManyInput | NeighborhoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Neighborhood createManyAndReturn
   */
  export type NeighborhoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Neighborhoods.
     */
    data: NeighborhoodCreateManyInput | NeighborhoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Neighborhood update
   */
  export type NeighborhoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Neighborhood.
     */
    data: XOR<NeighborhoodUpdateInput, NeighborhoodUncheckedUpdateInput>
    /**
     * Choose, which Neighborhood to update.
     */
    where: NeighborhoodWhereUniqueInput
  }

  /**
   * Neighborhood updateMany
   */
  export type NeighborhoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Neighborhoods.
     */
    data: XOR<NeighborhoodUpdateManyMutationInput, NeighborhoodUncheckedUpdateManyInput>
    /**
     * Filter which Neighborhoods to update
     */
    where?: NeighborhoodWhereInput
  }

  /**
   * Neighborhood upsert
   */
  export type NeighborhoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Neighborhood to update in case it exists.
     */
    where: NeighborhoodWhereUniqueInput
    /**
     * In case the Neighborhood found by the `where` argument doesn't exist, create a new Neighborhood with this data.
     */
    create: XOR<NeighborhoodCreateInput, NeighborhoodUncheckedCreateInput>
    /**
     * In case the Neighborhood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NeighborhoodUpdateInput, NeighborhoodUncheckedUpdateInput>
  }

  /**
   * Neighborhood delete
   */
  export type NeighborhoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    /**
     * Filter which Neighborhood to delete.
     */
    where: NeighborhoodWhereUniqueInput
  }

  /**
   * Neighborhood deleteMany
   */
  export type NeighborhoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Neighborhoods to delete
     */
    where?: NeighborhoodWhereInput
  }

  /**
   * Neighborhood.properties
   */
  export type Neighborhood$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Neighborhood.preferredNeighborhoods
   */
  export type Neighborhood$preferredNeighborhoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredNeighborhood
     */
    select?: PreferredNeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredNeighborhoodInclude<ExtArgs> | null
    where?: PreferredNeighborhoodWhereInput
    orderBy?: PreferredNeighborhoodOrderByWithRelationInput | PreferredNeighborhoodOrderByWithRelationInput[]
    cursor?: PreferredNeighborhoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferredNeighborhoodScalarFieldEnum | PreferredNeighborhoodScalarFieldEnum[]
  }

  /**
   * Neighborhood without action
   */
  export type NeighborhoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
  }


  /**
   * Model PointOfInterest
   */

  export type AggregatePointOfInterest = {
    _count: PointOfInterestCountAggregateOutputType | null
    _avg: PointOfInterestAvgAggregateOutputType | null
    _sum: PointOfInterestSumAggregateOutputType | null
    _min: PointOfInterestMinAggregateOutputType | null
    _max: PointOfInterestMaxAggregateOutputType | null
  }

  export type PointOfInterestAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PointOfInterestSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PointOfInterestMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    latitude: number | null
    longitude: number | null
    cityId: string | null
    createdAt: Date | null
  }

  export type PointOfInterestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    latitude: number | null
    longitude: number | null
    cityId: string | null
    createdAt: Date | null
  }

  export type PointOfInterestCountAggregateOutputType = {
    id: number
    name: number
    type: number
    latitude: number
    longitude: number
    cityId: number
    createdAt: number
    _all: number
  }


  export type PointOfInterestAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PointOfInterestSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PointOfInterestMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    cityId?: true
    createdAt?: true
  }

  export type PointOfInterestMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    cityId?: true
    createdAt?: true
  }

  export type PointOfInterestCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    cityId?: true
    createdAt?: true
    _all?: true
  }

  export type PointOfInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointOfInterest to aggregate.
     */
    where?: PointOfInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointOfInterests to fetch.
     */
    orderBy?: PointOfInterestOrderByWithRelationInput | PointOfInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointOfInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointOfInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointOfInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointOfInterests
    **/
    _count?: true | PointOfInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointOfInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointOfInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointOfInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointOfInterestMaxAggregateInputType
  }

  export type GetPointOfInterestAggregateType<T extends PointOfInterestAggregateArgs> = {
        [P in keyof T & keyof AggregatePointOfInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointOfInterest[P]>
      : GetScalarType<T[P], AggregatePointOfInterest[P]>
  }




  export type PointOfInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointOfInterestWhereInput
    orderBy?: PointOfInterestOrderByWithAggregationInput | PointOfInterestOrderByWithAggregationInput[]
    by: PointOfInterestScalarFieldEnum[] | PointOfInterestScalarFieldEnum
    having?: PointOfInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointOfInterestCountAggregateInputType | true
    _avg?: PointOfInterestAvgAggregateInputType
    _sum?: PointOfInterestSumAggregateInputType
    _min?: PointOfInterestMinAggregateInputType
    _max?: PointOfInterestMaxAggregateInputType
  }

  export type PointOfInterestGroupByOutputType = {
    id: string
    name: string
    type: string
    latitude: number
    longitude: number
    cityId: string
    createdAt: Date
    _count: PointOfInterestCountAggregateOutputType | null
    _avg: PointOfInterestAvgAggregateOutputType | null
    _sum: PointOfInterestSumAggregateOutputType | null
    _min: PointOfInterestMinAggregateOutputType | null
    _max: PointOfInterestMaxAggregateOutputType | null
  }

  type GetPointOfInterestGroupByPayload<T extends PointOfInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointOfInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointOfInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointOfInterestGroupByOutputType[P]>
            : GetScalarType<T[P], PointOfInterestGroupByOutputType[P]>
        }
      >
    >


  export type PointOfInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    cityId?: boolean
    createdAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointOfInterest"]>

  export type PointOfInterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    cityId?: boolean
    createdAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointOfInterest"]>

  export type PointOfInterestSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    cityId?: boolean
    createdAt?: boolean
  }

  export type PointOfInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type PointOfInterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $PointOfInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointOfInterest"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      latitude: number
      longitude: number
      cityId: string
      createdAt: Date
    }, ExtArgs["result"]["pointOfInterest"]>
    composites: {}
  }

  type PointOfInterestGetPayload<S extends boolean | null | undefined | PointOfInterestDefaultArgs> = $Result.GetResult<Prisma.$PointOfInterestPayload, S>

  type PointOfInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PointOfInterestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PointOfInterestCountAggregateInputType | true
    }

  export interface PointOfInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointOfInterest'], meta: { name: 'PointOfInterest' } }
    /**
     * Find zero or one PointOfInterest that matches the filter.
     * @param {PointOfInterestFindUniqueArgs} args - Arguments to find a PointOfInterest
     * @example
     * // Get one PointOfInterest
     * const pointOfInterest = await prisma.pointOfInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointOfInterestFindUniqueArgs>(args: SelectSubset<T, PointOfInterestFindUniqueArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PointOfInterest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PointOfInterestFindUniqueOrThrowArgs} args - Arguments to find a PointOfInterest
     * @example
     * // Get one PointOfInterest
     * const pointOfInterest = await prisma.pointOfInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointOfInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, PointOfInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PointOfInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestFindFirstArgs} args - Arguments to find a PointOfInterest
     * @example
     * // Get one PointOfInterest
     * const pointOfInterest = await prisma.pointOfInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointOfInterestFindFirstArgs>(args?: SelectSubset<T, PointOfInterestFindFirstArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PointOfInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestFindFirstOrThrowArgs} args - Arguments to find a PointOfInterest
     * @example
     * // Get one PointOfInterest
     * const pointOfInterest = await prisma.pointOfInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointOfInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, PointOfInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PointOfInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointOfInterests
     * const pointOfInterests = await prisma.pointOfInterest.findMany()
     * 
     * // Get first 10 PointOfInterests
     * const pointOfInterests = await prisma.pointOfInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointOfInterestWithIdOnly = await prisma.pointOfInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointOfInterestFindManyArgs>(args?: SelectSubset<T, PointOfInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PointOfInterest.
     * @param {PointOfInterestCreateArgs} args - Arguments to create a PointOfInterest.
     * @example
     * // Create one PointOfInterest
     * const PointOfInterest = await prisma.pointOfInterest.create({
     *   data: {
     *     // ... data to create a PointOfInterest
     *   }
     * })
     * 
     */
    create<T extends PointOfInterestCreateArgs>(args: SelectSubset<T, PointOfInterestCreateArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PointOfInterests.
     * @param {PointOfInterestCreateManyArgs} args - Arguments to create many PointOfInterests.
     * @example
     * // Create many PointOfInterests
     * const pointOfInterest = await prisma.pointOfInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointOfInterestCreateManyArgs>(args?: SelectSubset<T, PointOfInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointOfInterests and returns the data saved in the database.
     * @param {PointOfInterestCreateManyAndReturnArgs} args - Arguments to create many PointOfInterests.
     * @example
     * // Create many PointOfInterests
     * const pointOfInterest = await prisma.pointOfInterest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointOfInterests and only return the `id`
     * const pointOfInterestWithIdOnly = await prisma.pointOfInterest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointOfInterestCreateManyAndReturnArgs>(args?: SelectSubset<T, PointOfInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PointOfInterest.
     * @param {PointOfInterestDeleteArgs} args - Arguments to delete one PointOfInterest.
     * @example
     * // Delete one PointOfInterest
     * const PointOfInterest = await prisma.pointOfInterest.delete({
     *   where: {
     *     // ... filter to delete one PointOfInterest
     *   }
     * })
     * 
     */
    delete<T extends PointOfInterestDeleteArgs>(args: SelectSubset<T, PointOfInterestDeleteArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PointOfInterest.
     * @param {PointOfInterestUpdateArgs} args - Arguments to update one PointOfInterest.
     * @example
     * // Update one PointOfInterest
     * const pointOfInterest = await prisma.pointOfInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointOfInterestUpdateArgs>(args: SelectSubset<T, PointOfInterestUpdateArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PointOfInterests.
     * @param {PointOfInterestDeleteManyArgs} args - Arguments to filter PointOfInterests to delete.
     * @example
     * // Delete a few PointOfInterests
     * const { count } = await prisma.pointOfInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointOfInterestDeleteManyArgs>(args?: SelectSubset<T, PointOfInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointOfInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointOfInterests
     * const pointOfInterest = await prisma.pointOfInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointOfInterestUpdateManyArgs>(args: SelectSubset<T, PointOfInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PointOfInterest.
     * @param {PointOfInterestUpsertArgs} args - Arguments to update or create a PointOfInterest.
     * @example
     * // Update or create a PointOfInterest
     * const pointOfInterest = await prisma.pointOfInterest.upsert({
     *   create: {
     *     // ... data to create a PointOfInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointOfInterest we want to update
     *   }
     * })
     */
    upsert<T extends PointOfInterestUpsertArgs>(args: SelectSubset<T, PointOfInterestUpsertArgs<ExtArgs>>): Prisma__PointOfInterestClient<$Result.GetResult<Prisma.$PointOfInterestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PointOfInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestCountArgs} args - Arguments to filter PointOfInterests to count.
     * @example
     * // Count the number of PointOfInterests
     * const count = await prisma.pointOfInterest.count({
     *   where: {
     *     // ... the filter for the PointOfInterests we want to count
     *   }
     * })
    **/
    count<T extends PointOfInterestCountArgs>(
      args?: Subset<T, PointOfInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointOfInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointOfInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointOfInterestAggregateArgs>(args: Subset<T, PointOfInterestAggregateArgs>): Prisma.PrismaPromise<GetPointOfInterestAggregateType<T>>

    /**
     * Group by PointOfInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointOfInterestGroupByArgs} args - Group by arguments.
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
      T extends PointOfInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointOfInterestGroupByArgs['orderBy'] }
        : { orderBy?: PointOfInterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointOfInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointOfInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointOfInterest model
   */
  readonly fields: PointOfInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointOfInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointOfInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PointOfInterest model
   */ 
  interface PointOfInterestFieldRefs {
    readonly id: FieldRef<"PointOfInterest", 'String'>
    readonly name: FieldRef<"PointOfInterest", 'String'>
    readonly type: FieldRef<"PointOfInterest", 'String'>
    readonly latitude: FieldRef<"PointOfInterest", 'Float'>
    readonly longitude: FieldRef<"PointOfInterest", 'Float'>
    readonly cityId: FieldRef<"PointOfInterest", 'String'>
    readonly createdAt: FieldRef<"PointOfInterest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointOfInterest findUnique
   */
  export type PointOfInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * Filter, which PointOfInterest to fetch.
     */
    where: PointOfInterestWhereUniqueInput
  }

  /**
   * PointOfInterest findUniqueOrThrow
   */
  export type PointOfInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * Filter, which PointOfInterest to fetch.
     */
    where: PointOfInterestWhereUniqueInput
  }

  /**
   * PointOfInterest findFirst
   */
  export type PointOfInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * Filter, which PointOfInterest to fetch.
     */
    where?: PointOfInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointOfInterests to fetch.
     */
    orderBy?: PointOfInterestOrderByWithRelationInput | PointOfInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointOfInterests.
     */
    cursor?: PointOfInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointOfInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointOfInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointOfInterests.
     */
    distinct?: PointOfInterestScalarFieldEnum | PointOfInterestScalarFieldEnum[]
  }

  /**
   * PointOfInterest findFirstOrThrow
   */
  export type PointOfInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * Filter, which PointOfInterest to fetch.
     */
    where?: PointOfInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointOfInterests to fetch.
     */
    orderBy?: PointOfInterestOrderByWithRelationInput | PointOfInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointOfInterests.
     */
    cursor?: PointOfInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointOfInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointOfInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointOfInterests.
     */
    distinct?: PointOfInterestScalarFieldEnum | PointOfInterestScalarFieldEnum[]
  }

  /**
   * PointOfInterest findMany
   */
  export type PointOfInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * Filter, which PointOfInterests to fetch.
     */
    where?: PointOfInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointOfInterests to fetch.
     */
    orderBy?: PointOfInterestOrderByWithRelationInput | PointOfInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointOfInterests.
     */
    cursor?: PointOfInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointOfInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointOfInterests.
     */
    skip?: number
    distinct?: PointOfInterestScalarFieldEnum | PointOfInterestScalarFieldEnum[]
  }

  /**
   * PointOfInterest create
   */
  export type PointOfInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a PointOfInterest.
     */
    data: XOR<PointOfInterestCreateInput, PointOfInterestUncheckedCreateInput>
  }

  /**
   * PointOfInterest createMany
   */
  export type PointOfInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointOfInterests.
     */
    data: PointOfInterestCreateManyInput | PointOfInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointOfInterest createManyAndReturn
   */
  export type PointOfInterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PointOfInterests.
     */
    data: PointOfInterestCreateManyInput | PointOfInterestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointOfInterest update
   */
  export type PointOfInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a PointOfInterest.
     */
    data: XOR<PointOfInterestUpdateInput, PointOfInterestUncheckedUpdateInput>
    /**
     * Choose, which PointOfInterest to update.
     */
    where: PointOfInterestWhereUniqueInput
  }

  /**
   * PointOfInterest updateMany
   */
  export type PointOfInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointOfInterests.
     */
    data: XOR<PointOfInterestUpdateManyMutationInput, PointOfInterestUncheckedUpdateManyInput>
    /**
     * Filter which PointOfInterests to update
     */
    where?: PointOfInterestWhereInput
  }

  /**
   * PointOfInterest upsert
   */
  export type PointOfInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the PointOfInterest to update in case it exists.
     */
    where: PointOfInterestWhereUniqueInput
    /**
     * In case the PointOfInterest found by the `where` argument doesn't exist, create a new PointOfInterest with this data.
     */
    create: XOR<PointOfInterestCreateInput, PointOfInterestUncheckedCreateInput>
    /**
     * In case the PointOfInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointOfInterestUpdateInput, PointOfInterestUncheckedUpdateInput>
  }

  /**
   * PointOfInterest delete
   */
  export type PointOfInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
    /**
     * Filter which PointOfInterest to delete.
     */
    where: PointOfInterestWhereUniqueInput
  }

  /**
   * PointOfInterest deleteMany
   */
  export type PointOfInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointOfInterests to delete
     */
    where?: PointOfInterestWhereInput
  }

  /**
   * PointOfInterest without action
   */
  export type PointOfInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointOfInterest
     */
    select?: PointOfInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointOfInterestInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    sourceUrl: string | null
    sourceName: string | null
    title: string | null
    description: string | null
    price: number | null
    propertyType: string | null
    transactionType: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    address: string | null
    cityId: string | null
    neighborhoodId: string | null
    latitude: number | null
    longitude: number | null
    hasParking: boolean | null
    hasGarden: boolean | null
    hasPool: boolean | null
    hasSecurity: boolean | null
    petFriendly: boolean | null
    sourceId: string | null
    lastScrapedAt: Date | null
    scrapingSource: string | null
    isActive: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    sourceUrl: string | null
    sourceName: string | null
    title: string | null
    description: string | null
    price: number | null
    propertyType: string | null
    transactionType: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    address: string | null
    cityId: string | null
    neighborhoodId: string | null
    latitude: number | null
    longitude: number | null
    hasParking: boolean | null
    hasGarden: boolean | null
    hasPool: boolean | null
    hasSecurity: boolean | null
    petFriendly: boolean | null
    sourceId: string | null
    lastScrapedAt: Date | null
    scrapingSource: string | null
    isActive: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    sourceUrl: number
    sourceName: number
    title: number
    description: number
    price: number
    propertyType: number
    transactionType: number
    bedrooms: number
    bathrooms: number
    area: number
    address: number
    cityId: number
    neighborhoodId: number
    latitude: number
    longitude: number
    hasParking: number
    hasGarden: number
    hasPool: number
    hasSecurity: number
    petFriendly: number
    sourceId: number
    lastScrapedAt: number
    scrapingSource: number
    isActive: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    latitude?: true
    longitude?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    latitude?: true
    longitude?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    sourceUrl?: true
    sourceName?: true
    title?: true
    description?: true
    price?: true
    propertyType?: true
    transactionType?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    address?: true
    cityId?: true
    neighborhoodId?: true
    latitude?: true
    longitude?: true
    hasParking?: true
    hasGarden?: true
    hasPool?: true
    hasSecurity?: true
    petFriendly?: true
    sourceId?: true
    lastScrapedAt?: true
    scrapingSource?: true
    isActive?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    sourceUrl?: true
    sourceName?: true
    title?: true
    description?: true
    price?: true
    propertyType?: true
    transactionType?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    address?: true
    cityId?: true
    neighborhoodId?: true
    latitude?: true
    longitude?: true
    hasParking?: true
    hasGarden?: true
    hasPool?: true
    hasSecurity?: true
    petFriendly?: true
    sourceId?: true
    lastScrapedAt?: true
    scrapingSource?: true
    isActive?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    sourceUrl?: true
    sourceName?: true
    title?: true
    description?: true
    price?: true
    propertyType?: true
    transactionType?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    address?: true
    cityId?: true
    neighborhoodId?: true
    latitude?: true
    longitude?: true
    hasParking?: true
    hasGarden?: true
    hasPool?: true
    hasSecurity?: true
    petFriendly?: true
    sourceId?: true
    lastScrapedAt?: true
    scrapingSource?: true
    isActive?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    sourceUrl: string
    sourceName: string
    title: string
    description: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area: number | null
    address: string | null
    cityId: string
    neighborhoodId: string | null
    latitude: number | null
    longitude: number | null
    hasParking: boolean
    hasGarden: boolean
    hasPool: boolean
    hasSecurity: boolean
    petFriendly: boolean
    sourceId: string | null
    lastScrapedAt: Date | null
    scrapingSource: string | null
    isActive: boolean
    lastSeenAt: Date
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceUrl?: boolean
    sourceName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    transactionType?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    address?: boolean
    cityId?: boolean
    neighborhoodId?: boolean
    latitude?: boolean
    longitude?: boolean
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: boolean
    lastScrapedAt?: boolean
    scrapingSource?: boolean
    isActive?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    neighborhood?: boolean | Property$neighborhoodArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    savedMatches?: boolean | Property$savedMatchesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceUrl?: boolean
    sourceName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    transactionType?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    address?: boolean
    cityId?: boolean
    neighborhoodId?: boolean
    latitude?: boolean
    longitude?: boolean
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: boolean
    lastScrapedAt?: boolean
    scrapingSource?: boolean
    isActive?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    neighborhood?: boolean | Property$neighborhoodArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    sourceUrl?: boolean
    sourceName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    transactionType?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    address?: boolean
    cityId?: boolean
    neighborhoodId?: boolean
    latitude?: boolean
    longitude?: boolean
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: boolean
    lastScrapedAt?: boolean
    scrapingSource?: boolean
    isActive?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    neighborhood?: boolean | Property$neighborhoodArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    savedMatches?: boolean | Property$savedMatchesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    neighborhood?: boolean | Property$neighborhoodArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      neighborhood: Prisma.$NeighborhoodPayload<ExtArgs> | null
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
      savedMatches: Prisma.$SavedMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceUrl: string
      sourceName: string
      title: string
      description: string | null
      price: number
      propertyType: string
      transactionType: string
      bedrooms: number
      bathrooms: number
      area: number | null
      address: string | null
      cityId: string
      neighborhoodId: string | null
      latitude: number | null
      longitude: number | null
      hasParking: boolean
      hasGarden: boolean
      hasPool: boolean
      hasSecurity: boolean
      petFriendly: boolean
      sourceId: string | null
      lastScrapedAt: Date | null
      scrapingSource: string | null
      isActive: boolean
      lastSeenAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    neighborhood<T extends Property$neighborhoodArgs<ExtArgs> = {}>(args?: Subset<T, Property$neighborhoodArgs<ExtArgs>>): Prisma__NeighborhoodClient<$Result.GetResult<Prisma.$NeighborhoodPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany"> | Null>
    savedMatches<T extends Property$savedMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Property$savedMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly sourceUrl: FieldRef<"Property", 'String'>
    readonly sourceName: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Float'>
    readonly propertyType: FieldRef<"Property", 'String'>
    readonly transactionType: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly area: FieldRef<"Property", 'Float'>
    readonly address: FieldRef<"Property", 'String'>
    readonly cityId: FieldRef<"Property", 'String'>
    readonly neighborhoodId: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'Float'>
    readonly longitude: FieldRef<"Property", 'Float'>
    readonly hasParking: FieldRef<"Property", 'Boolean'>
    readonly hasGarden: FieldRef<"Property", 'Boolean'>
    readonly hasPool: FieldRef<"Property", 'Boolean'>
    readonly hasSecurity: FieldRef<"Property", 'Boolean'>
    readonly petFriendly: FieldRef<"Property", 'Boolean'>
    readonly sourceId: FieldRef<"Property", 'String'>
    readonly lastScrapedAt: FieldRef<"Property", 'DateTime'>
    readonly scrapingSource: FieldRef<"Property", 'String'>
    readonly isActive: FieldRef<"Property", 'Boolean'>
    readonly lastSeenAt: FieldRef<"Property", 'DateTime'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property.neighborhood
   */
  export type Property$neighborhoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Neighborhood
     */
    select?: NeighborhoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborhoodInclude<ExtArgs> | null
    where?: NeighborhoodWhereInput
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.savedMatches
   */
  export type Property$savedMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    where?: SavedMatchWhereInput
    orderBy?: SavedMatchOrderByWithRelationInput | SavedMatchOrderByWithRelationInput[]
    cursor?: SavedMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedMatchScalarFieldEnum | SavedMatchScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    url: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    url: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    url: number
    isPrimary: number
    createdAt: number
    _all: number
  }


  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    isPrimary?: true
    createdAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    isPrimary?: true
    createdAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    isPrimary?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: string
    propertyId: string
    url: string
    isPrimary: boolean
    createdAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    url?: boolean
    isPrimary?: boolean
    createdAt?: boolean
  }

  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      url: string
      isPrimary: boolean
      createdAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
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
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PropertyImage model
   */ 
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'String'>
    readonly propertyId: FieldRef<"PropertyImage", 'String'>
    readonly url: FieldRef<"PropertyImage", 'String'>
    readonly isPrimary: FieldRef<"PropertyImage", 'Boolean'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model SavedMatch
   */

  export type AggregateSavedMatch = {
    _count: SavedMatchCountAggregateOutputType | null
    _avg: SavedMatchAvgAggregateOutputType | null
    _sum: SavedMatchSumAggregateOutputType | null
    _min: SavedMatchMinAggregateOutputType | null
    _max: SavedMatchMaxAggregateOutputType | null
  }

  export type SavedMatchAvgAggregateOutputType = {
    matchScore: number | null
  }

  export type SavedMatchSumAggregateOutputType = {
    matchScore: number | null
  }

  export type SavedMatchMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    matchScore: number | null
    scoreBreakdown: string | null
    isFavorite: boolean | null
    isHidden: boolean | null
    viewedAt: Date | null
    savedAt: Date | null
  }

  export type SavedMatchMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    matchScore: number | null
    scoreBreakdown: string | null
    isFavorite: boolean | null
    isHidden: boolean | null
    viewedAt: Date | null
    savedAt: Date | null
  }

  export type SavedMatchCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    matchScore: number
    scoreBreakdown: number
    isFavorite: number
    isHidden: number
    viewedAt: number
    savedAt: number
    _all: number
  }


  export type SavedMatchAvgAggregateInputType = {
    matchScore?: true
  }

  export type SavedMatchSumAggregateInputType = {
    matchScore?: true
  }

  export type SavedMatchMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    matchScore?: true
    scoreBreakdown?: true
    isFavorite?: true
    isHidden?: true
    viewedAt?: true
    savedAt?: true
  }

  export type SavedMatchMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    matchScore?: true
    scoreBreakdown?: true
    isFavorite?: true
    isHidden?: true
    viewedAt?: true
    savedAt?: true
  }

  export type SavedMatchCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    matchScore?: true
    scoreBreakdown?: true
    isFavorite?: true
    isHidden?: true
    viewedAt?: true
    savedAt?: true
    _all?: true
  }

  export type SavedMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedMatch to aggregate.
     */
    where?: SavedMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMatches to fetch.
     */
    orderBy?: SavedMatchOrderByWithRelationInput | SavedMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedMatches
    **/
    _count?: true | SavedMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedMatchMaxAggregateInputType
  }

  export type GetSavedMatchAggregateType<T extends SavedMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedMatch[P]>
      : GetScalarType<T[P], AggregateSavedMatch[P]>
  }




  export type SavedMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedMatchWhereInput
    orderBy?: SavedMatchOrderByWithAggregationInput | SavedMatchOrderByWithAggregationInput[]
    by: SavedMatchScalarFieldEnum[] | SavedMatchScalarFieldEnum
    having?: SavedMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedMatchCountAggregateInputType | true
    _avg?: SavedMatchAvgAggregateInputType
    _sum?: SavedMatchSumAggregateInputType
    _min?: SavedMatchMinAggregateInputType
    _max?: SavedMatchMaxAggregateInputType
  }

  export type SavedMatchGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite: boolean
    isHidden: boolean
    viewedAt: Date | null
    savedAt: Date
    _count: SavedMatchCountAggregateOutputType | null
    _avg: SavedMatchAvgAggregateOutputType | null
    _sum: SavedMatchSumAggregateOutputType | null
    _min: SavedMatchMinAggregateOutputType | null
    _max: SavedMatchMaxAggregateOutputType | null
  }

  type GetSavedMatchGroupByPayload<T extends SavedMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedMatchGroupByOutputType[P]>
            : GetScalarType<T[P], SavedMatchGroupByOutputType[P]>
        }
      >
    >


  export type SavedMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    matchScore?: boolean
    scoreBreakdown?: boolean
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedMatch"]>

  export type SavedMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    matchScore?: boolean
    scoreBreakdown?: boolean
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedMatch"]>

  export type SavedMatchSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    matchScore?: boolean
    scoreBreakdown?: boolean
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: boolean
    savedAt?: boolean
  }

  export type SavedMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type SavedMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $SavedMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedMatch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      matchScore: number
      scoreBreakdown: string
      isFavorite: boolean
      isHidden: boolean
      viewedAt: Date | null
      savedAt: Date
    }, ExtArgs["result"]["savedMatch"]>
    composites: {}
  }

  type SavedMatchGetPayload<S extends boolean | null | undefined | SavedMatchDefaultArgs> = $Result.GetResult<Prisma.$SavedMatchPayload, S>

  type SavedMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavedMatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavedMatchCountAggregateInputType | true
    }

  export interface SavedMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedMatch'], meta: { name: 'SavedMatch' } }
    /**
     * Find zero or one SavedMatch that matches the filter.
     * @param {SavedMatchFindUniqueArgs} args - Arguments to find a SavedMatch
     * @example
     * // Get one SavedMatch
     * const savedMatch = await prisma.savedMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedMatchFindUniqueArgs>(args: SelectSubset<T, SavedMatchFindUniqueArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavedMatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavedMatchFindUniqueOrThrowArgs} args - Arguments to find a SavedMatch
     * @example
     * // Get one SavedMatch
     * const savedMatch = await prisma.savedMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavedMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchFindFirstArgs} args - Arguments to find a SavedMatch
     * @example
     * // Get one SavedMatch
     * const savedMatch = await prisma.savedMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedMatchFindFirstArgs>(args?: SelectSubset<T, SavedMatchFindFirstArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavedMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchFindFirstOrThrowArgs} args - Arguments to find a SavedMatch
     * @example
     * // Get one SavedMatch
     * const savedMatch = await prisma.savedMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavedMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedMatches
     * const savedMatches = await prisma.savedMatch.findMany()
     * 
     * // Get first 10 SavedMatches
     * const savedMatches = await prisma.savedMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedMatchWithIdOnly = await prisma.savedMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedMatchFindManyArgs>(args?: SelectSubset<T, SavedMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavedMatch.
     * @param {SavedMatchCreateArgs} args - Arguments to create a SavedMatch.
     * @example
     * // Create one SavedMatch
     * const SavedMatch = await prisma.savedMatch.create({
     *   data: {
     *     // ... data to create a SavedMatch
     *   }
     * })
     * 
     */
    create<T extends SavedMatchCreateArgs>(args: SelectSubset<T, SavedMatchCreateArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavedMatches.
     * @param {SavedMatchCreateManyArgs} args - Arguments to create many SavedMatches.
     * @example
     * // Create many SavedMatches
     * const savedMatch = await prisma.savedMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedMatchCreateManyArgs>(args?: SelectSubset<T, SavedMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedMatches and returns the data saved in the database.
     * @param {SavedMatchCreateManyAndReturnArgs} args - Arguments to create many SavedMatches.
     * @example
     * // Create many SavedMatches
     * const savedMatch = await prisma.savedMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedMatches and only return the `id`
     * const savedMatchWithIdOnly = await prisma.savedMatch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavedMatch.
     * @param {SavedMatchDeleteArgs} args - Arguments to delete one SavedMatch.
     * @example
     * // Delete one SavedMatch
     * const SavedMatch = await prisma.savedMatch.delete({
     *   where: {
     *     // ... filter to delete one SavedMatch
     *   }
     * })
     * 
     */
    delete<T extends SavedMatchDeleteArgs>(args: SelectSubset<T, SavedMatchDeleteArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavedMatch.
     * @param {SavedMatchUpdateArgs} args - Arguments to update one SavedMatch.
     * @example
     * // Update one SavedMatch
     * const savedMatch = await prisma.savedMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedMatchUpdateArgs>(args: SelectSubset<T, SavedMatchUpdateArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavedMatches.
     * @param {SavedMatchDeleteManyArgs} args - Arguments to filter SavedMatches to delete.
     * @example
     * // Delete a few SavedMatches
     * const { count } = await prisma.savedMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedMatchDeleteManyArgs>(args?: SelectSubset<T, SavedMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedMatches
     * const savedMatch = await prisma.savedMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedMatchUpdateManyArgs>(args: SelectSubset<T, SavedMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedMatch.
     * @param {SavedMatchUpsertArgs} args - Arguments to update or create a SavedMatch.
     * @example
     * // Update or create a SavedMatch
     * const savedMatch = await prisma.savedMatch.upsert({
     *   create: {
     *     // ... data to create a SavedMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedMatch we want to update
     *   }
     * })
     */
    upsert<T extends SavedMatchUpsertArgs>(args: SelectSubset<T, SavedMatchUpsertArgs<ExtArgs>>): Prisma__SavedMatchClient<$Result.GetResult<Prisma.$SavedMatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavedMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchCountArgs} args - Arguments to filter SavedMatches to count.
     * @example
     * // Count the number of SavedMatches
     * const count = await prisma.savedMatch.count({
     *   where: {
     *     // ... the filter for the SavedMatches we want to count
     *   }
     * })
    **/
    count<T extends SavedMatchCountArgs>(
      args?: Subset<T, SavedMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedMatchAggregateArgs>(args: Subset<T, SavedMatchAggregateArgs>): Prisma.PrismaPromise<GetSavedMatchAggregateType<T>>

    /**
     * Group by SavedMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMatchGroupByArgs} args - Group by arguments.
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
      T extends SavedMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedMatchGroupByArgs['orderBy'] }
        : { orderBy?: SavedMatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedMatch model
   */
  readonly fields: SavedMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SavedMatch model
   */ 
  interface SavedMatchFieldRefs {
    readonly id: FieldRef<"SavedMatch", 'String'>
    readonly userId: FieldRef<"SavedMatch", 'String'>
    readonly propertyId: FieldRef<"SavedMatch", 'String'>
    readonly matchScore: FieldRef<"SavedMatch", 'Float'>
    readonly scoreBreakdown: FieldRef<"SavedMatch", 'String'>
    readonly isFavorite: FieldRef<"SavedMatch", 'Boolean'>
    readonly isHidden: FieldRef<"SavedMatch", 'Boolean'>
    readonly viewedAt: FieldRef<"SavedMatch", 'DateTime'>
    readonly savedAt: FieldRef<"SavedMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedMatch findUnique
   */
  export type SavedMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * Filter, which SavedMatch to fetch.
     */
    where: SavedMatchWhereUniqueInput
  }

  /**
   * SavedMatch findUniqueOrThrow
   */
  export type SavedMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * Filter, which SavedMatch to fetch.
     */
    where: SavedMatchWhereUniqueInput
  }

  /**
   * SavedMatch findFirst
   */
  export type SavedMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * Filter, which SavedMatch to fetch.
     */
    where?: SavedMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMatches to fetch.
     */
    orderBy?: SavedMatchOrderByWithRelationInput | SavedMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedMatches.
     */
    cursor?: SavedMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedMatches.
     */
    distinct?: SavedMatchScalarFieldEnum | SavedMatchScalarFieldEnum[]
  }

  /**
   * SavedMatch findFirstOrThrow
   */
  export type SavedMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * Filter, which SavedMatch to fetch.
     */
    where?: SavedMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMatches to fetch.
     */
    orderBy?: SavedMatchOrderByWithRelationInput | SavedMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedMatches.
     */
    cursor?: SavedMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedMatches.
     */
    distinct?: SavedMatchScalarFieldEnum | SavedMatchScalarFieldEnum[]
  }

  /**
   * SavedMatch findMany
   */
  export type SavedMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * Filter, which SavedMatches to fetch.
     */
    where?: SavedMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedMatches to fetch.
     */
    orderBy?: SavedMatchOrderByWithRelationInput | SavedMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedMatches.
     */
    cursor?: SavedMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedMatches.
     */
    skip?: number
    distinct?: SavedMatchScalarFieldEnum | SavedMatchScalarFieldEnum[]
  }

  /**
   * SavedMatch create
   */
  export type SavedMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedMatch.
     */
    data: XOR<SavedMatchCreateInput, SavedMatchUncheckedCreateInput>
  }

  /**
   * SavedMatch createMany
   */
  export type SavedMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedMatches.
     */
    data: SavedMatchCreateManyInput | SavedMatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedMatch createManyAndReturn
   */
  export type SavedMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavedMatches.
     */
    data: SavedMatchCreateManyInput | SavedMatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedMatch update
   */
  export type SavedMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedMatch.
     */
    data: XOR<SavedMatchUpdateInput, SavedMatchUncheckedUpdateInput>
    /**
     * Choose, which SavedMatch to update.
     */
    where: SavedMatchWhereUniqueInput
  }

  /**
   * SavedMatch updateMany
   */
  export type SavedMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedMatches.
     */
    data: XOR<SavedMatchUpdateManyMutationInput, SavedMatchUncheckedUpdateManyInput>
    /**
     * Filter which SavedMatches to update
     */
    where?: SavedMatchWhereInput
  }

  /**
   * SavedMatch upsert
   */
  export type SavedMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedMatch to update in case it exists.
     */
    where: SavedMatchWhereUniqueInput
    /**
     * In case the SavedMatch found by the `where` argument doesn't exist, create a new SavedMatch with this data.
     */
    create: XOR<SavedMatchCreateInput, SavedMatchUncheckedCreateInput>
    /**
     * In case the SavedMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedMatchUpdateInput, SavedMatchUncheckedUpdateInput>
  }

  /**
   * SavedMatch delete
   */
  export type SavedMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
    /**
     * Filter which SavedMatch to delete.
     */
    where: SavedMatchWhereUniqueInput
  }

  /**
   * SavedMatch deleteMany
   */
  export type SavedMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedMatches to delete
     */
    where?: SavedMatchWhereInput
  }

  /**
   * SavedMatch without action
   */
  export type SavedMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedMatch
     */
    select?: SavedMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedMatchInclude<ExtArgs> | null
  }


  /**
   * Model ScrapingJob
   */

  export type AggregateScrapingJob = {
    _count: ScrapingJobCountAggregateOutputType | null
    _avg: ScrapingJobAvgAggregateOutputType | null
    _sum: ScrapingJobSumAggregateOutputType | null
    _min: ScrapingJobMinAggregateOutputType | null
    _max: ScrapingJobMaxAggregateOutputType | null
  }

  export type ScrapingJobAvgAggregateOutputType = {
    itemsFound: number | null
    itemsAdded: number | null
    itemsUpdated: number | null
  }

  export type ScrapingJobSumAggregateOutputType = {
    itemsFound: number | null
    itemsAdded: number | null
    itemsUpdated: number | null
  }

  export type ScrapingJobMinAggregateOutputType = {
    id: string | null
    source: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    itemsFound: number | null
    itemsAdded: number | null
    itemsUpdated: number | null
    errors: string | null
    createdAt: Date | null
  }

  export type ScrapingJobMaxAggregateOutputType = {
    id: string | null
    source: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    itemsFound: number | null
    itemsAdded: number | null
    itemsUpdated: number | null
    errors: string | null
    createdAt: Date | null
  }

  export type ScrapingJobCountAggregateOutputType = {
    id: number
    source: number
    status: number
    startedAt: number
    completedAt: number
    itemsFound: number
    itemsAdded: number
    itemsUpdated: number
    errors: number
    createdAt: number
    _all: number
  }


  export type ScrapingJobAvgAggregateInputType = {
    itemsFound?: true
    itemsAdded?: true
    itemsUpdated?: true
  }

  export type ScrapingJobSumAggregateInputType = {
    itemsFound?: true
    itemsAdded?: true
    itemsUpdated?: true
  }

  export type ScrapingJobMinAggregateInputType = {
    id?: true
    source?: true
    status?: true
    startedAt?: true
    completedAt?: true
    itemsFound?: true
    itemsAdded?: true
    itemsUpdated?: true
    errors?: true
    createdAt?: true
  }

  export type ScrapingJobMaxAggregateInputType = {
    id?: true
    source?: true
    status?: true
    startedAt?: true
    completedAt?: true
    itemsFound?: true
    itemsAdded?: true
    itemsUpdated?: true
    errors?: true
    createdAt?: true
  }

  export type ScrapingJobCountAggregateInputType = {
    id?: true
    source?: true
    status?: true
    startedAt?: true
    completedAt?: true
    itemsFound?: true
    itemsAdded?: true
    itemsUpdated?: true
    errors?: true
    createdAt?: true
    _all?: true
  }

  export type ScrapingJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapingJob to aggregate.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapingJobs
    **/
    _count?: true | ScrapingJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapingJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapingJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapingJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapingJobMaxAggregateInputType
  }

  export type GetScrapingJobAggregateType<T extends ScrapingJobAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapingJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapingJob[P]>
      : GetScalarType<T[P], AggregateScrapingJob[P]>
  }




  export type ScrapingJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapingJobWhereInput
    orderBy?: ScrapingJobOrderByWithAggregationInput | ScrapingJobOrderByWithAggregationInput[]
    by: ScrapingJobScalarFieldEnum[] | ScrapingJobScalarFieldEnum
    having?: ScrapingJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapingJobCountAggregateInputType | true
    _avg?: ScrapingJobAvgAggregateInputType
    _sum?: ScrapingJobSumAggregateInputType
    _min?: ScrapingJobMinAggregateInputType
    _max?: ScrapingJobMaxAggregateInputType
  }

  export type ScrapingJobGroupByOutputType = {
    id: string
    source: string
    status: string
    startedAt: Date
    completedAt: Date | null
    itemsFound: number
    itemsAdded: number
    itemsUpdated: number
    errors: string | null
    createdAt: Date
    _count: ScrapingJobCountAggregateOutputType | null
    _avg: ScrapingJobAvgAggregateOutputType | null
    _sum: ScrapingJobSumAggregateOutputType | null
    _min: ScrapingJobMinAggregateOutputType | null
    _max: ScrapingJobMaxAggregateOutputType | null
  }

  type GetScrapingJobGroupByPayload<T extends ScrapingJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapingJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapingJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapingJobGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapingJobGroupByOutputType[P]>
        }
      >
    >


  export type ScrapingJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    itemsFound?: boolean
    itemsAdded?: boolean
    itemsUpdated?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scrapingJob"]>

  export type ScrapingJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    itemsFound?: boolean
    itemsAdded?: boolean
    itemsUpdated?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scrapingJob"]>

  export type ScrapingJobSelectScalar = {
    id?: boolean
    source?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    itemsFound?: boolean
    itemsAdded?: boolean
    itemsUpdated?: boolean
    errors?: boolean
    createdAt?: boolean
  }


  export type $ScrapingJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapingJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      status: string
      startedAt: Date
      completedAt: Date | null
      itemsFound: number
      itemsAdded: number
      itemsUpdated: number
      errors: string | null
      createdAt: Date
    }, ExtArgs["result"]["scrapingJob"]>
    composites: {}
  }

  type ScrapingJobGetPayload<S extends boolean | null | undefined | ScrapingJobDefaultArgs> = $Result.GetResult<Prisma.$ScrapingJobPayload, S>

  type ScrapingJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScrapingJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScrapingJobCountAggregateInputType | true
    }

  export interface ScrapingJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapingJob'], meta: { name: 'ScrapingJob' } }
    /**
     * Find zero or one ScrapingJob that matches the filter.
     * @param {ScrapingJobFindUniqueArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapingJobFindUniqueArgs>(args: SelectSubset<T, ScrapingJobFindUniqueArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScrapingJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScrapingJobFindUniqueOrThrowArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapingJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapingJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScrapingJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobFindFirstArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapingJobFindFirstArgs>(args?: SelectSubset<T, ScrapingJobFindFirstArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScrapingJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobFindFirstOrThrowArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapingJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapingJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScrapingJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapingJobs
     * const scrapingJobs = await prisma.scrapingJob.findMany()
     * 
     * // Get first 10 ScrapingJobs
     * const scrapingJobs = await prisma.scrapingJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapingJobWithIdOnly = await prisma.scrapingJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapingJobFindManyArgs>(args?: SelectSubset<T, ScrapingJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScrapingJob.
     * @param {ScrapingJobCreateArgs} args - Arguments to create a ScrapingJob.
     * @example
     * // Create one ScrapingJob
     * const ScrapingJob = await prisma.scrapingJob.create({
     *   data: {
     *     // ... data to create a ScrapingJob
     *   }
     * })
     * 
     */
    create<T extends ScrapingJobCreateArgs>(args: SelectSubset<T, ScrapingJobCreateArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScrapingJobs.
     * @param {ScrapingJobCreateManyArgs} args - Arguments to create many ScrapingJobs.
     * @example
     * // Create many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapingJobCreateManyArgs>(args?: SelectSubset<T, ScrapingJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapingJobs and returns the data saved in the database.
     * @param {ScrapingJobCreateManyAndReturnArgs} args - Arguments to create many ScrapingJobs.
     * @example
     * // Create many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapingJobs and only return the `id`
     * const scrapingJobWithIdOnly = await prisma.scrapingJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapingJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapingJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ScrapingJob.
     * @param {ScrapingJobDeleteArgs} args - Arguments to delete one ScrapingJob.
     * @example
     * // Delete one ScrapingJob
     * const ScrapingJob = await prisma.scrapingJob.delete({
     *   where: {
     *     // ... filter to delete one ScrapingJob
     *   }
     * })
     * 
     */
    delete<T extends ScrapingJobDeleteArgs>(args: SelectSubset<T, ScrapingJobDeleteArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScrapingJob.
     * @param {ScrapingJobUpdateArgs} args - Arguments to update one ScrapingJob.
     * @example
     * // Update one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapingJobUpdateArgs>(args: SelectSubset<T, ScrapingJobUpdateArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScrapingJobs.
     * @param {ScrapingJobDeleteManyArgs} args - Arguments to filter ScrapingJobs to delete.
     * @example
     * // Delete a few ScrapingJobs
     * const { count } = await prisma.scrapingJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapingJobDeleteManyArgs>(args?: SelectSubset<T, ScrapingJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapingJobUpdateManyArgs>(args: SelectSubset<T, ScrapingJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScrapingJob.
     * @param {ScrapingJobUpsertArgs} args - Arguments to update or create a ScrapingJob.
     * @example
     * // Update or create a ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.upsert({
     *   create: {
     *     // ... data to create a ScrapingJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapingJob we want to update
     *   }
     * })
     */
    upsert<T extends ScrapingJobUpsertArgs>(args: SelectSubset<T, ScrapingJobUpsertArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ScrapingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobCountArgs} args - Arguments to filter ScrapingJobs to count.
     * @example
     * // Count the number of ScrapingJobs
     * const count = await prisma.scrapingJob.count({
     *   where: {
     *     // ... the filter for the ScrapingJobs we want to count
     *   }
     * })
    **/
    count<T extends ScrapingJobCountArgs>(
      args?: Subset<T, ScrapingJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapingJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScrapingJobAggregateArgs>(args: Subset<T, ScrapingJobAggregateArgs>): Prisma.PrismaPromise<GetScrapingJobAggregateType<T>>

    /**
     * Group by ScrapingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobGroupByArgs} args - Group by arguments.
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
      T extends ScrapingJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapingJobGroupByArgs['orderBy'] }
        : { orderBy?: ScrapingJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScrapingJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapingJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapingJob model
   */
  readonly fields: ScrapingJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapingJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapingJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ScrapingJob model
   */ 
  interface ScrapingJobFieldRefs {
    readonly id: FieldRef<"ScrapingJob", 'String'>
    readonly source: FieldRef<"ScrapingJob", 'String'>
    readonly status: FieldRef<"ScrapingJob", 'String'>
    readonly startedAt: FieldRef<"ScrapingJob", 'DateTime'>
    readonly completedAt: FieldRef<"ScrapingJob", 'DateTime'>
    readonly itemsFound: FieldRef<"ScrapingJob", 'Int'>
    readonly itemsAdded: FieldRef<"ScrapingJob", 'Int'>
    readonly itemsUpdated: FieldRef<"ScrapingJob", 'Int'>
    readonly errors: FieldRef<"ScrapingJob", 'String'>
    readonly createdAt: FieldRef<"ScrapingJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapingJob findUnique
   */
  export type ScrapingJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob findUniqueOrThrow
   */
  export type ScrapingJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob findFirst
   */
  export type ScrapingJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapingJobs.
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapingJobs.
     */
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * ScrapingJob findFirstOrThrow
   */
  export type ScrapingJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapingJobs.
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapingJobs.
     */
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * ScrapingJob findMany
   */
  export type ScrapingJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingJobs to fetch.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapingJobs.
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * ScrapingJob create
   */
  export type ScrapingJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * The data needed to create a ScrapingJob.
     */
    data: XOR<ScrapingJobCreateInput, ScrapingJobUncheckedCreateInput>
  }

  /**
   * ScrapingJob createMany
   */
  export type ScrapingJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapingJobs.
     */
    data: ScrapingJobCreateManyInput | ScrapingJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapingJob createManyAndReturn
   */
  export type ScrapingJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScrapingJobs.
     */
    data: ScrapingJobCreateManyInput | ScrapingJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapingJob update
   */
  export type ScrapingJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * The data needed to update a ScrapingJob.
     */
    data: XOR<ScrapingJobUpdateInput, ScrapingJobUncheckedUpdateInput>
    /**
     * Choose, which ScrapingJob to update.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob updateMany
   */
  export type ScrapingJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapingJobs.
     */
    data: XOR<ScrapingJobUpdateManyMutationInput, ScrapingJobUncheckedUpdateManyInput>
    /**
     * Filter which ScrapingJobs to update
     */
    where?: ScrapingJobWhereInput
  }

  /**
   * ScrapingJob upsert
   */
  export type ScrapingJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * The filter to search for the ScrapingJob to update in case it exists.
     */
    where: ScrapingJobWhereUniqueInput
    /**
     * In case the ScrapingJob found by the `where` argument doesn't exist, create a new ScrapingJob with this data.
     */
    create: XOR<ScrapingJobCreateInput, ScrapingJobUncheckedCreateInput>
    /**
     * In case the ScrapingJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapingJobUpdateInput, ScrapingJobUncheckedUpdateInput>
  }

  /**
   * ScrapingJob delete
   */
  export type ScrapingJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Filter which ScrapingJob to delete.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob deleteMany
   */
  export type ScrapingJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapingJobs to delete
     */
    where?: ScrapingJobWhereInput
  }

  /**
   * ScrapingJob without action
   */
  export type ScrapingJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    adultsCount: 'adultsCount',
    childrenCount: 'childrenCount',
    minBedrooms: 'minBedrooms',
    minBathrooms: 'minBathrooms',
    hasPets: 'hasPets',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    transactionType: 'transactionType',
    targetCityId: 'targetCityId',
    quietnessWeight: 'quietnessWeight',
    schoolProximityWeight: 'schoolProximityWeight',
    hospitalProximityWeight: 'hospitalProximityWeight',
    commerceProximityWeight: 'commerceProximityWeight',
    safetyWeight: 'safetyWeight',
    publicTransportWeight: 'publicTransportWeight',
    needsParking: 'needsParking',
    needsGarden: 'needsGarden',
    needsPool: 'needsPool',
    needsSecurity: 'needsSecurity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const PreferredNeighborhoodScalarFieldEnum: {
    id: 'id',
    preferencesId: 'preferencesId',
    neighborhoodId: 'neighborhoodId'
  };

  export type PreferredNeighborhoodScalarFieldEnum = (typeof PreferredNeighborhoodScalarFieldEnum)[keyof typeof PreferredNeighborhoodScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    state: 'state',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const NeighborhoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cityId: 'cityId',
    quietnessScore: 'quietnessScore',
    safetyScore: 'safetyScore',
    createdAt: 'createdAt'
  };

  export type NeighborhoodScalarFieldEnum = (typeof NeighborhoodScalarFieldEnum)[keyof typeof NeighborhoodScalarFieldEnum]


  export const PointOfInterestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    latitude: 'latitude',
    longitude: 'longitude',
    cityId: 'cityId',
    createdAt: 'createdAt'
  };

  export type PointOfInterestScalarFieldEnum = (typeof PointOfInterestScalarFieldEnum)[keyof typeof PointOfInterestScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    sourceUrl: 'sourceUrl',
    sourceName: 'sourceName',
    title: 'title',
    description: 'description',
    price: 'price',
    propertyType: 'propertyType',
    transactionType: 'transactionType',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    area: 'area',
    address: 'address',
    cityId: 'cityId',
    neighborhoodId: 'neighborhoodId',
    latitude: 'latitude',
    longitude: 'longitude',
    hasParking: 'hasParking',
    hasGarden: 'hasGarden',
    hasPool: 'hasPool',
    hasSecurity: 'hasSecurity',
    petFriendly: 'petFriendly',
    sourceId: 'sourceId',
    lastScrapedAt: 'lastScrapedAt',
    scrapingSource: 'scrapingSource',
    isActive: 'isActive',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const SavedMatchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    matchScore: 'matchScore',
    scoreBreakdown: 'scoreBreakdown',
    isFavorite: 'isFavorite',
    isHidden: 'isHidden',
    viewedAt: 'viewedAt',
    savedAt: 'savedAt'
  };

  export type SavedMatchScalarFieldEnum = (typeof SavedMatchScalarFieldEnum)[keyof typeof SavedMatchScalarFieldEnum]


  export const ScrapingJobScalarFieldEnum: {
    id: 'id',
    source: 'source',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    itemsFound: 'itemsFound',
    itemsAdded: 'itemsAdded',
    itemsUpdated: 'itemsUpdated',
    errors: 'errors',
    createdAt: 'createdAt'
  };

  export type ScrapingJobScalarFieldEnum = (typeof ScrapingJobScalarFieldEnum)[keyof typeof ScrapingJobScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
    savedMatches?: SavedMatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    savedMatches?: SavedMatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
    savedMatches?: SavedMatchListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    adultsCount?: IntFilter<"UserPreferences"> | number
    childrenCount?: IntFilter<"UserPreferences"> | number
    minBedrooms?: IntFilter<"UserPreferences"> | number
    minBathrooms?: IntFilter<"UserPreferences"> | number
    hasPets?: BoolFilter<"UserPreferences"> | boolean
    minPrice?: FloatNullableFilter<"UserPreferences"> | number | null
    maxPrice?: FloatNullableFilter<"UserPreferences"> | number | null
    transactionType?: StringFilter<"UserPreferences"> | string
    targetCityId?: StringNullableFilter<"UserPreferences"> | string | null
    quietnessWeight?: IntFilter<"UserPreferences"> | number
    schoolProximityWeight?: IntFilter<"UserPreferences"> | number
    hospitalProximityWeight?: IntFilter<"UserPreferences"> | number
    commerceProximityWeight?: IntFilter<"UserPreferences"> | number
    safetyWeight?: IntFilter<"UserPreferences"> | number
    publicTransportWeight?: IntFilter<"UserPreferences"> | number
    needsParking?: BoolFilter<"UserPreferences"> | boolean
    needsGarden?: BoolFilter<"UserPreferences"> | boolean
    needsPool?: BoolFilter<"UserPreferences"> | boolean
    needsSecurity?: BoolFilter<"UserPreferences"> | boolean
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    targetCity?: XOR<CityNullableRelationFilter, CityWhereInput> | null
    preferredNeighborhoods?: PreferredNeighborhoodListRelationFilter
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    hasPets?: SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    transactionType?: SortOrder
    targetCityId?: SortOrderInput | SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
    needsParking?: SortOrder
    needsGarden?: SortOrder
    needsPool?: SortOrder
    needsSecurity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    targetCity?: CityOrderByWithRelationInput
    preferredNeighborhoods?: PreferredNeighborhoodOrderByRelationAggregateInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    adultsCount?: IntFilter<"UserPreferences"> | number
    childrenCount?: IntFilter<"UserPreferences"> | number
    minBedrooms?: IntFilter<"UserPreferences"> | number
    minBathrooms?: IntFilter<"UserPreferences"> | number
    hasPets?: BoolFilter<"UserPreferences"> | boolean
    minPrice?: FloatNullableFilter<"UserPreferences"> | number | null
    maxPrice?: FloatNullableFilter<"UserPreferences"> | number | null
    transactionType?: StringFilter<"UserPreferences"> | string
    targetCityId?: StringNullableFilter<"UserPreferences"> | string | null
    quietnessWeight?: IntFilter<"UserPreferences"> | number
    schoolProximityWeight?: IntFilter<"UserPreferences"> | number
    hospitalProximityWeight?: IntFilter<"UserPreferences"> | number
    commerceProximityWeight?: IntFilter<"UserPreferences"> | number
    safetyWeight?: IntFilter<"UserPreferences"> | number
    publicTransportWeight?: IntFilter<"UserPreferences"> | number
    needsParking?: BoolFilter<"UserPreferences"> | boolean
    needsGarden?: BoolFilter<"UserPreferences"> | boolean
    needsPool?: BoolFilter<"UserPreferences"> | boolean
    needsSecurity?: BoolFilter<"UserPreferences"> | boolean
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    targetCity?: XOR<CityNullableRelationFilter, CityWhereInput> | null
    preferredNeighborhoods?: PreferredNeighborhoodListRelationFilter
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    hasPets?: SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    transactionType?: SortOrder
    targetCityId?: SortOrderInput | SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
    needsParking?: SortOrder
    needsGarden?: SortOrder
    needsPool?: SortOrder
    needsSecurity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    adultsCount?: IntWithAggregatesFilter<"UserPreferences"> | number
    childrenCount?: IntWithAggregatesFilter<"UserPreferences"> | number
    minBedrooms?: IntWithAggregatesFilter<"UserPreferences"> | number
    minBathrooms?: IntWithAggregatesFilter<"UserPreferences"> | number
    hasPets?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    minPrice?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    maxPrice?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    transactionType?: StringWithAggregatesFilter<"UserPreferences"> | string
    targetCityId?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    quietnessWeight?: IntWithAggregatesFilter<"UserPreferences"> | number
    schoolProximityWeight?: IntWithAggregatesFilter<"UserPreferences"> | number
    hospitalProximityWeight?: IntWithAggregatesFilter<"UserPreferences"> | number
    commerceProximityWeight?: IntWithAggregatesFilter<"UserPreferences"> | number
    safetyWeight?: IntWithAggregatesFilter<"UserPreferences"> | number
    publicTransportWeight?: IntWithAggregatesFilter<"UserPreferences"> | number
    needsParking?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    needsGarden?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    needsPool?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    needsSecurity?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type PreferredNeighborhoodWhereInput = {
    AND?: PreferredNeighborhoodWhereInput | PreferredNeighborhoodWhereInput[]
    OR?: PreferredNeighborhoodWhereInput[]
    NOT?: PreferredNeighborhoodWhereInput | PreferredNeighborhoodWhereInput[]
    id?: StringFilter<"PreferredNeighborhood"> | string
    preferencesId?: StringFilter<"PreferredNeighborhood"> | string
    neighborhoodId?: StringFilter<"PreferredNeighborhood"> | string
    preferences?: XOR<UserPreferencesRelationFilter, UserPreferencesWhereInput>
    neighborhood?: XOR<NeighborhoodRelationFilter, NeighborhoodWhereInput>
  }

  export type PreferredNeighborhoodOrderByWithRelationInput = {
    id?: SortOrder
    preferencesId?: SortOrder
    neighborhoodId?: SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    neighborhood?: NeighborhoodOrderByWithRelationInput
  }

  export type PreferredNeighborhoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    preferencesId_neighborhoodId?: PreferredNeighborhoodPreferencesIdNeighborhoodIdCompoundUniqueInput
    AND?: PreferredNeighborhoodWhereInput | PreferredNeighborhoodWhereInput[]
    OR?: PreferredNeighborhoodWhereInput[]
    NOT?: PreferredNeighborhoodWhereInput | PreferredNeighborhoodWhereInput[]
    preferencesId?: StringFilter<"PreferredNeighborhood"> | string
    neighborhoodId?: StringFilter<"PreferredNeighborhood"> | string
    preferences?: XOR<UserPreferencesRelationFilter, UserPreferencesWhereInput>
    neighborhood?: XOR<NeighborhoodRelationFilter, NeighborhoodWhereInput>
  }, "id" | "preferencesId_neighborhoodId">

  export type PreferredNeighborhoodOrderByWithAggregationInput = {
    id?: SortOrder
    preferencesId?: SortOrder
    neighborhoodId?: SortOrder
    _count?: PreferredNeighborhoodCountOrderByAggregateInput
    _max?: PreferredNeighborhoodMaxOrderByAggregateInput
    _min?: PreferredNeighborhoodMinOrderByAggregateInput
  }

  export type PreferredNeighborhoodScalarWhereWithAggregatesInput = {
    AND?: PreferredNeighborhoodScalarWhereWithAggregatesInput | PreferredNeighborhoodScalarWhereWithAggregatesInput[]
    OR?: PreferredNeighborhoodScalarWhereWithAggregatesInput[]
    NOT?: PreferredNeighborhoodScalarWhereWithAggregatesInput | PreferredNeighborhoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PreferredNeighborhood"> | string
    preferencesId?: StringWithAggregatesFilter<"PreferredNeighborhood"> | string
    neighborhoodId?: StringWithAggregatesFilter<"PreferredNeighborhood"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    state?: StringFilter<"City"> | string
    latitude?: FloatFilter<"City"> | number
    longitude?: FloatFilter<"City"> | number
    createdAt?: DateTimeFilter<"City"> | Date | string
    neighborhoods?: NeighborhoodListRelationFilter
    pointsOfInterest?: PointOfInterestListRelationFilter
    properties?: PropertyListRelationFilter
    userPreferences?: UserPreferencesListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    neighborhoods?: NeighborhoodOrderByRelationAggregateInput
    pointsOfInterest?: PointOfInterestOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
    userPreferences?: UserPreferencesOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_state?: CityNameStateCompoundUniqueInput
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    state?: StringFilter<"City"> | string
    latitude?: FloatFilter<"City"> | number
    longitude?: FloatFilter<"City"> | number
    createdAt?: DateTimeFilter<"City"> | Date | string
    neighborhoods?: NeighborhoodListRelationFilter
    pointsOfInterest?: PointOfInterestListRelationFilter
    properties?: PropertyListRelationFilter
    userPreferences?: UserPreferencesListRelationFilter
  }, "id" | "name_state">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    state?: StringWithAggregatesFilter<"City"> | string
    latitude?: FloatWithAggregatesFilter<"City"> | number
    longitude?: FloatWithAggregatesFilter<"City"> | number
    createdAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type NeighborhoodWhereInput = {
    AND?: NeighborhoodWhereInput | NeighborhoodWhereInput[]
    OR?: NeighborhoodWhereInput[]
    NOT?: NeighborhoodWhereInput | NeighborhoodWhereInput[]
    id?: StringFilter<"Neighborhood"> | string
    name?: StringFilter<"Neighborhood"> | string
    cityId?: StringFilter<"Neighborhood"> | string
    quietnessScore?: IntFilter<"Neighborhood"> | number
    safetyScore?: IntFilter<"Neighborhood"> | number
    createdAt?: DateTimeFilter<"Neighborhood"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    properties?: PropertyListRelationFilter
    preferredNeighborhoods?: PreferredNeighborhoodListRelationFilter
  }

  export type NeighborhoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
    createdAt?: SortOrder
    city?: CityOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
    preferredNeighborhoods?: PreferredNeighborhoodOrderByRelationAggregateInput
  }

  export type NeighborhoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_cityId?: NeighborhoodNameCityIdCompoundUniqueInput
    AND?: NeighborhoodWhereInput | NeighborhoodWhereInput[]
    OR?: NeighborhoodWhereInput[]
    NOT?: NeighborhoodWhereInput | NeighborhoodWhereInput[]
    name?: StringFilter<"Neighborhood"> | string
    cityId?: StringFilter<"Neighborhood"> | string
    quietnessScore?: IntFilter<"Neighborhood"> | number
    safetyScore?: IntFilter<"Neighborhood"> | number
    createdAt?: DateTimeFilter<"Neighborhood"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    properties?: PropertyListRelationFilter
    preferredNeighborhoods?: PreferredNeighborhoodListRelationFilter
  }, "id" | "name_cityId">

  export type NeighborhoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
    createdAt?: SortOrder
    _count?: NeighborhoodCountOrderByAggregateInput
    _avg?: NeighborhoodAvgOrderByAggregateInput
    _max?: NeighborhoodMaxOrderByAggregateInput
    _min?: NeighborhoodMinOrderByAggregateInput
    _sum?: NeighborhoodSumOrderByAggregateInput
  }

  export type NeighborhoodScalarWhereWithAggregatesInput = {
    AND?: NeighborhoodScalarWhereWithAggregatesInput | NeighborhoodScalarWhereWithAggregatesInput[]
    OR?: NeighborhoodScalarWhereWithAggregatesInput[]
    NOT?: NeighborhoodScalarWhereWithAggregatesInput | NeighborhoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Neighborhood"> | string
    name?: StringWithAggregatesFilter<"Neighborhood"> | string
    cityId?: StringWithAggregatesFilter<"Neighborhood"> | string
    quietnessScore?: IntWithAggregatesFilter<"Neighborhood"> | number
    safetyScore?: IntWithAggregatesFilter<"Neighborhood"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Neighborhood"> | Date | string
  }

  export type PointOfInterestWhereInput = {
    AND?: PointOfInterestWhereInput | PointOfInterestWhereInput[]
    OR?: PointOfInterestWhereInput[]
    NOT?: PointOfInterestWhereInput | PointOfInterestWhereInput[]
    id?: StringFilter<"PointOfInterest"> | string
    name?: StringFilter<"PointOfInterest"> | string
    type?: StringFilter<"PointOfInterest"> | string
    latitude?: FloatFilter<"PointOfInterest"> | number
    longitude?: FloatFilter<"PointOfInterest"> | number
    cityId?: StringFilter<"PointOfInterest"> | string
    createdAt?: DateTimeFilter<"PointOfInterest"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
  }

  export type PointOfInterestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    city?: CityOrderByWithRelationInput
  }

  export type PointOfInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointOfInterestWhereInput | PointOfInterestWhereInput[]
    OR?: PointOfInterestWhereInput[]
    NOT?: PointOfInterestWhereInput | PointOfInterestWhereInput[]
    name?: StringFilter<"PointOfInterest"> | string
    type?: StringFilter<"PointOfInterest"> | string
    latitude?: FloatFilter<"PointOfInterest"> | number
    longitude?: FloatFilter<"PointOfInterest"> | number
    cityId?: StringFilter<"PointOfInterest"> | string
    createdAt?: DateTimeFilter<"PointOfInterest"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
  }, "id">

  export type PointOfInterestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    _count?: PointOfInterestCountOrderByAggregateInput
    _avg?: PointOfInterestAvgOrderByAggregateInput
    _max?: PointOfInterestMaxOrderByAggregateInput
    _min?: PointOfInterestMinOrderByAggregateInput
    _sum?: PointOfInterestSumOrderByAggregateInput
  }

  export type PointOfInterestScalarWhereWithAggregatesInput = {
    AND?: PointOfInterestScalarWhereWithAggregatesInput | PointOfInterestScalarWhereWithAggregatesInput[]
    OR?: PointOfInterestScalarWhereWithAggregatesInput[]
    NOT?: PointOfInterestScalarWhereWithAggregatesInput | PointOfInterestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointOfInterest"> | string
    name?: StringWithAggregatesFilter<"PointOfInterest"> | string
    type?: StringWithAggregatesFilter<"PointOfInterest"> | string
    latitude?: FloatWithAggregatesFilter<"PointOfInterest"> | number
    longitude?: FloatWithAggregatesFilter<"PointOfInterest"> | number
    cityId?: StringWithAggregatesFilter<"PointOfInterest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PointOfInterest"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    sourceUrl?: StringFilter<"Property"> | string
    sourceName?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    price?: FloatFilter<"Property"> | number
    propertyType?: StringFilter<"Property"> | string
    transactionType?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    area?: FloatNullableFilter<"Property"> | number | null
    address?: StringNullableFilter<"Property"> | string | null
    cityId?: StringFilter<"Property"> | string
    neighborhoodId?: StringNullableFilter<"Property"> | string | null
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    hasParking?: BoolFilter<"Property"> | boolean
    hasGarden?: BoolFilter<"Property"> | boolean
    hasPool?: BoolFilter<"Property"> | boolean
    hasSecurity?: BoolFilter<"Property"> | boolean
    petFriendly?: BoolFilter<"Property"> | boolean
    sourceId?: StringNullableFilter<"Property"> | string | null
    lastScrapedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    scrapingSource?: StringNullableFilter<"Property"> | string | null
    isActive?: BoolFilter<"Property"> | boolean
    lastSeenAt?: DateTimeFilter<"Property"> | Date | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    neighborhood?: XOR<NeighborhoodNullableRelationFilter, NeighborhoodWhereInput> | null
    images?: PropertyImageListRelationFilter
    savedMatches?: SavedMatchListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    sourceName?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    transactionType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cityId?: SortOrder
    neighborhoodId?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    hasParking?: SortOrder
    hasGarden?: SortOrder
    hasPool?: SortOrder
    hasSecurity?: SortOrder
    petFriendly?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    lastScrapedAt?: SortOrderInput | SortOrder
    scrapingSource?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: CityOrderByWithRelationInput
    neighborhood?: NeighborhoodOrderByWithRelationInput
    images?: PropertyImageOrderByRelationAggregateInput
    savedMatches?: SavedMatchOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceUrl?: string
    sourceId_scrapingSource?: PropertySourceIdScrapingSourceCompoundUniqueInput
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    sourceName?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    price?: FloatFilter<"Property"> | number
    propertyType?: StringFilter<"Property"> | string
    transactionType?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    area?: FloatNullableFilter<"Property"> | number | null
    address?: StringNullableFilter<"Property"> | string | null
    cityId?: StringFilter<"Property"> | string
    neighborhoodId?: StringNullableFilter<"Property"> | string | null
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    hasParking?: BoolFilter<"Property"> | boolean
    hasGarden?: BoolFilter<"Property"> | boolean
    hasPool?: BoolFilter<"Property"> | boolean
    hasSecurity?: BoolFilter<"Property"> | boolean
    petFriendly?: BoolFilter<"Property"> | boolean
    sourceId?: StringNullableFilter<"Property"> | string | null
    lastScrapedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    scrapingSource?: StringNullableFilter<"Property"> | string | null
    isActive?: BoolFilter<"Property"> | boolean
    lastSeenAt?: DateTimeFilter<"Property"> | Date | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    neighborhood?: XOR<NeighborhoodNullableRelationFilter, NeighborhoodWhereInput> | null
    images?: PropertyImageListRelationFilter
    savedMatches?: SavedMatchListRelationFilter
  }, "id" | "sourceUrl" | "sourceId_scrapingSource">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    sourceName?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    transactionType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cityId?: SortOrder
    neighborhoodId?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    hasParking?: SortOrder
    hasGarden?: SortOrder
    hasPool?: SortOrder
    hasSecurity?: SortOrder
    petFriendly?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    lastScrapedAt?: SortOrderInput | SortOrder
    scrapingSource?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    sourceUrl?: StringWithAggregatesFilter<"Property"> | string
    sourceName?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    price?: FloatWithAggregatesFilter<"Property"> | number
    propertyType?: StringWithAggregatesFilter<"Property"> | string
    transactionType?: StringWithAggregatesFilter<"Property"> | string
    bedrooms?: IntWithAggregatesFilter<"Property"> | number
    bathrooms?: IntWithAggregatesFilter<"Property"> | number
    area?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    address?: StringNullableWithAggregatesFilter<"Property"> | string | null
    cityId?: StringWithAggregatesFilter<"Property"> | string
    neighborhoodId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    hasParking?: BoolWithAggregatesFilter<"Property"> | boolean
    hasGarden?: BoolWithAggregatesFilter<"Property"> | boolean
    hasPool?: BoolWithAggregatesFilter<"Property"> | boolean
    hasSecurity?: BoolWithAggregatesFilter<"Property"> | boolean
    petFriendly?: BoolWithAggregatesFilter<"Property"> | boolean
    sourceId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    lastScrapedAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    scrapingSource?: StringNullableWithAggregatesFilter<"Property"> | string | null
    isActive?: BoolWithAggregatesFilter<"Property"> | boolean
    lastSeenAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: StringFilter<"PropertyImage"> | string
    propertyId?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyImage"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyImage"> | string
    url?: StringWithAggregatesFilter<"PropertyImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type SavedMatchWhereInput = {
    AND?: SavedMatchWhereInput | SavedMatchWhereInput[]
    OR?: SavedMatchWhereInput[]
    NOT?: SavedMatchWhereInput | SavedMatchWhereInput[]
    id?: StringFilter<"SavedMatch"> | string
    userId?: StringFilter<"SavedMatch"> | string
    propertyId?: StringFilter<"SavedMatch"> | string
    matchScore?: FloatFilter<"SavedMatch"> | number
    scoreBreakdown?: StringFilter<"SavedMatch"> | string
    isFavorite?: BoolFilter<"SavedMatch"> | boolean
    isHidden?: BoolFilter<"SavedMatch"> | boolean
    viewedAt?: DateTimeNullableFilter<"SavedMatch"> | Date | string | null
    savedAt?: DateTimeFilter<"SavedMatch"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }

  export type SavedMatchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    matchScore?: SortOrder
    scoreBreakdown?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    viewedAt?: SortOrderInput | SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type SavedMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_propertyId?: SavedMatchUserIdPropertyIdCompoundUniqueInput
    AND?: SavedMatchWhereInput | SavedMatchWhereInput[]
    OR?: SavedMatchWhereInput[]
    NOT?: SavedMatchWhereInput | SavedMatchWhereInput[]
    userId?: StringFilter<"SavedMatch"> | string
    propertyId?: StringFilter<"SavedMatch"> | string
    matchScore?: FloatFilter<"SavedMatch"> | number
    scoreBreakdown?: StringFilter<"SavedMatch"> | string
    isFavorite?: BoolFilter<"SavedMatch"> | boolean
    isHidden?: BoolFilter<"SavedMatch"> | boolean
    viewedAt?: DateTimeNullableFilter<"SavedMatch"> | Date | string | null
    savedAt?: DateTimeFilter<"SavedMatch"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }, "id" | "userId_propertyId">

  export type SavedMatchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    matchScore?: SortOrder
    scoreBreakdown?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    viewedAt?: SortOrderInput | SortOrder
    savedAt?: SortOrder
    _count?: SavedMatchCountOrderByAggregateInput
    _avg?: SavedMatchAvgOrderByAggregateInput
    _max?: SavedMatchMaxOrderByAggregateInput
    _min?: SavedMatchMinOrderByAggregateInput
    _sum?: SavedMatchSumOrderByAggregateInput
  }

  export type SavedMatchScalarWhereWithAggregatesInput = {
    AND?: SavedMatchScalarWhereWithAggregatesInput | SavedMatchScalarWhereWithAggregatesInput[]
    OR?: SavedMatchScalarWhereWithAggregatesInput[]
    NOT?: SavedMatchScalarWhereWithAggregatesInput | SavedMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedMatch"> | string
    userId?: StringWithAggregatesFilter<"SavedMatch"> | string
    propertyId?: StringWithAggregatesFilter<"SavedMatch"> | string
    matchScore?: FloatWithAggregatesFilter<"SavedMatch"> | number
    scoreBreakdown?: StringWithAggregatesFilter<"SavedMatch"> | string
    isFavorite?: BoolWithAggregatesFilter<"SavedMatch"> | boolean
    isHidden?: BoolWithAggregatesFilter<"SavedMatch"> | boolean
    viewedAt?: DateTimeNullableWithAggregatesFilter<"SavedMatch"> | Date | string | null
    savedAt?: DateTimeWithAggregatesFilter<"SavedMatch"> | Date | string
  }

  export type ScrapingJobWhereInput = {
    AND?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    OR?: ScrapingJobWhereInput[]
    NOT?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    id?: StringFilter<"ScrapingJob"> | string
    source?: StringFilter<"ScrapingJob"> | string
    status?: StringFilter<"ScrapingJob"> | string
    startedAt?: DateTimeFilter<"ScrapingJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    itemsFound?: IntFilter<"ScrapingJob"> | number
    itemsAdded?: IntFilter<"ScrapingJob"> | number
    itemsUpdated?: IntFilter<"ScrapingJob"> | number
    errors?: StringNullableFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapingJob"> | Date | string
  }

  export type ScrapingJobOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
    errors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    OR?: ScrapingJobWhereInput[]
    NOT?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    source?: StringFilter<"ScrapingJob"> | string
    status?: StringFilter<"ScrapingJob"> | string
    startedAt?: DateTimeFilter<"ScrapingJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    itemsFound?: IntFilter<"ScrapingJob"> | number
    itemsAdded?: IntFilter<"ScrapingJob"> | number
    itemsUpdated?: IntFilter<"ScrapingJob"> | number
    errors?: StringNullableFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapingJob"> | Date | string
  }, "id">

  export type ScrapingJobOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
    errors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScrapingJobCountOrderByAggregateInput
    _avg?: ScrapingJobAvgOrderByAggregateInput
    _max?: ScrapingJobMaxOrderByAggregateInput
    _min?: ScrapingJobMinOrderByAggregateInput
    _sum?: ScrapingJobSumOrderByAggregateInput
  }

  export type ScrapingJobScalarWhereWithAggregatesInput = {
    AND?: ScrapingJobScalarWhereWithAggregatesInput | ScrapingJobScalarWhereWithAggregatesInput[]
    OR?: ScrapingJobScalarWhereWithAggregatesInput[]
    NOT?: ScrapingJobScalarWhereWithAggregatesInput | ScrapingJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapingJob"> | string
    source?: StringWithAggregatesFilter<"ScrapingJob"> | string
    status?: StringWithAggregatesFilter<"ScrapingJob"> | string
    startedAt?: DateTimeWithAggregatesFilter<"ScrapingJob"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScrapingJob"> | Date | string | null
    itemsFound?: IntWithAggregatesFilter<"ScrapingJob"> | number
    itemsAdded?: IntWithAggregatesFilter<"ScrapingJob"> | number
    itemsUpdated?: IntWithAggregatesFilter<"ScrapingJob"> | number
    errors?: StringNullableWithAggregatesFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScrapingJob"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    savedMatches?: SavedMatchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    savedMatches?: SavedMatchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    savedMatches?: SavedMatchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    savedMatches?: SavedMatchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
    targetCity?: CityCreateNestedOneWithoutUserPreferencesInput
    preferredNeighborhoods?: PreferredNeighborhoodCreateNestedManyWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    targetCityId?: string | null
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
    targetCity?: CityUpdateOneWithoutUserPreferencesNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUpdateManyWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    targetCityId?: NullableStringFieldUpdateOperationsInput | string | null
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    targetCityId?: string | null
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    targetCityId?: NullableStringFieldUpdateOperationsInput | string | null
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferredNeighborhoodCreateInput = {
    id?: string
    preferences: UserPreferencesCreateNestedOneWithoutPreferredNeighborhoodsInput
    neighborhood: NeighborhoodCreateNestedOneWithoutPreferredNeighborhoodsInput
  }

  export type PreferredNeighborhoodUncheckedCreateInput = {
    id?: string
    preferencesId: string
    neighborhoodId: string
  }

  export type PreferredNeighborhoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferences?: UserPreferencesUpdateOneRequiredWithoutPreferredNeighborhoodsNestedInput
    neighborhood?: NeighborhoodUpdateOneRequiredWithoutPreferredNeighborhoodsNestedInput
  }

  export type PreferredNeighborhoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: StringFieldUpdateOperationsInput | string
  }

  export type PreferredNeighborhoodCreateManyInput = {
    id?: string
    preferencesId: string
    neighborhoodId: string
  }

  export type PreferredNeighborhoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PreferredNeighborhoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodCreateNestedManyWithoutCityInput
    pointsOfInterest?: PointOfInterestCreateNestedManyWithoutCityInput
    properties?: PropertyCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutTargetCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodUncheckedCreateNestedManyWithoutCityInput
    pointsOfInterest?: PointOfInterestUncheckedCreateNestedManyWithoutCityInput
    properties?: PropertyUncheckedCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutTargetCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUpdateManyWithoutCityNestedInput
    pointsOfInterest?: PointOfInterestUpdateManyWithoutCityNestedInput
    properties?: PropertyUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutTargetCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUncheckedUpdateManyWithoutCityNestedInput
    pointsOfInterest?: PointOfInterestUncheckedUpdateManyWithoutCityNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutTargetCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeighborhoodCreateInput = {
    id?: string
    name: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    city: CityCreateNestedOneWithoutNeighborhoodsInput
    properties?: PropertyCreateNestedManyWithoutNeighborhoodInput
    preferredNeighborhoods?: PreferredNeighborhoodCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodUncheckedCreateInput = {
    id?: string
    name: string
    cityId: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutNeighborhoodInput
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutNeighborhoodsNestedInput
    properties?: PropertyUpdateManyWithoutNeighborhoodNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutNeighborhoodNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodCreateManyInput = {
    id?: string
    name: string
    cityId: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
  }

  export type NeighborhoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeighborhoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointOfInterestCreateInput = {
    id?: string
    name: string
    type: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    city: CityCreateNestedOneWithoutPointsOfInterestInput
  }

  export type PointOfInterestUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    latitude: number
    longitude: number
    cityId: string
    createdAt?: Date | string
  }

  export type PointOfInterestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutPointsOfInterestNestedInput
  }

  export type PointOfInterestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointOfInterestCreateManyInput = {
    id?: string
    name: string
    type: string
    latitude: number
    longitude: number
    cityId: string
    createdAt?: Date | string
  }

  export type PointOfInterestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointOfInterestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutPropertiesInput
    neighborhood?: NeighborhoodCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    savedMatches?: SavedMatchCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    cityId: string
    neighborhoodId?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    savedMatches?: SavedMatchUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutPropertiesNestedInput
    neighborhood?: NeighborhoodUpdateOneWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    savedMatches?: SavedMatchUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    savedMatches?: SavedMatchUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    cityId: string
    neighborhoodId?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    id?: string
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: string
    propertyId: string
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: string
    propertyId: string
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMatchCreateInput = {
    id?: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedMatchesInput
    property: PropertyCreateNestedOneWithoutSavedMatchesInput
  }

  export type SavedMatchUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
  }

  export type SavedMatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedMatchesNestedInput
    property?: PropertyUpdateOneRequiredWithoutSavedMatchesNestedInput
  }

  export type SavedMatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMatchCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
  }

  export type SavedMatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobCreateInput = {
    id?: string
    source: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    itemsFound?: number
    itemsAdded?: number
    itemsUpdated?: number
    errors?: string | null
    createdAt?: Date | string
  }

  export type ScrapingJobUncheckedCreateInput = {
    id?: string
    source: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    itemsFound?: number
    itemsAdded?: number
    itemsUpdated?: number
    errors?: string | null
    createdAt?: Date | string
  }

  export type ScrapingJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsAdded?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsAdded?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobCreateManyInput = {
    id?: string
    source: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    itemsFound?: number
    itemsAdded?: number
    itemsUpdated?: number
    errors?: string | null
    createdAt?: Date | string
  }

  export type ScrapingJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsAdded?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsAdded?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserPreferencesNullableRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type SavedMatchListRelationFilter = {
    every?: SavedMatchWhereInput
    some?: SavedMatchWhereInput
    none?: SavedMatchWhereInput
  }

  export type SavedMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CityNullableRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type PreferredNeighborhoodListRelationFilter = {
    every?: PreferredNeighborhoodWhereInput
    some?: PreferredNeighborhoodWhereInput
    none?: PreferredNeighborhoodWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PreferredNeighborhoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    hasPets?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    transactionType?: SortOrder
    targetCityId?: SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
    needsParking?: SortOrder
    needsGarden?: SortOrder
    needsPool?: SortOrder
    needsSecurity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    hasPets?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    transactionType?: SortOrder
    targetCityId?: SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
    needsParking?: SortOrder
    needsGarden?: SortOrder
    needsPool?: SortOrder
    needsSecurity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    hasPets?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    transactionType?: SortOrder
    targetCityId?: SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
    needsParking?: SortOrder
    needsGarden?: SortOrder
    needsPool?: SortOrder
    needsSecurity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    adultsCount?: SortOrder
    childrenCount?: SortOrder
    minBedrooms?: SortOrder
    minBathrooms?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    quietnessWeight?: SortOrder
    schoolProximityWeight?: SortOrder
    hospitalProximityWeight?: SortOrder
    commerceProximityWeight?: SortOrder
    safetyWeight?: SortOrder
    publicTransportWeight?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserPreferencesRelationFilter = {
    is?: UserPreferencesWhereInput
    isNot?: UserPreferencesWhereInput
  }

  export type NeighborhoodRelationFilter = {
    is?: NeighborhoodWhereInput
    isNot?: NeighborhoodWhereInput
  }

  export type PreferredNeighborhoodPreferencesIdNeighborhoodIdCompoundUniqueInput = {
    preferencesId: string
    neighborhoodId: string
  }

  export type PreferredNeighborhoodCountOrderByAggregateInput = {
    id?: SortOrder
    preferencesId?: SortOrder
    neighborhoodId?: SortOrder
  }

  export type PreferredNeighborhoodMaxOrderByAggregateInput = {
    id?: SortOrder
    preferencesId?: SortOrder
    neighborhoodId?: SortOrder
  }

  export type PreferredNeighborhoodMinOrderByAggregateInput = {
    id?: SortOrder
    preferencesId?: SortOrder
    neighborhoodId?: SortOrder
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

  export type NeighborhoodListRelationFilter = {
    every?: NeighborhoodWhereInput
    some?: NeighborhoodWhereInput
    none?: NeighborhoodWhereInput
  }

  export type PointOfInterestListRelationFilter = {
    every?: PointOfInterestWhereInput
    some?: PointOfInterestWhereInput
    none?: PointOfInterestWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type UserPreferencesListRelationFilter = {
    every?: UserPreferencesWhereInput
    some?: UserPreferencesWhereInput
    none?: UserPreferencesWhereInput
  }

  export type NeighborhoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointOfInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityNameStateCompoundUniqueInput = {
    name: string
    state: string
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type NeighborhoodNameCityIdCompoundUniqueInput = {
    name: string
    cityId: string
  }

  export type NeighborhoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
    createdAt?: SortOrder
  }

  export type NeighborhoodAvgOrderByAggregateInput = {
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
  }

  export type NeighborhoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
    createdAt?: SortOrder
  }

  export type NeighborhoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
    createdAt?: SortOrder
  }

  export type NeighborhoodSumOrderByAggregateInput = {
    quietnessScore?: SortOrder
    safetyScore?: SortOrder
  }

  export type PointOfInterestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
  }

  export type PointOfInterestAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PointOfInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
  }

  export type PointOfInterestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
  }

  export type PointOfInterestSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NeighborhoodNullableRelationFilter = {
    is?: NeighborhoodWhereInput | null
    isNot?: NeighborhoodWhereInput | null
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertySourceIdScrapingSourceCompoundUniqueInput = {
    sourceId: string
    scrapingSource: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    sourceName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    transactionType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    address?: SortOrder
    cityId?: SortOrder
    neighborhoodId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hasParking?: SortOrder
    hasGarden?: SortOrder
    hasPool?: SortOrder
    hasSecurity?: SortOrder
    petFriendly?: SortOrder
    sourceId?: SortOrder
    lastScrapedAt?: SortOrder
    scrapingSource?: SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    sourceName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    transactionType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    address?: SortOrder
    cityId?: SortOrder
    neighborhoodId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hasParking?: SortOrder
    hasGarden?: SortOrder
    hasPool?: SortOrder
    hasSecurity?: SortOrder
    petFriendly?: SortOrder
    sourceId?: SortOrder
    lastScrapedAt?: SortOrder
    scrapingSource?: SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    sourceName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    transactionType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    address?: SortOrder
    cityId?: SortOrder
    neighborhoodId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hasParking?: SortOrder
    hasGarden?: SortOrder
    hasPool?: SortOrder
    hasSecurity?: SortOrder
    petFriendly?: SortOrder
    sourceId?: SortOrder
    lastScrapedAt?: SortOrder
    scrapingSource?: SortOrder
    isActive?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropertyRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedMatchUserIdPropertyIdCompoundUniqueInput = {
    userId: string
    propertyId: string
  }

  export type SavedMatchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    matchScore?: SortOrder
    scoreBreakdown?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    viewedAt?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedMatchAvgOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type SavedMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    matchScore?: SortOrder
    scoreBreakdown?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    viewedAt?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedMatchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    matchScore?: SortOrder
    scoreBreakdown?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    viewedAt?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedMatchSumOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type ScrapingJobCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobAvgOrderByAggregateInput = {
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
  }

  export type ScrapingJobMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobSumOrderByAggregateInput = {
    itemsFound?: SortOrder
    itemsAdded?: SortOrder
    itemsUpdated?: SortOrder
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type SavedMatchCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedMatchCreateWithoutUserInput, SavedMatchUncheckedCreateWithoutUserInput> | SavedMatchCreateWithoutUserInput[] | SavedMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutUserInput | SavedMatchCreateOrConnectWithoutUserInput[]
    createMany?: SavedMatchCreateManyUserInputEnvelope
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type SavedMatchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedMatchCreateWithoutUserInput, SavedMatchUncheckedCreateWithoutUserInput> | SavedMatchCreateWithoutUserInput[] | SavedMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutUserInput | SavedMatchCreateOrConnectWithoutUserInput[]
    createMany?: SavedMatchCreateManyUserInputEnvelope
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type SavedMatchUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedMatchCreateWithoutUserInput, SavedMatchUncheckedCreateWithoutUserInput> | SavedMatchCreateWithoutUserInput[] | SavedMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutUserInput | SavedMatchCreateOrConnectWithoutUserInput[]
    upsert?: SavedMatchUpsertWithWhereUniqueWithoutUserInput | SavedMatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedMatchCreateManyUserInputEnvelope
    set?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    disconnect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    delete?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    update?: SavedMatchUpdateWithWhereUniqueWithoutUserInput | SavedMatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedMatchUpdateManyWithWhereWithoutUserInput | SavedMatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedMatchScalarWhereInput | SavedMatchScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type SavedMatchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedMatchCreateWithoutUserInput, SavedMatchUncheckedCreateWithoutUserInput> | SavedMatchCreateWithoutUserInput[] | SavedMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutUserInput | SavedMatchCreateOrConnectWithoutUserInput[]
    upsert?: SavedMatchUpsertWithWhereUniqueWithoutUserInput | SavedMatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedMatchCreateManyUserInputEnvelope
    set?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    disconnect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    delete?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    update?: SavedMatchUpdateWithWhereUniqueWithoutUserInput | SavedMatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedMatchUpdateManyWithWhereWithoutUserInput | SavedMatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedMatchScalarWhereInput | SavedMatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutUserPreferencesInput = {
    create?: XOR<CityCreateWithoutUserPreferencesInput, CityUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: CityCreateOrConnectWithoutUserPreferencesInput
    connect?: CityWhereUniqueInput
  }

  export type PreferredNeighborhoodCreateNestedManyWithoutPreferencesInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutPreferencesInput, PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput> | PreferredNeighborhoodCreateWithoutPreferencesInput[] | PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput | PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput[]
    createMany?: PreferredNeighborhoodCreateManyPreferencesInputEnvelope
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
  }

  export type PreferredNeighborhoodUncheckedCreateNestedManyWithoutPreferencesInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutPreferencesInput, PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput> | PreferredNeighborhoodCreateWithoutPreferencesInput[] | PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput | PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput[]
    createMany?: PreferredNeighborhoodCreateManyPreferencesInputEnvelope
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type CityUpdateOneWithoutUserPreferencesNestedInput = {
    create?: XOR<CityCreateWithoutUserPreferencesInput, CityUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: CityCreateOrConnectWithoutUserPreferencesInput
    upsert?: CityUpsertWithoutUserPreferencesInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutUserPreferencesInput, CityUpdateWithoutUserPreferencesInput>, CityUncheckedUpdateWithoutUserPreferencesInput>
  }

  export type PreferredNeighborhoodUpdateManyWithoutPreferencesNestedInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutPreferencesInput, PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput> | PreferredNeighborhoodCreateWithoutPreferencesInput[] | PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput | PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput[]
    upsert?: PreferredNeighborhoodUpsertWithWhereUniqueWithoutPreferencesInput | PreferredNeighborhoodUpsertWithWhereUniqueWithoutPreferencesInput[]
    createMany?: PreferredNeighborhoodCreateManyPreferencesInputEnvelope
    set?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    disconnect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    delete?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    update?: PreferredNeighborhoodUpdateWithWhereUniqueWithoutPreferencesInput | PreferredNeighborhoodUpdateWithWhereUniqueWithoutPreferencesInput[]
    updateMany?: PreferredNeighborhoodUpdateManyWithWhereWithoutPreferencesInput | PreferredNeighborhoodUpdateManyWithWhereWithoutPreferencesInput[]
    deleteMany?: PreferredNeighborhoodScalarWhereInput | PreferredNeighborhoodScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PreferredNeighborhoodUncheckedUpdateManyWithoutPreferencesNestedInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutPreferencesInput, PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput> | PreferredNeighborhoodCreateWithoutPreferencesInput[] | PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput | PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput[]
    upsert?: PreferredNeighborhoodUpsertWithWhereUniqueWithoutPreferencesInput | PreferredNeighborhoodUpsertWithWhereUniqueWithoutPreferencesInput[]
    createMany?: PreferredNeighborhoodCreateManyPreferencesInputEnvelope
    set?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    disconnect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    delete?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    update?: PreferredNeighborhoodUpdateWithWhereUniqueWithoutPreferencesInput | PreferredNeighborhoodUpdateWithWhereUniqueWithoutPreferencesInput[]
    updateMany?: PreferredNeighborhoodUpdateManyWithWhereWithoutPreferencesInput | PreferredNeighborhoodUpdateManyWithWhereWithoutPreferencesInput[]
    deleteMany?: PreferredNeighborhoodScalarWhereInput | PreferredNeighborhoodScalarWhereInput[]
  }

  export type UserPreferencesCreateNestedOneWithoutPreferredNeighborhoodsInput = {
    create?: XOR<UserPreferencesCreateWithoutPreferredNeighborhoodsInput, UserPreferencesUncheckedCreateWithoutPreferredNeighborhoodsInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutPreferredNeighborhoodsInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type NeighborhoodCreateNestedOneWithoutPreferredNeighborhoodsInput = {
    create?: XOR<NeighborhoodCreateWithoutPreferredNeighborhoodsInput, NeighborhoodUncheckedCreateWithoutPreferredNeighborhoodsInput>
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutPreferredNeighborhoodsInput
    connect?: NeighborhoodWhereUniqueInput
  }

  export type UserPreferencesUpdateOneRequiredWithoutPreferredNeighborhoodsNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutPreferredNeighborhoodsInput, UserPreferencesUncheckedCreateWithoutPreferredNeighborhoodsInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutPreferredNeighborhoodsInput
    upsert?: UserPreferencesUpsertWithoutPreferredNeighborhoodsInput
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutPreferredNeighborhoodsInput, UserPreferencesUpdateWithoutPreferredNeighborhoodsInput>, UserPreferencesUncheckedUpdateWithoutPreferredNeighborhoodsInput>
  }

  export type NeighborhoodUpdateOneRequiredWithoutPreferredNeighborhoodsNestedInput = {
    create?: XOR<NeighborhoodCreateWithoutPreferredNeighborhoodsInput, NeighborhoodUncheckedCreateWithoutPreferredNeighborhoodsInput>
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutPreferredNeighborhoodsInput
    upsert?: NeighborhoodUpsertWithoutPreferredNeighborhoodsInput
    connect?: NeighborhoodWhereUniqueInput
    update?: XOR<XOR<NeighborhoodUpdateToOneWithWhereWithoutPreferredNeighborhoodsInput, NeighborhoodUpdateWithoutPreferredNeighborhoodsInput>, NeighborhoodUncheckedUpdateWithoutPreferredNeighborhoodsInput>
  }

  export type NeighborhoodCreateNestedManyWithoutCityInput = {
    create?: XOR<NeighborhoodCreateWithoutCityInput, NeighborhoodUncheckedCreateWithoutCityInput> | NeighborhoodCreateWithoutCityInput[] | NeighborhoodUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutCityInput | NeighborhoodCreateOrConnectWithoutCityInput[]
    createMany?: NeighborhoodCreateManyCityInputEnvelope
    connect?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
  }

  export type PointOfInterestCreateNestedManyWithoutCityInput = {
    create?: XOR<PointOfInterestCreateWithoutCityInput, PointOfInterestUncheckedCreateWithoutCityInput> | PointOfInterestCreateWithoutCityInput[] | PointOfInterestUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PointOfInterestCreateOrConnectWithoutCityInput | PointOfInterestCreateOrConnectWithoutCityInput[]
    createMany?: PointOfInterestCreateManyCityInputEnvelope
    connect?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutCityInput = {
    create?: XOR<PropertyCreateWithoutCityInput, PropertyUncheckedCreateWithoutCityInput> | PropertyCreateWithoutCityInput[] | PropertyUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCityInput | PropertyCreateOrConnectWithoutCityInput[]
    createMany?: PropertyCreateManyCityInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserPreferencesCreateNestedManyWithoutTargetCityInput = {
    create?: XOR<UserPreferencesCreateWithoutTargetCityInput, UserPreferencesUncheckedCreateWithoutTargetCityInput> | UserPreferencesCreateWithoutTargetCityInput[] | UserPreferencesUncheckedCreateWithoutTargetCityInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutTargetCityInput | UserPreferencesCreateOrConnectWithoutTargetCityInput[]
    createMany?: UserPreferencesCreateManyTargetCityInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type NeighborhoodUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<NeighborhoodCreateWithoutCityInput, NeighborhoodUncheckedCreateWithoutCityInput> | NeighborhoodCreateWithoutCityInput[] | NeighborhoodUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutCityInput | NeighborhoodCreateOrConnectWithoutCityInput[]
    createMany?: NeighborhoodCreateManyCityInputEnvelope
    connect?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
  }

  export type PointOfInterestUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PointOfInterestCreateWithoutCityInput, PointOfInterestUncheckedCreateWithoutCityInput> | PointOfInterestCreateWithoutCityInput[] | PointOfInterestUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PointOfInterestCreateOrConnectWithoutCityInput | PointOfInterestCreateOrConnectWithoutCityInput[]
    createMany?: PointOfInterestCreateManyCityInputEnvelope
    connect?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PropertyCreateWithoutCityInput, PropertyUncheckedCreateWithoutCityInput> | PropertyCreateWithoutCityInput[] | PropertyUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCityInput | PropertyCreateOrConnectWithoutCityInput[]
    createMany?: PropertyCreateManyCityInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedManyWithoutTargetCityInput = {
    create?: XOR<UserPreferencesCreateWithoutTargetCityInput, UserPreferencesUncheckedCreateWithoutTargetCityInput> | UserPreferencesCreateWithoutTargetCityInput[] | UserPreferencesUncheckedCreateWithoutTargetCityInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutTargetCityInput | UserPreferencesCreateOrConnectWithoutTargetCityInput[]
    createMany?: UserPreferencesCreateManyTargetCityInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NeighborhoodUpdateManyWithoutCityNestedInput = {
    create?: XOR<NeighborhoodCreateWithoutCityInput, NeighborhoodUncheckedCreateWithoutCityInput> | NeighborhoodCreateWithoutCityInput[] | NeighborhoodUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutCityInput | NeighborhoodCreateOrConnectWithoutCityInput[]
    upsert?: NeighborhoodUpsertWithWhereUniqueWithoutCityInput | NeighborhoodUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: NeighborhoodCreateManyCityInputEnvelope
    set?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    disconnect?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    delete?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    connect?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    update?: NeighborhoodUpdateWithWhereUniqueWithoutCityInput | NeighborhoodUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: NeighborhoodUpdateManyWithWhereWithoutCityInput | NeighborhoodUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: NeighborhoodScalarWhereInput | NeighborhoodScalarWhereInput[]
  }

  export type PointOfInterestUpdateManyWithoutCityNestedInput = {
    create?: XOR<PointOfInterestCreateWithoutCityInput, PointOfInterestUncheckedCreateWithoutCityInput> | PointOfInterestCreateWithoutCityInput[] | PointOfInterestUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PointOfInterestCreateOrConnectWithoutCityInput | PointOfInterestCreateOrConnectWithoutCityInput[]
    upsert?: PointOfInterestUpsertWithWhereUniqueWithoutCityInput | PointOfInterestUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PointOfInterestCreateManyCityInputEnvelope
    set?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    disconnect?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    delete?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    connect?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    update?: PointOfInterestUpdateWithWhereUniqueWithoutCityInput | PointOfInterestUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PointOfInterestUpdateManyWithWhereWithoutCityInput | PointOfInterestUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PointOfInterestScalarWhereInput | PointOfInterestScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutCityNestedInput = {
    create?: XOR<PropertyCreateWithoutCityInput, PropertyUncheckedCreateWithoutCityInput> | PropertyCreateWithoutCityInput[] | PropertyUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCityInput | PropertyCreateOrConnectWithoutCityInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCityInput | PropertyUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PropertyCreateManyCityInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCityInput | PropertyUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCityInput | PropertyUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserPreferencesUpdateManyWithoutTargetCityNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutTargetCityInput, UserPreferencesUncheckedCreateWithoutTargetCityInput> | UserPreferencesCreateWithoutTargetCityInput[] | UserPreferencesUncheckedCreateWithoutTargetCityInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutTargetCityInput | UserPreferencesCreateOrConnectWithoutTargetCityInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutTargetCityInput | UserPreferencesUpsertWithWhereUniqueWithoutTargetCityInput[]
    createMany?: UserPreferencesCreateManyTargetCityInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutTargetCityInput | UserPreferencesUpdateWithWhereUniqueWithoutTargetCityInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutTargetCityInput | UserPreferencesUpdateManyWithWhereWithoutTargetCityInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type NeighborhoodUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<NeighborhoodCreateWithoutCityInput, NeighborhoodUncheckedCreateWithoutCityInput> | NeighborhoodCreateWithoutCityInput[] | NeighborhoodUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutCityInput | NeighborhoodCreateOrConnectWithoutCityInput[]
    upsert?: NeighborhoodUpsertWithWhereUniqueWithoutCityInput | NeighborhoodUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: NeighborhoodCreateManyCityInputEnvelope
    set?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    disconnect?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    delete?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    connect?: NeighborhoodWhereUniqueInput | NeighborhoodWhereUniqueInput[]
    update?: NeighborhoodUpdateWithWhereUniqueWithoutCityInput | NeighborhoodUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: NeighborhoodUpdateManyWithWhereWithoutCityInput | NeighborhoodUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: NeighborhoodScalarWhereInput | NeighborhoodScalarWhereInput[]
  }

  export type PointOfInterestUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PointOfInterestCreateWithoutCityInput, PointOfInterestUncheckedCreateWithoutCityInput> | PointOfInterestCreateWithoutCityInput[] | PointOfInterestUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PointOfInterestCreateOrConnectWithoutCityInput | PointOfInterestCreateOrConnectWithoutCityInput[]
    upsert?: PointOfInterestUpsertWithWhereUniqueWithoutCityInput | PointOfInterestUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PointOfInterestCreateManyCityInputEnvelope
    set?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    disconnect?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    delete?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    connect?: PointOfInterestWhereUniqueInput | PointOfInterestWhereUniqueInput[]
    update?: PointOfInterestUpdateWithWhereUniqueWithoutCityInput | PointOfInterestUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PointOfInterestUpdateManyWithWhereWithoutCityInput | PointOfInterestUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PointOfInterestScalarWhereInput | PointOfInterestScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PropertyCreateWithoutCityInput, PropertyUncheckedCreateWithoutCityInput> | PropertyCreateWithoutCityInput[] | PropertyUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCityInput | PropertyCreateOrConnectWithoutCityInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCityInput | PropertyUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PropertyCreateManyCityInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCityInput | PropertyUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCityInput | PropertyUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateManyWithoutTargetCityNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutTargetCityInput, UserPreferencesUncheckedCreateWithoutTargetCityInput> | UserPreferencesCreateWithoutTargetCityInput[] | UserPreferencesUncheckedCreateWithoutTargetCityInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutTargetCityInput | UserPreferencesCreateOrConnectWithoutTargetCityInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutTargetCityInput | UserPreferencesUpsertWithWhereUniqueWithoutTargetCityInput[]
    createMany?: UserPreferencesCreateManyTargetCityInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutTargetCityInput | UserPreferencesUpdateWithWhereUniqueWithoutTargetCityInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutTargetCityInput | UserPreferencesUpdateManyWithWhereWithoutTargetCityInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutNeighborhoodsInput = {
    create?: XOR<CityCreateWithoutNeighborhoodsInput, CityUncheckedCreateWithoutNeighborhoodsInput>
    connectOrCreate?: CityCreateOrConnectWithoutNeighborhoodsInput
    connect?: CityWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutNeighborhoodInput = {
    create?: XOR<PropertyCreateWithoutNeighborhoodInput, PropertyUncheckedCreateWithoutNeighborhoodInput> | PropertyCreateWithoutNeighborhoodInput[] | PropertyUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutNeighborhoodInput | PropertyCreateOrConnectWithoutNeighborhoodInput[]
    createMany?: PropertyCreateManyNeighborhoodInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PreferredNeighborhoodCreateNestedManyWithoutNeighborhoodInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput> | PreferredNeighborhoodCreateWithoutNeighborhoodInput[] | PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput | PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput[]
    createMany?: PreferredNeighborhoodCreateManyNeighborhoodInputEnvelope
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutNeighborhoodInput = {
    create?: XOR<PropertyCreateWithoutNeighborhoodInput, PropertyUncheckedCreateWithoutNeighborhoodInput> | PropertyCreateWithoutNeighborhoodInput[] | PropertyUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutNeighborhoodInput | PropertyCreateOrConnectWithoutNeighborhoodInput[]
    createMany?: PropertyCreateManyNeighborhoodInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PreferredNeighborhoodUncheckedCreateNestedManyWithoutNeighborhoodInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput> | PreferredNeighborhoodCreateWithoutNeighborhoodInput[] | PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput | PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput[]
    createMany?: PreferredNeighborhoodCreateManyNeighborhoodInputEnvelope
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutNeighborhoodsNestedInput = {
    create?: XOR<CityCreateWithoutNeighborhoodsInput, CityUncheckedCreateWithoutNeighborhoodsInput>
    connectOrCreate?: CityCreateOrConnectWithoutNeighborhoodsInput
    upsert?: CityUpsertWithoutNeighborhoodsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutNeighborhoodsInput, CityUpdateWithoutNeighborhoodsInput>, CityUncheckedUpdateWithoutNeighborhoodsInput>
  }

  export type PropertyUpdateManyWithoutNeighborhoodNestedInput = {
    create?: XOR<PropertyCreateWithoutNeighborhoodInput, PropertyUncheckedCreateWithoutNeighborhoodInput> | PropertyCreateWithoutNeighborhoodInput[] | PropertyUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutNeighborhoodInput | PropertyCreateOrConnectWithoutNeighborhoodInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutNeighborhoodInput | PropertyUpsertWithWhereUniqueWithoutNeighborhoodInput[]
    createMany?: PropertyCreateManyNeighborhoodInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutNeighborhoodInput | PropertyUpdateWithWhereUniqueWithoutNeighborhoodInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutNeighborhoodInput | PropertyUpdateManyWithWhereWithoutNeighborhoodInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PreferredNeighborhoodUpdateManyWithoutNeighborhoodNestedInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput> | PreferredNeighborhoodCreateWithoutNeighborhoodInput[] | PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput | PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput[]
    upsert?: PreferredNeighborhoodUpsertWithWhereUniqueWithoutNeighborhoodInput | PreferredNeighborhoodUpsertWithWhereUniqueWithoutNeighborhoodInput[]
    createMany?: PreferredNeighborhoodCreateManyNeighborhoodInputEnvelope
    set?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    disconnect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    delete?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    update?: PreferredNeighborhoodUpdateWithWhereUniqueWithoutNeighborhoodInput | PreferredNeighborhoodUpdateWithWhereUniqueWithoutNeighborhoodInput[]
    updateMany?: PreferredNeighborhoodUpdateManyWithWhereWithoutNeighborhoodInput | PreferredNeighborhoodUpdateManyWithWhereWithoutNeighborhoodInput[]
    deleteMany?: PreferredNeighborhoodScalarWhereInput | PreferredNeighborhoodScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutNeighborhoodNestedInput = {
    create?: XOR<PropertyCreateWithoutNeighborhoodInput, PropertyUncheckedCreateWithoutNeighborhoodInput> | PropertyCreateWithoutNeighborhoodInput[] | PropertyUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutNeighborhoodInput | PropertyCreateOrConnectWithoutNeighborhoodInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutNeighborhoodInput | PropertyUpsertWithWhereUniqueWithoutNeighborhoodInput[]
    createMany?: PropertyCreateManyNeighborhoodInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutNeighborhoodInput | PropertyUpdateWithWhereUniqueWithoutNeighborhoodInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutNeighborhoodInput | PropertyUpdateManyWithWhereWithoutNeighborhoodInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PreferredNeighborhoodUncheckedUpdateManyWithoutNeighborhoodNestedInput = {
    create?: XOR<PreferredNeighborhoodCreateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput> | PreferredNeighborhoodCreateWithoutNeighborhoodInput[] | PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput[]
    connectOrCreate?: PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput | PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput[]
    upsert?: PreferredNeighborhoodUpsertWithWhereUniqueWithoutNeighborhoodInput | PreferredNeighborhoodUpsertWithWhereUniqueWithoutNeighborhoodInput[]
    createMany?: PreferredNeighborhoodCreateManyNeighborhoodInputEnvelope
    set?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    disconnect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    delete?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    connect?: PreferredNeighborhoodWhereUniqueInput | PreferredNeighborhoodWhereUniqueInput[]
    update?: PreferredNeighborhoodUpdateWithWhereUniqueWithoutNeighborhoodInput | PreferredNeighborhoodUpdateWithWhereUniqueWithoutNeighborhoodInput[]
    updateMany?: PreferredNeighborhoodUpdateManyWithWhereWithoutNeighborhoodInput | PreferredNeighborhoodUpdateManyWithWhereWithoutNeighborhoodInput[]
    deleteMany?: PreferredNeighborhoodScalarWhereInput | PreferredNeighborhoodScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutPointsOfInterestInput = {
    create?: XOR<CityCreateWithoutPointsOfInterestInput, CityUncheckedCreateWithoutPointsOfInterestInput>
    connectOrCreate?: CityCreateOrConnectWithoutPointsOfInterestInput
    connect?: CityWhereUniqueInput
  }

  export type CityUpdateOneRequiredWithoutPointsOfInterestNestedInput = {
    create?: XOR<CityCreateWithoutPointsOfInterestInput, CityUncheckedCreateWithoutPointsOfInterestInput>
    connectOrCreate?: CityCreateOrConnectWithoutPointsOfInterestInput
    upsert?: CityUpsertWithoutPointsOfInterestInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPointsOfInterestInput, CityUpdateWithoutPointsOfInterestInput>, CityUncheckedUpdateWithoutPointsOfInterestInput>
  }

  export type CityCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<CityCreateWithoutPropertiesInput, CityUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CityCreateOrConnectWithoutPropertiesInput
    connect?: CityWhereUniqueInput
  }

  export type NeighborhoodCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<NeighborhoodCreateWithoutPropertiesInput, NeighborhoodUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutPropertiesInput
    connect?: NeighborhoodWhereUniqueInput
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type SavedMatchCreateNestedManyWithoutPropertyInput = {
    create?: XOR<SavedMatchCreateWithoutPropertyInput, SavedMatchUncheckedCreateWithoutPropertyInput> | SavedMatchCreateWithoutPropertyInput[] | SavedMatchUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutPropertyInput | SavedMatchCreateOrConnectWithoutPropertyInput[]
    createMany?: SavedMatchCreateManyPropertyInputEnvelope
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type SavedMatchUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<SavedMatchCreateWithoutPropertyInput, SavedMatchUncheckedCreateWithoutPropertyInput> | SavedMatchCreateWithoutPropertyInput[] | SavedMatchUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutPropertyInput | SavedMatchCreateOrConnectWithoutPropertyInput[]
    createMany?: SavedMatchCreateManyPropertyInputEnvelope
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CityUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<CityCreateWithoutPropertiesInput, CityUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CityCreateOrConnectWithoutPropertiesInput
    upsert?: CityUpsertWithoutPropertiesInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPropertiesInput, CityUpdateWithoutPropertiesInput>, CityUncheckedUpdateWithoutPropertiesInput>
  }

  export type NeighborhoodUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<NeighborhoodCreateWithoutPropertiesInput, NeighborhoodUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: NeighborhoodCreateOrConnectWithoutPropertiesInput
    upsert?: NeighborhoodUpsertWithoutPropertiesInput
    disconnect?: NeighborhoodWhereInput | boolean
    delete?: NeighborhoodWhereInput | boolean
    connect?: NeighborhoodWhereUniqueInput
    update?: XOR<XOR<NeighborhoodUpdateToOneWithWhereWithoutPropertiesInput, NeighborhoodUpdateWithoutPropertiesInput>, NeighborhoodUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type SavedMatchUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<SavedMatchCreateWithoutPropertyInput, SavedMatchUncheckedCreateWithoutPropertyInput> | SavedMatchCreateWithoutPropertyInput[] | SavedMatchUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutPropertyInput | SavedMatchCreateOrConnectWithoutPropertyInput[]
    upsert?: SavedMatchUpsertWithWhereUniqueWithoutPropertyInput | SavedMatchUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: SavedMatchCreateManyPropertyInputEnvelope
    set?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    disconnect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    delete?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    update?: SavedMatchUpdateWithWhereUniqueWithoutPropertyInput | SavedMatchUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: SavedMatchUpdateManyWithWhereWithoutPropertyInput | SavedMatchUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: SavedMatchScalarWhereInput | SavedMatchScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type SavedMatchUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<SavedMatchCreateWithoutPropertyInput, SavedMatchUncheckedCreateWithoutPropertyInput> | SavedMatchCreateWithoutPropertyInput[] | SavedMatchUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SavedMatchCreateOrConnectWithoutPropertyInput | SavedMatchCreateOrConnectWithoutPropertyInput[]
    upsert?: SavedMatchUpsertWithWhereUniqueWithoutPropertyInput | SavedMatchUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: SavedMatchCreateManyPropertyInputEnvelope
    set?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    disconnect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    delete?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    connect?: SavedMatchWhereUniqueInput | SavedMatchWhereUniqueInput[]
    update?: SavedMatchUpdateWithWhereUniqueWithoutPropertyInput | SavedMatchUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: SavedMatchUpdateManyWithWhereWithoutPropertyInput | SavedMatchUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: SavedMatchScalarWhereInput | SavedMatchScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutSavedMatchesInput = {
    create?: XOR<UserCreateWithoutSavedMatchesInput, UserUncheckedCreateWithoutSavedMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutSavedMatchesInput = {
    create?: XOR<PropertyCreateWithoutSavedMatchesInput, PropertyUncheckedCreateWithoutSavedMatchesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSavedMatchesInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedMatchesNestedInput = {
    create?: XOR<UserCreateWithoutSavedMatchesInput, UserUncheckedCreateWithoutSavedMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedMatchesInput
    upsert?: UserUpsertWithoutSavedMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedMatchesInput, UserUpdateWithoutSavedMatchesInput>, UserUncheckedUpdateWithoutSavedMatchesInput>
  }

  export type PropertyUpdateOneRequiredWithoutSavedMatchesNestedInput = {
    create?: XOR<PropertyCreateWithoutSavedMatchesInput, PropertyUncheckedCreateWithoutSavedMatchesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSavedMatchesInput
    upsert?: PropertyUpsertWithoutSavedMatchesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutSavedMatchesInput, PropertyUpdateWithoutSavedMatchesInput>, PropertyUncheckedUpdateWithoutSavedMatchesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    targetCity?: CityCreateNestedOneWithoutUserPreferencesInput
    preferredNeighborhoods?: PreferredNeighborhoodCreateNestedManyWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    targetCityId?: string | null
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type SavedMatchCreateWithoutUserInput = {
    id?: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
    property: PropertyCreateNestedOneWithoutSavedMatchesInput
  }

  export type SavedMatchUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
  }

  export type SavedMatchCreateOrConnectWithoutUserInput = {
    where: SavedMatchWhereUniqueInput
    create: XOR<SavedMatchCreateWithoutUserInput, SavedMatchUncheckedCreateWithoutUserInput>
  }

  export type SavedMatchCreateManyUserInputEnvelope = {
    data: SavedMatchCreateManyUserInput | SavedMatchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetCity?: CityUpdateOneWithoutUserPreferencesNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUpdateManyWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    targetCityId?: NullableStringFieldUpdateOperationsInput | string | null
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type SavedMatchUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedMatchWhereUniqueInput
    update: XOR<SavedMatchUpdateWithoutUserInput, SavedMatchUncheckedUpdateWithoutUserInput>
    create: XOR<SavedMatchCreateWithoutUserInput, SavedMatchUncheckedCreateWithoutUserInput>
  }

  export type SavedMatchUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedMatchWhereUniqueInput
    data: XOR<SavedMatchUpdateWithoutUserInput, SavedMatchUncheckedUpdateWithoutUserInput>
  }

  export type SavedMatchUpdateManyWithWhereWithoutUserInput = {
    where: SavedMatchScalarWhereInput
    data: XOR<SavedMatchUpdateManyMutationInput, SavedMatchUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedMatchScalarWhereInput = {
    AND?: SavedMatchScalarWhereInput | SavedMatchScalarWhereInput[]
    OR?: SavedMatchScalarWhereInput[]
    NOT?: SavedMatchScalarWhereInput | SavedMatchScalarWhereInput[]
    id?: StringFilter<"SavedMatch"> | string
    userId?: StringFilter<"SavedMatch"> | string
    propertyId?: StringFilter<"SavedMatch"> | string
    matchScore?: FloatFilter<"SavedMatch"> | number
    scoreBreakdown?: StringFilter<"SavedMatch"> | string
    isFavorite?: BoolFilter<"SavedMatch"> | boolean
    isHidden?: BoolFilter<"SavedMatch"> | boolean
    viewedAt?: DateTimeNullableFilter<"SavedMatch"> | Date | string | null
    savedAt?: DateTimeFilter<"SavedMatch"> | Date | string
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedMatches?: SavedMatchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedMatches?: SavedMatchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type CityCreateWithoutUserPreferencesInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodCreateNestedManyWithoutCityInput
    pointsOfInterest?: PointOfInterestCreateNestedManyWithoutCityInput
    properties?: PropertyCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutUserPreferencesInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodUncheckedCreateNestedManyWithoutCityInput
    pointsOfInterest?: PointOfInterestUncheckedCreateNestedManyWithoutCityInput
    properties?: PropertyUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutUserPreferencesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutUserPreferencesInput, CityUncheckedCreateWithoutUserPreferencesInput>
  }

  export type PreferredNeighborhoodCreateWithoutPreferencesInput = {
    id?: string
    neighborhood: NeighborhoodCreateNestedOneWithoutPreferredNeighborhoodsInput
  }

  export type PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput = {
    id?: string
    neighborhoodId: string
  }

  export type PreferredNeighborhoodCreateOrConnectWithoutPreferencesInput = {
    where: PreferredNeighborhoodWhereUniqueInput
    create: XOR<PreferredNeighborhoodCreateWithoutPreferencesInput, PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput>
  }

  export type PreferredNeighborhoodCreateManyPreferencesInputEnvelope = {
    data: PreferredNeighborhoodCreateManyPreferencesInput | PreferredNeighborhoodCreateManyPreferencesInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedMatches?: SavedMatchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedMatches?: SavedMatchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CityUpsertWithoutUserPreferencesInput = {
    update: XOR<CityUpdateWithoutUserPreferencesInput, CityUncheckedUpdateWithoutUserPreferencesInput>
    create: XOR<CityCreateWithoutUserPreferencesInput, CityUncheckedCreateWithoutUserPreferencesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutUserPreferencesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutUserPreferencesInput, CityUncheckedUpdateWithoutUserPreferencesInput>
  }

  export type CityUpdateWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUpdateManyWithoutCityNestedInput
    pointsOfInterest?: PointOfInterestUpdateManyWithoutCityNestedInput
    properties?: PropertyUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUncheckedUpdateManyWithoutCityNestedInput
    pointsOfInterest?: PointOfInterestUncheckedUpdateManyWithoutCityNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutCityNestedInput
  }

  export type PreferredNeighborhoodUpsertWithWhereUniqueWithoutPreferencesInput = {
    where: PreferredNeighborhoodWhereUniqueInput
    update: XOR<PreferredNeighborhoodUpdateWithoutPreferencesInput, PreferredNeighborhoodUncheckedUpdateWithoutPreferencesInput>
    create: XOR<PreferredNeighborhoodCreateWithoutPreferencesInput, PreferredNeighborhoodUncheckedCreateWithoutPreferencesInput>
  }

  export type PreferredNeighborhoodUpdateWithWhereUniqueWithoutPreferencesInput = {
    where: PreferredNeighborhoodWhereUniqueInput
    data: XOR<PreferredNeighborhoodUpdateWithoutPreferencesInput, PreferredNeighborhoodUncheckedUpdateWithoutPreferencesInput>
  }

  export type PreferredNeighborhoodUpdateManyWithWhereWithoutPreferencesInput = {
    where: PreferredNeighborhoodScalarWhereInput
    data: XOR<PreferredNeighborhoodUpdateManyMutationInput, PreferredNeighborhoodUncheckedUpdateManyWithoutPreferencesInput>
  }

  export type PreferredNeighborhoodScalarWhereInput = {
    AND?: PreferredNeighborhoodScalarWhereInput | PreferredNeighborhoodScalarWhereInput[]
    OR?: PreferredNeighborhoodScalarWhereInput[]
    NOT?: PreferredNeighborhoodScalarWhereInput | PreferredNeighborhoodScalarWhereInput[]
    id?: StringFilter<"PreferredNeighborhood"> | string
    preferencesId?: StringFilter<"PreferredNeighborhood"> | string
    neighborhoodId?: StringFilter<"PreferredNeighborhood"> | string
  }

  export type UserPreferencesCreateWithoutPreferredNeighborhoodsInput = {
    id?: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
    targetCity?: CityCreateNestedOneWithoutUserPreferencesInput
  }

  export type UserPreferencesUncheckedCreateWithoutPreferredNeighborhoodsInput = {
    id?: string
    userId: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    targetCityId?: string | null
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutPreferredNeighborhoodsInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutPreferredNeighborhoodsInput, UserPreferencesUncheckedCreateWithoutPreferredNeighborhoodsInput>
  }

  export type NeighborhoodCreateWithoutPreferredNeighborhoodsInput = {
    id?: string
    name: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    city: CityCreateNestedOneWithoutNeighborhoodsInput
    properties?: PropertyCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodUncheckedCreateWithoutPreferredNeighborhoodsInput = {
    id?: string
    name: string
    cityId: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodCreateOrConnectWithoutPreferredNeighborhoodsInput = {
    where: NeighborhoodWhereUniqueInput
    create: XOR<NeighborhoodCreateWithoutPreferredNeighborhoodsInput, NeighborhoodUncheckedCreateWithoutPreferredNeighborhoodsInput>
  }

  export type UserPreferencesUpsertWithoutPreferredNeighborhoodsInput = {
    update: XOR<UserPreferencesUpdateWithoutPreferredNeighborhoodsInput, UserPreferencesUncheckedUpdateWithoutPreferredNeighborhoodsInput>
    create: XOR<UserPreferencesCreateWithoutPreferredNeighborhoodsInput, UserPreferencesUncheckedCreateWithoutPreferredNeighborhoodsInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutPreferredNeighborhoodsInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutPreferredNeighborhoodsInput, UserPreferencesUncheckedUpdateWithoutPreferredNeighborhoodsInput>
  }

  export type UserPreferencesUpdateWithoutPreferredNeighborhoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
    targetCity?: CityUpdateOneWithoutUserPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateWithoutPreferredNeighborhoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    targetCityId?: NullableStringFieldUpdateOperationsInput | string | null
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeighborhoodUpsertWithoutPreferredNeighborhoodsInput = {
    update: XOR<NeighborhoodUpdateWithoutPreferredNeighborhoodsInput, NeighborhoodUncheckedUpdateWithoutPreferredNeighborhoodsInput>
    create: XOR<NeighborhoodCreateWithoutPreferredNeighborhoodsInput, NeighborhoodUncheckedCreateWithoutPreferredNeighborhoodsInput>
    where?: NeighborhoodWhereInput
  }

  export type NeighborhoodUpdateToOneWithWhereWithoutPreferredNeighborhoodsInput = {
    where?: NeighborhoodWhereInput
    data: XOR<NeighborhoodUpdateWithoutPreferredNeighborhoodsInput, NeighborhoodUncheckedUpdateWithoutPreferredNeighborhoodsInput>
  }

  export type NeighborhoodUpdateWithoutPreferredNeighborhoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutNeighborhoodsNestedInput
    properties?: PropertyUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodUncheckedUpdateWithoutPreferredNeighborhoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodCreateWithoutCityInput = {
    id?: string
    name: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutNeighborhoodInput
    preferredNeighborhoods?: PreferredNeighborhoodCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutNeighborhoodInput
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodCreateOrConnectWithoutCityInput = {
    where: NeighborhoodWhereUniqueInput
    create: XOR<NeighborhoodCreateWithoutCityInput, NeighborhoodUncheckedCreateWithoutCityInput>
  }

  export type NeighborhoodCreateManyCityInputEnvelope = {
    data: NeighborhoodCreateManyCityInput | NeighborhoodCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type PointOfInterestCreateWithoutCityInput = {
    id?: string
    name: string
    type: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type PointOfInterestUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    type: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type PointOfInterestCreateOrConnectWithoutCityInput = {
    where: PointOfInterestWhereUniqueInput
    create: XOR<PointOfInterestCreateWithoutCityInput, PointOfInterestUncheckedCreateWithoutCityInput>
  }

  export type PointOfInterestCreateManyCityInputEnvelope = {
    data: PointOfInterestCreateManyCityInput | PointOfInterestCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutCityInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    neighborhood?: NeighborhoodCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    savedMatches?: SavedMatchCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCityInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    neighborhoodId?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    savedMatches?: SavedMatchUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCityInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCityInput, PropertyUncheckedCreateWithoutCityInput>
  }

  export type PropertyCreateManyCityInputEnvelope = {
    data: PropertyCreateManyCityInput | PropertyCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesCreateWithoutTargetCityInput = {
    id?: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
    preferredNeighborhoods?: PreferredNeighborhoodCreateNestedManyWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateWithoutTargetCityInput = {
    id?: string
    userId: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type UserPreferencesCreateOrConnectWithoutTargetCityInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutTargetCityInput, UserPreferencesUncheckedCreateWithoutTargetCityInput>
  }

  export type UserPreferencesCreateManyTargetCityInputEnvelope = {
    data: UserPreferencesCreateManyTargetCityInput | UserPreferencesCreateManyTargetCityInput[]
    skipDuplicates?: boolean
  }

  export type NeighborhoodUpsertWithWhereUniqueWithoutCityInput = {
    where: NeighborhoodWhereUniqueInput
    update: XOR<NeighborhoodUpdateWithoutCityInput, NeighborhoodUncheckedUpdateWithoutCityInput>
    create: XOR<NeighborhoodCreateWithoutCityInput, NeighborhoodUncheckedCreateWithoutCityInput>
  }

  export type NeighborhoodUpdateWithWhereUniqueWithoutCityInput = {
    where: NeighborhoodWhereUniqueInput
    data: XOR<NeighborhoodUpdateWithoutCityInput, NeighborhoodUncheckedUpdateWithoutCityInput>
  }

  export type NeighborhoodUpdateManyWithWhereWithoutCityInput = {
    where: NeighborhoodScalarWhereInput
    data: XOR<NeighborhoodUpdateManyMutationInput, NeighborhoodUncheckedUpdateManyWithoutCityInput>
  }

  export type NeighborhoodScalarWhereInput = {
    AND?: NeighborhoodScalarWhereInput | NeighborhoodScalarWhereInput[]
    OR?: NeighborhoodScalarWhereInput[]
    NOT?: NeighborhoodScalarWhereInput | NeighborhoodScalarWhereInput[]
    id?: StringFilter<"Neighborhood"> | string
    name?: StringFilter<"Neighborhood"> | string
    cityId?: StringFilter<"Neighborhood"> | string
    quietnessScore?: IntFilter<"Neighborhood"> | number
    safetyScore?: IntFilter<"Neighborhood"> | number
    createdAt?: DateTimeFilter<"Neighborhood"> | Date | string
  }

  export type PointOfInterestUpsertWithWhereUniqueWithoutCityInput = {
    where: PointOfInterestWhereUniqueInput
    update: XOR<PointOfInterestUpdateWithoutCityInput, PointOfInterestUncheckedUpdateWithoutCityInput>
    create: XOR<PointOfInterestCreateWithoutCityInput, PointOfInterestUncheckedCreateWithoutCityInput>
  }

  export type PointOfInterestUpdateWithWhereUniqueWithoutCityInput = {
    where: PointOfInterestWhereUniqueInput
    data: XOR<PointOfInterestUpdateWithoutCityInput, PointOfInterestUncheckedUpdateWithoutCityInput>
  }

  export type PointOfInterestUpdateManyWithWhereWithoutCityInput = {
    where: PointOfInterestScalarWhereInput
    data: XOR<PointOfInterestUpdateManyMutationInput, PointOfInterestUncheckedUpdateManyWithoutCityInput>
  }

  export type PointOfInterestScalarWhereInput = {
    AND?: PointOfInterestScalarWhereInput | PointOfInterestScalarWhereInput[]
    OR?: PointOfInterestScalarWhereInput[]
    NOT?: PointOfInterestScalarWhereInput | PointOfInterestScalarWhereInput[]
    id?: StringFilter<"PointOfInterest"> | string
    name?: StringFilter<"PointOfInterest"> | string
    type?: StringFilter<"PointOfInterest"> | string
    latitude?: FloatFilter<"PointOfInterest"> | number
    longitude?: FloatFilter<"PointOfInterest"> | number
    cityId?: StringFilter<"PointOfInterest"> | string
    createdAt?: DateTimeFilter<"PointOfInterest"> | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutCityInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCityInput, PropertyUncheckedUpdateWithoutCityInput>
    create: XOR<PropertyCreateWithoutCityInput, PropertyUncheckedCreateWithoutCityInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCityInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCityInput, PropertyUncheckedUpdateWithoutCityInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCityInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCityInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    sourceUrl?: StringFilter<"Property"> | string
    sourceName?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    price?: FloatFilter<"Property"> | number
    propertyType?: StringFilter<"Property"> | string
    transactionType?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    area?: FloatNullableFilter<"Property"> | number | null
    address?: StringNullableFilter<"Property"> | string | null
    cityId?: StringFilter<"Property"> | string
    neighborhoodId?: StringNullableFilter<"Property"> | string | null
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    hasParking?: BoolFilter<"Property"> | boolean
    hasGarden?: BoolFilter<"Property"> | boolean
    hasPool?: BoolFilter<"Property"> | boolean
    hasSecurity?: BoolFilter<"Property"> | boolean
    petFriendly?: BoolFilter<"Property"> | boolean
    sourceId?: StringNullableFilter<"Property"> | string | null
    lastScrapedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    scrapingSource?: StringNullableFilter<"Property"> | string | null
    isActive?: BoolFilter<"Property"> | boolean
    lastSeenAt?: DateTimeFilter<"Property"> | Date | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type UserPreferencesUpsertWithWhereUniqueWithoutTargetCityInput = {
    where: UserPreferencesWhereUniqueInput
    update: XOR<UserPreferencesUpdateWithoutTargetCityInput, UserPreferencesUncheckedUpdateWithoutTargetCityInput>
    create: XOR<UserPreferencesCreateWithoutTargetCityInput, UserPreferencesUncheckedCreateWithoutTargetCityInput>
  }

  export type UserPreferencesUpdateWithWhereUniqueWithoutTargetCityInput = {
    where: UserPreferencesWhereUniqueInput
    data: XOR<UserPreferencesUpdateWithoutTargetCityInput, UserPreferencesUncheckedUpdateWithoutTargetCityInput>
  }

  export type UserPreferencesUpdateManyWithWhereWithoutTargetCityInput = {
    where: UserPreferencesScalarWhereInput
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyWithoutTargetCityInput>
  }

  export type UserPreferencesScalarWhereInput = {
    AND?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
    OR?: UserPreferencesScalarWhereInput[]
    NOT?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    adultsCount?: IntFilter<"UserPreferences"> | number
    childrenCount?: IntFilter<"UserPreferences"> | number
    minBedrooms?: IntFilter<"UserPreferences"> | number
    minBathrooms?: IntFilter<"UserPreferences"> | number
    hasPets?: BoolFilter<"UserPreferences"> | boolean
    minPrice?: FloatNullableFilter<"UserPreferences"> | number | null
    maxPrice?: FloatNullableFilter<"UserPreferences"> | number | null
    transactionType?: StringFilter<"UserPreferences"> | string
    targetCityId?: StringNullableFilter<"UserPreferences"> | string | null
    quietnessWeight?: IntFilter<"UserPreferences"> | number
    schoolProximityWeight?: IntFilter<"UserPreferences"> | number
    hospitalProximityWeight?: IntFilter<"UserPreferences"> | number
    commerceProximityWeight?: IntFilter<"UserPreferences"> | number
    safetyWeight?: IntFilter<"UserPreferences"> | number
    publicTransportWeight?: IntFilter<"UserPreferences"> | number
    needsParking?: BoolFilter<"UserPreferences"> | boolean
    needsGarden?: BoolFilter<"UserPreferences"> | boolean
    needsPool?: BoolFilter<"UserPreferences"> | boolean
    needsSecurity?: BoolFilter<"UserPreferences"> | boolean
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
  }

  export type CityCreateWithoutNeighborhoodsInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    pointsOfInterest?: PointOfInterestCreateNestedManyWithoutCityInput
    properties?: PropertyCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutTargetCityInput
  }

  export type CityUncheckedCreateWithoutNeighborhoodsInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    pointsOfInterest?: PointOfInterestUncheckedCreateNestedManyWithoutCityInput
    properties?: PropertyUncheckedCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutTargetCityInput
  }

  export type CityCreateOrConnectWithoutNeighborhoodsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutNeighborhoodsInput, CityUncheckedCreateWithoutNeighborhoodsInput>
  }

  export type PropertyCreateWithoutNeighborhoodInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    savedMatches?: SavedMatchCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutNeighborhoodInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    cityId: string
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    savedMatches?: SavedMatchUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutNeighborhoodInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutNeighborhoodInput, PropertyUncheckedCreateWithoutNeighborhoodInput>
  }

  export type PropertyCreateManyNeighborhoodInputEnvelope = {
    data: PropertyCreateManyNeighborhoodInput | PropertyCreateManyNeighborhoodInput[]
    skipDuplicates?: boolean
  }

  export type PreferredNeighborhoodCreateWithoutNeighborhoodInput = {
    id?: string
    preferences: UserPreferencesCreateNestedOneWithoutPreferredNeighborhoodsInput
  }

  export type PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput = {
    id?: string
    preferencesId: string
  }

  export type PreferredNeighborhoodCreateOrConnectWithoutNeighborhoodInput = {
    where: PreferredNeighborhoodWhereUniqueInput
    create: XOR<PreferredNeighborhoodCreateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput>
  }

  export type PreferredNeighborhoodCreateManyNeighborhoodInputEnvelope = {
    data: PreferredNeighborhoodCreateManyNeighborhoodInput | PreferredNeighborhoodCreateManyNeighborhoodInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutNeighborhoodsInput = {
    update: XOR<CityUpdateWithoutNeighborhoodsInput, CityUncheckedUpdateWithoutNeighborhoodsInput>
    create: XOR<CityCreateWithoutNeighborhoodsInput, CityUncheckedCreateWithoutNeighborhoodsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutNeighborhoodsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutNeighborhoodsInput, CityUncheckedUpdateWithoutNeighborhoodsInput>
  }

  export type CityUpdateWithoutNeighborhoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsOfInterest?: PointOfInterestUpdateManyWithoutCityNestedInput
    properties?: PropertyUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutTargetCityNestedInput
  }

  export type CityUncheckedUpdateWithoutNeighborhoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsOfInterest?: PointOfInterestUncheckedUpdateManyWithoutCityNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutTargetCityNestedInput
  }

  export type PropertyUpsertWithWhereUniqueWithoutNeighborhoodInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutNeighborhoodInput, PropertyUncheckedUpdateWithoutNeighborhoodInput>
    create: XOR<PropertyCreateWithoutNeighborhoodInput, PropertyUncheckedCreateWithoutNeighborhoodInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutNeighborhoodInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutNeighborhoodInput, PropertyUncheckedUpdateWithoutNeighborhoodInput>
  }

  export type PropertyUpdateManyWithWhereWithoutNeighborhoodInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutNeighborhoodInput>
  }

  export type PreferredNeighborhoodUpsertWithWhereUniqueWithoutNeighborhoodInput = {
    where: PreferredNeighborhoodWhereUniqueInput
    update: XOR<PreferredNeighborhoodUpdateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedUpdateWithoutNeighborhoodInput>
    create: XOR<PreferredNeighborhoodCreateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedCreateWithoutNeighborhoodInput>
  }

  export type PreferredNeighborhoodUpdateWithWhereUniqueWithoutNeighborhoodInput = {
    where: PreferredNeighborhoodWhereUniqueInput
    data: XOR<PreferredNeighborhoodUpdateWithoutNeighborhoodInput, PreferredNeighborhoodUncheckedUpdateWithoutNeighborhoodInput>
  }

  export type PreferredNeighborhoodUpdateManyWithWhereWithoutNeighborhoodInput = {
    where: PreferredNeighborhoodScalarWhereInput
    data: XOR<PreferredNeighborhoodUpdateManyMutationInput, PreferredNeighborhoodUncheckedUpdateManyWithoutNeighborhoodInput>
  }

  export type CityCreateWithoutPointsOfInterestInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodCreateNestedManyWithoutCityInput
    properties?: PropertyCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutTargetCityInput
  }

  export type CityUncheckedCreateWithoutPointsOfInterestInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodUncheckedCreateNestedManyWithoutCityInput
    properties?: PropertyUncheckedCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutTargetCityInput
  }

  export type CityCreateOrConnectWithoutPointsOfInterestInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPointsOfInterestInput, CityUncheckedCreateWithoutPointsOfInterestInput>
  }

  export type CityUpsertWithoutPointsOfInterestInput = {
    update: XOR<CityUpdateWithoutPointsOfInterestInput, CityUncheckedUpdateWithoutPointsOfInterestInput>
    create: XOR<CityCreateWithoutPointsOfInterestInput, CityUncheckedCreateWithoutPointsOfInterestInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPointsOfInterestInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPointsOfInterestInput, CityUncheckedUpdateWithoutPointsOfInterestInput>
  }

  export type CityUpdateWithoutPointsOfInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUpdateManyWithoutCityNestedInput
    properties?: PropertyUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutTargetCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPointsOfInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUncheckedUpdateManyWithoutCityNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutTargetCityNestedInput
  }

  export type CityCreateWithoutPropertiesInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodCreateNestedManyWithoutCityInput
    pointsOfInterest?: PointOfInterestCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutTargetCityInput
  }

  export type CityUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    state?: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    neighborhoods?: NeighborhoodUncheckedCreateNestedManyWithoutCityInput
    pointsOfInterest?: PointOfInterestUncheckedCreateNestedManyWithoutCityInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutTargetCityInput
  }

  export type CityCreateOrConnectWithoutPropertiesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPropertiesInput, CityUncheckedCreateWithoutPropertiesInput>
  }

  export type NeighborhoodCreateWithoutPropertiesInput = {
    id?: string
    name: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    city: CityCreateNestedOneWithoutNeighborhoodsInput
    preferredNeighborhoods?: PreferredNeighborhoodCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    cityId: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedCreateNestedManyWithoutNeighborhoodInput
  }

  export type NeighborhoodCreateOrConnectWithoutPropertiesInput = {
    where: NeighborhoodWhereUniqueInput
    create: XOR<NeighborhoodCreateWithoutPropertiesInput, NeighborhoodUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    id?: string
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: string
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type SavedMatchCreateWithoutPropertyInput = {
    id?: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedMatchesInput
  }

  export type SavedMatchUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
  }

  export type SavedMatchCreateOrConnectWithoutPropertyInput = {
    where: SavedMatchWhereUniqueInput
    create: XOR<SavedMatchCreateWithoutPropertyInput, SavedMatchUncheckedCreateWithoutPropertyInput>
  }

  export type SavedMatchCreateManyPropertyInputEnvelope = {
    data: SavedMatchCreateManyPropertyInput | SavedMatchCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutPropertiesInput = {
    update: XOR<CityUpdateWithoutPropertiesInput, CityUncheckedUpdateWithoutPropertiesInput>
    create: XOR<CityCreateWithoutPropertiesInput, CityUncheckedCreateWithoutPropertiesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPropertiesInput, CityUncheckedUpdateWithoutPropertiesInput>
  }

  export type CityUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUpdateManyWithoutCityNestedInput
    pointsOfInterest?: PointOfInterestUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutTargetCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhoods?: NeighborhoodUncheckedUpdateManyWithoutCityNestedInput
    pointsOfInterest?: PointOfInterestUncheckedUpdateManyWithoutCityNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutTargetCityNestedInput
  }

  export type NeighborhoodUpsertWithoutPropertiesInput = {
    update: XOR<NeighborhoodUpdateWithoutPropertiesInput, NeighborhoodUncheckedUpdateWithoutPropertiesInput>
    create: XOR<NeighborhoodCreateWithoutPropertiesInput, NeighborhoodUncheckedCreateWithoutPropertiesInput>
    where?: NeighborhoodWhereInput
  }

  export type NeighborhoodUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: NeighborhoodWhereInput
    data: XOR<NeighborhoodUpdateWithoutPropertiesInput, NeighborhoodUncheckedUpdateWithoutPropertiesInput>
  }

  export type NeighborhoodUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutNeighborhoodsNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedUpdateManyWithoutNeighborhoodNestedInput
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: StringFilter<"PropertyImage"> | string
    propertyId?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type SavedMatchUpsertWithWhereUniqueWithoutPropertyInput = {
    where: SavedMatchWhereUniqueInput
    update: XOR<SavedMatchUpdateWithoutPropertyInput, SavedMatchUncheckedUpdateWithoutPropertyInput>
    create: XOR<SavedMatchCreateWithoutPropertyInput, SavedMatchUncheckedCreateWithoutPropertyInput>
  }

  export type SavedMatchUpdateWithWhereUniqueWithoutPropertyInput = {
    where: SavedMatchWhereUniqueInput
    data: XOR<SavedMatchUpdateWithoutPropertyInput, SavedMatchUncheckedUpdateWithoutPropertyInput>
  }

  export type SavedMatchUpdateManyWithWhereWithoutPropertyInput = {
    where: SavedMatchScalarWhereInput
    data: XOR<SavedMatchUpdateManyMutationInput, SavedMatchUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutImagesInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutPropertiesInput
    neighborhood?: NeighborhoodCreateNestedOneWithoutPropertiesInput
    savedMatches?: SavedMatchCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    cityId: string
    neighborhoodId?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedMatches?: SavedMatchUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutPropertiesNestedInput
    neighborhood?: NeighborhoodUpdateOneWithoutPropertiesNestedInput
    savedMatches?: SavedMatchUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedMatches?: SavedMatchUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserCreateWithoutSavedMatchesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedMatchesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedMatchesInput, UserUncheckedCreateWithoutSavedMatchesInput>
  }

  export type PropertyCreateWithoutSavedMatchesInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutPropertiesInput
    neighborhood?: NeighborhoodCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutSavedMatchesInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    cityId: string
    neighborhoodId?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutSavedMatchesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutSavedMatchesInput, PropertyUncheckedCreateWithoutSavedMatchesInput>
  }

  export type UserUpsertWithoutSavedMatchesInput = {
    update: XOR<UserUpdateWithoutSavedMatchesInput, UserUncheckedUpdateWithoutSavedMatchesInput>
    create: XOR<UserCreateWithoutSavedMatchesInput, UserUncheckedCreateWithoutSavedMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedMatchesInput, UserUncheckedUpdateWithoutSavedMatchesInput>
  }

  export type UserUpdateWithoutSavedMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutSavedMatchesInput = {
    update: XOR<PropertyUpdateWithoutSavedMatchesInput, PropertyUncheckedUpdateWithoutSavedMatchesInput>
    create: XOR<PropertyCreateWithoutSavedMatchesInput, PropertyUncheckedCreateWithoutSavedMatchesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutSavedMatchesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutSavedMatchesInput, PropertyUncheckedUpdateWithoutSavedMatchesInput>
  }

  export type PropertyUpdateWithoutSavedMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutPropertiesNestedInput
    neighborhood?: NeighborhoodUpdateOneWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutSavedMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type SavedMatchCreateManyUserInput = {
    id?: string
    propertyId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
  }

  export type SavedMatchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutSavedMatchesNestedInput
  }

  export type SavedMatchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMatchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferredNeighborhoodCreateManyPreferencesInput = {
    id?: string
    neighborhoodId: string
  }

  export type PreferredNeighborhoodUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    neighborhood?: NeighborhoodUpdateOneRequiredWithoutPreferredNeighborhoodsNestedInput
  }

  export type PreferredNeighborhoodUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: StringFieldUpdateOperationsInput | string
  }

  export type PreferredNeighborhoodUncheckedUpdateManyWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    neighborhoodId?: StringFieldUpdateOperationsInput | string
  }

  export type NeighborhoodCreateManyCityInput = {
    id?: string
    name: string
    quietnessScore?: number
    safetyScore?: number
    createdAt?: Date | string
  }

  export type PointOfInterestCreateManyCityInput = {
    id?: string
    name: string
    type: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type PropertyCreateManyCityInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    neighborhoodId?: string | null
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateManyTargetCityInput = {
    id?: string
    userId: string
    adultsCount?: number
    childrenCount?: number
    minBedrooms?: number
    minBathrooms?: number
    hasPets?: boolean
    minPrice?: number | null
    maxPrice?: number | null
    transactionType?: string
    quietnessWeight?: number
    schoolProximityWeight?: number
    hospitalProximityWeight?: number
    commerceProximityWeight?: number
    safetyWeight?: number
    publicTransportWeight?: number
    needsParking?: boolean
    needsGarden?: boolean
    needsPool?: boolean
    needsSecurity?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NeighborhoodUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutNeighborhoodNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutNeighborhoodNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedUpdateManyWithoutNeighborhoodNestedInput
  }

  export type NeighborhoodUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quietnessScore?: IntFieldUpdateOperationsInput | number
    safetyScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointOfInterestUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointOfInterestUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointOfInterestUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborhood?: NeighborhoodUpdateOneWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    savedMatches?: SavedMatchUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhoodId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    savedMatches?: SavedMatchUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhoodId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUpdateWithoutTargetCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
    preferredNeighborhoods?: PreferredNeighborhoodUpdateManyWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateWithoutTargetCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredNeighborhoods?: PreferredNeighborhoodUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateManyWithoutTargetCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adultsCount?: IntFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    minBedrooms?: IntFieldUpdateOperationsInput | number
    minBathrooms?: IntFieldUpdateOperationsInput | number
    hasPets?: BoolFieldUpdateOperationsInput | boolean
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    transactionType?: StringFieldUpdateOperationsInput | string
    quietnessWeight?: IntFieldUpdateOperationsInput | number
    schoolProximityWeight?: IntFieldUpdateOperationsInput | number
    hospitalProximityWeight?: IntFieldUpdateOperationsInput | number
    commerceProximityWeight?: IntFieldUpdateOperationsInput | number
    safetyWeight?: IntFieldUpdateOperationsInput | number
    publicTransportWeight?: IntFieldUpdateOperationsInput | number
    needsParking?: BoolFieldUpdateOperationsInput | boolean
    needsGarden?: BoolFieldUpdateOperationsInput | boolean
    needsPool?: BoolFieldUpdateOperationsInput | boolean
    needsSecurity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyNeighborhoodInput = {
    id?: string
    sourceUrl: string
    sourceName: string
    title: string
    description?: string | null
    price: number
    propertyType: string
    transactionType: string
    bedrooms: number
    bathrooms: number
    area?: number | null
    address?: string | null
    cityId: string
    latitude?: number | null
    longitude?: number | null
    hasParking?: boolean
    hasGarden?: boolean
    hasPool?: boolean
    hasSecurity?: boolean
    petFriendly?: boolean
    sourceId?: string | null
    lastScrapedAt?: Date | string | null
    scrapingSource?: string | null
    isActive?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferredNeighborhoodCreateManyNeighborhoodInput = {
    id?: string
    preferencesId: string
  }

  export type PropertyUpdateWithoutNeighborhoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    savedMatches?: SavedMatchUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutNeighborhoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    savedMatches?: SavedMatchUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutNeighborhoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    hasGarden?: BoolFieldUpdateOperationsInput | boolean
    hasPool?: BoolFieldUpdateOperationsInput | boolean
    hasSecurity?: BoolFieldUpdateOperationsInput | boolean
    petFriendly?: BoolFieldUpdateOperationsInput | boolean
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapingSource?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferredNeighborhoodUpdateWithoutNeighborhoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferences?: UserPreferencesUpdateOneRequiredWithoutPreferredNeighborhoodsNestedInput
  }

  export type PreferredNeighborhoodUncheckedUpdateWithoutNeighborhoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
  }

  export type PreferredNeighborhoodUncheckedUpdateManyWithoutNeighborhoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferencesId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: string
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type SavedMatchCreateManyPropertyInput = {
    id?: string
    userId: string
    matchScore: number
    scoreBreakdown: string
    isFavorite?: boolean
    isHidden?: boolean
    viewedAt?: Date | string | null
    savedAt?: Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMatchUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedMatchesNestedInput
  }

  export type SavedMatchUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedMatchUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    scoreBreakdown?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPreferencesCountOutputTypeDefaultArgs instead
     */
    export type UserPreferencesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPreferencesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NeighborhoodCountOutputTypeDefaultArgs instead
     */
    export type NeighborhoodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NeighborhoodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyCountOutputTypeDefaultArgs instead
     */
    export type PropertyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPreferencesDefaultArgs instead
     */
    export type UserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPreferencesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PreferredNeighborhoodDefaultArgs instead
     */
    export type PreferredNeighborhoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PreferredNeighborhoodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityDefaultArgs instead
     */
    export type CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NeighborhoodDefaultArgs instead
     */
    export type NeighborhoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NeighborhoodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PointOfInterestDefaultArgs instead
     */
    export type PointOfInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PointOfInterestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyImageDefaultArgs instead
     */
    export type PropertyImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedMatchDefaultArgs instead
     */
    export type SavedMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedMatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScrapingJobDefaultArgs instead
     */
    export type ScrapingJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScrapingJobDefaultArgs<ExtArgs>

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