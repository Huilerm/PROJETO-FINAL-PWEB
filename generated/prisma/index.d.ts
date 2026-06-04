
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model AlocacaoProfessor
 * 
 */
export type AlocacaoProfessor = $Result.DefaultSelection<Prisma.$AlocacaoProfessorPayload>
/**
 * Model Instituicao
 * 
 */
export type Instituicao = $Result.DefaultSelection<Prisma.$InstituicaoPayload>
/**
 * Model Inscricao
 * 
 */
export type Inscricao = $Result.DefaultSelection<Prisma.$InscricaoPayload>
/**
 * Model Identidade
 * 
 */
export type Identidade = $Result.DefaultSelection<Prisma.$IdentidadePayload>
/**
 * Model RendaFamiliar
 * 
 */
export type RendaFamiliar = $Result.DefaultSelection<Prisma.$RendaFamiliarPayload>
/**
 * Model Auditoria
 * 
 */
export type Auditoria = $Result.DefaultSelection<Prisma.$AuditoriaPayload>
/**
 * Model Cargo
 * 
 */
export type Cargo = $Result.DefaultSelection<Prisma.$CargoPayload>
/**
 * Model Permissoes
 * 
 */
export type Permissoes = $Result.DefaultSelection<Prisma.$PermissoesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusCurso: {
  ANDAMENTO: 'ANDAMENTO',
  ANALISE: 'ANALISE',
  CONCLUIDO: 'CONCLUIDO',
  FECHADO: 'FECHADO'
};

export type StatusCurso = (typeof StatusCurso)[keyof typeof StatusCurso]


export const StatusInscricao: {
  PENDENTE: 'PENDENTE',
  DEFERIDO: 'DEFERIDO',
  INDEFERIDO: 'INDEFERIDO'
};

export type StatusInscricao = (typeof StatusInscricao)[keyof typeof StatusInscricao]


export const DiasSemana: {
  SEGUNDA: 'SEGUNDA',
  TERCA: 'TERCA',
  QUARTA: 'QUARTA',
  QUINTA: 'QUINTA',
  SEXTA: 'SEXTA',
  SABADO: 'SABADO',
  DOMINGO: 'DOMINGO'
};

export type DiasSemana = (typeof DiasSemana)[keyof typeof DiasSemana]


export const Sexo: {
  MASCULINO: 'MASCULINO',
  FEMININO: 'FEMININO'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]


export const Raca: {
  AMARELA: 'AMARELA',
  BRANCA: 'BRANCA',
  PARDA: 'PARDA',
  PRETA: 'PRETA',
  INDIGENA: 'INDIGENA',
  NAO_DECLARADO: 'NAO_DECLARADO'
};

export type Raca = (typeof Raca)[keyof typeof Raca]


export const Acao: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type Acao = (typeof Acao)[keyof typeof Acao]

}

export type StatusCurso = $Enums.StatusCurso

export const StatusCurso: typeof $Enums.StatusCurso

export type StatusInscricao = $Enums.StatusInscricao

export const StatusInscricao: typeof $Enums.StatusInscricao

export type DiasSemana = $Enums.DiasSemana

export const DiasSemana: typeof $Enums.DiasSemana

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

export type Raca = $Enums.Raca

export const Raca: typeof $Enums.Raca

export type Acao = $Enums.Acao

export const Acao: typeof $Enums.Acao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alocacaoProfessor`: Exposes CRUD operations for the **AlocacaoProfessor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlocacaoProfessors
    * const alocacaoProfessors = await prisma.alocacaoProfessor.findMany()
    * ```
    */
  get alocacaoProfessor(): Prisma.AlocacaoProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instituicao`: Exposes CRUD operations for the **Instituicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instituicaos
    * const instituicaos = await prisma.instituicao.findMany()
    * ```
    */
  get instituicao(): Prisma.InstituicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscricao`: Exposes CRUD operations for the **Inscricao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscricaos
    * const inscricaos = await prisma.inscricao.findMany()
    * ```
    */
  get inscricao(): Prisma.InscricaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identidade`: Exposes CRUD operations for the **Identidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Identidades
    * const identidades = await prisma.identidade.findMany()
    * ```
    */
  get identidade(): Prisma.IdentidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rendaFamiliar`: Exposes CRUD operations for the **RendaFamiliar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RendaFamiliars
    * const rendaFamiliars = await prisma.rendaFamiliar.findMany()
    * ```
    */
  get rendaFamiliar(): Prisma.RendaFamiliarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditoria`: Exposes CRUD operations for the **Auditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditorias
    * const auditorias = await prisma.auditoria.findMany()
    * ```
    */
  get auditoria(): Prisma.AuditoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **Cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.CargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissoes`: Exposes CRUD operations for the **Permissoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissoes
    * const permissoes = await prisma.permissoes.findMany()
    * ```
    */
  get permissoes(): Prisma.PermissoesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Aluno: 'Aluno',
    Professor: 'Professor',
    Curso: 'Curso',
    AlocacaoProfessor: 'AlocacaoProfessor',
    Instituicao: 'Instituicao',
    Inscricao: 'Inscricao',
    Identidade: 'Identidade',
    RendaFamiliar: 'RendaFamiliar',
    Auditoria: 'Auditoria',
    Cargo: 'Cargo',
    Permissoes: 'Permissoes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "aluno" | "professor" | "curso" | "alocacaoProfessor" | "instituicao" | "inscricao" | "identidade" | "rendaFamiliar" | "auditoria" | "cargo" | "permissoes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      AlocacaoProfessor: {
        payload: Prisma.$AlocacaoProfessorPayload<ExtArgs>
        fields: Prisma.AlocacaoProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlocacaoProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlocacaoProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>
          }
          findFirst: {
            args: Prisma.AlocacaoProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlocacaoProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>
          }
          findMany: {
            args: Prisma.AlocacaoProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>[]
          }
          create: {
            args: Prisma.AlocacaoProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>
          }
          createMany: {
            args: Prisma.AlocacaoProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlocacaoProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>[]
          }
          delete: {
            args: Prisma.AlocacaoProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>
          }
          update: {
            args: Prisma.AlocacaoProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>
          }
          deleteMany: {
            args: Prisma.AlocacaoProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlocacaoProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlocacaoProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>[]
          }
          upsert: {
            args: Prisma.AlocacaoProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProfessorPayload>
          }
          aggregate: {
            args: Prisma.AlocacaoProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlocacaoProfessor>
          }
          groupBy: {
            args: Prisma.AlocacaoProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlocacaoProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoProfessorCountAggregateOutputType> | number
          }
        }
      }
      Instituicao: {
        payload: Prisma.$InstituicaoPayload<ExtArgs>
        fields: Prisma.InstituicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstituicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstituicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findFirst: {
            args: Prisma.InstituicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstituicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findMany: {
            args: Prisma.InstituicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          create: {
            args: Prisma.InstituicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          createMany: {
            args: Prisma.InstituicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstituicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          delete: {
            args: Prisma.InstituicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          update: {
            args: Prisma.InstituicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          deleteMany: {
            args: Prisma.InstituicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstituicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstituicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          upsert: {
            args: Prisma.InstituicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          aggregate: {
            args: Prisma.InstituicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstituicao>
          }
          groupBy: {
            args: Prisma.InstituicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstituicaoCountArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoCountAggregateOutputType> | number
          }
        }
      }
      Inscricao: {
        payload: Prisma.$InscricaoPayload<ExtArgs>
        fields: Prisma.InscricaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscricaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscricaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findFirst: {
            args: Prisma.InscricaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscricaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findMany: {
            args: Prisma.InscricaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          create: {
            args: Prisma.InscricaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          createMany: {
            args: Prisma.InscricaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscricaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          delete: {
            args: Prisma.InscricaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          update: {
            args: Prisma.InscricaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          deleteMany: {
            args: Prisma.InscricaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscricaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscricaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          upsert: {
            args: Prisma.InscricaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          aggregate: {
            args: Prisma.InscricaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscricao>
          }
          groupBy: {
            args: Prisma.InscricaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscricaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscricaoCountArgs<ExtArgs>
            result: $Utils.Optional<InscricaoCountAggregateOutputType> | number
          }
        }
      }
      Identidade: {
        payload: Prisma.$IdentidadePayload<ExtArgs>
        fields: Prisma.IdentidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>
          }
          findFirst: {
            args: Prisma.IdentidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>
          }
          findMany: {
            args: Prisma.IdentidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>[]
          }
          create: {
            args: Prisma.IdentidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>
          }
          createMany: {
            args: Prisma.IdentidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>[]
          }
          delete: {
            args: Prisma.IdentidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>
          }
          update: {
            args: Prisma.IdentidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>
          }
          deleteMany: {
            args: Prisma.IdentidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>[]
          }
          upsert: {
            args: Prisma.IdentidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentidadePayload>
          }
          aggregate: {
            args: Prisma.IdentidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentidade>
          }
          groupBy: {
            args: Prisma.IdentidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentidadeCountArgs<ExtArgs>
            result: $Utils.Optional<IdentidadeCountAggregateOutputType> | number
          }
        }
      }
      RendaFamiliar: {
        payload: Prisma.$RendaFamiliarPayload<ExtArgs>
        fields: Prisma.RendaFamiliarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RendaFamiliarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RendaFamiliarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>
          }
          findFirst: {
            args: Prisma.RendaFamiliarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RendaFamiliarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>
          }
          findMany: {
            args: Prisma.RendaFamiliarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>[]
          }
          create: {
            args: Prisma.RendaFamiliarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>
          }
          createMany: {
            args: Prisma.RendaFamiliarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RendaFamiliarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>[]
          }
          delete: {
            args: Prisma.RendaFamiliarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>
          }
          update: {
            args: Prisma.RendaFamiliarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>
          }
          deleteMany: {
            args: Prisma.RendaFamiliarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RendaFamiliarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RendaFamiliarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>[]
          }
          upsert: {
            args: Prisma.RendaFamiliarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendaFamiliarPayload>
          }
          aggregate: {
            args: Prisma.RendaFamiliarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRendaFamiliar>
          }
          groupBy: {
            args: Prisma.RendaFamiliarGroupByArgs<ExtArgs>
            result: $Utils.Optional<RendaFamiliarGroupByOutputType>[]
          }
          count: {
            args: Prisma.RendaFamiliarCountArgs<ExtArgs>
            result: $Utils.Optional<RendaFamiliarCountAggregateOutputType> | number
          }
        }
      }
      Auditoria: {
        payload: Prisma.$AuditoriaPayload<ExtArgs>
        fields: Prisma.AuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findFirst: {
            args: Prisma.AuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findMany: {
            args: Prisma.AuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          create: {
            args: Prisma.AuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          createMany: {
            args: Prisma.AuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          delete: {
            args: Prisma.AuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          update: {
            args: Prisma.AuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.AuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          upsert: {
            args: Prisma.AuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoria>
          }
          groupBy: {
            args: Prisma.AuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaCountAggregateOutputType> | number
          }
        }
      }
      Cargo: {
        payload: Prisma.$CargoPayload<ExtArgs>
        fields: Prisma.CargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findFirst: {
            args: Prisma.CargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findMany: {
            args: Prisma.CargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          create: {
            args: Prisma.CargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          createMany: {
            args: Prisma.CargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          delete: {
            args: Prisma.CargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          update: {
            args: Prisma.CargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          deleteMany: {
            args: Prisma.CargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          upsert: {
            args: Prisma.CargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.CargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      Permissoes: {
        payload: Prisma.$PermissoesPayload<ExtArgs>
        fields: Prisma.PermissoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>
          }
          findFirst: {
            args: Prisma.PermissoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>
          }
          findMany: {
            args: Prisma.PermissoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>[]
          }
          create: {
            args: Prisma.PermissoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>
          }
          createMany: {
            args: Prisma.PermissoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>[]
          }
          delete: {
            args: Prisma.PermissoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>
          }
          update: {
            args: Prisma.PermissoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>
          }
          deleteMany: {
            args: Prisma.PermissoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>[]
          }
          upsert: {
            args: Prisma.PermissoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissoesPayload>
          }
          aggregate: {
            args: Prisma.PermissoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissoes>
          }
          groupBy: {
            args: Prisma.PermissoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissoesCountArgs<ExtArgs>
            result: $Utils.Optional<PermissoesCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    aluno?: AlunoOmit
    professor?: ProfessorOmit
    curso?: CursoOmit
    alocacaoProfessor?: AlocacaoProfessorOmit
    instituicao?: InstituicaoOmit
    inscricao?: InscricaoOmit
    identidade?: IdentidadeOmit
    rendaFamiliar?: RendaFamiliarOmit
    auditoria?: AuditoriaOmit
    cargo?: CargoOmit
    permissoes?: PermissoesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    cargos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargos?: boolean | UsuarioCountOutputTypeCountCargosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
  }


  /**
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    inscricaos: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricaos?: boolean | AlunoCountOutputTypeCountInscricaosArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountInscricaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    alocacoes: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alocacoes?: boolean | ProfessorCountOutputTypeCountAlocacoesArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountAlocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoProfessorWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    professores: number
    inscricao: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | CursoCountOutputTypeCountProfessoresArgs
    inscricao?: boolean | CursoCountOutputTypeCountInscricaoArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountProfessoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoProfessorWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountInscricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }


  /**
   * Count Type InstituicaoCountOutputType
   */

  export type InstituicaoCountOutputType = {
    cursos: number
  }

  export type InstituicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | InstituicaoCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstituicaoCountOutputType
     */
    select?: InstituicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    usuario: number
    permissoes: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | CargoCountOutputTypeCountUsuarioArgs
    permissoes?: boolean | CargoCountOutputTypeCountPermissoesArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountPermissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissoesWhereInput
  }


  /**
   * Count Type PermissoesCountOutputType
   */

  export type PermissoesCountOutputType = {
    cargo: number
  }

  export type PermissoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | PermissoesCountOutputTypeCountCargoArgs
  }

  // Custom InputTypes
  /**
   * PermissoesCountOutputType without action
   */
  export type PermissoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissoesCountOutputType
     */
    select?: PermissoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissoesCountOutputType without action
   */
  export type PermissoesCountOutputTypeCountCargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    fkIdentidade: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    fkIdentidade: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nomeSocial: string | null
    dataNasc: Date | null
    naturalidade: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    sexo: $Enums.Sexo | null
    raca: $Enums.Raca | null
    fkIdentidade: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nomeSocial: string | null
    dataNasc: Date | null
    naturalidade: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    sexo: $Enums.Sexo | null
    raca: $Enums.Raca | null
    fkIdentidade: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    nomeSocial: number
    dataNasc: number
    naturalidade: number
    email: number
    senha: number
    criadoEm: number
    atualizadoEm: number
    sexo: number
    raca: number
    fkIdentidade: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    fkIdentidade?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    fkIdentidade?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    nomeSocial?: true
    dataNasc?: true
    naturalidade?: true
    email?: true
    senha?: true
    criadoEm?: true
    atualizadoEm?: true
    sexo?: true
    raca?: true
    fkIdentidade?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    nomeSocial?: true
    dataNasc?: true
    naturalidade?: true
    email?: true
    senha?: true
    criadoEm?: true
    atualizadoEm?: true
    sexo?: true
    raca?: true
    fkIdentidade?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    nomeSocial?: true
    dataNasc?: true
    naturalidade?: true
    email?: true
    senha?: true
    criadoEm?: true
    atualizadoEm?: true
    sexo?: true
    raca?: true
    fkIdentidade?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    nomeSocial: string | null
    dataNasc: Date
    naturalidade: string
    email: string
    senha: string
    criadoEm: Date
    atualizadoEm: Date
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    fkIdentidade: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nomeSocial?: boolean
    dataNasc?: boolean
    naturalidade?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    sexo?: boolean
    raca?: boolean
    fkIdentidade?: boolean
    alunos?: boolean | Usuario$alunosArgs<ExtArgs>
    professor?: boolean | Usuario$professorArgs<ExtArgs>
    cargos?: boolean | Usuario$cargosArgs<ExtArgs>
    identidade?: boolean | IdentidadeDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nomeSocial?: boolean
    dataNasc?: boolean
    naturalidade?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    sexo?: boolean
    raca?: boolean
    fkIdentidade?: boolean
    identidade?: boolean | IdentidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nomeSocial?: boolean
    dataNasc?: boolean
    naturalidade?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    sexo?: boolean
    raca?: boolean
    fkIdentidade?: boolean
    identidade?: boolean | IdentidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    nomeSocial?: boolean
    dataNasc?: boolean
    naturalidade?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    sexo?: boolean
    raca?: boolean
    fkIdentidade?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nomeSocial" | "dataNasc" | "naturalidade" | "email" | "senha" | "criadoEm" | "atualizadoEm" | "sexo" | "raca" | "fkIdentidade", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | Usuario$alunosArgs<ExtArgs>
    professor?: boolean | Usuario$professorArgs<ExtArgs>
    cargos?: boolean | Usuario$cargosArgs<ExtArgs>
    identidade?: boolean | IdentidadeDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identidade?: boolean | IdentidadeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identidade?: boolean | IdentidadeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      alunos: Prisma.$AlunoPayload<ExtArgs> | null
      professor: Prisma.$ProfessorPayload<ExtArgs> | null
      cargos: Prisma.$CargoPayload<ExtArgs>[]
      identidade: Prisma.$IdentidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nomeSocial: string | null
      dataNasc: Date
      naturalidade: string
      email: string
      senha: string
      criadoEm: Date
      atualizadoEm: Date
      sexo: $Enums.Sexo
      raca: $Enums.Raca
      fkIdentidade: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunos<T extends Usuario$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$alunosArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professor<T extends Usuario$professorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$professorArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cargos<T extends Usuario$cargosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cargosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    identidade<T extends IdentidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdentidadeDefaultArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly nomeSocial: FieldRef<"Usuario", 'String'>
    readonly dataNasc: FieldRef<"Usuario", 'DateTime'>
    readonly naturalidade: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly sexo: FieldRef<"Usuario", 'Sexo'>
    readonly raca: FieldRef<"Usuario", 'Raca'>
    readonly fkIdentidade: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.alunos
   */
  export type Usuario$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
  }

  /**
   * Usuario.professor
   */
  export type Usuario$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
  }

  /**
   * Usuario.cargos
   */
  export type Usuario$cargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    cursor?: CargoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    id: number | null
    fkUsuario: number | null
  }

  export type AlunoSumAggregateOutputType = {
    id: number | null
    fkUsuario: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id: number | null
    matricula: string | null
    fkUsuario: number | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: number | null
    matricula: string | null
    fkUsuario: number | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    matricula: number
    fkUsuario: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    id?: true
    fkUsuario?: true
  }

  export type AlunoSumAggregateInputType = {
    id?: true
    fkUsuario?: true
  }

  export type AlunoMinAggregateInputType = {
    id?: true
    matricula?: true
    fkUsuario?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    matricula?: true
    fkUsuario?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    matricula?: true
    fkUsuario?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: number
    matricula: string
    fkUsuario: number
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    fkUsuario?: boolean
    inscricaos?: boolean | Aluno$inscricaosArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    fkUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    fkUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id?: boolean
    matricula?: boolean
    fkUsuario?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matricula" | "fkUsuario", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricaos?: boolean | Aluno$inscricaosArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AlunoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      inscricaos: Prisma.$InscricaoPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matricula: string
      fkUsuario: number
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {AlunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos and returns the data updated in the database.
     * @param {AlunoUpdateManyAndReturnArgs} args - Arguments to update many Alunos.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscricaos<T extends Aluno$inscricaosArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$inscricaosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'Int'>
    readonly matricula: FieldRef<"Aluno", 'String'>
    readonly fkUsuario: FieldRef<"Aluno", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno createManyAndReturn
   */
  export type AlunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno updateManyAndReturn
   */
  export type AlunoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.inscricaos
   */
  export type Aluno$inscricaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id: number | null
    fkUsuario: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id: number | null
    fkUsuario: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: number | null
    siap: string | null
    fkUsuario: number | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: number | null
    siap: string | null
    fkUsuario: number | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    siap: number
    fkUsuario: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id?: true
    fkUsuario?: true
  }

  export type ProfessorSumAggregateInputType = {
    id?: true
    fkUsuario?: true
  }

  export type ProfessorMinAggregateInputType = {
    id?: true
    siap?: true
    fkUsuario?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    siap?: true
    fkUsuario?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    siap?: true
    fkUsuario?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: number
    siap: string
    fkUsuario: number
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siap?: boolean
    fkUsuario?: boolean
    alocacoes?: boolean | Professor$alocacoesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siap?: boolean
    fkUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siap?: boolean
    fkUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    siap?: boolean
    fkUsuario?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siap" | "fkUsuario", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alocacoes?: boolean | Professor$alocacoesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      alocacoes: Prisma.$AlocacaoProfessorPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      siap: string
      fkUsuario: number
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alocacoes<T extends Professor$alocacoesArgs<ExtArgs> = {}>(args?: Subset<T, Professor$alocacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'Int'>
    readonly siap: FieldRef<"Professor", 'String'>
    readonly fkUsuario: FieldRef<"Professor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.alocacoes
   */
  export type Professor$alocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    where?: AlocacaoProfessorWhereInput
    orderBy?: AlocacaoProfessorOrderByWithRelationInput | AlocacaoProfessorOrderByWithRelationInput[]
    cursor?: AlocacaoProfessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlocacaoProfessorScalarFieldEnum | AlocacaoProfessorScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
    carga_horaria: number | null
    vagas: number | null
    fkInstituicao: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
    carga_horaria: number | null
    vagas: number | null
    fkInstituicao: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    carga_horaria: number | null
    vagas: number | null
    status: $Enums.StatusCurso | null
    dataInicio: Date | null
    dataFim: Date | null
    horarioInicio: Date | null
    horarioFim: Date | null
    fkInstituicao: number | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    carga_horaria: number | null
    vagas: number | null
    status: $Enums.StatusCurso | null
    dataInicio: Date | null
    dataFim: Date | null
    horarioInicio: Date | null
    horarioFim: Date | null
    fkInstituicao: number | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    nome: number
    carga_horaria: number
    vagas: number
    status: number
    dataInicio: number
    dataFim: number
    horarioInicio: number
    horarioFim: number
    diasSemana: number
    fkInstituicao: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
    carga_horaria?: true
    vagas?: true
    fkInstituicao?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
    carga_horaria?: true
    vagas?: true
    fkInstituicao?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    nome?: true
    carga_horaria?: true
    vagas?: true
    status?: true
    dataInicio?: true
    dataFim?: true
    horarioInicio?: true
    horarioFim?: true
    fkInstituicao?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    nome?: true
    carga_horaria?: true
    vagas?: true
    status?: true
    dataInicio?: true
    dataFim?: true
    horarioInicio?: true
    horarioFim?: true
    fkInstituicao?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    nome?: true
    carga_horaria?: true
    vagas?: true
    status?: true
    dataInicio?: true
    dataFim?: true
    horarioInicio?: true
    horarioFim?: true
    diasSemana?: true
    fkInstituicao?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    nome: string
    carga_horaria: number
    vagas: number
    status: $Enums.StatusCurso
    dataInicio: Date
    dataFim: Date
    horarioInicio: Date
    horarioFim: Date
    diasSemana: $Enums.DiasSemana[]
    fkInstituicao: number
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    carga_horaria?: boolean
    vagas?: boolean
    status?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    diasSemana?: boolean
    fkInstituicao?: boolean
    professores?: boolean | Curso$professoresArgs<ExtArgs>
    inscricao?: boolean | Curso$inscricaoArgs<ExtArgs>
    Instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    carga_horaria?: boolean
    vagas?: boolean
    status?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    diasSemana?: boolean
    fkInstituicao?: boolean
    Instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    carga_horaria?: boolean
    vagas?: boolean
    status?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    diasSemana?: boolean
    fkInstituicao?: boolean
    Instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id?: boolean
    nome?: boolean
    carga_horaria?: boolean
    vagas?: boolean
    status?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    diasSemana?: boolean
    fkInstituicao?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "carga_horaria" | "vagas" | "status" | "dataInicio" | "dataFim" | "horarioInicio" | "horarioFim" | "diasSemana" | "fkInstituicao", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | Curso$professoresArgs<ExtArgs>
    inscricao?: boolean | Curso$inscricaoArgs<ExtArgs>
    Instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      professores: Prisma.$AlocacaoProfessorPayload<ExtArgs>[]
      inscricao: Prisma.$InscricaoPayload<ExtArgs>[]
      Instituicao: Prisma.$InstituicaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      carga_horaria: number
      vagas: number
      status: $Enums.StatusCurso
      dataInicio: Date
      dataFim: Date
      horarioInicio: Date
      horarioFim: Date
      diasSemana: $Enums.DiasSemana[]
      fkInstituicao: number
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professores<T extends Curso$professoresArgs<ExtArgs> = {}>(args?: Subset<T, Curso$professoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscricao<T extends Curso$inscricaoArgs<ExtArgs> = {}>(args?: Subset<T, Curso$inscricaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly nome: FieldRef<"Curso", 'String'>
    readonly carga_horaria: FieldRef<"Curso", 'Int'>
    readonly vagas: FieldRef<"Curso", 'Int'>
    readonly status: FieldRef<"Curso", 'StatusCurso'>
    readonly dataInicio: FieldRef<"Curso", 'DateTime'>
    readonly dataFim: FieldRef<"Curso", 'DateTime'>
    readonly horarioInicio: FieldRef<"Curso", 'DateTime'>
    readonly horarioFim: FieldRef<"Curso", 'DateTime'>
    readonly diasSemana: FieldRef<"Curso", 'DiasSemana[]'>
    readonly fkInstituicao: FieldRef<"Curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.professores
   */
  export type Curso$professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    where?: AlocacaoProfessorWhereInput
    orderBy?: AlocacaoProfessorOrderByWithRelationInput | AlocacaoProfessorOrderByWithRelationInput[]
    cursor?: AlocacaoProfessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlocacaoProfessorScalarFieldEnum | AlocacaoProfessorScalarFieldEnum[]
  }

  /**
   * Curso.inscricao
   */
  export type Curso$inscricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model AlocacaoProfessor
   */

  export type AggregateAlocacaoProfessor = {
    _count: AlocacaoProfessorCountAggregateOutputType | null
    _avg: AlocacaoProfessorAvgAggregateOutputType | null
    _sum: AlocacaoProfessorSumAggregateOutputType | null
    _min: AlocacaoProfessorMinAggregateOutputType | null
    _max: AlocacaoProfessorMaxAggregateOutputType | null
  }

  export type AlocacaoProfessorAvgAggregateOutputType = {
    id: number | null
    fkProfessor: number | null
    fkCurso: number | null
    cargaHoraria: number | null
  }

  export type AlocacaoProfessorSumAggregateOutputType = {
    id: number | null
    fkProfessor: number | null
    fkCurso: number | null
    cargaHoraria: number | null
  }

  export type AlocacaoProfessorMinAggregateOutputType = {
    id: number | null
    fkProfessor: number | null
    fkCurso: number | null
    cargaHoraria: number | null
    dataAlocacao: Date | null
  }

  export type AlocacaoProfessorMaxAggregateOutputType = {
    id: number | null
    fkProfessor: number | null
    fkCurso: number | null
    cargaHoraria: number | null
    dataAlocacao: Date | null
  }

  export type AlocacaoProfessorCountAggregateOutputType = {
    id: number
    fkProfessor: number
    fkCurso: number
    cargaHoraria: number
    dataAlocacao: number
    _all: number
  }


  export type AlocacaoProfessorAvgAggregateInputType = {
    id?: true
    fkProfessor?: true
    fkCurso?: true
    cargaHoraria?: true
  }

  export type AlocacaoProfessorSumAggregateInputType = {
    id?: true
    fkProfessor?: true
    fkCurso?: true
    cargaHoraria?: true
  }

  export type AlocacaoProfessorMinAggregateInputType = {
    id?: true
    fkProfessor?: true
    fkCurso?: true
    cargaHoraria?: true
    dataAlocacao?: true
  }

  export type AlocacaoProfessorMaxAggregateInputType = {
    id?: true
    fkProfessor?: true
    fkCurso?: true
    cargaHoraria?: true
    dataAlocacao?: true
  }

  export type AlocacaoProfessorCountAggregateInputType = {
    id?: true
    fkProfessor?: true
    fkCurso?: true
    cargaHoraria?: true
    dataAlocacao?: true
    _all?: true
  }

  export type AlocacaoProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlocacaoProfessor to aggregate.
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProfessors to fetch.
     */
    orderBy?: AlocacaoProfessorOrderByWithRelationInput | AlocacaoProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlocacaoProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProfessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProfessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlocacaoProfessors
    **/
    _count?: true | AlocacaoProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlocacaoProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlocacaoProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlocacaoProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlocacaoProfessorMaxAggregateInputType
  }

  export type GetAlocacaoProfessorAggregateType<T extends AlocacaoProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateAlocacaoProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlocacaoProfessor[P]>
      : GetScalarType<T[P], AggregateAlocacaoProfessor[P]>
  }




  export type AlocacaoProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoProfessorWhereInput
    orderBy?: AlocacaoProfessorOrderByWithAggregationInput | AlocacaoProfessorOrderByWithAggregationInput[]
    by: AlocacaoProfessorScalarFieldEnum[] | AlocacaoProfessorScalarFieldEnum
    having?: AlocacaoProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlocacaoProfessorCountAggregateInputType | true
    _avg?: AlocacaoProfessorAvgAggregateInputType
    _sum?: AlocacaoProfessorSumAggregateInputType
    _min?: AlocacaoProfessorMinAggregateInputType
    _max?: AlocacaoProfessorMaxAggregateInputType
  }

  export type AlocacaoProfessorGroupByOutputType = {
    id: number
    fkProfessor: number
    fkCurso: number
    cargaHoraria: number
    dataAlocacao: Date
    _count: AlocacaoProfessorCountAggregateOutputType | null
    _avg: AlocacaoProfessorAvgAggregateOutputType | null
    _sum: AlocacaoProfessorSumAggregateOutputType | null
    _min: AlocacaoProfessorMinAggregateOutputType | null
    _max: AlocacaoProfessorMaxAggregateOutputType | null
  }

  type GetAlocacaoProfessorGroupByPayload<T extends AlocacaoProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlocacaoProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlocacaoProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlocacaoProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], AlocacaoProfessorGroupByOutputType[P]>
        }
      >
    >


  export type AlocacaoProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fkProfessor?: boolean
    fkCurso?: boolean
    cargaHoraria?: boolean
    dataAlocacao?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alocacaoProfessor"]>

  export type AlocacaoProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fkProfessor?: boolean
    fkCurso?: boolean
    cargaHoraria?: boolean
    dataAlocacao?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alocacaoProfessor"]>

  export type AlocacaoProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fkProfessor?: boolean
    fkCurso?: boolean
    cargaHoraria?: boolean
    dataAlocacao?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alocacaoProfessor"]>

  export type AlocacaoProfessorSelectScalar = {
    id?: boolean
    fkProfessor?: boolean
    fkCurso?: boolean
    cargaHoraria?: boolean
    dataAlocacao?: boolean
  }

  export type AlocacaoProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fkProfessor" | "fkCurso" | "cargaHoraria" | "dataAlocacao", ExtArgs["result"]["alocacaoProfessor"]>
  export type AlocacaoProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type AlocacaoProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type AlocacaoProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $AlocacaoProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlocacaoProfessor"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fkProfessor: number
      fkCurso: number
      cargaHoraria: number
      dataAlocacao: Date
    }, ExtArgs["result"]["alocacaoProfessor"]>
    composites: {}
  }

  type AlocacaoProfessorGetPayload<S extends boolean | null | undefined | AlocacaoProfessorDefaultArgs> = $Result.GetResult<Prisma.$AlocacaoProfessorPayload, S>

  type AlocacaoProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlocacaoProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlocacaoProfessorCountAggregateInputType | true
    }

  export interface AlocacaoProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlocacaoProfessor'], meta: { name: 'AlocacaoProfessor' } }
    /**
     * Find zero or one AlocacaoProfessor that matches the filter.
     * @param {AlocacaoProfessorFindUniqueArgs} args - Arguments to find a AlocacaoProfessor
     * @example
     * // Get one AlocacaoProfessor
     * const alocacaoProfessor = await prisma.alocacaoProfessor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlocacaoProfessorFindUniqueArgs>(args: SelectSubset<T, AlocacaoProfessorFindUniqueArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlocacaoProfessor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlocacaoProfessorFindUniqueOrThrowArgs} args - Arguments to find a AlocacaoProfessor
     * @example
     * // Get one AlocacaoProfessor
     * const alocacaoProfessor = await prisma.alocacaoProfessor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlocacaoProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, AlocacaoProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlocacaoProfessor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorFindFirstArgs} args - Arguments to find a AlocacaoProfessor
     * @example
     * // Get one AlocacaoProfessor
     * const alocacaoProfessor = await prisma.alocacaoProfessor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlocacaoProfessorFindFirstArgs>(args?: SelectSubset<T, AlocacaoProfessorFindFirstArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlocacaoProfessor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorFindFirstOrThrowArgs} args - Arguments to find a AlocacaoProfessor
     * @example
     * // Get one AlocacaoProfessor
     * const alocacaoProfessor = await prisma.alocacaoProfessor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlocacaoProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, AlocacaoProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlocacaoProfessors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlocacaoProfessors
     * const alocacaoProfessors = await prisma.alocacaoProfessor.findMany()
     * 
     * // Get first 10 AlocacaoProfessors
     * const alocacaoProfessors = await prisma.alocacaoProfessor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alocacaoProfessorWithIdOnly = await prisma.alocacaoProfessor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlocacaoProfessorFindManyArgs>(args?: SelectSubset<T, AlocacaoProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlocacaoProfessor.
     * @param {AlocacaoProfessorCreateArgs} args - Arguments to create a AlocacaoProfessor.
     * @example
     * // Create one AlocacaoProfessor
     * const AlocacaoProfessor = await prisma.alocacaoProfessor.create({
     *   data: {
     *     // ... data to create a AlocacaoProfessor
     *   }
     * })
     * 
     */
    create<T extends AlocacaoProfessorCreateArgs>(args: SelectSubset<T, AlocacaoProfessorCreateArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlocacaoProfessors.
     * @param {AlocacaoProfessorCreateManyArgs} args - Arguments to create many AlocacaoProfessors.
     * @example
     * // Create many AlocacaoProfessors
     * const alocacaoProfessor = await prisma.alocacaoProfessor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlocacaoProfessorCreateManyArgs>(args?: SelectSubset<T, AlocacaoProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlocacaoProfessors and returns the data saved in the database.
     * @param {AlocacaoProfessorCreateManyAndReturnArgs} args - Arguments to create many AlocacaoProfessors.
     * @example
     * // Create many AlocacaoProfessors
     * const alocacaoProfessor = await prisma.alocacaoProfessor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlocacaoProfessors and only return the `id`
     * const alocacaoProfessorWithIdOnly = await prisma.alocacaoProfessor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlocacaoProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, AlocacaoProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlocacaoProfessor.
     * @param {AlocacaoProfessorDeleteArgs} args - Arguments to delete one AlocacaoProfessor.
     * @example
     * // Delete one AlocacaoProfessor
     * const AlocacaoProfessor = await prisma.alocacaoProfessor.delete({
     *   where: {
     *     // ... filter to delete one AlocacaoProfessor
     *   }
     * })
     * 
     */
    delete<T extends AlocacaoProfessorDeleteArgs>(args: SelectSubset<T, AlocacaoProfessorDeleteArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlocacaoProfessor.
     * @param {AlocacaoProfessorUpdateArgs} args - Arguments to update one AlocacaoProfessor.
     * @example
     * // Update one AlocacaoProfessor
     * const alocacaoProfessor = await prisma.alocacaoProfessor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlocacaoProfessorUpdateArgs>(args: SelectSubset<T, AlocacaoProfessorUpdateArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlocacaoProfessors.
     * @param {AlocacaoProfessorDeleteManyArgs} args - Arguments to filter AlocacaoProfessors to delete.
     * @example
     * // Delete a few AlocacaoProfessors
     * const { count } = await prisma.alocacaoProfessor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlocacaoProfessorDeleteManyArgs>(args?: SelectSubset<T, AlocacaoProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlocacaoProfessors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlocacaoProfessors
     * const alocacaoProfessor = await prisma.alocacaoProfessor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlocacaoProfessorUpdateManyArgs>(args: SelectSubset<T, AlocacaoProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlocacaoProfessors and returns the data updated in the database.
     * @param {AlocacaoProfessorUpdateManyAndReturnArgs} args - Arguments to update many AlocacaoProfessors.
     * @example
     * // Update many AlocacaoProfessors
     * const alocacaoProfessor = await prisma.alocacaoProfessor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlocacaoProfessors and only return the `id`
     * const alocacaoProfessorWithIdOnly = await prisma.alocacaoProfessor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlocacaoProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, AlocacaoProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlocacaoProfessor.
     * @param {AlocacaoProfessorUpsertArgs} args - Arguments to update or create a AlocacaoProfessor.
     * @example
     * // Update or create a AlocacaoProfessor
     * const alocacaoProfessor = await prisma.alocacaoProfessor.upsert({
     *   create: {
     *     // ... data to create a AlocacaoProfessor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlocacaoProfessor we want to update
     *   }
     * })
     */
    upsert<T extends AlocacaoProfessorUpsertArgs>(args: SelectSubset<T, AlocacaoProfessorUpsertArgs<ExtArgs>>): Prisma__AlocacaoProfessorClient<$Result.GetResult<Prisma.$AlocacaoProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlocacaoProfessors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorCountArgs} args - Arguments to filter AlocacaoProfessors to count.
     * @example
     * // Count the number of AlocacaoProfessors
     * const count = await prisma.alocacaoProfessor.count({
     *   where: {
     *     // ... the filter for the AlocacaoProfessors we want to count
     *   }
     * })
    **/
    count<T extends AlocacaoProfessorCountArgs>(
      args?: Subset<T, AlocacaoProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlocacaoProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlocacaoProfessor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlocacaoProfessorAggregateArgs>(args: Subset<T, AlocacaoProfessorAggregateArgs>): Prisma.PrismaPromise<GetAlocacaoProfessorAggregateType<T>>

    /**
     * Group by AlocacaoProfessor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProfessorGroupByArgs} args - Group by arguments.
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
      T extends AlocacaoProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlocacaoProfessorGroupByArgs['orderBy'] }
        : { orderBy?: AlocacaoProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlocacaoProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlocacaoProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlocacaoProfessor model
   */
  readonly fields: AlocacaoProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlocacaoProfessor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlocacaoProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlocacaoProfessor model
   */
  interface AlocacaoProfessorFieldRefs {
    readonly id: FieldRef<"AlocacaoProfessor", 'Int'>
    readonly fkProfessor: FieldRef<"AlocacaoProfessor", 'Int'>
    readonly fkCurso: FieldRef<"AlocacaoProfessor", 'Int'>
    readonly cargaHoraria: FieldRef<"AlocacaoProfessor", 'Int'>
    readonly dataAlocacao: FieldRef<"AlocacaoProfessor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlocacaoProfessor findUnique
   */
  export type AlocacaoProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * Filter, which AlocacaoProfessor to fetch.
     */
    where: AlocacaoProfessorWhereUniqueInput
  }

  /**
   * AlocacaoProfessor findUniqueOrThrow
   */
  export type AlocacaoProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * Filter, which AlocacaoProfessor to fetch.
     */
    where: AlocacaoProfessorWhereUniqueInput
  }

  /**
   * AlocacaoProfessor findFirst
   */
  export type AlocacaoProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * Filter, which AlocacaoProfessor to fetch.
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProfessors to fetch.
     */
    orderBy?: AlocacaoProfessorOrderByWithRelationInput | AlocacaoProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlocacaoProfessors.
     */
    cursor?: AlocacaoProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProfessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProfessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlocacaoProfessors.
     */
    distinct?: AlocacaoProfessorScalarFieldEnum | AlocacaoProfessorScalarFieldEnum[]
  }

  /**
   * AlocacaoProfessor findFirstOrThrow
   */
  export type AlocacaoProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * Filter, which AlocacaoProfessor to fetch.
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProfessors to fetch.
     */
    orderBy?: AlocacaoProfessorOrderByWithRelationInput | AlocacaoProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlocacaoProfessors.
     */
    cursor?: AlocacaoProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProfessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProfessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlocacaoProfessors.
     */
    distinct?: AlocacaoProfessorScalarFieldEnum | AlocacaoProfessorScalarFieldEnum[]
  }

  /**
   * AlocacaoProfessor findMany
   */
  export type AlocacaoProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * Filter, which AlocacaoProfessors to fetch.
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProfessors to fetch.
     */
    orderBy?: AlocacaoProfessorOrderByWithRelationInput | AlocacaoProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlocacaoProfessors.
     */
    cursor?: AlocacaoProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProfessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProfessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlocacaoProfessors.
     */
    distinct?: AlocacaoProfessorScalarFieldEnum | AlocacaoProfessorScalarFieldEnum[]
  }

  /**
   * AlocacaoProfessor create
   */
  export type AlocacaoProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a AlocacaoProfessor.
     */
    data: XOR<AlocacaoProfessorCreateInput, AlocacaoProfessorUncheckedCreateInput>
  }

  /**
   * AlocacaoProfessor createMany
   */
  export type AlocacaoProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlocacaoProfessors.
     */
    data: AlocacaoProfessorCreateManyInput | AlocacaoProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlocacaoProfessor createManyAndReturn
   */
  export type AlocacaoProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many AlocacaoProfessors.
     */
    data: AlocacaoProfessorCreateManyInput | AlocacaoProfessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlocacaoProfessor update
   */
  export type AlocacaoProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a AlocacaoProfessor.
     */
    data: XOR<AlocacaoProfessorUpdateInput, AlocacaoProfessorUncheckedUpdateInput>
    /**
     * Choose, which AlocacaoProfessor to update.
     */
    where: AlocacaoProfessorWhereUniqueInput
  }

  /**
   * AlocacaoProfessor updateMany
   */
  export type AlocacaoProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlocacaoProfessors.
     */
    data: XOR<AlocacaoProfessorUpdateManyMutationInput, AlocacaoProfessorUncheckedUpdateManyInput>
    /**
     * Filter which AlocacaoProfessors to update
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * Limit how many AlocacaoProfessors to update.
     */
    limit?: number
  }

  /**
   * AlocacaoProfessor updateManyAndReturn
   */
  export type AlocacaoProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * The data used to update AlocacaoProfessors.
     */
    data: XOR<AlocacaoProfessorUpdateManyMutationInput, AlocacaoProfessorUncheckedUpdateManyInput>
    /**
     * Filter which AlocacaoProfessors to update
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * Limit how many AlocacaoProfessors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlocacaoProfessor upsert
   */
  export type AlocacaoProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the AlocacaoProfessor to update in case it exists.
     */
    where: AlocacaoProfessorWhereUniqueInput
    /**
     * In case the AlocacaoProfessor found by the `where` argument doesn't exist, create a new AlocacaoProfessor with this data.
     */
    create: XOR<AlocacaoProfessorCreateInput, AlocacaoProfessorUncheckedCreateInput>
    /**
     * In case the AlocacaoProfessor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlocacaoProfessorUpdateInput, AlocacaoProfessorUncheckedUpdateInput>
  }

  /**
   * AlocacaoProfessor delete
   */
  export type AlocacaoProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
    /**
     * Filter which AlocacaoProfessor to delete.
     */
    where: AlocacaoProfessorWhereUniqueInput
  }

  /**
   * AlocacaoProfessor deleteMany
   */
  export type AlocacaoProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlocacaoProfessors to delete
     */
    where?: AlocacaoProfessorWhereInput
    /**
     * Limit how many AlocacaoProfessors to delete.
     */
    limit?: number
  }

  /**
   * AlocacaoProfessor without action
   */
  export type AlocacaoProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProfessor
     */
    select?: AlocacaoProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProfessor
     */
    omit?: AlocacaoProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Instituicao
   */

  export type AggregateInstituicao = {
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  export type InstituicaoAvgAggregateOutputType = {
    id: number | null
  }

  export type InstituicaoSumAggregateOutputType = {
    id: number | null
  }

  export type InstituicaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cidade: string | null
    campus: string | null
    cnpj: string | null
  }

  export type InstituicaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cidade: string | null
    campus: string | null
    cnpj: string | null
  }

  export type InstituicaoCountAggregateOutputType = {
    id: number
    nome: number
    cidade: number
    campus: number
    cnpj: number
    _all: number
  }


  export type InstituicaoAvgAggregateInputType = {
    id?: true
  }

  export type InstituicaoSumAggregateInputType = {
    id?: true
  }

  export type InstituicaoMinAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    campus?: true
    cnpj?: true
  }

  export type InstituicaoMaxAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    campus?: true
    cnpj?: true
  }

  export type InstituicaoCountAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    campus?: true
    cnpj?: true
    _all?: true
  }

  export type InstituicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicao to aggregate.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instituicaos
    **/
    _count?: true | InstituicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstituicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstituicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituicaoMaxAggregateInputType
  }

  export type GetInstituicaoAggregateType<T extends InstituicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstituicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstituicao[P]>
      : GetScalarType<T[P], AggregateInstituicao[P]>
  }




  export type InstituicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituicaoWhereInput
    orderBy?: InstituicaoOrderByWithAggregationInput | InstituicaoOrderByWithAggregationInput[]
    by: InstituicaoScalarFieldEnum[] | InstituicaoScalarFieldEnum
    having?: InstituicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituicaoCountAggregateInputType | true
    _avg?: InstituicaoAvgAggregateInputType
    _sum?: InstituicaoSumAggregateInputType
    _min?: InstituicaoMinAggregateInputType
    _max?: InstituicaoMaxAggregateInputType
  }

  export type InstituicaoGroupByOutputType = {
    id: number
    nome: string
    cidade: string
    campus: string
    cnpj: string
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  type GetInstituicaoGroupByPayload<T extends InstituicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
            : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
        }
      >
    >


  export type InstituicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cidade?: boolean
    campus?: boolean
    cnpj?: boolean
    cursos?: boolean | Instituicao$cursosArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cidade?: boolean
    campus?: boolean
    cnpj?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cidade?: boolean
    campus?: boolean
    cnpj?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectScalar = {
    id?: boolean
    nome?: boolean
    cidade?: boolean
    campus?: boolean
    cnpj?: boolean
  }

  export type InstituicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cidade" | "campus" | "cnpj", ExtArgs["result"]["instituicao"]>
  export type InstituicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Instituicao$cursosArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstituicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstituicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstituicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instituicao"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cidade: string
      campus: string
      cnpj: string
    }, ExtArgs["result"]["instituicao"]>
    composites: {}
  }

  type InstituicaoGetPayload<S extends boolean | null | undefined | InstituicaoDefaultArgs> = $Result.GetResult<Prisma.$InstituicaoPayload, S>

  type InstituicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstituicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituicaoCountAggregateInputType | true
    }

  export interface InstituicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instituicao'], meta: { name: 'Instituicao' } }
    /**
     * Find zero or one Instituicao that matches the filter.
     * @param {InstituicaoFindUniqueArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstituicaoFindUniqueArgs>(args: SelectSubset<T, InstituicaoFindUniqueArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instituicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstituicaoFindUniqueOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstituicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InstituicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstituicaoFindFirstArgs>(args?: SelectSubset<T, InstituicaoFindFirstArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstituicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InstituicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instituicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instituicaos
     * const instituicaos = await prisma.instituicao.findMany()
     * 
     * // Get first 10 Instituicaos
     * const instituicaos = await prisma.instituicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstituicaoFindManyArgs>(args?: SelectSubset<T, InstituicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instituicao.
     * @param {InstituicaoCreateArgs} args - Arguments to create a Instituicao.
     * @example
     * // Create one Instituicao
     * const Instituicao = await prisma.instituicao.create({
     *   data: {
     *     // ... data to create a Instituicao
     *   }
     * })
     * 
     */
    create<T extends InstituicaoCreateArgs>(args: SelectSubset<T, InstituicaoCreateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instituicaos.
     * @param {InstituicaoCreateManyArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstituicaoCreateManyArgs>(args?: SelectSubset<T, InstituicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instituicaos and returns the data saved in the database.
     * @param {InstituicaoCreateManyAndReturnArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instituicaos and only return the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstituicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InstituicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instituicao.
     * @param {InstituicaoDeleteArgs} args - Arguments to delete one Instituicao.
     * @example
     * // Delete one Instituicao
     * const Instituicao = await prisma.instituicao.delete({
     *   where: {
     *     // ... filter to delete one Instituicao
     *   }
     * })
     * 
     */
    delete<T extends InstituicaoDeleteArgs>(args: SelectSubset<T, InstituicaoDeleteArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instituicao.
     * @param {InstituicaoUpdateArgs} args - Arguments to update one Instituicao.
     * @example
     * // Update one Instituicao
     * const instituicao = await prisma.instituicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstituicaoUpdateArgs>(args: SelectSubset<T, InstituicaoUpdateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instituicaos.
     * @param {InstituicaoDeleteManyArgs} args - Arguments to filter Instituicaos to delete.
     * @example
     * // Delete a few Instituicaos
     * const { count } = await prisma.instituicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstituicaoDeleteManyArgs>(args?: SelectSubset<T, InstituicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstituicaoUpdateManyArgs>(args: SelectSubset<T, InstituicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos and returns the data updated in the database.
     * @param {InstituicaoUpdateManyAndReturnArgs} args - Arguments to update many Instituicaos.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instituicaos and only return the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstituicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InstituicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instituicao.
     * @param {InstituicaoUpsertArgs} args - Arguments to update or create a Instituicao.
     * @example
     * // Update or create a Instituicao
     * const instituicao = await prisma.instituicao.upsert({
     *   create: {
     *     // ... data to create a Instituicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instituicao we want to update
     *   }
     * })
     */
    upsert<T extends InstituicaoUpsertArgs>(args: SelectSubset<T, InstituicaoUpsertArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoCountArgs} args - Arguments to filter Instituicaos to count.
     * @example
     * // Count the number of Instituicaos
     * const count = await prisma.instituicao.count({
     *   where: {
     *     // ... the filter for the Instituicaos we want to count
     *   }
     * })
    **/
    count<T extends InstituicaoCountArgs>(
      args?: Subset<T, InstituicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstituicaoAggregateArgs>(args: Subset<T, InstituicaoAggregateArgs>): Prisma.PrismaPromise<GetInstituicaoAggregateType<T>>

    /**
     * Group by Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoGroupByArgs} args - Group by arguments.
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
      T extends InstituicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstituicaoGroupByArgs['orderBy'] }
        : { orderBy?: InstituicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstituicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instituicao model
   */
  readonly fields: InstituicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instituicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstituicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Instituicao$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instituicao model
   */
  interface InstituicaoFieldRefs {
    readonly id: FieldRef<"Instituicao", 'Int'>
    readonly nome: FieldRef<"Instituicao", 'String'>
    readonly cidade: FieldRef<"Instituicao", 'String'>
    readonly campus: FieldRef<"Instituicao", 'String'>
    readonly cnpj: FieldRef<"Instituicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instituicao findUnique
   */
  export type InstituicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findUniqueOrThrow
   */
  export type InstituicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findFirst
   */
  export type InstituicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findFirstOrThrow
   */
  export type InstituicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findMany
   */
  export type InstituicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicaos to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao create
   */
  export type InstituicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Instituicao.
     */
    data: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
  }

  /**
   * Instituicao createMany
   */
  export type InstituicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao createManyAndReturn
   */
  export type InstituicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao update
   */
  export type InstituicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Instituicao.
     */
    data: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
    /**
     * Choose, which Instituicao to update.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao updateMany
   */
  export type InstituicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao updateManyAndReturn
   */
  export type InstituicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao upsert
   */
  export type InstituicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Instituicao to update in case it exists.
     */
    where: InstituicaoWhereUniqueInput
    /**
     * In case the Instituicao found by the `where` argument doesn't exist, create a new Instituicao with this data.
     */
    create: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
    /**
     * In case the Instituicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
  }

  /**
   * Instituicao delete
   */
  export type InstituicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter which Instituicao to delete.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao deleteMany
   */
  export type InstituicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicaos to delete
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to delete.
     */
    limit?: number
  }

  /**
   * Instituicao.cursos
   */
  export type Instituicao$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Instituicao without action
   */
  export type InstituicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
  }


  /**
   * Model Inscricao
   */

  export type AggregateInscricao = {
    _count: InscricaoCountAggregateOutputType | null
    _avg: InscricaoAvgAggregateOutputType | null
    _sum: InscricaoSumAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  export type InscricaoAvgAggregateOutputType = {
    id: number | null
    fkAluno: number | null
    fkCurso: number | null
  }

  export type InscricaoSumAggregateOutputType = {
    id: number | null
    fkAluno: number | null
    fkCurso: number | null
  }

  export type InscricaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    status: $Enums.StatusInscricao | null
    fkAluno: number | null
    fkCurso: number | null
  }

  export type InscricaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    status: $Enums.StatusInscricao | null
    fkAluno: number | null
    fkCurso: number | null
  }

  export type InscricaoCountAggregateOutputType = {
    id: number
    data: number
    status: number
    fkAluno: number
    fkCurso: number
    _all: number
  }


  export type InscricaoAvgAggregateInputType = {
    id?: true
    fkAluno?: true
    fkCurso?: true
  }

  export type InscricaoSumAggregateInputType = {
    id?: true
    fkAluno?: true
    fkCurso?: true
  }

  export type InscricaoMinAggregateInputType = {
    id?: true
    data?: true
    status?: true
    fkAluno?: true
    fkCurso?: true
  }

  export type InscricaoMaxAggregateInputType = {
    id?: true
    data?: true
    status?: true
    fkAluno?: true
    fkCurso?: true
  }

  export type InscricaoCountAggregateInputType = {
    id?: true
    data?: true
    status?: true
    fkAluno?: true
    fkCurso?: true
    _all?: true
  }

  export type InscricaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricao to aggregate.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscricaos
    **/
    _count?: true | InscricaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscricaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscricaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscricaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscricaoMaxAggregateInputType
  }

  export type GetInscricaoAggregateType<T extends InscricaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInscricao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscricao[P]>
      : GetScalarType<T[P], AggregateInscricao[P]>
  }




  export type InscricaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithAggregationInput | InscricaoOrderByWithAggregationInput[]
    by: InscricaoScalarFieldEnum[] | InscricaoScalarFieldEnum
    having?: InscricaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscricaoCountAggregateInputType | true
    _avg?: InscricaoAvgAggregateInputType
    _sum?: InscricaoSumAggregateInputType
    _min?: InscricaoMinAggregateInputType
    _max?: InscricaoMaxAggregateInputType
  }

  export type InscricaoGroupByOutputType = {
    id: number
    data: Date
    status: $Enums.StatusInscricao
    fkAluno: number
    fkCurso: number
    _count: InscricaoCountAggregateOutputType | null
    _avg: InscricaoAvgAggregateOutputType | null
    _sum: InscricaoSumAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  type GetInscricaoGroupByPayload<T extends InscricaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscricaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscricaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
            : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
        }
      >
    >


  export type InscricaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    status?: boolean
    fkAluno?: boolean
    fkCurso?: boolean
    rendaFamiliar?: boolean | Inscricao$rendaFamiliarArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    status?: boolean
    fkAluno?: boolean
    fkCurso?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    status?: boolean
    fkAluno?: boolean
    fkCurso?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectScalar = {
    id?: boolean
    data?: boolean
    status?: boolean
    fkAluno?: boolean
    fkCurso?: boolean
  }

  export type InscricaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "status" | "fkAluno" | "fkCurso", ExtArgs["result"]["inscricao"]>
  export type InscricaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rendaFamiliar?: boolean | Inscricao$rendaFamiliarArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $InscricaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscricao"
    objects: {
      rendaFamiliar: Prisma.$RendaFamiliarPayload<ExtArgs> | null
      aluno: Prisma.$AlunoPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      status: $Enums.StatusInscricao
      fkAluno: number
      fkCurso: number
    }, ExtArgs["result"]["inscricao"]>
    composites: {}
  }

  type InscricaoGetPayload<S extends boolean | null | undefined | InscricaoDefaultArgs> = $Result.GetResult<Prisma.$InscricaoPayload, S>

  type InscricaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscricaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscricaoCountAggregateInputType | true
    }

  export interface InscricaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscricao'], meta: { name: 'Inscricao' } }
    /**
     * Find zero or one Inscricao that matches the filter.
     * @param {InscricaoFindUniqueArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscricaoFindUniqueArgs>(args: SelectSubset<T, InscricaoFindUniqueArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscricao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscricaoFindUniqueOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscricaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InscricaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscricaoFindFirstArgs>(args?: SelectSubset<T, InscricaoFindFirstArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscricaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InscricaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscricaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscricaos
     * const inscricaos = await prisma.inscricao.findMany()
     * 
     * // Get first 10 Inscricaos
     * const inscricaos = await prisma.inscricao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscricaoFindManyArgs>(args?: SelectSubset<T, InscricaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscricao.
     * @param {InscricaoCreateArgs} args - Arguments to create a Inscricao.
     * @example
     * // Create one Inscricao
     * const Inscricao = await prisma.inscricao.create({
     *   data: {
     *     // ... data to create a Inscricao
     *   }
     * })
     * 
     */
    create<T extends InscricaoCreateArgs>(args: SelectSubset<T, InscricaoCreateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscricaos.
     * @param {InscricaoCreateManyArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscricaoCreateManyArgs>(args?: SelectSubset<T, InscricaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscricaos and returns the data saved in the database.
     * @param {InscricaoCreateManyAndReturnArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscricaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InscricaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscricao.
     * @param {InscricaoDeleteArgs} args - Arguments to delete one Inscricao.
     * @example
     * // Delete one Inscricao
     * const Inscricao = await prisma.inscricao.delete({
     *   where: {
     *     // ... filter to delete one Inscricao
     *   }
     * })
     * 
     */
    delete<T extends InscricaoDeleteArgs>(args: SelectSubset<T, InscricaoDeleteArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscricao.
     * @param {InscricaoUpdateArgs} args - Arguments to update one Inscricao.
     * @example
     * // Update one Inscricao
     * const inscricao = await prisma.inscricao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscricaoUpdateArgs>(args: SelectSubset<T, InscricaoUpdateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscricaos.
     * @param {InscricaoDeleteManyArgs} args - Arguments to filter Inscricaos to delete.
     * @example
     * // Delete a few Inscricaos
     * const { count } = await prisma.inscricao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscricaoDeleteManyArgs>(args?: SelectSubset<T, InscricaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscricaoUpdateManyArgs>(args: SelectSubset<T, InscricaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos and returns the data updated in the database.
     * @param {InscricaoUpdateManyAndReturnArgs} args - Arguments to update many Inscricaos.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InscricaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InscricaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscricao.
     * @param {InscricaoUpsertArgs} args - Arguments to update or create a Inscricao.
     * @example
     * // Update or create a Inscricao
     * const inscricao = await prisma.inscricao.upsert({
     *   create: {
     *     // ... data to create a Inscricao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscricao we want to update
     *   }
     * })
     */
    upsert<T extends InscricaoUpsertArgs>(args: SelectSubset<T, InscricaoUpsertArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoCountArgs} args - Arguments to filter Inscricaos to count.
     * @example
     * // Count the number of Inscricaos
     * const count = await prisma.inscricao.count({
     *   where: {
     *     // ... the filter for the Inscricaos we want to count
     *   }
     * })
    **/
    count<T extends InscricaoCountArgs>(
      args?: Subset<T, InscricaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscricaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscricaoAggregateArgs>(args: Subset<T, InscricaoAggregateArgs>): Prisma.PrismaPromise<GetInscricaoAggregateType<T>>

    /**
     * Group by Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoGroupByArgs} args - Group by arguments.
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
      T extends InscricaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscricaoGroupByArgs['orderBy'] }
        : { orderBy?: InscricaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscricaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscricaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscricao model
   */
  readonly fields: InscricaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscricao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscricaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rendaFamiliar<T extends Inscricao$rendaFamiliarArgs<ExtArgs> = {}>(args?: Subset<T, Inscricao$rendaFamiliarArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inscricao model
   */
  interface InscricaoFieldRefs {
    readonly id: FieldRef<"Inscricao", 'Int'>
    readonly data: FieldRef<"Inscricao", 'DateTime'>
    readonly status: FieldRef<"Inscricao", 'StatusInscricao'>
    readonly fkAluno: FieldRef<"Inscricao", 'Int'>
    readonly fkCurso: FieldRef<"Inscricao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inscricao findUnique
   */
  export type InscricaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findUniqueOrThrow
   */
  export type InscricaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findFirst
   */
  export type InscricaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findFirstOrThrow
   */
  export type InscricaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findMany
   */
  export type InscricaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricaos to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao create
   */
  export type InscricaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscricao.
     */
    data: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
  }

  /**
   * Inscricao createMany
   */
  export type InscricaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscricao createManyAndReturn
   */
  export type InscricaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao update
   */
  export type InscricaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscricao.
     */
    data: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
    /**
     * Choose, which Inscricao to update.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao updateMany
   */
  export type InscricaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to update.
     */
    limit?: number
  }

  /**
   * Inscricao updateManyAndReturn
   */
  export type InscricaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao upsert
   */
  export type InscricaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscricao to update in case it exists.
     */
    where: InscricaoWhereUniqueInput
    /**
     * In case the Inscricao found by the `where` argument doesn't exist, create a new Inscricao with this data.
     */
    create: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
    /**
     * In case the Inscricao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
  }

  /**
   * Inscricao delete
   */
  export type InscricaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter which Inscricao to delete.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao deleteMany
   */
  export type InscricaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricaos to delete
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to delete.
     */
    limit?: number
  }

  /**
   * Inscricao.rendaFamiliar
   */
  export type Inscricao$rendaFamiliarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    where?: RendaFamiliarWhereInput
  }

  /**
   * Inscricao without action
   */
  export type InscricaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
  }


  /**
   * Model Identidade
   */

  export type AggregateIdentidade = {
    _count: IdentidadeCountAggregateOutputType | null
    _avg: IdentidadeAvgAggregateOutputType | null
    _sum: IdentidadeSumAggregateOutputType | null
    _min: IdentidadeMinAggregateOutputType | null
    _max: IdentidadeMaxAggregateOutputType | null
  }

  export type IdentidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type IdentidadeSumAggregateOutputType = {
    id: number | null
  }

  export type IdentidadeMinAggregateOutputType = {
    id: number | null
    rg: string | null
    cpf: string | null
    orgaoEmissor: string | null
    estado: string | null
    dataEmissao: Date | null
  }

  export type IdentidadeMaxAggregateOutputType = {
    id: number | null
    rg: string | null
    cpf: string | null
    orgaoEmissor: string | null
    estado: string | null
    dataEmissao: Date | null
  }

  export type IdentidadeCountAggregateOutputType = {
    id: number
    rg: number
    cpf: number
    orgaoEmissor: number
    estado: number
    dataEmissao: number
    _all: number
  }


  export type IdentidadeAvgAggregateInputType = {
    id?: true
  }

  export type IdentidadeSumAggregateInputType = {
    id?: true
  }

  export type IdentidadeMinAggregateInputType = {
    id?: true
    rg?: true
    cpf?: true
    orgaoEmissor?: true
    estado?: true
    dataEmissao?: true
  }

  export type IdentidadeMaxAggregateInputType = {
    id?: true
    rg?: true
    cpf?: true
    orgaoEmissor?: true
    estado?: true
    dataEmissao?: true
  }

  export type IdentidadeCountAggregateInputType = {
    id?: true
    rg?: true
    cpf?: true
    orgaoEmissor?: true
    estado?: true
    dataEmissao?: true
    _all?: true
  }

  export type IdentidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Identidade to aggregate.
     */
    where?: IdentidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identidades to fetch.
     */
    orderBy?: IdentidadeOrderByWithRelationInput | IdentidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Identidades
    **/
    _count?: true | IdentidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentidadeMaxAggregateInputType
  }

  export type GetIdentidadeAggregateType<T extends IdentidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentidade[P]>
      : GetScalarType<T[P], AggregateIdentidade[P]>
  }




  export type IdentidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentidadeWhereInput
    orderBy?: IdentidadeOrderByWithAggregationInput | IdentidadeOrderByWithAggregationInput[]
    by: IdentidadeScalarFieldEnum[] | IdentidadeScalarFieldEnum
    having?: IdentidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentidadeCountAggregateInputType | true
    _avg?: IdentidadeAvgAggregateInputType
    _sum?: IdentidadeSumAggregateInputType
    _min?: IdentidadeMinAggregateInputType
    _max?: IdentidadeMaxAggregateInputType
  }

  export type IdentidadeGroupByOutputType = {
    id: number
    rg: string
    cpf: string
    orgaoEmissor: string
    estado: string
    dataEmissao: Date
    _count: IdentidadeCountAggregateOutputType | null
    _avg: IdentidadeAvgAggregateOutputType | null
    _sum: IdentidadeSumAggregateOutputType | null
    _min: IdentidadeMinAggregateOutputType | null
    _max: IdentidadeMaxAggregateOutputType | null
  }

  type GetIdentidadeGroupByPayload<T extends IdentidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentidadeGroupByOutputType[P]>
            : GetScalarType<T[P], IdentidadeGroupByOutputType[P]>
        }
      >
    >


  export type IdentidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rg?: boolean
    cpf?: boolean
    orgaoEmissor?: boolean
    estado?: boolean
    dataEmissao?: boolean
    usuario?: boolean | Identidade$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["identidade"]>

  export type IdentidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rg?: boolean
    cpf?: boolean
    orgaoEmissor?: boolean
    estado?: boolean
    dataEmissao?: boolean
  }, ExtArgs["result"]["identidade"]>

  export type IdentidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rg?: boolean
    cpf?: boolean
    orgaoEmissor?: boolean
    estado?: boolean
    dataEmissao?: boolean
  }, ExtArgs["result"]["identidade"]>

  export type IdentidadeSelectScalar = {
    id?: boolean
    rg?: boolean
    cpf?: boolean
    orgaoEmissor?: boolean
    estado?: boolean
    dataEmissao?: boolean
  }

  export type IdentidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rg" | "cpf" | "orgaoEmissor" | "estado" | "dataEmissao", ExtArgs["result"]["identidade"]>
  export type IdentidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Identidade$usuarioArgs<ExtArgs>
  }
  export type IdentidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IdentidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IdentidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Identidade"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rg: string
      cpf: string
      orgaoEmissor: string
      estado: string
      dataEmissao: Date
    }, ExtArgs["result"]["identidade"]>
    composites: {}
  }

  type IdentidadeGetPayload<S extends boolean | null | undefined | IdentidadeDefaultArgs> = $Result.GetResult<Prisma.$IdentidadePayload, S>

  type IdentidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentidadeCountAggregateInputType | true
    }

  export interface IdentidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Identidade'], meta: { name: 'Identidade' } }
    /**
     * Find zero or one Identidade that matches the filter.
     * @param {IdentidadeFindUniqueArgs} args - Arguments to find a Identidade
     * @example
     * // Get one Identidade
     * const identidade = await prisma.identidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentidadeFindUniqueArgs>(args: SelectSubset<T, IdentidadeFindUniqueArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Identidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentidadeFindUniqueOrThrowArgs} args - Arguments to find a Identidade
     * @example
     * // Get one Identidade
     * const identidade = await prisma.identidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Identidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeFindFirstArgs} args - Arguments to find a Identidade
     * @example
     * // Get one Identidade
     * const identidade = await prisma.identidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentidadeFindFirstArgs>(args?: SelectSubset<T, IdentidadeFindFirstArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Identidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeFindFirstOrThrowArgs} args - Arguments to find a Identidade
     * @example
     * // Get one Identidade
     * const identidade = await prisma.identidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Identidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Identidades
     * const identidades = await prisma.identidade.findMany()
     * 
     * // Get first 10 Identidades
     * const identidades = await prisma.identidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identidadeWithIdOnly = await prisma.identidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentidadeFindManyArgs>(args?: SelectSubset<T, IdentidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Identidade.
     * @param {IdentidadeCreateArgs} args - Arguments to create a Identidade.
     * @example
     * // Create one Identidade
     * const Identidade = await prisma.identidade.create({
     *   data: {
     *     // ... data to create a Identidade
     *   }
     * })
     * 
     */
    create<T extends IdentidadeCreateArgs>(args: SelectSubset<T, IdentidadeCreateArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Identidades.
     * @param {IdentidadeCreateManyArgs} args - Arguments to create many Identidades.
     * @example
     * // Create many Identidades
     * const identidade = await prisma.identidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentidadeCreateManyArgs>(args?: SelectSubset<T, IdentidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Identidades and returns the data saved in the database.
     * @param {IdentidadeCreateManyAndReturnArgs} args - Arguments to create many Identidades.
     * @example
     * // Create many Identidades
     * const identidade = await prisma.identidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Identidades and only return the `id`
     * const identidadeWithIdOnly = await prisma.identidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Identidade.
     * @param {IdentidadeDeleteArgs} args - Arguments to delete one Identidade.
     * @example
     * // Delete one Identidade
     * const Identidade = await prisma.identidade.delete({
     *   where: {
     *     // ... filter to delete one Identidade
     *   }
     * })
     * 
     */
    delete<T extends IdentidadeDeleteArgs>(args: SelectSubset<T, IdentidadeDeleteArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Identidade.
     * @param {IdentidadeUpdateArgs} args - Arguments to update one Identidade.
     * @example
     * // Update one Identidade
     * const identidade = await prisma.identidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentidadeUpdateArgs>(args: SelectSubset<T, IdentidadeUpdateArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Identidades.
     * @param {IdentidadeDeleteManyArgs} args - Arguments to filter Identidades to delete.
     * @example
     * // Delete a few Identidades
     * const { count } = await prisma.identidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentidadeDeleteManyArgs>(args?: SelectSubset<T, IdentidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Identidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Identidades
     * const identidade = await prisma.identidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentidadeUpdateManyArgs>(args: SelectSubset<T, IdentidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Identidades and returns the data updated in the database.
     * @param {IdentidadeUpdateManyAndReturnArgs} args - Arguments to update many Identidades.
     * @example
     * // Update many Identidades
     * const identidade = await prisma.identidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Identidades and only return the `id`
     * const identidadeWithIdOnly = await prisma.identidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdentidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Identidade.
     * @param {IdentidadeUpsertArgs} args - Arguments to update or create a Identidade.
     * @example
     * // Update or create a Identidade
     * const identidade = await prisma.identidade.upsert({
     *   create: {
     *     // ... data to create a Identidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Identidade we want to update
     *   }
     * })
     */
    upsert<T extends IdentidadeUpsertArgs>(args: SelectSubset<T, IdentidadeUpsertArgs<ExtArgs>>): Prisma__IdentidadeClient<$Result.GetResult<Prisma.$IdentidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Identidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeCountArgs} args - Arguments to filter Identidades to count.
     * @example
     * // Count the number of Identidades
     * const count = await prisma.identidade.count({
     *   where: {
     *     // ... the filter for the Identidades we want to count
     *   }
     * })
    **/
    count<T extends IdentidadeCountArgs>(
      args?: Subset<T, IdentidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Identidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentidadeAggregateArgs>(args: Subset<T, IdentidadeAggregateArgs>): Prisma.PrismaPromise<GetIdentidadeAggregateType<T>>

    /**
     * Group by Identidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentidadeGroupByArgs} args - Group by arguments.
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
      T extends IdentidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentidadeGroupByArgs['orderBy'] }
        : { orderBy?: IdentidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdentidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Identidade model
   */
  readonly fields: IdentidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Identidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Identidade$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Identidade$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Identidade model
   */
  interface IdentidadeFieldRefs {
    readonly id: FieldRef<"Identidade", 'Int'>
    readonly rg: FieldRef<"Identidade", 'String'>
    readonly cpf: FieldRef<"Identidade", 'String'>
    readonly orgaoEmissor: FieldRef<"Identidade", 'String'>
    readonly estado: FieldRef<"Identidade", 'String'>
    readonly dataEmissao: FieldRef<"Identidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Identidade findUnique
   */
  export type IdentidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * Filter, which Identidade to fetch.
     */
    where: IdentidadeWhereUniqueInput
  }

  /**
   * Identidade findUniqueOrThrow
   */
  export type IdentidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * Filter, which Identidade to fetch.
     */
    where: IdentidadeWhereUniqueInput
  }

  /**
   * Identidade findFirst
   */
  export type IdentidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * Filter, which Identidade to fetch.
     */
    where?: IdentidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identidades to fetch.
     */
    orderBy?: IdentidadeOrderByWithRelationInput | IdentidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Identidades.
     */
    cursor?: IdentidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identidades.
     */
    distinct?: IdentidadeScalarFieldEnum | IdentidadeScalarFieldEnum[]
  }

  /**
   * Identidade findFirstOrThrow
   */
  export type IdentidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * Filter, which Identidade to fetch.
     */
    where?: IdentidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identidades to fetch.
     */
    orderBy?: IdentidadeOrderByWithRelationInput | IdentidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Identidades.
     */
    cursor?: IdentidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identidades.
     */
    distinct?: IdentidadeScalarFieldEnum | IdentidadeScalarFieldEnum[]
  }

  /**
   * Identidade findMany
   */
  export type IdentidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * Filter, which Identidades to fetch.
     */
    where?: IdentidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identidades to fetch.
     */
    orderBy?: IdentidadeOrderByWithRelationInput | IdentidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Identidades.
     */
    cursor?: IdentidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identidades.
     */
    distinct?: IdentidadeScalarFieldEnum | IdentidadeScalarFieldEnum[]
  }

  /**
   * Identidade create
   */
  export type IdentidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Identidade.
     */
    data: XOR<IdentidadeCreateInput, IdentidadeUncheckedCreateInput>
  }

  /**
   * Identidade createMany
   */
  export type IdentidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Identidades.
     */
    data: IdentidadeCreateManyInput | IdentidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Identidade createManyAndReturn
   */
  export type IdentidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Identidades.
     */
    data: IdentidadeCreateManyInput | IdentidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Identidade update
   */
  export type IdentidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Identidade.
     */
    data: XOR<IdentidadeUpdateInput, IdentidadeUncheckedUpdateInput>
    /**
     * Choose, which Identidade to update.
     */
    where: IdentidadeWhereUniqueInput
  }

  /**
   * Identidade updateMany
   */
  export type IdentidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Identidades.
     */
    data: XOR<IdentidadeUpdateManyMutationInput, IdentidadeUncheckedUpdateManyInput>
    /**
     * Filter which Identidades to update
     */
    where?: IdentidadeWhereInput
    /**
     * Limit how many Identidades to update.
     */
    limit?: number
  }

  /**
   * Identidade updateManyAndReturn
   */
  export type IdentidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * The data used to update Identidades.
     */
    data: XOR<IdentidadeUpdateManyMutationInput, IdentidadeUncheckedUpdateManyInput>
    /**
     * Filter which Identidades to update
     */
    where?: IdentidadeWhereInput
    /**
     * Limit how many Identidades to update.
     */
    limit?: number
  }

  /**
   * Identidade upsert
   */
  export type IdentidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Identidade to update in case it exists.
     */
    where: IdentidadeWhereUniqueInput
    /**
     * In case the Identidade found by the `where` argument doesn't exist, create a new Identidade with this data.
     */
    create: XOR<IdentidadeCreateInput, IdentidadeUncheckedCreateInput>
    /**
     * In case the Identidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentidadeUpdateInput, IdentidadeUncheckedUpdateInput>
  }

  /**
   * Identidade delete
   */
  export type IdentidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
    /**
     * Filter which Identidade to delete.
     */
    where: IdentidadeWhereUniqueInput
  }

  /**
   * Identidade deleteMany
   */
  export type IdentidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Identidades to delete
     */
    where?: IdentidadeWhereInput
    /**
     * Limit how many Identidades to delete.
     */
    limit?: number
  }

  /**
   * Identidade.usuario
   */
  export type Identidade$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Identidade without action
   */
  export type IdentidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identidade
     */
    select?: IdentidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identidade
     */
    omit?: IdentidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentidadeInclude<ExtArgs> | null
  }


  /**
   * Model RendaFamiliar
   */

  export type AggregateRendaFamiliar = {
    _count: RendaFamiliarCountAggregateOutputType | null
    _avg: RendaFamiliarAvgAggregateOutputType | null
    _sum: RendaFamiliarSumAggregateOutputType | null
    _min: RendaFamiliarMinAggregateOutputType | null
    _max: RendaFamiliarMaxAggregateOutputType | null
  }

  export type RendaFamiliarAvgAggregateOutputType = {
    id: number | null
    rendaFamiliar: number | null
    numeroPessoas: number | null
    fkInscricao: number | null
  }

  export type RendaFamiliarSumAggregateOutputType = {
    id: number | null
    rendaFamiliar: number | null
    numeroPessoas: number | null
    fkInscricao: number | null
  }

  export type RendaFamiliarMinAggregateOutputType = {
    id: number | null
    rendaFamiliar: number | null
    numeroPessoas: number | null
    fkInscricao: number | null
  }

  export type RendaFamiliarMaxAggregateOutputType = {
    id: number | null
    rendaFamiliar: number | null
    numeroPessoas: number | null
    fkInscricao: number | null
  }

  export type RendaFamiliarCountAggregateOutputType = {
    id: number
    rendaFamiliar: number
    numeroPessoas: number
    fkInscricao: number
    _all: number
  }


  export type RendaFamiliarAvgAggregateInputType = {
    id?: true
    rendaFamiliar?: true
    numeroPessoas?: true
    fkInscricao?: true
  }

  export type RendaFamiliarSumAggregateInputType = {
    id?: true
    rendaFamiliar?: true
    numeroPessoas?: true
    fkInscricao?: true
  }

  export type RendaFamiliarMinAggregateInputType = {
    id?: true
    rendaFamiliar?: true
    numeroPessoas?: true
    fkInscricao?: true
  }

  export type RendaFamiliarMaxAggregateInputType = {
    id?: true
    rendaFamiliar?: true
    numeroPessoas?: true
    fkInscricao?: true
  }

  export type RendaFamiliarCountAggregateInputType = {
    id?: true
    rendaFamiliar?: true
    numeroPessoas?: true
    fkInscricao?: true
    _all?: true
  }

  export type RendaFamiliarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RendaFamiliar to aggregate.
     */
    where?: RendaFamiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendaFamiliars to fetch.
     */
    orderBy?: RendaFamiliarOrderByWithRelationInput | RendaFamiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RendaFamiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendaFamiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendaFamiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RendaFamiliars
    **/
    _count?: true | RendaFamiliarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RendaFamiliarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RendaFamiliarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RendaFamiliarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RendaFamiliarMaxAggregateInputType
  }

  export type GetRendaFamiliarAggregateType<T extends RendaFamiliarAggregateArgs> = {
        [P in keyof T & keyof AggregateRendaFamiliar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRendaFamiliar[P]>
      : GetScalarType<T[P], AggregateRendaFamiliar[P]>
  }




  export type RendaFamiliarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendaFamiliarWhereInput
    orderBy?: RendaFamiliarOrderByWithAggregationInput | RendaFamiliarOrderByWithAggregationInput[]
    by: RendaFamiliarScalarFieldEnum[] | RendaFamiliarScalarFieldEnum
    having?: RendaFamiliarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RendaFamiliarCountAggregateInputType | true
    _avg?: RendaFamiliarAvgAggregateInputType
    _sum?: RendaFamiliarSumAggregateInputType
    _min?: RendaFamiliarMinAggregateInputType
    _max?: RendaFamiliarMaxAggregateInputType
  }

  export type RendaFamiliarGroupByOutputType = {
    id: number
    rendaFamiliar: number
    numeroPessoas: number
    fkInscricao: number
    _count: RendaFamiliarCountAggregateOutputType | null
    _avg: RendaFamiliarAvgAggregateOutputType | null
    _sum: RendaFamiliarSumAggregateOutputType | null
    _min: RendaFamiliarMinAggregateOutputType | null
    _max: RendaFamiliarMaxAggregateOutputType | null
  }

  type GetRendaFamiliarGroupByPayload<T extends RendaFamiliarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RendaFamiliarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RendaFamiliarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RendaFamiliarGroupByOutputType[P]>
            : GetScalarType<T[P], RendaFamiliarGroupByOutputType[P]>
        }
      >
    >


  export type RendaFamiliarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rendaFamiliar?: boolean
    numeroPessoas?: boolean
    fkInscricao?: boolean
    inscricao?: boolean | InscricaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendaFamiliar"]>

  export type RendaFamiliarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rendaFamiliar?: boolean
    numeroPessoas?: boolean
    fkInscricao?: boolean
    inscricao?: boolean | InscricaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendaFamiliar"]>

  export type RendaFamiliarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rendaFamiliar?: boolean
    numeroPessoas?: boolean
    fkInscricao?: boolean
    inscricao?: boolean | InscricaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendaFamiliar"]>

  export type RendaFamiliarSelectScalar = {
    id?: boolean
    rendaFamiliar?: boolean
    numeroPessoas?: boolean
    fkInscricao?: boolean
  }

  export type RendaFamiliarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rendaFamiliar" | "numeroPessoas" | "fkInscricao", ExtArgs["result"]["rendaFamiliar"]>
  export type RendaFamiliarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricao?: boolean | InscricaoDefaultArgs<ExtArgs>
  }
  export type RendaFamiliarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricao?: boolean | InscricaoDefaultArgs<ExtArgs>
  }
  export type RendaFamiliarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricao?: boolean | InscricaoDefaultArgs<ExtArgs>
  }

  export type $RendaFamiliarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RendaFamiliar"
    objects: {
      inscricao: Prisma.$InscricaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rendaFamiliar: number
      numeroPessoas: number
      fkInscricao: number
    }, ExtArgs["result"]["rendaFamiliar"]>
    composites: {}
  }

  type RendaFamiliarGetPayload<S extends boolean | null | undefined | RendaFamiliarDefaultArgs> = $Result.GetResult<Prisma.$RendaFamiliarPayload, S>

  type RendaFamiliarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RendaFamiliarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RendaFamiliarCountAggregateInputType | true
    }

  export interface RendaFamiliarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RendaFamiliar'], meta: { name: 'RendaFamiliar' } }
    /**
     * Find zero or one RendaFamiliar that matches the filter.
     * @param {RendaFamiliarFindUniqueArgs} args - Arguments to find a RendaFamiliar
     * @example
     * // Get one RendaFamiliar
     * const rendaFamiliar = await prisma.rendaFamiliar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RendaFamiliarFindUniqueArgs>(args: SelectSubset<T, RendaFamiliarFindUniqueArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RendaFamiliar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RendaFamiliarFindUniqueOrThrowArgs} args - Arguments to find a RendaFamiliar
     * @example
     * // Get one RendaFamiliar
     * const rendaFamiliar = await prisma.rendaFamiliar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RendaFamiliarFindUniqueOrThrowArgs>(args: SelectSubset<T, RendaFamiliarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RendaFamiliar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarFindFirstArgs} args - Arguments to find a RendaFamiliar
     * @example
     * // Get one RendaFamiliar
     * const rendaFamiliar = await prisma.rendaFamiliar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RendaFamiliarFindFirstArgs>(args?: SelectSubset<T, RendaFamiliarFindFirstArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RendaFamiliar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarFindFirstOrThrowArgs} args - Arguments to find a RendaFamiliar
     * @example
     * // Get one RendaFamiliar
     * const rendaFamiliar = await prisma.rendaFamiliar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RendaFamiliarFindFirstOrThrowArgs>(args?: SelectSubset<T, RendaFamiliarFindFirstOrThrowArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RendaFamiliars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RendaFamiliars
     * const rendaFamiliars = await prisma.rendaFamiliar.findMany()
     * 
     * // Get first 10 RendaFamiliars
     * const rendaFamiliars = await prisma.rendaFamiliar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rendaFamiliarWithIdOnly = await prisma.rendaFamiliar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RendaFamiliarFindManyArgs>(args?: SelectSubset<T, RendaFamiliarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RendaFamiliar.
     * @param {RendaFamiliarCreateArgs} args - Arguments to create a RendaFamiliar.
     * @example
     * // Create one RendaFamiliar
     * const RendaFamiliar = await prisma.rendaFamiliar.create({
     *   data: {
     *     // ... data to create a RendaFamiliar
     *   }
     * })
     * 
     */
    create<T extends RendaFamiliarCreateArgs>(args: SelectSubset<T, RendaFamiliarCreateArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RendaFamiliars.
     * @param {RendaFamiliarCreateManyArgs} args - Arguments to create many RendaFamiliars.
     * @example
     * // Create many RendaFamiliars
     * const rendaFamiliar = await prisma.rendaFamiliar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RendaFamiliarCreateManyArgs>(args?: SelectSubset<T, RendaFamiliarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RendaFamiliars and returns the data saved in the database.
     * @param {RendaFamiliarCreateManyAndReturnArgs} args - Arguments to create many RendaFamiliars.
     * @example
     * // Create many RendaFamiliars
     * const rendaFamiliar = await prisma.rendaFamiliar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RendaFamiliars and only return the `id`
     * const rendaFamiliarWithIdOnly = await prisma.rendaFamiliar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RendaFamiliarCreateManyAndReturnArgs>(args?: SelectSubset<T, RendaFamiliarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RendaFamiliar.
     * @param {RendaFamiliarDeleteArgs} args - Arguments to delete one RendaFamiliar.
     * @example
     * // Delete one RendaFamiliar
     * const RendaFamiliar = await prisma.rendaFamiliar.delete({
     *   where: {
     *     // ... filter to delete one RendaFamiliar
     *   }
     * })
     * 
     */
    delete<T extends RendaFamiliarDeleteArgs>(args: SelectSubset<T, RendaFamiliarDeleteArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RendaFamiliar.
     * @param {RendaFamiliarUpdateArgs} args - Arguments to update one RendaFamiliar.
     * @example
     * // Update one RendaFamiliar
     * const rendaFamiliar = await prisma.rendaFamiliar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RendaFamiliarUpdateArgs>(args: SelectSubset<T, RendaFamiliarUpdateArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RendaFamiliars.
     * @param {RendaFamiliarDeleteManyArgs} args - Arguments to filter RendaFamiliars to delete.
     * @example
     * // Delete a few RendaFamiliars
     * const { count } = await prisma.rendaFamiliar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RendaFamiliarDeleteManyArgs>(args?: SelectSubset<T, RendaFamiliarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RendaFamiliars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RendaFamiliars
     * const rendaFamiliar = await prisma.rendaFamiliar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RendaFamiliarUpdateManyArgs>(args: SelectSubset<T, RendaFamiliarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RendaFamiliars and returns the data updated in the database.
     * @param {RendaFamiliarUpdateManyAndReturnArgs} args - Arguments to update many RendaFamiliars.
     * @example
     * // Update many RendaFamiliars
     * const rendaFamiliar = await prisma.rendaFamiliar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RendaFamiliars and only return the `id`
     * const rendaFamiliarWithIdOnly = await prisma.rendaFamiliar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RendaFamiliarUpdateManyAndReturnArgs>(args: SelectSubset<T, RendaFamiliarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RendaFamiliar.
     * @param {RendaFamiliarUpsertArgs} args - Arguments to update or create a RendaFamiliar.
     * @example
     * // Update or create a RendaFamiliar
     * const rendaFamiliar = await prisma.rendaFamiliar.upsert({
     *   create: {
     *     // ... data to create a RendaFamiliar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RendaFamiliar we want to update
     *   }
     * })
     */
    upsert<T extends RendaFamiliarUpsertArgs>(args: SelectSubset<T, RendaFamiliarUpsertArgs<ExtArgs>>): Prisma__RendaFamiliarClient<$Result.GetResult<Prisma.$RendaFamiliarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RendaFamiliars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarCountArgs} args - Arguments to filter RendaFamiliars to count.
     * @example
     * // Count the number of RendaFamiliars
     * const count = await prisma.rendaFamiliar.count({
     *   where: {
     *     // ... the filter for the RendaFamiliars we want to count
     *   }
     * })
    **/
    count<T extends RendaFamiliarCountArgs>(
      args?: Subset<T, RendaFamiliarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RendaFamiliarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RendaFamiliar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RendaFamiliarAggregateArgs>(args: Subset<T, RendaFamiliarAggregateArgs>): Prisma.PrismaPromise<GetRendaFamiliarAggregateType<T>>

    /**
     * Group by RendaFamiliar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendaFamiliarGroupByArgs} args - Group by arguments.
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
      T extends RendaFamiliarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RendaFamiliarGroupByArgs['orderBy'] }
        : { orderBy?: RendaFamiliarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RendaFamiliarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRendaFamiliarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RendaFamiliar model
   */
  readonly fields: RendaFamiliarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RendaFamiliar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RendaFamiliarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscricao<T extends InscricaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InscricaoDefaultArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RendaFamiliar model
   */
  interface RendaFamiliarFieldRefs {
    readonly id: FieldRef<"RendaFamiliar", 'Int'>
    readonly rendaFamiliar: FieldRef<"RendaFamiliar", 'Float'>
    readonly numeroPessoas: FieldRef<"RendaFamiliar", 'Int'>
    readonly fkInscricao: FieldRef<"RendaFamiliar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RendaFamiliar findUnique
   */
  export type RendaFamiliarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * Filter, which RendaFamiliar to fetch.
     */
    where: RendaFamiliarWhereUniqueInput
  }

  /**
   * RendaFamiliar findUniqueOrThrow
   */
  export type RendaFamiliarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * Filter, which RendaFamiliar to fetch.
     */
    where: RendaFamiliarWhereUniqueInput
  }

  /**
   * RendaFamiliar findFirst
   */
  export type RendaFamiliarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * Filter, which RendaFamiliar to fetch.
     */
    where?: RendaFamiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendaFamiliars to fetch.
     */
    orderBy?: RendaFamiliarOrderByWithRelationInput | RendaFamiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RendaFamiliars.
     */
    cursor?: RendaFamiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendaFamiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendaFamiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendaFamiliars.
     */
    distinct?: RendaFamiliarScalarFieldEnum | RendaFamiliarScalarFieldEnum[]
  }

  /**
   * RendaFamiliar findFirstOrThrow
   */
  export type RendaFamiliarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * Filter, which RendaFamiliar to fetch.
     */
    where?: RendaFamiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendaFamiliars to fetch.
     */
    orderBy?: RendaFamiliarOrderByWithRelationInput | RendaFamiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RendaFamiliars.
     */
    cursor?: RendaFamiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendaFamiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendaFamiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendaFamiliars.
     */
    distinct?: RendaFamiliarScalarFieldEnum | RendaFamiliarScalarFieldEnum[]
  }

  /**
   * RendaFamiliar findMany
   */
  export type RendaFamiliarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * Filter, which RendaFamiliars to fetch.
     */
    where?: RendaFamiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendaFamiliars to fetch.
     */
    orderBy?: RendaFamiliarOrderByWithRelationInput | RendaFamiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RendaFamiliars.
     */
    cursor?: RendaFamiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendaFamiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendaFamiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendaFamiliars.
     */
    distinct?: RendaFamiliarScalarFieldEnum | RendaFamiliarScalarFieldEnum[]
  }

  /**
   * RendaFamiliar create
   */
  export type RendaFamiliarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * The data needed to create a RendaFamiliar.
     */
    data: XOR<RendaFamiliarCreateInput, RendaFamiliarUncheckedCreateInput>
  }

  /**
   * RendaFamiliar createMany
   */
  export type RendaFamiliarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RendaFamiliars.
     */
    data: RendaFamiliarCreateManyInput | RendaFamiliarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RendaFamiliar createManyAndReturn
   */
  export type RendaFamiliarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * The data used to create many RendaFamiliars.
     */
    data: RendaFamiliarCreateManyInput | RendaFamiliarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RendaFamiliar update
   */
  export type RendaFamiliarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * The data needed to update a RendaFamiliar.
     */
    data: XOR<RendaFamiliarUpdateInput, RendaFamiliarUncheckedUpdateInput>
    /**
     * Choose, which RendaFamiliar to update.
     */
    where: RendaFamiliarWhereUniqueInput
  }

  /**
   * RendaFamiliar updateMany
   */
  export type RendaFamiliarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RendaFamiliars.
     */
    data: XOR<RendaFamiliarUpdateManyMutationInput, RendaFamiliarUncheckedUpdateManyInput>
    /**
     * Filter which RendaFamiliars to update
     */
    where?: RendaFamiliarWhereInput
    /**
     * Limit how many RendaFamiliars to update.
     */
    limit?: number
  }

  /**
   * RendaFamiliar updateManyAndReturn
   */
  export type RendaFamiliarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * The data used to update RendaFamiliars.
     */
    data: XOR<RendaFamiliarUpdateManyMutationInput, RendaFamiliarUncheckedUpdateManyInput>
    /**
     * Filter which RendaFamiliars to update
     */
    where?: RendaFamiliarWhereInput
    /**
     * Limit how many RendaFamiliars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RendaFamiliar upsert
   */
  export type RendaFamiliarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * The filter to search for the RendaFamiliar to update in case it exists.
     */
    where: RendaFamiliarWhereUniqueInput
    /**
     * In case the RendaFamiliar found by the `where` argument doesn't exist, create a new RendaFamiliar with this data.
     */
    create: XOR<RendaFamiliarCreateInput, RendaFamiliarUncheckedCreateInput>
    /**
     * In case the RendaFamiliar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RendaFamiliarUpdateInput, RendaFamiliarUncheckedUpdateInput>
  }

  /**
   * RendaFamiliar delete
   */
  export type RendaFamiliarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
    /**
     * Filter which RendaFamiliar to delete.
     */
    where: RendaFamiliarWhereUniqueInput
  }

  /**
   * RendaFamiliar deleteMany
   */
  export type RendaFamiliarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RendaFamiliars to delete
     */
    where?: RendaFamiliarWhereInput
    /**
     * Limit how many RendaFamiliars to delete.
     */
    limit?: number
  }

  /**
   * RendaFamiliar without action
   */
  export type RendaFamiliarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendaFamiliar
     */
    select?: RendaFamiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendaFamiliar
     */
    omit?: RendaFamiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendaFamiliarInclude<ExtArgs> | null
  }


  /**
   * Model Auditoria
   */

  export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaAvgAggregateOutputType = {
    id: number | null
    idModificado: number | null
    fkUsuario: number | null
  }

  export type AuditoriaSumAggregateOutputType = {
    id: number | null
    idModificado: number | null
    fkUsuario: number | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id: number | null
    tabelaModificada: string | null
    acaoRealizada: $Enums.Acao | null
    idModificado: number | null
    fkUsuario: number | null
    dataModificacao: Date | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id: number | null
    tabelaModificada: string | null
    acaoRealizada: $Enums.Acao | null
    idModificado: number | null
    fkUsuario: number | null
    dataModificacao: Date | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id: number
    tabelaModificada: number
    acaoRealizada: number
    idModificado: number
    dadosAntigos: number
    dadosInseridos: number
    fkUsuario: number
    dataModificacao: number
    _all: number
  }


  export type AuditoriaAvgAggregateInputType = {
    id?: true
    idModificado?: true
    fkUsuario?: true
  }

  export type AuditoriaSumAggregateInputType = {
    id?: true
    idModificado?: true
    fkUsuario?: true
  }

  export type AuditoriaMinAggregateInputType = {
    id?: true
    tabelaModificada?: true
    acaoRealizada?: true
    idModificado?: true
    fkUsuario?: true
    dataModificacao?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id?: true
    tabelaModificada?: true
    acaoRealizada?: true
    idModificado?: true
    fkUsuario?: true
    dataModificacao?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id?: true
    tabelaModificada?: true
    acaoRealizada?: true
    idModificado?: true
    dadosAntigos?: true
    dadosInseridos?: true
    fkUsuario?: true
    dataModificacao?: true
    _all?: true
  }

  export type AuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditoria to aggregate.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auditorias
    **/
    _count?: true | AuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaMaxAggregateInputType
  }

  export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoria[P]>
      : GetScalarType<T[P], AggregateAuditoria[P]>
  }




  export type AuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithAggregationInput | AuditoriaOrderByWithAggregationInput[]
    by: AuditoriaScalarFieldEnum[] | AuditoriaScalarFieldEnum
    having?: AuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaCountAggregateInputType | true
    _avg?: AuditoriaAvgAggregateInputType
    _sum?: AuditoriaSumAggregateInputType
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id: number
    tabelaModificada: string
    acaoRealizada: $Enums.Acao
    idModificado: number
    dadosAntigos: JsonValue | null
    dadosInseridos: JsonValue | null
    fkUsuario: number | null
    dataModificacao: Date
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  type GetAuditoriaGroupByPayload<T extends AuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type AuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabelaModificada?: boolean
    acaoRealizada?: boolean
    idModificado?: boolean
    dadosAntigos?: boolean
    dadosInseridos?: boolean
    fkUsuario?: boolean
    dataModificacao?: boolean
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabelaModificada?: boolean
    acaoRealizada?: boolean
    idModificado?: boolean
    dadosAntigos?: boolean
    dadosInseridos?: boolean
    fkUsuario?: boolean
    dataModificacao?: boolean
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabelaModificada?: boolean
    acaoRealizada?: boolean
    idModificado?: boolean
    dadosAntigos?: boolean
    dadosInseridos?: boolean
    fkUsuario?: boolean
    dataModificacao?: boolean
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectScalar = {
    id?: boolean
    tabelaModificada?: boolean
    acaoRealizada?: boolean
    idModificado?: boolean
    dadosAntigos?: boolean
    dadosInseridos?: boolean
    fkUsuario?: boolean
    dataModificacao?: boolean
  }

  export type AuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabelaModificada" | "acaoRealizada" | "idModificado" | "dadosAntigos" | "dadosInseridos" | "fkUsuario" | "dataModificacao", ExtArgs["result"]["auditoria"]>

  export type $AuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auditoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tabelaModificada: string
      acaoRealizada: $Enums.Acao
      idModificado: number
      dadosAntigos: Prisma.JsonValue | null
      dadosInseridos: Prisma.JsonValue | null
      fkUsuario: number | null
      dataModificacao: Date
    }, ExtArgs["result"]["auditoria"]>
    composites: {}
  }

  type AuditoriaGetPayload<S extends boolean | null | undefined | AuditoriaDefaultArgs> = $Result.GetResult<Prisma.$AuditoriaPayload, S>

  type AuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaCountAggregateInputType | true
    }

  export interface AuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auditoria'], meta: { name: 'Auditoria' } }
    /**
     * Find zero or one Auditoria that matches the filter.
     * @param {AuditoriaFindUniqueArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditoriaFindUniqueArgs>(args: SelectSubset<T, AuditoriaFindUniqueArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditoriaFindUniqueOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditoriaFindFirstArgs>(args?: SelectSubset<T, AuditoriaFindFirstArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditorias
     * const auditorias = await prisma.auditoria.findMany()
     * 
     * // Get first 10 Auditorias
     * const auditorias = await prisma.auditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditoriaFindManyArgs>(args?: SelectSubset<T, AuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auditoria.
     * @param {AuditoriaCreateArgs} args - Arguments to create a Auditoria.
     * @example
     * // Create one Auditoria
     * const Auditoria = await prisma.auditoria.create({
     *   data: {
     *     // ... data to create a Auditoria
     *   }
     * })
     * 
     */
    create<T extends AuditoriaCreateArgs>(args: SelectSubset<T, AuditoriaCreateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auditorias.
     * @param {AuditoriaCreateManyArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditoriaCreateManyArgs>(args?: SelectSubset<T, AuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auditorias and returns the data saved in the database.
     * @param {AuditoriaCreateManyAndReturnArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auditoria.
     * @param {AuditoriaDeleteArgs} args - Arguments to delete one Auditoria.
     * @example
     * // Delete one Auditoria
     * const Auditoria = await prisma.auditoria.delete({
     *   where: {
     *     // ... filter to delete one Auditoria
     *   }
     * })
     * 
     */
    delete<T extends AuditoriaDeleteArgs>(args: SelectSubset<T, AuditoriaDeleteArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auditoria.
     * @param {AuditoriaUpdateArgs} args - Arguments to update one Auditoria.
     * @example
     * // Update one Auditoria
     * const auditoria = await prisma.auditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditoriaUpdateArgs>(args: SelectSubset<T, AuditoriaUpdateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auditorias.
     * @param {AuditoriaDeleteManyArgs} args - Arguments to filter Auditorias to delete.
     * @example
     * // Delete a few Auditorias
     * const { count } = await prisma.auditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditoriaDeleteManyArgs>(args?: SelectSubset<T, AuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditoriaUpdateManyArgs>(args: SelectSubset<T, AuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias and returns the data updated in the database.
     * @param {AuditoriaUpdateManyAndReturnArgs} args - Arguments to update many Auditorias.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auditoria.
     * @param {AuditoriaUpsertArgs} args - Arguments to update or create a Auditoria.
     * @example
     * // Update or create a Auditoria
     * const auditoria = await prisma.auditoria.upsert({
     *   create: {
     *     // ... data to create a Auditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditoria we want to update
     *   }
     * })
     */
    upsert<T extends AuditoriaUpsertArgs>(args: SelectSubset<T, AuditoriaUpsertArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaCountArgs} args - Arguments to filter Auditorias to count.
     * @example
     * // Count the number of Auditorias
     * const count = await prisma.auditoria.count({
     *   where: {
     *     // ... the filter for the Auditorias we want to count
     *   }
     * })
    **/
    count<T extends AuditoriaCountArgs>(
      args?: Subset<T, AuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditoriaAggregateArgs>(args: Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>

    /**
     * Group by Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaGroupByArgs} args - Group by arguments.
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
      T extends AuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: AuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auditoria model
   */
  readonly fields: AuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Auditoria model
   */
  interface AuditoriaFieldRefs {
    readonly id: FieldRef<"Auditoria", 'Int'>
    readonly tabelaModificada: FieldRef<"Auditoria", 'String'>
    readonly acaoRealizada: FieldRef<"Auditoria", 'Acao'>
    readonly idModificado: FieldRef<"Auditoria", 'Int'>
    readonly dadosAntigos: FieldRef<"Auditoria", 'Json'>
    readonly dadosInseridos: FieldRef<"Auditoria", 'Json'>
    readonly fkUsuario: FieldRef<"Auditoria", 'Int'>
    readonly dataModificacao: FieldRef<"Auditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auditoria findUnique
   */
  export type AuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findUniqueOrThrow
   */
  export type AuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findFirst
   */
  export type AuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findFirstOrThrow
   */
  export type AuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findMany
   */
  export type AuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Filter, which Auditorias to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria create
   */
  export type AuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a Auditoria.
     */
    data: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
  }

  /**
   * Auditoria createMany
   */
  export type AuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auditoria createManyAndReturn
   */
  export type AuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auditoria update
   */
  export type AuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a Auditoria.
     */
    data: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
    /**
     * Choose, which Auditoria to update.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria updateMany
   */
  export type AuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
  }

  /**
   * Auditoria updateManyAndReturn
   */
  export type AuditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
  }

  /**
   * Auditoria upsert
   */
  export type AuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the Auditoria to update in case it exists.
     */
    where: AuditoriaWhereUniqueInput
    /**
     * In case the Auditoria found by the `where` argument doesn't exist, create a new Auditoria with this data.
     */
    create: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
    /**
     * In case the Auditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
  }

  /**
   * Auditoria delete
   */
  export type AuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Filter which Auditoria to delete.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria deleteMany
   */
  export type AuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditorias to delete
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to delete.
     */
    limit?: number
  }

  /**
   * Auditoria without action
   */
  export type AuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
  }


  /**
   * Model Cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    id: number | null
  }

  export type CargoSumAggregateOutputType = {
    id: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: number | null
    cargo: string | null
    desc: string | null
  }

  export type CargoMaxAggregateOutputType = {
    id: number | null
    cargo: string | null
    desc: string | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    cargo: number
    desc: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    id?: true
  }

  export type CargoSumAggregateInputType = {
    id?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    cargo?: true
    desc?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    cargo?: true
    desc?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    cargo?: true
    desc?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargo to aggregate.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type CargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithAggregationInput | CargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: CargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: number
    cargo: string
    desc: string | null
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type CargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    desc?: boolean
    usuario?: boolean | Cargo$usuarioArgs<ExtArgs>
    permissoes?: boolean | Cargo$permissoesArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    desc?: boolean
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    desc?: boolean
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectScalar = {
    id?: boolean
    cargo?: boolean
    desc?: boolean
  }

  export type CargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargo" | "desc", ExtArgs["result"]["cargo"]>
  export type CargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Cargo$usuarioArgs<ExtArgs>
    permissoes?: boolean | Cargo$permissoesArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CargoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CargoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>[]
      permissoes: Prisma.$PermissoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cargo: string
      desc: string | null
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = $Result.GetResult<Prisma.$CargoPayload, S>

  type CargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface CargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargo'], meta: { name: 'Cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {CargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoFindUniqueArgs>(args: SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoFindFirstArgs>(args?: SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargoFindManyArgs>(args?: SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {CargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends CargoCreateArgs>(args: SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoCreateManyArgs>(args?: SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cargos and returns the data saved in the database.
     * @param {CargoCreateManyAndReturnArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargoCreateManyAndReturnArgs>(args?: SelectSubset<T, CargoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cargo.
     * @param {CargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends CargoDeleteArgs>(args: SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {CargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoUpdateArgs>(args: SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoDeleteManyArgs>(args?: SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoUpdateManyArgs>(args: SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos and returns the data updated in the database.
     * @param {CargoUpdateManyAndReturnArgs} args - Arguments to update many Cargos.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CargoUpdateManyAndReturnArgs>(args: SelectSubset<T, CargoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cargo.
     * @param {CargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends CargoUpsertArgs>(args: SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargoCountArgs>(
      args?: Subset<T, CargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoGroupByArgs} args - Group by arguments.
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
      T extends CargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoGroupByArgs['orderBy'] }
        : { orderBy?: CargoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargo model
   */
  readonly fields: CargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Cargo$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissoes<T extends Cargo$permissoesArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$permissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cargo model
   */
  interface CargoFieldRefs {
    readonly id: FieldRef<"Cargo", 'Int'>
    readonly cargo: FieldRef<"Cargo", 'String'>
    readonly desc: FieldRef<"Cargo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cargo findUnique
   */
  export type CargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findUniqueOrThrow
   */
  export type CargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findFirst
   */
  export type CargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findFirstOrThrow
   */
  export type CargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findMany
   */
  export type CargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo create
   */
  export type CargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargo.
     */
    data: XOR<CargoCreateInput, CargoUncheckedCreateInput>
  }

  /**
   * Cargo createMany
   */
  export type CargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo createManyAndReturn
   */
  export type CargoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo update
   */
  export type CargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargo.
     */
    data: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
    /**
     * Choose, which Cargo to update.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo updateMany
   */
  export type CargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo updateManyAndReturn
   */
  export type CargoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo upsert
   */
  export type CargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargo to update in case it exists.
     */
    where: CargoWhereUniqueInput
    /**
     * In case the Cargo found by the `where` argument doesn't exist, create a new Cargo with this data.
     */
    create: XOR<CargoCreateInput, CargoUncheckedCreateInput>
    /**
     * In case the Cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
  }

  /**
   * Cargo delete
   */
  export type CargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter which Cargo to delete.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo deleteMany
   */
  export type CargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargo.usuario
   */
  export type Cargo$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Cargo.permissoes
   */
  export type Cargo$permissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    where?: PermissoesWhereInput
    orderBy?: PermissoesOrderByWithRelationInput | PermissoesOrderByWithRelationInput[]
    cursor?: PermissoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissoesScalarFieldEnum | PermissoesScalarFieldEnum[]
  }

  /**
   * Cargo without action
   */
  export type CargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
  }


  /**
   * Model Permissoes
   */

  export type AggregatePermissoes = {
    _count: PermissoesCountAggregateOutputType | null
    _avg: PermissoesAvgAggregateOutputType | null
    _sum: PermissoesSumAggregateOutputType | null
    _min: PermissoesMinAggregateOutputType | null
    _max: PermissoesMaxAggregateOutputType | null
  }

  export type PermissoesAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissoesSumAggregateOutputType = {
    id: number | null
  }

  export type PermissoesMinAggregateOutputType = {
    id: number | null
    permissao: string | null
    desc: string | null
  }

  export type PermissoesMaxAggregateOutputType = {
    id: number | null
    permissao: string | null
    desc: string | null
  }

  export type PermissoesCountAggregateOutputType = {
    id: number
    permissao: number
    desc: number
    _all: number
  }


  export type PermissoesAvgAggregateInputType = {
    id?: true
  }

  export type PermissoesSumAggregateInputType = {
    id?: true
  }

  export type PermissoesMinAggregateInputType = {
    id?: true
    permissao?: true
    desc?: true
  }

  export type PermissoesMaxAggregateInputType = {
    id?: true
    permissao?: true
    desc?: true
  }

  export type PermissoesCountAggregateInputType = {
    id?: true
    permissao?: true
    desc?: true
    _all?: true
  }

  export type PermissoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissoes to aggregate.
     */
    where?: PermissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissoes to fetch.
     */
    orderBy?: PermissoesOrderByWithRelationInput | PermissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissoes
    **/
    _count?: true | PermissoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissoesMaxAggregateInputType
  }

  export type GetPermissoesAggregateType<T extends PermissoesAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissoes[P]>
      : GetScalarType<T[P], AggregatePermissoes[P]>
  }




  export type PermissoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissoesWhereInput
    orderBy?: PermissoesOrderByWithAggregationInput | PermissoesOrderByWithAggregationInput[]
    by: PermissoesScalarFieldEnum[] | PermissoesScalarFieldEnum
    having?: PermissoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissoesCountAggregateInputType | true
    _avg?: PermissoesAvgAggregateInputType
    _sum?: PermissoesSumAggregateInputType
    _min?: PermissoesMinAggregateInputType
    _max?: PermissoesMaxAggregateInputType
  }

  export type PermissoesGroupByOutputType = {
    id: number
    permissao: string
    desc: string | null
    _count: PermissoesCountAggregateOutputType | null
    _avg: PermissoesAvgAggregateOutputType | null
    _sum: PermissoesSumAggregateOutputType | null
    _min: PermissoesMinAggregateOutputType | null
    _max: PermissoesMaxAggregateOutputType | null
  }

  type GetPermissoesGroupByPayload<T extends PermissoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissoesGroupByOutputType[P]>
            : GetScalarType<T[P], PermissoesGroupByOutputType[P]>
        }
      >
    >


  export type PermissoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissao?: boolean
    desc?: boolean
    cargo?: boolean | Permissoes$cargoArgs<ExtArgs>
    _count?: boolean | PermissoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissoes"]>

  export type PermissoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissao?: boolean
    desc?: boolean
  }, ExtArgs["result"]["permissoes"]>

  export type PermissoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissao?: boolean
    desc?: boolean
  }, ExtArgs["result"]["permissoes"]>

  export type PermissoesSelectScalar = {
    id?: boolean
    permissao?: boolean
    desc?: boolean
  }

  export type PermissoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "permissao" | "desc", ExtArgs["result"]["permissoes"]>
  export type PermissoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | Permissoes$cargoArgs<ExtArgs>
    _count?: boolean | PermissoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissoes"
    objects: {
      cargo: Prisma.$CargoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      permissao: string
      desc: string | null
    }, ExtArgs["result"]["permissoes"]>
    composites: {}
  }

  type PermissoesGetPayload<S extends boolean | null | undefined | PermissoesDefaultArgs> = $Result.GetResult<Prisma.$PermissoesPayload, S>

  type PermissoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissoesCountAggregateInputType | true
    }

  export interface PermissoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissoes'], meta: { name: 'Permissoes' } }
    /**
     * Find zero or one Permissoes that matches the filter.
     * @param {PermissoesFindUniqueArgs} args - Arguments to find a Permissoes
     * @example
     * // Get one Permissoes
     * const permissoes = await prisma.permissoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissoesFindUniqueArgs>(args: SelectSubset<T, PermissoesFindUniqueArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissoesFindUniqueOrThrowArgs} args - Arguments to find a Permissoes
     * @example
     * // Get one Permissoes
     * const permissoes = await prisma.permissoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissoesFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesFindFirstArgs} args - Arguments to find a Permissoes
     * @example
     * // Get one Permissoes
     * const permissoes = await prisma.permissoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissoesFindFirstArgs>(args?: SelectSubset<T, PermissoesFindFirstArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesFindFirstOrThrowArgs} args - Arguments to find a Permissoes
     * @example
     * // Get one Permissoes
     * const permissoes = await prisma.permissoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissoesFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissoes
     * const permissoes = await prisma.permissoes.findMany()
     * 
     * // Get first 10 Permissoes
     * const permissoes = await prisma.permissoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissoesWithIdOnly = await prisma.permissoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissoesFindManyArgs>(args?: SelectSubset<T, PermissoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissoes.
     * @param {PermissoesCreateArgs} args - Arguments to create a Permissoes.
     * @example
     * // Create one Permissoes
     * const Permissoes = await prisma.permissoes.create({
     *   data: {
     *     // ... data to create a Permissoes
     *   }
     * })
     * 
     */
    create<T extends PermissoesCreateArgs>(args: SelectSubset<T, PermissoesCreateArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissoes.
     * @param {PermissoesCreateManyArgs} args - Arguments to create many Permissoes.
     * @example
     * // Create many Permissoes
     * const permissoes = await prisma.permissoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissoesCreateManyArgs>(args?: SelectSubset<T, PermissoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissoes and returns the data saved in the database.
     * @param {PermissoesCreateManyAndReturnArgs} args - Arguments to create many Permissoes.
     * @example
     * // Create many Permissoes
     * const permissoes = await prisma.permissoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissoes and only return the `id`
     * const permissoesWithIdOnly = await prisma.permissoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissoesCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permissoes.
     * @param {PermissoesDeleteArgs} args - Arguments to delete one Permissoes.
     * @example
     * // Delete one Permissoes
     * const Permissoes = await prisma.permissoes.delete({
     *   where: {
     *     // ... filter to delete one Permissoes
     *   }
     * })
     * 
     */
    delete<T extends PermissoesDeleteArgs>(args: SelectSubset<T, PermissoesDeleteArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissoes.
     * @param {PermissoesUpdateArgs} args - Arguments to update one Permissoes.
     * @example
     * // Update one Permissoes
     * const permissoes = await prisma.permissoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissoesUpdateArgs>(args: SelectSubset<T, PermissoesUpdateArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissoes.
     * @param {PermissoesDeleteManyArgs} args - Arguments to filter Permissoes to delete.
     * @example
     * // Delete a few Permissoes
     * const { count } = await prisma.permissoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissoesDeleteManyArgs>(args?: SelectSubset<T, PermissoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissoes
     * const permissoes = await prisma.permissoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissoesUpdateManyArgs>(args: SelectSubset<T, PermissoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissoes and returns the data updated in the database.
     * @param {PermissoesUpdateManyAndReturnArgs} args - Arguments to update many Permissoes.
     * @example
     * // Update many Permissoes
     * const permissoes = await prisma.permissoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissoes and only return the `id`
     * const permissoesWithIdOnly = await prisma.permissoes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissoesUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permissoes.
     * @param {PermissoesUpsertArgs} args - Arguments to update or create a Permissoes.
     * @example
     * // Update or create a Permissoes
     * const permissoes = await prisma.permissoes.upsert({
     *   create: {
     *     // ... data to create a Permissoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissoes we want to update
     *   }
     * })
     */
    upsert<T extends PermissoesUpsertArgs>(args: SelectSubset<T, PermissoesUpsertArgs<ExtArgs>>): Prisma__PermissoesClient<$Result.GetResult<Prisma.$PermissoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesCountArgs} args - Arguments to filter Permissoes to count.
     * @example
     * // Count the number of Permissoes
     * const count = await prisma.permissoes.count({
     *   where: {
     *     // ... the filter for the Permissoes we want to count
     *   }
     * })
    **/
    count<T extends PermissoesCountArgs>(
      args?: Subset<T, PermissoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissoesAggregateArgs>(args: Subset<T, PermissoesAggregateArgs>): Prisma.PrismaPromise<GetPermissoesAggregateType<T>>

    /**
     * Group by Permissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissoesGroupByArgs} args - Group by arguments.
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
      T extends PermissoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissoesGroupByArgs['orderBy'] }
        : { orderBy?: PermissoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissoes model
   */
  readonly fields: PermissoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargo<T extends Permissoes$cargoArgs<ExtArgs> = {}>(args?: Subset<T, Permissoes$cargoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permissoes model
   */
  interface PermissoesFieldRefs {
    readonly id: FieldRef<"Permissoes", 'Int'>
    readonly permissao: FieldRef<"Permissoes", 'String'>
    readonly desc: FieldRef<"Permissoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permissoes findUnique
   */
  export type PermissoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * Filter, which Permissoes to fetch.
     */
    where: PermissoesWhereUniqueInput
  }

  /**
   * Permissoes findUniqueOrThrow
   */
  export type PermissoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * Filter, which Permissoes to fetch.
     */
    where: PermissoesWhereUniqueInput
  }

  /**
   * Permissoes findFirst
   */
  export type PermissoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * Filter, which Permissoes to fetch.
     */
    where?: PermissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissoes to fetch.
     */
    orderBy?: PermissoesOrderByWithRelationInput | PermissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissoes.
     */
    cursor?: PermissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissoes.
     */
    distinct?: PermissoesScalarFieldEnum | PermissoesScalarFieldEnum[]
  }

  /**
   * Permissoes findFirstOrThrow
   */
  export type PermissoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * Filter, which Permissoes to fetch.
     */
    where?: PermissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissoes to fetch.
     */
    orderBy?: PermissoesOrderByWithRelationInput | PermissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissoes.
     */
    cursor?: PermissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissoes.
     */
    distinct?: PermissoesScalarFieldEnum | PermissoesScalarFieldEnum[]
  }

  /**
   * Permissoes findMany
   */
  export type PermissoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * Filter, which Permissoes to fetch.
     */
    where?: PermissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissoes to fetch.
     */
    orderBy?: PermissoesOrderByWithRelationInput | PermissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissoes.
     */
    cursor?: PermissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissoes.
     */
    distinct?: PermissoesScalarFieldEnum | PermissoesScalarFieldEnum[]
  }

  /**
   * Permissoes create
   */
  export type PermissoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissoes.
     */
    data: XOR<PermissoesCreateInput, PermissoesUncheckedCreateInput>
  }

  /**
   * Permissoes createMany
   */
  export type PermissoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissoes.
     */
    data: PermissoesCreateManyInput | PermissoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissoes createManyAndReturn
   */
  export type PermissoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * The data used to create many Permissoes.
     */
    data: PermissoesCreateManyInput | PermissoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissoes update
   */
  export type PermissoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissoes.
     */
    data: XOR<PermissoesUpdateInput, PermissoesUncheckedUpdateInput>
    /**
     * Choose, which Permissoes to update.
     */
    where: PermissoesWhereUniqueInput
  }

  /**
   * Permissoes updateMany
   */
  export type PermissoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissoes.
     */
    data: XOR<PermissoesUpdateManyMutationInput, PermissoesUncheckedUpdateManyInput>
    /**
     * Filter which Permissoes to update
     */
    where?: PermissoesWhereInput
    /**
     * Limit how many Permissoes to update.
     */
    limit?: number
  }

  /**
   * Permissoes updateManyAndReturn
   */
  export type PermissoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * The data used to update Permissoes.
     */
    data: XOR<PermissoesUpdateManyMutationInput, PermissoesUncheckedUpdateManyInput>
    /**
     * Filter which Permissoes to update
     */
    where?: PermissoesWhereInput
    /**
     * Limit how many Permissoes to update.
     */
    limit?: number
  }

  /**
   * Permissoes upsert
   */
  export type PermissoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissoes to update in case it exists.
     */
    where: PermissoesWhereUniqueInput
    /**
     * In case the Permissoes found by the `where` argument doesn't exist, create a new Permissoes with this data.
     */
    create: XOR<PermissoesCreateInput, PermissoesUncheckedCreateInput>
    /**
     * In case the Permissoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissoesUpdateInput, PermissoesUncheckedUpdateInput>
  }

  /**
   * Permissoes delete
   */
  export type PermissoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
    /**
     * Filter which Permissoes to delete.
     */
    where: PermissoesWhereUniqueInput
  }

  /**
   * Permissoes deleteMany
   */
  export type PermissoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissoes to delete
     */
    where?: PermissoesWhereInput
    /**
     * Limit how many Permissoes to delete.
     */
    limit?: number
  }

  /**
   * Permissoes.cargo
   */
  export type Permissoes$cargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    cursor?: CargoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Permissoes without action
   */
  export type PermissoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissoes
     */
    select?: PermissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissoes
     */
    omit?: PermissoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissoesInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nomeSocial: 'nomeSocial',
    dataNasc: 'dataNasc',
    naturalidade: 'naturalidade',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    sexo: 'sexo',
    raca: 'raca',
    fkIdentidade: 'fkIdentidade'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    matricula: 'matricula',
    fkUsuario: 'fkUsuario'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    siap: 'siap',
    fkUsuario: 'fkUsuario'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    carga_horaria: 'carga_horaria',
    vagas: 'vagas',
    status: 'status',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    horarioInicio: 'horarioInicio',
    horarioFim: 'horarioFim',
    diasSemana: 'diasSemana',
    fkInstituicao: 'fkInstituicao'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const AlocacaoProfessorScalarFieldEnum: {
    id: 'id',
    fkProfessor: 'fkProfessor',
    fkCurso: 'fkCurso',
    cargaHoraria: 'cargaHoraria',
    dataAlocacao: 'dataAlocacao'
  };

  export type AlocacaoProfessorScalarFieldEnum = (typeof AlocacaoProfessorScalarFieldEnum)[keyof typeof AlocacaoProfessorScalarFieldEnum]


  export const InstituicaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cidade: 'cidade',
    campus: 'campus',
    cnpj: 'cnpj'
  };

  export type InstituicaoScalarFieldEnum = (typeof InstituicaoScalarFieldEnum)[keyof typeof InstituicaoScalarFieldEnum]


  export const InscricaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    status: 'status',
    fkAluno: 'fkAluno',
    fkCurso: 'fkCurso'
  };

  export type InscricaoScalarFieldEnum = (typeof InscricaoScalarFieldEnum)[keyof typeof InscricaoScalarFieldEnum]


  export const IdentidadeScalarFieldEnum: {
    id: 'id',
    rg: 'rg',
    cpf: 'cpf',
    orgaoEmissor: 'orgaoEmissor',
    estado: 'estado',
    dataEmissao: 'dataEmissao'
  };

  export type IdentidadeScalarFieldEnum = (typeof IdentidadeScalarFieldEnum)[keyof typeof IdentidadeScalarFieldEnum]


  export const RendaFamiliarScalarFieldEnum: {
    id: 'id',
    rendaFamiliar: 'rendaFamiliar',
    numeroPessoas: 'numeroPessoas',
    fkInscricao: 'fkInscricao'
  };

  export type RendaFamiliarScalarFieldEnum = (typeof RendaFamiliarScalarFieldEnum)[keyof typeof RendaFamiliarScalarFieldEnum]


  export const AuditoriaScalarFieldEnum: {
    id: 'id',
    tabelaModificada: 'tabelaModificada',
    acaoRealizada: 'acaoRealizada',
    idModificado: 'idModificado',
    dadosAntigos: 'dadosAntigos',
    dadosInseridos: 'dadosInseridos',
    fkUsuario: 'fkUsuario',
    dataModificacao: 'dataModificacao'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    id: 'id',
    cargo: 'cargo',
    desc: 'desc'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const PermissoesScalarFieldEnum: {
    id: 'id',
    permissao: 'permissao',
    desc: 'desc'
  };

  export type PermissoesScalarFieldEnum = (typeof PermissoesScalarFieldEnum)[keyof typeof PermissoesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'Sexo[]'
   */
  export type ListEnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo[]'>
    


  /**
   * Reference to a field of type 'Raca'
   */
  export type EnumRacaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Raca'>
    


  /**
   * Reference to a field of type 'Raca[]'
   */
  export type ListEnumRacaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Raca[]'>
    


  /**
   * Reference to a field of type 'StatusCurso'
   */
  export type EnumStatusCursoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCurso'>
    


  /**
   * Reference to a field of type 'StatusCurso[]'
   */
  export type ListEnumStatusCursoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCurso[]'>
    


  /**
   * Reference to a field of type 'DiasSemana[]'
   */
  export type ListEnumDiasSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiasSemana[]'>
    


  /**
   * Reference to a field of type 'DiasSemana'
   */
  export type EnumDiasSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiasSemana'>
    


  /**
   * Reference to a field of type 'StatusInscricao'
   */
  export type EnumStatusInscricaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInscricao'>
    


  /**
   * Reference to a field of type 'StatusInscricao[]'
   */
  export type ListEnumStatusInscricaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInscricao[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Acao'
   */
  export type EnumAcaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acao'>
    


  /**
   * Reference to a field of type 'Acao[]'
   */
  export type ListEnumAcaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acao[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    nomeSocial?: StringNullableFilter<"Usuario"> | string | null
    dataNasc?: DateTimeFilter<"Usuario"> | Date | string
    naturalidade?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    sexo?: EnumSexoFilter<"Usuario"> | $Enums.Sexo
    raca?: EnumRacaFilter<"Usuario"> | $Enums.Raca
    fkIdentidade?: IntFilter<"Usuario"> | number
    alunos?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    cargos?: CargoListRelationFilter
    identidade?: XOR<IdentidadeScalarRelationFilter, IdentidadeWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    dataNasc?: SortOrder
    naturalidade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    sexo?: SortOrder
    raca?: SortOrder
    fkIdentidade?: SortOrder
    alunos?: AlunoOrderByWithRelationInput
    professor?: ProfessorOrderByWithRelationInput
    cargos?: CargoOrderByRelationAggregateInput
    identidade?: IdentidadeOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    fkIdentidade?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    nomeSocial?: StringNullableFilter<"Usuario"> | string | null
    dataNasc?: DateTimeFilter<"Usuario"> | Date | string
    naturalidade?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    sexo?: EnumSexoFilter<"Usuario"> | $Enums.Sexo
    raca?: EnumRacaFilter<"Usuario"> | $Enums.Raca
    alunos?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    cargos?: CargoListRelationFilter
    identidade?: XOR<IdentidadeScalarRelationFilter, IdentidadeWhereInput>
  }, "id" | "email" | "fkIdentidade">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    dataNasc?: SortOrder
    naturalidade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    sexo?: SortOrder
    raca?: SortOrder
    fkIdentidade?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    nomeSocial?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    dataNasc?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    naturalidade?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    sexo?: EnumSexoWithAggregatesFilter<"Usuario"> | $Enums.Sexo
    raca?: EnumRacaWithAggregatesFilter<"Usuario"> | $Enums.Raca
    fkIdentidade?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: IntFilter<"Aluno"> | number
    matricula?: StringFilter<"Aluno"> | string
    fkUsuario?: IntFilter<"Aluno"> | number
    inscricaos?: InscricaoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    matricula?: SortOrder
    fkUsuario?: SortOrder
    inscricaos?: InscricaoOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matricula?: string
    fkUsuario?: number
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    inscricaos?: InscricaoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "matricula" | "fkUsuario">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    matricula?: SortOrder
    fkUsuario?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aluno"> | number
    matricula?: StringWithAggregatesFilter<"Aluno"> | string
    fkUsuario?: IntWithAggregatesFilter<"Aluno"> | number
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: IntFilter<"Professor"> | number
    siap?: StringFilter<"Professor"> | string
    fkUsuario?: IntFilter<"Professor"> | number
    alocacoes?: AlocacaoProfessorListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    siap?: SortOrder
    fkUsuario?: SortOrder
    alocacoes?: AlocacaoProfessorOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    siap?: string
    fkUsuario?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    alocacoes?: AlocacaoProfessorListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "siap" | "fkUsuario">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    siap?: SortOrder
    fkUsuario?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professor"> | number
    siap?: StringWithAggregatesFilter<"Professor"> | string
    fkUsuario?: IntWithAggregatesFilter<"Professor"> | number
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    nome?: StringFilter<"Curso"> | string
    carga_horaria?: IntFilter<"Curso"> | number
    vagas?: IntFilter<"Curso"> | number
    status?: EnumStatusCursoFilter<"Curso"> | $Enums.StatusCurso
    dataInicio?: DateTimeFilter<"Curso"> | Date | string
    dataFim?: DateTimeFilter<"Curso"> | Date | string
    horarioInicio?: DateTimeFilter<"Curso"> | Date | string
    horarioFim?: DateTimeFilter<"Curso"> | Date | string
    diasSemana?: EnumDiasSemanaNullableListFilter<"Curso">
    fkInstituicao?: IntFilter<"Curso"> | number
    professores?: AlocacaoProfessorListRelationFilter
    inscricao?: InscricaoListRelationFilter
    Instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    status?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    diasSemana?: SortOrder
    fkInstituicao?: SortOrder
    professores?: AlocacaoProfessorOrderByRelationAggregateInput
    inscricao?: InscricaoOrderByRelationAggregateInput
    Instituicao?: InstituicaoOrderByWithRelationInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome?: StringFilter<"Curso"> | string
    carga_horaria?: IntFilter<"Curso"> | number
    vagas?: IntFilter<"Curso"> | number
    status?: EnumStatusCursoFilter<"Curso"> | $Enums.StatusCurso
    dataInicio?: DateTimeFilter<"Curso"> | Date | string
    dataFim?: DateTimeFilter<"Curso"> | Date | string
    horarioInicio?: DateTimeFilter<"Curso"> | Date | string
    horarioFim?: DateTimeFilter<"Curso"> | Date | string
    diasSemana?: EnumDiasSemanaNullableListFilter<"Curso">
    fkInstituicao?: IntFilter<"Curso"> | number
    professores?: AlocacaoProfessorListRelationFilter
    inscricao?: InscricaoListRelationFilter
    Instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    status?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    diasSemana?: SortOrder
    fkInstituicao?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    nome?: StringWithAggregatesFilter<"Curso"> | string
    carga_horaria?: IntWithAggregatesFilter<"Curso"> | number
    vagas?: IntWithAggregatesFilter<"Curso"> | number
    status?: EnumStatusCursoWithAggregatesFilter<"Curso"> | $Enums.StatusCurso
    dataInicio?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    horarioInicio?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    horarioFim?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    diasSemana?: EnumDiasSemanaNullableListFilter<"Curso">
    fkInstituicao?: IntWithAggregatesFilter<"Curso"> | number
  }

  export type AlocacaoProfessorWhereInput = {
    AND?: AlocacaoProfessorWhereInput | AlocacaoProfessorWhereInput[]
    OR?: AlocacaoProfessorWhereInput[]
    NOT?: AlocacaoProfessorWhereInput | AlocacaoProfessorWhereInput[]
    id?: IntFilter<"AlocacaoProfessor"> | number
    fkProfessor?: IntFilter<"AlocacaoProfessor"> | number
    fkCurso?: IntFilter<"AlocacaoProfessor"> | number
    cargaHoraria?: IntFilter<"AlocacaoProfessor"> | number
    dataAlocacao?: DateTimeFilter<"AlocacaoProfessor"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type AlocacaoProfessorOrderByWithRelationInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
    dataAlocacao?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type AlocacaoProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fkProfessor_fkCurso?: AlocacaoProfessorFkProfessorFkCursoCompoundUniqueInput
    AND?: AlocacaoProfessorWhereInput | AlocacaoProfessorWhereInput[]
    OR?: AlocacaoProfessorWhereInput[]
    NOT?: AlocacaoProfessorWhereInput | AlocacaoProfessorWhereInput[]
    fkProfessor?: IntFilter<"AlocacaoProfessor"> | number
    fkCurso?: IntFilter<"AlocacaoProfessor"> | number
    cargaHoraria?: IntFilter<"AlocacaoProfessor"> | number
    dataAlocacao?: DateTimeFilter<"AlocacaoProfessor"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "id" | "fkProfessor_fkCurso">

  export type AlocacaoProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
    dataAlocacao?: SortOrder
    _count?: AlocacaoProfessorCountOrderByAggregateInput
    _avg?: AlocacaoProfessorAvgOrderByAggregateInput
    _max?: AlocacaoProfessorMaxOrderByAggregateInput
    _min?: AlocacaoProfessorMinOrderByAggregateInput
    _sum?: AlocacaoProfessorSumOrderByAggregateInput
  }

  export type AlocacaoProfessorScalarWhereWithAggregatesInput = {
    AND?: AlocacaoProfessorScalarWhereWithAggregatesInput | AlocacaoProfessorScalarWhereWithAggregatesInput[]
    OR?: AlocacaoProfessorScalarWhereWithAggregatesInput[]
    NOT?: AlocacaoProfessorScalarWhereWithAggregatesInput | AlocacaoProfessorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlocacaoProfessor"> | number
    fkProfessor?: IntWithAggregatesFilter<"AlocacaoProfessor"> | number
    fkCurso?: IntWithAggregatesFilter<"AlocacaoProfessor"> | number
    cargaHoraria?: IntWithAggregatesFilter<"AlocacaoProfessor"> | number
    dataAlocacao?: DateTimeWithAggregatesFilter<"AlocacaoProfessor"> | Date | string
  }

  export type InstituicaoWhereInput = {
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    id?: IntFilter<"Instituicao"> | number
    nome?: StringFilter<"Instituicao"> | string
    cidade?: StringFilter<"Instituicao"> | string
    campus?: StringFilter<"Instituicao"> | string
    cnpj?: StringFilter<"Instituicao"> | string
    cursos?: CursoListRelationFilter
  }

  export type InstituicaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    campus?: SortOrder
    cnpj?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
  }

  export type InstituicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    nome?: StringFilter<"Instituicao"> | string
    cidade?: StringFilter<"Instituicao"> | string
    campus?: StringFilter<"Instituicao"> | string
    cursos?: CursoListRelationFilter
  }, "id" | "cnpj">

  export type InstituicaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    campus?: SortOrder
    cnpj?: SortOrder
    _count?: InstituicaoCountOrderByAggregateInput
    _avg?: InstituicaoAvgOrderByAggregateInput
    _max?: InstituicaoMaxOrderByAggregateInput
    _min?: InstituicaoMinOrderByAggregateInput
    _sum?: InstituicaoSumOrderByAggregateInput
  }

  export type InstituicaoScalarWhereWithAggregatesInput = {
    AND?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    OR?: InstituicaoScalarWhereWithAggregatesInput[]
    NOT?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instituicao"> | number
    nome?: StringWithAggregatesFilter<"Instituicao"> | string
    cidade?: StringWithAggregatesFilter<"Instituicao"> | string
    campus?: StringWithAggregatesFilter<"Instituicao"> | string
    cnpj?: StringWithAggregatesFilter<"Instituicao"> | string
  }

  export type InscricaoWhereInput = {
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    id?: IntFilter<"Inscricao"> | number
    data?: DateTimeFilter<"Inscricao"> | Date | string
    status?: EnumStatusInscricaoFilter<"Inscricao"> | $Enums.StatusInscricao
    fkAluno?: IntFilter<"Inscricao"> | number
    fkCurso?: IntFilter<"Inscricao"> | number
    rendaFamiliar?: XOR<RendaFamiliarNullableScalarRelationFilter, RendaFamiliarWhereInput> | null
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type InscricaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    status?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
    rendaFamiliar?: RendaFamiliarOrderByWithRelationInput
    aluno?: AlunoOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type InscricaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    data?: DateTimeFilter<"Inscricao"> | Date | string
    status?: EnumStatusInscricaoFilter<"Inscricao"> | $Enums.StatusInscricao
    fkAluno?: IntFilter<"Inscricao"> | number
    fkCurso?: IntFilter<"Inscricao"> | number
    rendaFamiliar?: XOR<RendaFamiliarNullableScalarRelationFilter, RendaFamiliarWhereInput> | null
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "id">

  export type InscricaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    status?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
    _count?: InscricaoCountOrderByAggregateInput
    _avg?: InscricaoAvgOrderByAggregateInput
    _max?: InscricaoMaxOrderByAggregateInput
    _min?: InscricaoMinOrderByAggregateInput
    _sum?: InscricaoSumOrderByAggregateInput
  }

  export type InscricaoScalarWhereWithAggregatesInput = {
    AND?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    OR?: InscricaoScalarWhereWithAggregatesInput[]
    NOT?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inscricao"> | number
    data?: DateTimeWithAggregatesFilter<"Inscricao"> | Date | string
    status?: EnumStatusInscricaoWithAggregatesFilter<"Inscricao"> | $Enums.StatusInscricao
    fkAluno?: IntWithAggregatesFilter<"Inscricao"> | number
    fkCurso?: IntWithAggregatesFilter<"Inscricao"> | number
  }

  export type IdentidadeWhereInput = {
    AND?: IdentidadeWhereInput | IdentidadeWhereInput[]
    OR?: IdentidadeWhereInput[]
    NOT?: IdentidadeWhereInput | IdentidadeWhereInput[]
    id?: IntFilter<"Identidade"> | number
    rg?: StringFilter<"Identidade"> | string
    cpf?: StringFilter<"Identidade"> | string
    orgaoEmissor?: StringFilter<"Identidade"> | string
    estado?: StringFilter<"Identidade"> | string
    dataEmissao?: DateTimeFilter<"Identidade"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type IdentidadeOrderByWithRelationInput = {
    id?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    orgaoEmissor?: SortOrder
    estado?: SortOrder
    dataEmissao?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type IdentidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rg?: string
    cpf?: string
    AND?: IdentidadeWhereInput | IdentidadeWhereInput[]
    OR?: IdentidadeWhereInput[]
    NOT?: IdentidadeWhereInput | IdentidadeWhereInput[]
    orgaoEmissor?: StringFilter<"Identidade"> | string
    estado?: StringFilter<"Identidade"> | string
    dataEmissao?: DateTimeFilter<"Identidade"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id" | "rg" | "cpf">

  export type IdentidadeOrderByWithAggregationInput = {
    id?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    orgaoEmissor?: SortOrder
    estado?: SortOrder
    dataEmissao?: SortOrder
    _count?: IdentidadeCountOrderByAggregateInput
    _avg?: IdentidadeAvgOrderByAggregateInput
    _max?: IdentidadeMaxOrderByAggregateInput
    _min?: IdentidadeMinOrderByAggregateInput
    _sum?: IdentidadeSumOrderByAggregateInput
  }

  export type IdentidadeScalarWhereWithAggregatesInput = {
    AND?: IdentidadeScalarWhereWithAggregatesInput | IdentidadeScalarWhereWithAggregatesInput[]
    OR?: IdentidadeScalarWhereWithAggregatesInput[]
    NOT?: IdentidadeScalarWhereWithAggregatesInput | IdentidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Identidade"> | number
    rg?: StringWithAggregatesFilter<"Identidade"> | string
    cpf?: StringWithAggregatesFilter<"Identidade"> | string
    orgaoEmissor?: StringWithAggregatesFilter<"Identidade"> | string
    estado?: StringWithAggregatesFilter<"Identidade"> | string
    dataEmissao?: DateTimeWithAggregatesFilter<"Identidade"> | Date | string
  }

  export type RendaFamiliarWhereInput = {
    AND?: RendaFamiliarWhereInput | RendaFamiliarWhereInput[]
    OR?: RendaFamiliarWhereInput[]
    NOT?: RendaFamiliarWhereInput | RendaFamiliarWhereInput[]
    id?: IntFilter<"RendaFamiliar"> | number
    rendaFamiliar?: FloatFilter<"RendaFamiliar"> | number
    numeroPessoas?: IntFilter<"RendaFamiliar"> | number
    fkInscricao?: IntFilter<"RendaFamiliar"> | number
    inscricao?: XOR<InscricaoScalarRelationFilter, InscricaoWhereInput>
  }

  export type RendaFamiliarOrderByWithRelationInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
    inscricao?: InscricaoOrderByWithRelationInput
  }

  export type RendaFamiliarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fkInscricao?: number
    AND?: RendaFamiliarWhereInput | RendaFamiliarWhereInput[]
    OR?: RendaFamiliarWhereInput[]
    NOT?: RendaFamiliarWhereInput | RendaFamiliarWhereInput[]
    rendaFamiliar?: FloatFilter<"RendaFamiliar"> | number
    numeroPessoas?: IntFilter<"RendaFamiliar"> | number
    inscricao?: XOR<InscricaoScalarRelationFilter, InscricaoWhereInput>
  }, "id" | "fkInscricao">

  export type RendaFamiliarOrderByWithAggregationInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
    _count?: RendaFamiliarCountOrderByAggregateInput
    _avg?: RendaFamiliarAvgOrderByAggregateInput
    _max?: RendaFamiliarMaxOrderByAggregateInput
    _min?: RendaFamiliarMinOrderByAggregateInput
    _sum?: RendaFamiliarSumOrderByAggregateInput
  }

  export type RendaFamiliarScalarWhereWithAggregatesInput = {
    AND?: RendaFamiliarScalarWhereWithAggregatesInput | RendaFamiliarScalarWhereWithAggregatesInput[]
    OR?: RendaFamiliarScalarWhereWithAggregatesInput[]
    NOT?: RendaFamiliarScalarWhereWithAggregatesInput | RendaFamiliarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RendaFamiliar"> | number
    rendaFamiliar?: FloatWithAggregatesFilter<"RendaFamiliar"> | number
    numeroPessoas?: IntWithAggregatesFilter<"RendaFamiliar"> | number
    fkInscricao?: IntWithAggregatesFilter<"RendaFamiliar"> | number
  }

  export type AuditoriaWhereInput = {
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    id?: IntFilter<"Auditoria"> | number
    tabelaModificada?: StringFilter<"Auditoria"> | string
    acaoRealizada?: EnumAcaoFilter<"Auditoria"> | $Enums.Acao
    idModificado?: IntFilter<"Auditoria"> | number
    dadosAntigos?: JsonNullableFilter<"Auditoria">
    dadosInseridos?: JsonNullableFilter<"Auditoria">
    fkUsuario?: IntNullableFilter<"Auditoria"> | number | null
    dataModificacao?: DateTimeFilter<"Auditoria"> | Date | string
  }

  export type AuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    tabelaModificada?: SortOrder
    acaoRealizada?: SortOrder
    idModificado?: SortOrder
    dadosAntigos?: SortOrderInput | SortOrder
    dadosInseridos?: SortOrderInput | SortOrder
    fkUsuario?: SortOrderInput | SortOrder
    dataModificacao?: SortOrder
  }

  export type AuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    tabelaModificada?: StringFilter<"Auditoria"> | string
    acaoRealizada?: EnumAcaoFilter<"Auditoria"> | $Enums.Acao
    idModificado?: IntFilter<"Auditoria"> | number
    dadosAntigos?: JsonNullableFilter<"Auditoria">
    dadosInseridos?: JsonNullableFilter<"Auditoria">
    fkUsuario?: IntNullableFilter<"Auditoria"> | number | null
    dataModificacao?: DateTimeFilter<"Auditoria"> | Date | string
  }, "id">

  export type AuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    tabelaModificada?: SortOrder
    acaoRealizada?: SortOrder
    idModificado?: SortOrder
    dadosAntigos?: SortOrderInput | SortOrder
    dadosInseridos?: SortOrderInput | SortOrder
    fkUsuario?: SortOrderInput | SortOrder
    dataModificacao?: SortOrder
    _count?: AuditoriaCountOrderByAggregateInput
    _avg?: AuditoriaAvgOrderByAggregateInput
    _max?: AuditoriaMaxOrderByAggregateInput
    _min?: AuditoriaMinOrderByAggregateInput
    _sum?: AuditoriaSumOrderByAggregateInput
  }

  export type AuditoriaScalarWhereWithAggregatesInput = {
    AND?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    OR?: AuditoriaScalarWhereWithAggregatesInput[]
    NOT?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auditoria"> | number
    tabelaModificada?: StringWithAggregatesFilter<"Auditoria"> | string
    acaoRealizada?: EnumAcaoWithAggregatesFilter<"Auditoria"> | $Enums.Acao
    idModificado?: IntWithAggregatesFilter<"Auditoria"> | number
    dadosAntigos?: JsonNullableWithAggregatesFilter<"Auditoria">
    dadosInseridos?: JsonNullableWithAggregatesFilter<"Auditoria">
    fkUsuario?: IntNullableWithAggregatesFilter<"Auditoria"> | number | null
    dataModificacao?: DateTimeWithAggregatesFilter<"Auditoria"> | Date | string
  }

  export type CargoWhereInput = {
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    id?: IntFilter<"Cargo"> | number
    cargo?: StringFilter<"Cargo"> | string
    desc?: StringNullableFilter<"Cargo"> | string | null
    usuario?: UsuarioListRelationFilter
    permissoes?: PermissoesListRelationFilter
  }

  export type CargoOrderByWithRelationInput = {
    id?: SortOrder
    cargo?: SortOrder
    desc?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByRelationAggregateInput
    permissoes?: PermissoesOrderByRelationAggregateInput
  }

  export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    cargo?: StringFilter<"Cargo"> | string
    desc?: StringNullableFilter<"Cargo"> | string | null
    usuario?: UsuarioListRelationFilter
    permissoes?: PermissoesListRelationFilter
  }, "id">

  export type CargoOrderByWithAggregationInput = {
    id?: SortOrder
    cargo?: SortOrder
    desc?: SortOrderInput | SortOrder
    _count?: CargoCountOrderByAggregateInput
    _avg?: CargoAvgOrderByAggregateInput
    _max?: CargoMaxOrderByAggregateInput
    _min?: CargoMinOrderByAggregateInput
    _sum?: CargoSumOrderByAggregateInput
  }

  export type CargoScalarWhereWithAggregatesInput = {
    AND?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    OR?: CargoScalarWhereWithAggregatesInput[]
    NOT?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cargo"> | number
    cargo?: StringWithAggregatesFilter<"Cargo"> | string
    desc?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
  }

  export type PermissoesWhereInput = {
    AND?: PermissoesWhereInput | PermissoesWhereInput[]
    OR?: PermissoesWhereInput[]
    NOT?: PermissoesWhereInput | PermissoesWhereInput[]
    id?: IntFilter<"Permissoes"> | number
    permissao?: StringFilter<"Permissoes"> | string
    desc?: StringNullableFilter<"Permissoes"> | string | null
    cargo?: CargoListRelationFilter
  }

  export type PermissoesOrderByWithRelationInput = {
    id?: SortOrder
    permissao?: SortOrder
    desc?: SortOrderInput | SortOrder
    cargo?: CargoOrderByRelationAggregateInput
  }

  export type PermissoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissoesWhereInput | PermissoesWhereInput[]
    OR?: PermissoesWhereInput[]
    NOT?: PermissoesWhereInput | PermissoesWhereInput[]
    permissao?: StringFilter<"Permissoes"> | string
    desc?: StringNullableFilter<"Permissoes"> | string | null
    cargo?: CargoListRelationFilter
  }, "id">

  export type PermissoesOrderByWithAggregationInput = {
    id?: SortOrder
    permissao?: SortOrder
    desc?: SortOrderInput | SortOrder
    _count?: PermissoesCountOrderByAggregateInput
    _avg?: PermissoesAvgOrderByAggregateInput
    _max?: PermissoesMaxOrderByAggregateInput
    _min?: PermissoesMinOrderByAggregateInput
    _sum?: PermissoesSumOrderByAggregateInput
  }

  export type PermissoesScalarWhereWithAggregatesInput = {
    AND?: PermissoesScalarWhereWithAggregatesInput | PermissoesScalarWhereWithAggregatesInput[]
    OR?: PermissoesScalarWhereWithAggregatesInput[]
    NOT?: PermissoesScalarWhereWithAggregatesInput | PermissoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permissoes"> | number
    permissao?: StringWithAggregatesFilter<"Permissoes"> | string
    desc?: StringNullableWithAggregatesFilter<"Permissoes"> | string | null
  }

  export type UsuarioCreateInput = {
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    alunos?: AlunoCreateNestedOneWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    cargos?: CargoCreateNestedManyWithoutUsuarioInput
    identidade: IdentidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    fkIdentidade: number
    alunos?: AlunoUncheckedCreateNestedOneWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    cargos?: CargoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    alunos?: AlunoUpdateOneWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUpdateManyWithoutUsuarioNestedInput
    identidade?: IdentidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    fkIdentidade?: IntFieldUpdateOperationsInput | number
    alunos?: AlunoUncheckedUpdateOneWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    fkIdentidade: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    fkIdentidade?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoCreateInput = {
    matricula: string
    inscricaos?: InscricaoCreateNestedManyWithoutAlunoInput
    usuario: UsuarioCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: number
    matricula: string
    fkUsuario: number
    inscricaos?: InscricaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    inscricaos?: InscricaoUpdateManyWithoutAlunoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    fkUsuario?: IntFieldUpdateOperationsInput | number
    inscricaos?: InscricaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: number
    matricula: string
    fkUsuario: number
  }

  export type AlunoUpdateManyMutationInput = {
    matricula?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    fkUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorCreateInput = {
    siap: string
    alocacoes?: AlocacaoProfessorCreateNestedManyWithoutProfessorInput
    usuario: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: number
    siap: string
    fkUsuario: number
    alocacoes?: AlocacaoProfessorUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    siap?: StringFieldUpdateOperationsInput | string
    alocacoes?: AlocacaoProfessorUpdateManyWithoutProfessorNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    siap?: StringFieldUpdateOperationsInput | string
    fkUsuario?: IntFieldUpdateOperationsInput | number
    alocacoes?: AlocacaoProfessorUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: number
    siap: string
    fkUsuario: number
  }

  export type ProfessorUpdateManyMutationInput = {
    siap?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    siap?: StringFieldUpdateOperationsInput | string
    fkUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type CursoCreateInput = {
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorCreateNestedManyWithoutCursoInput
    inscricao?: InscricaoCreateNestedManyWithoutCursoInput
    Instituicao: InstituicaoCreateNestedOneWithoutCursosInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao: number
    professores?: AlocacaoProfessorUncheckedCreateNestedManyWithoutCursoInput
    inscricao?: InscricaoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorUpdateManyWithoutCursoNestedInput
    inscricao?: InscricaoUpdateManyWithoutCursoNestedInput
    Instituicao?: InstituicaoUpdateOneRequiredWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao?: IntFieldUpdateOperationsInput | number
    professores?: AlocacaoProfessorUncheckedUpdateManyWithoutCursoNestedInput
    inscricao?: InscricaoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao: number
  }

  export type CursoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao?: IntFieldUpdateOperationsInput | number
  }

  export type AlocacaoProfessorCreateInput = {
    cargaHoraria: number
    dataAlocacao?: Date | string
    professor: ProfessorCreateNestedOneWithoutAlocacoesInput
    curso: CursoCreateNestedOneWithoutProfessoresInput
  }

  export type AlocacaoProfessorUncheckedCreateInput = {
    id?: number
    fkProfessor: number
    fkCurso: number
    cargaHoraria: number
    dataAlocacao?: Date | string
  }

  export type AlocacaoProfessorUpdateInput = {
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutAlocacoesNestedInput
    curso?: CursoUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type AlocacaoProfessorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fkProfessor?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProfessorCreateManyInput = {
    id?: number
    fkProfessor: number
    fkCurso: number
    cargaHoraria: number
    dataAlocacao?: Date | string
  }

  export type AlocacaoProfessorUpdateManyMutationInput = {
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProfessorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fkProfessor?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstituicaoCreateInput = {
    nome: string
    cidade: string
    campus: string
    cnpj: string
    cursos?: CursoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateInput = {
    id?: number
    nome: string
    cidade: string
    campus: string
    cnpj: string
    cursos?: CursoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoCreateManyInput = {
    id?: number
    nome: string
    cidade: string
    campus: string
    cnpj: string
  }

  export type InstituicaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoCreateInput = {
    data?: Date | string
    status?: $Enums.StatusInscricao
    rendaFamiliar?: RendaFamiliarCreateNestedOneWithoutInscricaoInput
    aluno: AlunoCreateNestedOneWithoutInscricaosInput
    curso: CursoCreateNestedOneWithoutInscricaoInput
  }

  export type InscricaoUncheckedCreateInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkAluno: number
    fkCurso: number
    rendaFamiliar?: RendaFamiliarUncheckedCreateNestedOneWithoutInscricaoInput
  }

  export type InscricaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    rendaFamiliar?: RendaFamiliarUpdateOneWithoutInscricaoNestedInput
    aluno?: AlunoUpdateOneRequiredWithoutInscricaosNestedInput
    curso?: CursoUpdateOneRequiredWithoutInscricaoNestedInput
  }

  export type InscricaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkAluno?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
    rendaFamiliar?: RendaFamiliarUncheckedUpdateOneWithoutInscricaoNestedInput
  }

  export type InscricaoCreateManyInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkAluno: number
    fkCurso: number
  }

  export type InscricaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
  }

  export type InscricaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkAluno?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
  }

  export type IdentidadeCreateInput = {
    rg: string
    cpf: string
    orgaoEmissor: string
    estado: string
    dataEmissao: Date | string
    usuario?: UsuarioCreateNestedOneWithoutIdentidadeInput
  }

  export type IdentidadeUncheckedCreateInput = {
    id?: number
    rg: string
    cpf: string
    orgaoEmissor: string
    estado: string
    dataEmissao: Date | string
    usuario?: UsuarioUncheckedCreateNestedOneWithoutIdentidadeInput
  }

  export type IdentidadeUpdateInput = {
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    orgaoEmissor?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutIdentidadeNestedInput
  }

  export type IdentidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    orgaoEmissor?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUncheckedUpdateOneWithoutIdentidadeNestedInput
  }

  export type IdentidadeCreateManyInput = {
    id?: number
    rg: string
    cpf: string
    orgaoEmissor: string
    estado: string
    dataEmissao: Date | string
  }

  export type IdentidadeUpdateManyMutationInput = {
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    orgaoEmissor?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    orgaoEmissor?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendaFamiliarCreateInput = {
    rendaFamiliar: number
    numeroPessoas: number
    inscricao: InscricaoCreateNestedOneWithoutRendaFamiliarInput
  }

  export type RendaFamiliarUncheckedCreateInput = {
    id?: number
    rendaFamiliar: number
    numeroPessoas: number
    fkInscricao: number
  }

  export type RendaFamiliarUpdateInput = {
    rendaFamiliar?: FloatFieldUpdateOperationsInput | number
    numeroPessoas?: IntFieldUpdateOperationsInput | number
    inscricao?: InscricaoUpdateOneRequiredWithoutRendaFamiliarNestedInput
  }

  export type RendaFamiliarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rendaFamiliar?: FloatFieldUpdateOperationsInput | number
    numeroPessoas?: IntFieldUpdateOperationsInput | number
    fkInscricao?: IntFieldUpdateOperationsInput | number
  }

  export type RendaFamiliarCreateManyInput = {
    id?: number
    rendaFamiliar: number
    numeroPessoas: number
    fkInscricao: number
  }

  export type RendaFamiliarUpdateManyMutationInput = {
    rendaFamiliar?: FloatFieldUpdateOperationsInput | number
    numeroPessoas?: IntFieldUpdateOperationsInput | number
  }

  export type RendaFamiliarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rendaFamiliar?: FloatFieldUpdateOperationsInput | number
    numeroPessoas?: IntFieldUpdateOperationsInput | number
    fkInscricao?: IntFieldUpdateOperationsInput | number
  }

  export type AuditoriaCreateInput = {
    tabelaModificada: string
    acaoRealizada: $Enums.Acao
    idModificado: number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: number | null
    dataModificacao?: Date | string
  }

  export type AuditoriaUncheckedCreateInput = {
    id?: number
    tabelaModificada: string
    acaoRealizada: $Enums.Acao
    idModificado: number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: number | null
    dataModificacao?: Date | string
  }

  export type AuditoriaUpdateInput = {
    tabelaModificada?: StringFieldUpdateOperationsInput | string
    acaoRealizada?: EnumAcaoFieldUpdateOperationsInput | $Enums.Acao
    idModificado?: IntFieldUpdateOperationsInput | number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    dataModificacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tabelaModificada?: StringFieldUpdateOperationsInput | string
    acaoRealizada?: EnumAcaoFieldUpdateOperationsInput | $Enums.Acao
    idModificado?: IntFieldUpdateOperationsInput | number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    dataModificacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaCreateManyInput = {
    id?: number
    tabelaModificada: string
    acaoRealizada: $Enums.Acao
    idModificado: number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: number | null
    dataModificacao?: Date | string
  }

  export type AuditoriaUpdateManyMutationInput = {
    tabelaModificada?: StringFieldUpdateOperationsInput | string
    acaoRealizada?: EnumAcaoFieldUpdateOperationsInput | $Enums.Acao
    idModificado?: IntFieldUpdateOperationsInput | number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    dataModificacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tabelaModificada?: StringFieldUpdateOperationsInput | string
    acaoRealizada?: EnumAcaoFieldUpdateOperationsInput | $Enums.Acao
    idModificado?: IntFieldUpdateOperationsInput | number
    dadosAntigos?: NullableJsonNullValueInput | InputJsonValue
    dadosInseridos?: NullableJsonNullValueInput | InputJsonValue
    fkUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    dataModificacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoCreateInput = {
    cargo: string
    desc?: string | null
    usuario?: UsuarioCreateNestedManyWithoutCargosInput
    permissoes?: PermissoesCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateInput = {
    id?: number
    cargo: string
    desc?: string | null
    usuario?: UsuarioUncheckedCreateNestedManyWithoutCargosInput
    permissoes?: PermissoesUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoUpdateInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateManyWithoutCargosNestedInput
    permissoes?: PermissoesUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUncheckedUpdateManyWithoutCargosNestedInput
    permissoes?: PermissoesUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoCreateManyInput = {
    id?: number
    cargo: string
    desc?: string | null
  }

  export type CargoUpdateManyMutationInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissoesCreateInput = {
    permissao: string
    desc?: string | null
    cargo?: CargoCreateNestedManyWithoutPermissoesInput
  }

  export type PermissoesUncheckedCreateInput = {
    id?: number
    permissao: string
    desc?: string | null
    cargo?: CargoUncheckedCreateNestedManyWithoutPermissoesInput
  }

  export type PermissoesUpdateInput = {
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: CargoUpdateManyWithoutPermissoesNestedInput
  }

  export type PermissoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: CargoUncheckedUpdateManyWithoutPermissoesNestedInput
  }

  export type PermissoesCreateManyInput = {
    id?: number
    permissao: string
    desc?: string | null
  }

  export type PermissoesUpdateManyMutationInput = {
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type EnumRacaFilter<$PrismaModel = never> = {
    equals?: $Enums.Raca | EnumRacaFieldRefInput<$PrismaModel>
    in?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    not?: NestedEnumRacaFilter<$PrismaModel> | $Enums.Raca
  }

  export type AlunoNullableScalarRelationFilter = {
    is?: AlunoWhereInput | null
    isNot?: AlunoWhereInput | null
  }

  export type ProfessorNullableScalarRelationFilter = {
    is?: ProfessorWhereInput | null
    isNot?: ProfessorWhereInput | null
  }

  export type CargoListRelationFilter = {
    every?: CargoWhereInput
    some?: CargoWhereInput
    none?: CargoWhereInput
  }

  export type IdentidadeScalarRelationFilter = {
    is?: IdentidadeWhereInput
    isNot?: IdentidadeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CargoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeSocial?: SortOrder
    dataNasc?: SortOrder
    naturalidade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    sexo?: SortOrder
    raca?: SortOrder
    fkIdentidade?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    fkIdentidade?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeSocial?: SortOrder
    dataNasc?: SortOrder
    naturalidade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    sexo?: SortOrder
    raca?: SortOrder
    fkIdentidade?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeSocial?: SortOrder
    dataNasc?: SortOrder
    naturalidade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    sexo?: SortOrder
    raca?: SortOrder
    fkIdentidade?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    fkIdentidade?: SortOrder
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

  export type EnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type EnumRacaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Raca | EnumRacaFieldRefInput<$PrismaModel>
    in?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    not?: NestedEnumRacaWithAggregatesFilter<$PrismaModel> | $Enums.Raca
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRacaFilter<$PrismaModel>
    _max?: NestedEnumRacaFilter<$PrismaModel>
  }

  export type InscricaoListRelationFilter = {
    every?: InscricaoWhereInput
    some?: InscricaoWhereInput
    none?: InscricaoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type InscricaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    fkUsuario?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    id?: SortOrder
    fkUsuario?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    fkUsuario?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    fkUsuario?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    id?: SortOrder
    fkUsuario?: SortOrder
  }

  export type AlocacaoProfessorListRelationFilter = {
    every?: AlocacaoProfessorWhereInput
    some?: AlocacaoProfessorWhereInput
    none?: AlocacaoProfessorWhereInput
  }

  export type AlocacaoProfessorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    siap?: SortOrder
    fkUsuario?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id?: SortOrder
    fkUsuario?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    siap?: SortOrder
    fkUsuario?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    siap?: SortOrder
    fkUsuario?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id?: SortOrder
    fkUsuario?: SortOrder
  }

  export type EnumStatusCursoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCurso | EnumStatusCursoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCursoFilter<$PrismaModel> | $Enums.StatusCurso
  }

  export type EnumDiasSemanaNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.DiasSemana[] | ListEnumDiasSemanaFieldRefInput<$PrismaModel> | null
    has?: $Enums.DiasSemana | EnumDiasSemanaFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.DiasSemana[] | ListEnumDiasSemanaFieldRefInput<$PrismaModel>
    hasSome?: $Enums.DiasSemana[] | ListEnumDiasSemanaFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InstituicaoScalarRelationFilter = {
    is?: InstituicaoWhereInput
    isNot?: InstituicaoWhereInput
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    status?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    diasSemana?: SortOrder
    fkInstituicao?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    fkInstituicao?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    status?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    fkInstituicao?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    status?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    fkInstituicao?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
    carga_horaria?: SortOrder
    vagas?: SortOrder
    fkInstituicao?: SortOrder
  }

  export type EnumStatusCursoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCurso | EnumStatusCursoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCursoWithAggregatesFilter<$PrismaModel> | $Enums.StatusCurso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCursoFilter<$PrismaModel>
    _max?: NestedEnumStatusCursoFilter<$PrismaModel>
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type AlocacaoProfessorFkProfessorFkCursoCompoundUniqueInput = {
    fkProfessor: number
    fkCurso: number
  }

  export type AlocacaoProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
    dataAlocacao?: SortOrder
  }

  export type AlocacaoProfessorAvgOrderByAggregateInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type AlocacaoProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
    dataAlocacao?: SortOrder
  }

  export type AlocacaoProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
    dataAlocacao?: SortOrder
  }

  export type AlocacaoProfessorSumOrderByAggregateInput = {
    id?: SortOrder
    fkProfessor?: SortOrder
    fkCurso?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstituicaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    campus?: SortOrder
    cnpj?: SortOrder
  }

  export type InstituicaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstituicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    campus?: SortOrder
    cnpj?: SortOrder
  }

  export type InstituicaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    campus?: SortOrder
    cnpj?: SortOrder
  }

  export type InstituicaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusInscricaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricao | EnumStatusInscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInscricaoFilter<$PrismaModel> | $Enums.StatusInscricao
  }

  export type RendaFamiliarNullableScalarRelationFilter = {
    is?: RendaFamiliarWhereInput | null
    isNot?: RendaFamiliarWhereInput | null
  }

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type InscricaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    status?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
  }

  export type InscricaoAvgOrderByAggregateInput = {
    id?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
  }

  export type InscricaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    status?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
  }

  export type InscricaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    status?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
  }

  export type InscricaoSumOrderByAggregateInput = {
    id?: SortOrder
    fkAluno?: SortOrder
    fkCurso?: SortOrder
  }

  export type EnumStatusInscricaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricao | EnumStatusInscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInscricaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusInscricao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInscricaoFilter<$PrismaModel>
    _max?: NestedEnumStatusInscricaoFilter<$PrismaModel>
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type IdentidadeCountOrderByAggregateInput = {
    id?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    orgaoEmissor?: SortOrder
    estado?: SortOrder
    dataEmissao?: SortOrder
  }

  export type IdentidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IdentidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    orgaoEmissor?: SortOrder
    estado?: SortOrder
    dataEmissao?: SortOrder
  }

  export type IdentidadeMinOrderByAggregateInput = {
    id?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    orgaoEmissor?: SortOrder
    estado?: SortOrder
    dataEmissao?: SortOrder
  }

  export type IdentidadeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type InscricaoScalarRelationFilter = {
    is?: InscricaoWhereInput
    isNot?: InscricaoWhereInput
  }

  export type RendaFamiliarCountOrderByAggregateInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
  }

  export type RendaFamiliarAvgOrderByAggregateInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
  }

  export type RendaFamiliarMaxOrderByAggregateInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
  }

  export type RendaFamiliarMinOrderByAggregateInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
  }

  export type RendaFamiliarSumOrderByAggregateInput = {
    id?: SortOrder
    rendaFamiliar?: SortOrder
    numeroPessoas?: SortOrder
    fkInscricao?: SortOrder
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

  export type EnumAcaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Acao | EnumAcaoFieldRefInput<$PrismaModel>
    in?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoFilter<$PrismaModel> | $Enums.Acao
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    tabelaModificada?: SortOrder
    acaoRealizada?: SortOrder
    idModificado?: SortOrder
    dadosAntigos?: SortOrder
    dadosInseridos?: SortOrder
    fkUsuario?: SortOrder
    dataModificacao?: SortOrder
  }

  export type AuditoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    idModificado?: SortOrder
    fkUsuario?: SortOrder
  }

  export type AuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    tabelaModificada?: SortOrder
    acaoRealizada?: SortOrder
    idModificado?: SortOrder
    fkUsuario?: SortOrder
    dataModificacao?: SortOrder
  }

  export type AuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    tabelaModificada?: SortOrder
    acaoRealizada?: SortOrder
    idModificado?: SortOrder
    fkUsuario?: SortOrder
    dataModificacao?: SortOrder
  }

  export type AuditoriaSumOrderByAggregateInput = {
    id?: SortOrder
    idModificado?: SortOrder
    fkUsuario?: SortOrder
  }

  export type EnumAcaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acao | EnumAcaoFieldRefInput<$PrismaModel>
    in?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoWithAggregatesFilter<$PrismaModel> | $Enums.Acao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoFilter<$PrismaModel>
    _max?: NestedEnumAcaoFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type PermissoesListRelationFilter = {
    every?: PermissoesWhereInput
    some?: PermissoesWhereInput
    none?: PermissoesWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargoCountOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    desc?: SortOrder
  }

  export type CargoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CargoMaxOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    desc?: SortOrder
  }

  export type CargoMinOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    desc?: SortOrder
  }

  export type CargoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissoesCountOrderByAggregateInput = {
    id?: SortOrder
    permissao?: SortOrder
    desc?: SortOrder
  }

  export type PermissoesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissoesMaxOrderByAggregateInput = {
    id?: SortOrder
    permissao?: SortOrder
    desc?: SortOrder
  }

  export type PermissoesMinOrderByAggregateInput = {
    id?: SortOrder
    permissao?: SortOrder
    desc?: SortOrder
  }

  export type PermissoesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlunoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AlunoCreateWithoutUsuarioInput, AlunoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUsuarioInput
    connect?: AlunoWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CargoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CargoCreateWithoutUsuarioInput, CargoUncheckedCreateWithoutUsuarioInput> | CargoCreateWithoutUsuarioInput[] | CargoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUsuarioInput | CargoCreateOrConnectWithoutUsuarioInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type IdentidadeCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<IdentidadeCreateWithoutUsuarioInput, IdentidadeUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: IdentidadeCreateOrConnectWithoutUsuarioInput
    connect?: IdentidadeWhereUniqueInput
  }

  export type AlunoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AlunoCreateWithoutUsuarioInput, AlunoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUsuarioInput
    connect?: AlunoWhereUniqueInput
  }

  export type ProfessorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CargoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CargoCreateWithoutUsuarioInput, CargoUncheckedCreateWithoutUsuarioInput> | CargoCreateWithoutUsuarioInput[] | CargoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUsuarioInput | CargoCreateOrConnectWithoutUsuarioInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo
  }

  export type EnumRacaFieldUpdateOperationsInput = {
    set?: $Enums.Raca
  }

  export type AlunoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AlunoCreateWithoutUsuarioInput, AlunoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUsuarioInput
    upsert?: AlunoUpsertWithoutUsuarioInput
    disconnect?: AlunoWhereInput | boolean
    delete?: AlunoWhereInput | boolean
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutUsuarioInput, AlunoUpdateWithoutUsuarioInput>, AlunoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessorUpsertWithoutUsuarioInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUsuarioInput, ProfessorUpdateWithoutUsuarioInput>, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type CargoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CargoCreateWithoutUsuarioInput, CargoUncheckedCreateWithoutUsuarioInput> | CargoCreateWithoutUsuarioInput[] | CargoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUsuarioInput | CargoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutUsuarioInput | CargoUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutUsuarioInput | CargoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutUsuarioInput | CargoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type IdentidadeUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<IdentidadeCreateWithoutUsuarioInput, IdentidadeUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: IdentidadeCreateOrConnectWithoutUsuarioInput
    upsert?: IdentidadeUpsertWithoutUsuarioInput
    connect?: IdentidadeWhereUniqueInput
    update?: XOR<XOR<IdentidadeUpdateToOneWithWhereWithoutUsuarioInput, IdentidadeUpdateWithoutUsuarioInput>, IdentidadeUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlunoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AlunoCreateWithoutUsuarioInput, AlunoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUsuarioInput
    upsert?: AlunoUpsertWithoutUsuarioInput
    disconnect?: AlunoWhereInput | boolean
    delete?: AlunoWhereInput | boolean
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutUsuarioInput, AlunoUpdateWithoutUsuarioInput>, AlunoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessorUpsertWithoutUsuarioInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUsuarioInput, ProfessorUpdateWithoutUsuarioInput>, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type CargoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CargoCreateWithoutUsuarioInput, CargoUncheckedCreateWithoutUsuarioInput> | CargoCreateWithoutUsuarioInput[] | CargoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUsuarioInput | CargoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutUsuarioInput | CargoUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutUsuarioInput | CargoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutUsuarioInput | CargoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type InscricaoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<InscricaoCreateWithoutAlunoInput, InscricaoUncheckedCreateWithoutAlunoInput> | InscricaoCreateWithoutAlunoInput[] | InscricaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutAlunoInput | InscricaoCreateOrConnectWithoutAlunoInput[]
    createMany?: InscricaoCreateManyAlunoInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutAlunosInput = {
    create?: XOR<UsuarioCreateWithoutAlunosInput, UsuarioUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlunosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InscricaoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<InscricaoCreateWithoutAlunoInput, InscricaoUncheckedCreateWithoutAlunoInput> | InscricaoCreateWithoutAlunoInput[] | InscricaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutAlunoInput | InscricaoCreateOrConnectWithoutAlunoInput[]
    createMany?: InscricaoCreateManyAlunoInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type InscricaoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<InscricaoCreateWithoutAlunoInput, InscricaoUncheckedCreateWithoutAlunoInput> | InscricaoCreateWithoutAlunoInput[] | InscricaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutAlunoInput | InscricaoCreateOrConnectWithoutAlunoInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutAlunoInput | InscricaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: InscricaoCreateManyAlunoInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutAlunoInput | InscricaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutAlunoInput | InscricaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAlunosInput, UsuarioUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlunosInput
    upsert?: UsuarioUpsertWithoutAlunosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAlunosInput, UsuarioUpdateWithoutAlunosInput>, UsuarioUncheckedUpdateWithoutAlunosInput>
  }

  export type InscricaoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<InscricaoCreateWithoutAlunoInput, InscricaoUncheckedCreateWithoutAlunoInput> | InscricaoCreateWithoutAlunoInput[] | InscricaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutAlunoInput | InscricaoCreateOrConnectWithoutAlunoInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutAlunoInput | InscricaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: InscricaoCreateManyAlunoInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutAlunoInput | InscricaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutAlunoInput | InscricaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type AlocacaoProfessorCreateNestedManyWithoutProfessorInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutProfessorInput, AlocacaoProfessorUncheckedCreateWithoutProfessorInput> | AlocacaoProfessorCreateWithoutProfessorInput[] | AlocacaoProfessorUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutProfessorInput | AlocacaoProfessorCreateOrConnectWithoutProfessorInput[]
    createMany?: AlocacaoProfessorCreateManyProfessorInputEnvelope
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutProfessorInput = {
    create?: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfessorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AlocacaoProfessorUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutProfessorInput, AlocacaoProfessorUncheckedCreateWithoutProfessorInput> | AlocacaoProfessorCreateWithoutProfessorInput[] | AlocacaoProfessorUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutProfessorInput | AlocacaoProfessorCreateOrConnectWithoutProfessorInput[]
    createMany?: AlocacaoProfessorCreateManyProfessorInputEnvelope
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
  }

  export type AlocacaoProfessorUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutProfessorInput, AlocacaoProfessorUncheckedCreateWithoutProfessorInput> | AlocacaoProfessorCreateWithoutProfessorInput[] | AlocacaoProfessorUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutProfessorInput | AlocacaoProfessorCreateOrConnectWithoutProfessorInput[]
    upsert?: AlocacaoProfessorUpsertWithWhereUniqueWithoutProfessorInput | AlocacaoProfessorUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: AlocacaoProfessorCreateManyProfessorInputEnvelope
    set?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    disconnect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    delete?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    update?: AlocacaoProfessorUpdateWithWhereUniqueWithoutProfessorInput | AlocacaoProfessorUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: AlocacaoProfessorUpdateManyWithWhereWithoutProfessorInput | AlocacaoProfessorUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: AlocacaoProfessorScalarWhereInput | AlocacaoProfessorScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProfessorNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfessorInput
    upsert?: UsuarioUpsertWithoutProfessorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfessorInput, UsuarioUpdateWithoutProfessorInput>, UsuarioUncheckedUpdateWithoutProfessorInput>
  }

  export type AlocacaoProfessorUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutProfessorInput, AlocacaoProfessorUncheckedCreateWithoutProfessorInput> | AlocacaoProfessorCreateWithoutProfessorInput[] | AlocacaoProfessorUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutProfessorInput | AlocacaoProfessorCreateOrConnectWithoutProfessorInput[]
    upsert?: AlocacaoProfessorUpsertWithWhereUniqueWithoutProfessorInput | AlocacaoProfessorUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: AlocacaoProfessorCreateManyProfessorInputEnvelope
    set?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    disconnect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    delete?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    update?: AlocacaoProfessorUpdateWithWhereUniqueWithoutProfessorInput | AlocacaoProfessorUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: AlocacaoProfessorUpdateManyWithWhereWithoutProfessorInput | AlocacaoProfessorUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: AlocacaoProfessorScalarWhereInput | AlocacaoProfessorScalarWhereInput[]
  }

  export type CursoCreatediasSemanaInput = {
    set: $Enums.DiasSemana[]
  }

  export type AlocacaoProfessorCreateNestedManyWithoutCursoInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutCursoInput, AlocacaoProfessorUncheckedCreateWithoutCursoInput> | AlocacaoProfessorCreateWithoutCursoInput[] | AlocacaoProfessorUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutCursoInput | AlocacaoProfessorCreateOrConnectWithoutCursoInput[]
    createMany?: AlocacaoProfessorCreateManyCursoInputEnvelope
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
  }

  export type InscricaoCreateNestedManyWithoutCursoInput = {
    create?: XOR<InscricaoCreateWithoutCursoInput, InscricaoUncheckedCreateWithoutCursoInput> | InscricaoCreateWithoutCursoInput[] | InscricaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCursoInput | InscricaoCreateOrConnectWithoutCursoInput[]
    createMany?: InscricaoCreateManyCursoInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type InstituicaoCreateNestedOneWithoutCursosInput = {
    create?: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutCursosInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type AlocacaoProfessorUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutCursoInput, AlocacaoProfessorUncheckedCreateWithoutCursoInput> | AlocacaoProfessorCreateWithoutCursoInput[] | AlocacaoProfessorUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutCursoInput | AlocacaoProfessorCreateOrConnectWithoutCursoInput[]
    createMany?: AlocacaoProfessorCreateManyCursoInputEnvelope
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
  }

  export type InscricaoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<InscricaoCreateWithoutCursoInput, InscricaoUncheckedCreateWithoutCursoInput> | InscricaoCreateWithoutCursoInput[] | InscricaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCursoInput | InscricaoCreateOrConnectWithoutCursoInput[]
    createMany?: InscricaoCreateManyCursoInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type EnumStatusCursoFieldUpdateOperationsInput = {
    set?: $Enums.StatusCurso
  }

  export type CursoUpdatediasSemanaInput = {
    set?: $Enums.DiasSemana[]
    push?: $Enums.DiasSemana | $Enums.DiasSemana[]
  }

  export type AlocacaoProfessorUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutCursoInput, AlocacaoProfessorUncheckedCreateWithoutCursoInput> | AlocacaoProfessorCreateWithoutCursoInput[] | AlocacaoProfessorUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutCursoInput | AlocacaoProfessorCreateOrConnectWithoutCursoInput[]
    upsert?: AlocacaoProfessorUpsertWithWhereUniqueWithoutCursoInput | AlocacaoProfessorUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AlocacaoProfessorCreateManyCursoInputEnvelope
    set?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    disconnect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    delete?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    update?: AlocacaoProfessorUpdateWithWhereUniqueWithoutCursoInput | AlocacaoProfessorUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AlocacaoProfessorUpdateManyWithWhereWithoutCursoInput | AlocacaoProfessorUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AlocacaoProfessorScalarWhereInput | AlocacaoProfessorScalarWhereInput[]
  }

  export type InscricaoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<InscricaoCreateWithoutCursoInput, InscricaoUncheckedCreateWithoutCursoInput> | InscricaoCreateWithoutCursoInput[] | InscricaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCursoInput | InscricaoCreateOrConnectWithoutCursoInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutCursoInput | InscricaoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: InscricaoCreateManyCursoInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutCursoInput | InscricaoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutCursoInput | InscricaoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type InstituicaoUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutCursosInput
    upsert?: InstituicaoUpsertWithoutCursosInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutCursosInput, InstituicaoUpdateWithoutCursosInput>, InstituicaoUncheckedUpdateWithoutCursosInput>
  }

  export type AlocacaoProfessorUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AlocacaoProfessorCreateWithoutCursoInput, AlocacaoProfessorUncheckedCreateWithoutCursoInput> | AlocacaoProfessorCreateWithoutCursoInput[] | AlocacaoProfessorUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlocacaoProfessorCreateOrConnectWithoutCursoInput | AlocacaoProfessorCreateOrConnectWithoutCursoInput[]
    upsert?: AlocacaoProfessorUpsertWithWhereUniqueWithoutCursoInput | AlocacaoProfessorUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AlocacaoProfessorCreateManyCursoInputEnvelope
    set?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    disconnect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    delete?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    connect?: AlocacaoProfessorWhereUniqueInput | AlocacaoProfessorWhereUniqueInput[]
    update?: AlocacaoProfessorUpdateWithWhereUniqueWithoutCursoInput | AlocacaoProfessorUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AlocacaoProfessorUpdateManyWithWhereWithoutCursoInput | AlocacaoProfessorUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AlocacaoProfessorScalarWhereInput | AlocacaoProfessorScalarWhereInput[]
  }

  export type InscricaoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<InscricaoCreateWithoutCursoInput, InscricaoUncheckedCreateWithoutCursoInput> | InscricaoCreateWithoutCursoInput[] | InscricaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCursoInput | InscricaoCreateOrConnectWithoutCursoInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutCursoInput | InscricaoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: InscricaoCreateManyCursoInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutCursoInput | InscricaoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutCursoInput | InscricaoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutAlocacoesInput = {
    create?: XOR<ProfessorCreateWithoutAlocacoesInput, ProfessorUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutAlocacoesInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutProfessoresInput = {
    create?: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: CursoCreateOrConnectWithoutProfessoresInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutAlocacoesNestedInput = {
    create?: XOR<ProfessorCreateWithoutAlocacoesInput, ProfessorUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutAlocacoesInput
    upsert?: ProfessorUpsertWithoutAlocacoesInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutAlocacoesInput, ProfessorUpdateWithoutAlocacoesInput>, ProfessorUncheckedUpdateWithoutAlocacoesInput>
  }

  export type CursoUpdateOneRequiredWithoutProfessoresNestedInput = {
    create?: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: CursoCreateOrConnectWithoutProfessoresInput
    upsert?: CursoUpsertWithoutProfessoresInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutProfessoresInput, CursoUpdateWithoutProfessoresInput>, CursoUncheckedUpdateWithoutProfessoresInput>
  }

  export type CursoCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutInstituicaoInput | CursoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutInstituicaoInput | CursoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutInstituicaoInput | CursoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutInstituicaoInput | CursoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutInstituicaoInput | CursoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutInstituicaoInput | CursoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type RendaFamiliarCreateNestedOneWithoutInscricaoInput = {
    create?: XOR<RendaFamiliarCreateWithoutInscricaoInput, RendaFamiliarUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: RendaFamiliarCreateOrConnectWithoutInscricaoInput
    connect?: RendaFamiliarWhereUniqueInput
  }

  export type AlunoCreateNestedOneWithoutInscricaosInput = {
    create?: XOR<AlunoCreateWithoutInscricaosInput, AlunoUncheckedCreateWithoutInscricaosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutInscricaosInput
    connect?: AlunoWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutInscricaoInput = {
    create?: XOR<CursoCreateWithoutInscricaoInput, CursoUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: CursoCreateOrConnectWithoutInscricaoInput
    connect?: CursoWhereUniqueInput
  }

  export type RendaFamiliarUncheckedCreateNestedOneWithoutInscricaoInput = {
    create?: XOR<RendaFamiliarCreateWithoutInscricaoInput, RendaFamiliarUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: RendaFamiliarCreateOrConnectWithoutInscricaoInput
    connect?: RendaFamiliarWhereUniqueInput
  }

  export type EnumStatusInscricaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusInscricao
  }

  export type RendaFamiliarUpdateOneWithoutInscricaoNestedInput = {
    create?: XOR<RendaFamiliarCreateWithoutInscricaoInput, RendaFamiliarUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: RendaFamiliarCreateOrConnectWithoutInscricaoInput
    upsert?: RendaFamiliarUpsertWithoutInscricaoInput
    disconnect?: RendaFamiliarWhereInput | boolean
    delete?: RendaFamiliarWhereInput | boolean
    connect?: RendaFamiliarWhereUniqueInput
    update?: XOR<XOR<RendaFamiliarUpdateToOneWithWhereWithoutInscricaoInput, RendaFamiliarUpdateWithoutInscricaoInput>, RendaFamiliarUncheckedUpdateWithoutInscricaoInput>
  }

  export type AlunoUpdateOneRequiredWithoutInscricaosNestedInput = {
    create?: XOR<AlunoCreateWithoutInscricaosInput, AlunoUncheckedCreateWithoutInscricaosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutInscricaosInput
    upsert?: AlunoUpsertWithoutInscricaosInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutInscricaosInput, AlunoUpdateWithoutInscricaosInput>, AlunoUncheckedUpdateWithoutInscricaosInput>
  }

  export type CursoUpdateOneRequiredWithoutInscricaoNestedInput = {
    create?: XOR<CursoCreateWithoutInscricaoInput, CursoUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: CursoCreateOrConnectWithoutInscricaoInput
    upsert?: CursoUpsertWithoutInscricaoInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutInscricaoInput, CursoUpdateWithoutInscricaoInput>, CursoUncheckedUpdateWithoutInscricaoInput>
  }

  export type RendaFamiliarUncheckedUpdateOneWithoutInscricaoNestedInput = {
    create?: XOR<RendaFamiliarCreateWithoutInscricaoInput, RendaFamiliarUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: RendaFamiliarCreateOrConnectWithoutInscricaoInput
    upsert?: RendaFamiliarUpsertWithoutInscricaoInput
    disconnect?: RendaFamiliarWhereInput | boolean
    delete?: RendaFamiliarWhereInput | boolean
    connect?: RendaFamiliarWhereUniqueInput
    update?: XOR<XOR<RendaFamiliarUpdateToOneWithWhereWithoutInscricaoInput, RendaFamiliarUpdateWithoutInscricaoInput>, RendaFamiliarUncheckedUpdateWithoutInscricaoInput>
  }

  export type UsuarioCreateNestedOneWithoutIdentidadeInput = {
    create?: XOR<UsuarioCreateWithoutIdentidadeInput, UsuarioUncheckedCreateWithoutIdentidadeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutIdentidadeInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedOneWithoutIdentidadeInput = {
    create?: XOR<UsuarioCreateWithoutIdentidadeInput, UsuarioUncheckedCreateWithoutIdentidadeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutIdentidadeInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutIdentidadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutIdentidadeInput, UsuarioUncheckedCreateWithoutIdentidadeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutIdentidadeInput
    upsert?: UsuarioUpsertWithoutIdentidadeInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutIdentidadeInput, UsuarioUpdateWithoutIdentidadeInput>, UsuarioUncheckedUpdateWithoutIdentidadeInput>
  }

  export type UsuarioUncheckedUpdateOneWithoutIdentidadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutIdentidadeInput, UsuarioUncheckedCreateWithoutIdentidadeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutIdentidadeInput
    upsert?: UsuarioUpsertWithoutIdentidadeInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutIdentidadeInput, UsuarioUpdateWithoutIdentidadeInput>, UsuarioUncheckedUpdateWithoutIdentidadeInput>
  }

  export type InscricaoCreateNestedOneWithoutRendaFamiliarInput = {
    create?: XOR<InscricaoCreateWithoutRendaFamiliarInput, InscricaoUncheckedCreateWithoutRendaFamiliarInput>
    connectOrCreate?: InscricaoCreateOrConnectWithoutRendaFamiliarInput
    connect?: InscricaoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InscricaoUpdateOneRequiredWithoutRendaFamiliarNestedInput = {
    create?: XOR<InscricaoCreateWithoutRendaFamiliarInput, InscricaoUncheckedCreateWithoutRendaFamiliarInput>
    connectOrCreate?: InscricaoCreateOrConnectWithoutRendaFamiliarInput
    upsert?: InscricaoUpsertWithoutRendaFamiliarInput
    connect?: InscricaoWhereUniqueInput
    update?: XOR<XOR<InscricaoUpdateToOneWithWhereWithoutRendaFamiliarInput, InscricaoUpdateWithoutRendaFamiliarInput>, InscricaoUncheckedUpdateWithoutRendaFamiliarInput>
  }

  export type EnumAcaoFieldUpdateOperationsInput = {
    set?: $Enums.Acao
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedManyWithoutCargosInput = {
    create?: XOR<UsuarioCreateWithoutCargosInput, UsuarioUncheckedCreateWithoutCargosInput> | UsuarioCreateWithoutCargosInput[] | UsuarioUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargosInput | UsuarioCreateOrConnectWithoutCargosInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PermissoesCreateNestedManyWithoutCargoInput = {
    create?: XOR<PermissoesCreateWithoutCargoInput, PermissoesUncheckedCreateWithoutCargoInput> | PermissoesCreateWithoutCargoInput[] | PermissoesUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: PermissoesCreateOrConnectWithoutCargoInput | PermissoesCreateOrConnectWithoutCargoInput[]
    connect?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutCargosInput = {
    create?: XOR<UsuarioCreateWithoutCargosInput, UsuarioUncheckedCreateWithoutCargosInput> | UsuarioCreateWithoutCargosInput[] | UsuarioUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargosInput | UsuarioCreateOrConnectWithoutCargosInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PermissoesUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<PermissoesCreateWithoutCargoInput, PermissoesUncheckedCreateWithoutCargoInput> | PermissoesCreateWithoutCargoInput[] | PermissoesUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: PermissoesCreateOrConnectWithoutCargoInput | PermissoesCreateOrConnectWithoutCargoInput[]
    connect?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutCargosNestedInput = {
    create?: XOR<UsuarioCreateWithoutCargosInput, UsuarioUncheckedCreateWithoutCargosInput> | UsuarioCreateWithoutCargosInput[] | UsuarioUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargosInput | UsuarioCreateOrConnectWithoutCargosInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutCargosInput | UsuarioUpsertWithWhereUniqueWithoutCargosInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutCargosInput | UsuarioUpdateWithWhereUniqueWithoutCargosInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutCargosInput | UsuarioUpdateManyWithWhereWithoutCargosInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PermissoesUpdateManyWithoutCargoNestedInput = {
    create?: XOR<PermissoesCreateWithoutCargoInput, PermissoesUncheckedCreateWithoutCargoInput> | PermissoesCreateWithoutCargoInput[] | PermissoesUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: PermissoesCreateOrConnectWithoutCargoInput | PermissoesCreateOrConnectWithoutCargoInput[]
    upsert?: PermissoesUpsertWithWhereUniqueWithoutCargoInput | PermissoesUpsertWithWhereUniqueWithoutCargoInput[]
    set?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    disconnect?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    delete?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    connect?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    update?: PermissoesUpdateWithWhereUniqueWithoutCargoInput | PermissoesUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: PermissoesUpdateManyWithWhereWithoutCargoInput | PermissoesUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: PermissoesScalarWhereInput | PermissoesScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutCargosNestedInput = {
    create?: XOR<UsuarioCreateWithoutCargosInput, UsuarioUncheckedCreateWithoutCargosInput> | UsuarioCreateWithoutCargosInput[] | UsuarioUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargosInput | UsuarioCreateOrConnectWithoutCargosInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutCargosInput | UsuarioUpsertWithWhereUniqueWithoutCargosInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutCargosInput | UsuarioUpdateWithWhereUniqueWithoutCargosInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutCargosInput | UsuarioUpdateManyWithWhereWithoutCargosInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PermissoesUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<PermissoesCreateWithoutCargoInput, PermissoesUncheckedCreateWithoutCargoInput> | PermissoesCreateWithoutCargoInput[] | PermissoesUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: PermissoesCreateOrConnectWithoutCargoInput | PermissoesCreateOrConnectWithoutCargoInput[]
    upsert?: PermissoesUpsertWithWhereUniqueWithoutCargoInput | PermissoesUpsertWithWhereUniqueWithoutCargoInput[]
    set?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    disconnect?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    delete?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    connect?: PermissoesWhereUniqueInput | PermissoesWhereUniqueInput[]
    update?: PermissoesUpdateWithWhereUniqueWithoutCargoInput | PermissoesUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: PermissoesUpdateManyWithWhereWithoutCargoInput | PermissoesUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: PermissoesScalarWhereInput | PermissoesScalarWhereInput[]
  }

  export type CargoCreateNestedManyWithoutPermissoesInput = {
    create?: XOR<CargoCreateWithoutPermissoesInput, CargoUncheckedCreateWithoutPermissoesInput> | CargoCreateWithoutPermissoesInput[] | CargoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutPermissoesInput | CargoCreateOrConnectWithoutPermissoesInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type CargoUncheckedCreateNestedManyWithoutPermissoesInput = {
    create?: XOR<CargoCreateWithoutPermissoesInput, CargoUncheckedCreateWithoutPermissoesInput> | CargoCreateWithoutPermissoesInput[] | CargoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutPermissoesInput | CargoCreateOrConnectWithoutPermissoesInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type CargoUpdateManyWithoutPermissoesNestedInput = {
    create?: XOR<CargoCreateWithoutPermissoesInput, CargoUncheckedCreateWithoutPermissoesInput> | CargoCreateWithoutPermissoesInput[] | CargoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutPermissoesInput | CargoCreateOrConnectWithoutPermissoesInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutPermissoesInput | CargoUpsertWithWhereUniqueWithoutPermissoesInput[]
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutPermissoesInput | CargoUpdateWithWhereUniqueWithoutPermissoesInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutPermissoesInput | CargoUpdateManyWithWhereWithoutPermissoesInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type CargoUncheckedUpdateManyWithoutPermissoesNestedInput = {
    create?: XOR<CargoCreateWithoutPermissoesInput, CargoUncheckedCreateWithoutPermissoesInput> | CargoCreateWithoutPermissoesInput[] | CargoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutPermissoesInput | CargoCreateOrConnectWithoutPermissoesInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutPermissoesInput | CargoUpsertWithWhereUniqueWithoutPermissoesInput[]
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutPermissoesInput | CargoUpdateWithWhereUniqueWithoutPermissoesInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutPermissoesInput | CargoUpdateManyWithWhereWithoutPermissoesInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
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

  export type NestedEnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type NestedEnumRacaFilter<$PrismaModel = never> = {
    equals?: $Enums.Raca | EnumRacaFieldRefInput<$PrismaModel>
    in?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    not?: NestedEnumRacaFilter<$PrismaModel> | $Enums.Raca
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

  export type NestedEnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type NestedEnumRacaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Raca | EnumRacaFieldRefInput<$PrismaModel>
    in?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Raca[] | ListEnumRacaFieldRefInput<$PrismaModel>
    not?: NestedEnumRacaWithAggregatesFilter<$PrismaModel> | $Enums.Raca
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRacaFilter<$PrismaModel>
    _max?: NestedEnumRacaFilter<$PrismaModel>
  }

  export type NestedEnumStatusCursoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCurso | EnumStatusCursoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCursoFilter<$PrismaModel> | $Enums.StatusCurso
  }

  export type NestedEnumStatusCursoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCurso | EnumStatusCursoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCurso[] | ListEnumStatusCursoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCursoWithAggregatesFilter<$PrismaModel> | $Enums.StatusCurso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCursoFilter<$PrismaModel>
    _max?: NestedEnumStatusCursoFilter<$PrismaModel>
  }

  export type NestedEnumStatusInscricaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricao | EnumStatusInscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInscricaoFilter<$PrismaModel> | $Enums.StatusInscricao
  }

  export type NestedEnumStatusInscricaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricao | EnumStatusInscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInscricao[] | ListEnumStatusInscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInscricaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusInscricao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInscricaoFilter<$PrismaModel>
    _max?: NestedEnumStatusInscricaoFilter<$PrismaModel>
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

  export type NestedEnumAcaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Acao | EnumAcaoFieldRefInput<$PrismaModel>
    in?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoFilter<$PrismaModel> | $Enums.Acao
  }

  export type NestedEnumAcaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acao | EnumAcaoFieldRefInput<$PrismaModel>
    in?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acao[] | ListEnumAcaoFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoWithAggregatesFilter<$PrismaModel> | $Enums.Acao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoFilter<$PrismaModel>
    _max?: NestedEnumAcaoFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type AlunoCreateWithoutUsuarioInput = {
    matricula: string
    inscricaos?: InscricaoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    matricula: string
    inscricaos?: InscricaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutUsuarioInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutUsuarioInput, AlunoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProfessorCreateWithoutUsuarioInput = {
    siap: string
    alocacoes?: AlocacaoProfessorCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutUsuarioInput = {
    id?: number
    siap: string
    alocacoes?: AlocacaoProfessorUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutUsuarioInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
  }

  export type CargoCreateWithoutUsuarioInput = {
    cargo: string
    desc?: string | null
    permissoes?: PermissoesCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cargo: string
    desc?: string | null
    permissoes?: PermissoesUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoCreateOrConnectWithoutUsuarioInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutUsuarioInput, CargoUncheckedCreateWithoutUsuarioInput>
  }

  export type IdentidadeCreateWithoutUsuarioInput = {
    rg: string
    cpf: string
    orgaoEmissor: string
    estado: string
    dataEmissao: Date | string
  }

  export type IdentidadeUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rg: string
    cpf: string
    orgaoEmissor: string
    estado: string
    dataEmissao: Date | string
  }

  export type IdentidadeCreateOrConnectWithoutUsuarioInput = {
    where: IdentidadeWhereUniqueInput
    create: XOR<IdentidadeCreateWithoutUsuarioInput, IdentidadeUncheckedCreateWithoutUsuarioInput>
  }

  export type AlunoUpsertWithoutUsuarioInput = {
    update: XOR<AlunoUpdateWithoutUsuarioInput, AlunoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AlunoCreateWithoutUsuarioInput, AlunoUncheckedCreateWithoutUsuarioInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutUsuarioInput, AlunoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AlunoUpdateWithoutUsuarioInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    inscricaos?: InscricaoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    inscricaos?: InscricaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type ProfessorUpsertWithoutUsuarioInput = {
    update: XOR<ProfessorUpdateWithoutUsuarioInput, ProfessorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutUsuarioInput, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessorUpdateWithoutUsuarioInput = {
    siap?: StringFieldUpdateOperationsInput | string
    alocacoes?: AlocacaoProfessorUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    siap?: StringFieldUpdateOperationsInput | string
    alocacoes?: AlocacaoProfessorUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CargoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CargoWhereUniqueInput
    update: XOR<CargoUpdateWithoutUsuarioInput, CargoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CargoCreateWithoutUsuarioInput, CargoUncheckedCreateWithoutUsuarioInput>
  }

  export type CargoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CargoWhereUniqueInput
    data: XOR<CargoUpdateWithoutUsuarioInput, CargoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CargoUpdateManyWithWhereWithoutUsuarioInput = {
    where: CargoScalarWhereInput
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CargoScalarWhereInput = {
    AND?: CargoScalarWhereInput | CargoScalarWhereInput[]
    OR?: CargoScalarWhereInput[]
    NOT?: CargoScalarWhereInput | CargoScalarWhereInput[]
    id?: IntFilter<"Cargo"> | number
    cargo?: StringFilter<"Cargo"> | string
    desc?: StringNullableFilter<"Cargo"> | string | null
  }

  export type IdentidadeUpsertWithoutUsuarioInput = {
    update: XOR<IdentidadeUpdateWithoutUsuarioInput, IdentidadeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<IdentidadeCreateWithoutUsuarioInput, IdentidadeUncheckedCreateWithoutUsuarioInput>
    where?: IdentidadeWhereInput
  }

  export type IdentidadeUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: IdentidadeWhereInput
    data: XOR<IdentidadeUpdateWithoutUsuarioInput, IdentidadeUncheckedUpdateWithoutUsuarioInput>
  }

  export type IdentidadeUpdateWithoutUsuarioInput = {
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    orgaoEmissor?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentidadeUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    orgaoEmissor?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoCreateWithoutAlunoInput = {
    data?: Date | string
    status?: $Enums.StatusInscricao
    rendaFamiliar?: RendaFamiliarCreateNestedOneWithoutInscricaoInput
    curso: CursoCreateNestedOneWithoutInscricaoInput
  }

  export type InscricaoUncheckedCreateWithoutAlunoInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkCurso: number
    rendaFamiliar?: RendaFamiliarUncheckedCreateNestedOneWithoutInscricaoInput
  }

  export type InscricaoCreateOrConnectWithoutAlunoInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutAlunoInput, InscricaoUncheckedCreateWithoutAlunoInput>
  }

  export type InscricaoCreateManyAlunoInputEnvelope = {
    data: InscricaoCreateManyAlunoInput | InscricaoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutAlunosInput = {
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    cargos?: CargoCreateNestedManyWithoutUsuarioInput
    identidade: IdentidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAlunosInput = {
    id?: number
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    fkIdentidade: number
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    cargos?: CargoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAlunosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAlunosInput, UsuarioUncheckedCreateWithoutAlunosInput>
  }

  export type InscricaoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutAlunoInput, InscricaoUncheckedUpdateWithoutAlunoInput>
    create: XOR<InscricaoCreateWithoutAlunoInput, InscricaoUncheckedCreateWithoutAlunoInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutAlunoInput, InscricaoUncheckedUpdateWithoutAlunoInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutAlunoInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type InscricaoScalarWhereInput = {
    AND?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    OR?: InscricaoScalarWhereInput[]
    NOT?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    id?: IntFilter<"Inscricao"> | number
    data?: DateTimeFilter<"Inscricao"> | Date | string
    status?: EnumStatusInscricaoFilter<"Inscricao"> | $Enums.StatusInscricao
    fkAluno?: IntFilter<"Inscricao"> | number
    fkCurso?: IntFilter<"Inscricao"> | number
  }

  export type UsuarioUpsertWithoutAlunosInput = {
    update: XOR<UsuarioUpdateWithoutAlunosInput, UsuarioUncheckedUpdateWithoutAlunosInput>
    create: XOR<UsuarioCreateWithoutAlunosInput, UsuarioUncheckedCreateWithoutAlunosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAlunosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAlunosInput, UsuarioUncheckedUpdateWithoutAlunosInput>
  }

  export type UsuarioUpdateWithoutAlunosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUpdateManyWithoutUsuarioNestedInput
    identidade?: IdentidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    fkIdentidade?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AlocacaoProfessorCreateWithoutProfessorInput = {
    cargaHoraria: number
    dataAlocacao?: Date | string
    curso: CursoCreateNestedOneWithoutProfessoresInput
  }

  export type AlocacaoProfessorUncheckedCreateWithoutProfessorInput = {
    id?: number
    fkCurso: number
    cargaHoraria: number
    dataAlocacao?: Date | string
  }

  export type AlocacaoProfessorCreateOrConnectWithoutProfessorInput = {
    where: AlocacaoProfessorWhereUniqueInput
    create: XOR<AlocacaoProfessorCreateWithoutProfessorInput, AlocacaoProfessorUncheckedCreateWithoutProfessorInput>
  }

  export type AlocacaoProfessorCreateManyProfessorInputEnvelope = {
    data: AlocacaoProfessorCreateManyProfessorInput | AlocacaoProfessorCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutProfessorInput = {
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    alunos?: AlunoCreateNestedOneWithoutUsuarioInput
    cargos?: CargoCreateNestedManyWithoutUsuarioInput
    identidade: IdentidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfessorInput = {
    id?: number
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    fkIdentidade: number
    alunos?: AlunoUncheckedCreateNestedOneWithoutUsuarioInput
    cargos?: CargoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfessorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
  }

  export type AlocacaoProfessorUpsertWithWhereUniqueWithoutProfessorInput = {
    where: AlocacaoProfessorWhereUniqueInput
    update: XOR<AlocacaoProfessorUpdateWithoutProfessorInput, AlocacaoProfessorUncheckedUpdateWithoutProfessorInput>
    create: XOR<AlocacaoProfessorCreateWithoutProfessorInput, AlocacaoProfessorUncheckedCreateWithoutProfessorInput>
  }

  export type AlocacaoProfessorUpdateWithWhereUniqueWithoutProfessorInput = {
    where: AlocacaoProfessorWhereUniqueInput
    data: XOR<AlocacaoProfessorUpdateWithoutProfessorInput, AlocacaoProfessorUncheckedUpdateWithoutProfessorInput>
  }

  export type AlocacaoProfessorUpdateManyWithWhereWithoutProfessorInput = {
    where: AlocacaoProfessorScalarWhereInput
    data: XOR<AlocacaoProfessorUpdateManyMutationInput, AlocacaoProfessorUncheckedUpdateManyWithoutProfessorInput>
  }

  export type AlocacaoProfessorScalarWhereInput = {
    AND?: AlocacaoProfessorScalarWhereInput | AlocacaoProfessorScalarWhereInput[]
    OR?: AlocacaoProfessorScalarWhereInput[]
    NOT?: AlocacaoProfessorScalarWhereInput | AlocacaoProfessorScalarWhereInput[]
    id?: IntFilter<"AlocacaoProfessor"> | number
    fkProfessor?: IntFilter<"AlocacaoProfessor"> | number
    fkCurso?: IntFilter<"AlocacaoProfessor"> | number
    cargaHoraria?: IntFilter<"AlocacaoProfessor"> | number
    dataAlocacao?: DateTimeFilter<"AlocacaoProfessor"> | Date | string
  }

  export type UsuarioUpsertWithoutProfessorInput = {
    update: XOR<UsuarioUpdateWithoutProfessorInput, UsuarioUncheckedUpdateWithoutProfessorInput>
    create: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfessorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfessorInput, UsuarioUncheckedUpdateWithoutProfessorInput>
  }

  export type UsuarioUpdateWithoutProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    alunos?: AlunoUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUpdateManyWithoutUsuarioNestedInput
    identidade?: IdentidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    fkIdentidade?: IntFieldUpdateOperationsInput | number
    alunos?: AlunoUncheckedUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AlocacaoProfessorCreateWithoutCursoInput = {
    cargaHoraria: number
    dataAlocacao?: Date | string
    professor: ProfessorCreateNestedOneWithoutAlocacoesInput
  }

  export type AlocacaoProfessorUncheckedCreateWithoutCursoInput = {
    id?: number
    fkProfessor: number
    cargaHoraria: number
    dataAlocacao?: Date | string
  }

  export type AlocacaoProfessorCreateOrConnectWithoutCursoInput = {
    where: AlocacaoProfessorWhereUniqueInput
    create: XOR<AlocacaoProfessorCreateWithoutCursoInput, AlocacaoProfessorUncheckedCreateWithoutCursoInput>
  }

  export type AlocacaoProfessorCreateManyCursoInputEnvelope = {
    data: AlocacaoProfessorCreateManyCursoInput | AlocacaoProfessorCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type InscricaoCreateWithoutCursoInput = {
    data?: Date | string
    status?: $Enums.StatusInscricao
    rendaFamiliar?: RendaFamiliarCreateNestedOneWithoutInscricaoInput
    aluno: AlunoCreateNestedOneWithoutInscricaosInput
  }

  export type InscricaoUncheckedCreateWithoutCursoInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkAluno: number
    rendaFamiliar?: RendaFamiliarUncheckedCreateNestedOneWithoutInscricaoInput
  }

  export type InscricaoCreateOrConnectWithoutCursoInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutCursoInput, InscricaoUncheckedCreateWithoutCursoInput>
  }

  export type InscricaoCreateManyCursoInputEnvelope = {
    data: InscricaoCreateManyCursoInput | InscricaoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type InstituicaoCreateWithoutCursosInput = {
    nome: string
    cidade: string
    campus: string
    cnpj: string
  }

  export type InstituicaoUncheckedCreateWithoutCursosInput = {
    id?: number
    nome: string
    cidade: string
    campus: string
    cnpj: string
  }

  export type InstituicaoCreateOrConnectWithoutCursosInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
  }

  export type AlocacaoProfessorUpsertWithWhereUniqueWithoutCursoInput = {
    where: AlocacaoProfessorWhereUniqueInput
    update: XOR<AlocacaoProfessorUpdateWithoutCursoInput, AlocacaoProfessorUncheckedUpdateWithoutCursoInput>
    create: XOR<AlocacaoProfessorCreateWithoutCursoInput, AlocacaoProfessorUncheckedCreateWithoutCursoInput>
  }

  export type AlocacaoProfessorUpdateWithWhereUniqueWithoutCursoInput = {
    where: AlocacaoProfessorWhereUniqueInput
    data: XOR<AlocacaoProfessorUpdateWithoutCursoInput, AlocacaoProfessorUncheckedUpdateWithoutCursoInput>
  }

  export type AlocacaoProfessorUpdateManyWithWhereWithoutCursoInput = {
    where: AlocacaoProfessorScalarWhereInput
    data: XOR<AlocacaoProfessorUpdateManyMutationInput, AlocacaoProfessorUncheckedUpdateManyWithoutCursoInput>
  }

  export type InscricaoUpsertWithWhereUniqueWithoutCursoInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutCursoInput, InscricaoUncheckedUpdateWithoutCursoInput>
    create: XOR<InscricaoCreateWithoutCursoInput, InscricaoUncheckedCreateWithoutCursoInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutCursoInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutCursoInput, InscricaoUncheckedUpdateWithoutCursoInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutCursoInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutCursoInput>
  }

  export type InstituicaoUpsertWithoutCursosInput = {
    update: XOR<InstituicaoUpdateWithoutCursosInput, InstituicaoUncheckedUpdateWithoutCursosInput>
    create: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutCursosInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutCursosInput, InstituicaoUncheckedUpdateWithoutCursosInput>
  }

  export type InstituicaoUpdateWithoutCursosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateWithoutAlocacoesInput = {
    siap: string
    usuario: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutAlocacoesInput = {
    id?: number
    siap: string
    fkUsuario: number
  }

  export type ProfessorCreateOrConnectWithoutAlocacoesInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutAlocacoesInput, ProfessorUncheckedCreateWithoutAlocacoesInput>
  }

  export type CursoCreateWithoutProfessoresInput = {
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    inscricao?: InscricaoCreateNestedManyWithoutCursoInput
    Instituicao: InstituicaoCreateNestedOneWithoutCursosInput
  }

  export type CursoUncheckedCreateWithoutProfessoresInput = {
    id?: number
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao: number
    inscricao?: InscricaoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutProfessoresInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
  }

  export type ProfessorUpsertWithoutAlocacoesInput = {
    update: XOR<ProfessorUpdateWithoutAlocacoesInput, ProfessorUncheckedUpdateWithoutAlocacoesInput>
    create: XOR<ProfessorCreateWithoutAlocacoesInput, ProfessorUncheckedCreateWithoutAlocacoesInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutAlocacoesInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutAlocacoesInput, ProfessorUncheckedUpdateWithoutAlocacoesInput>
  }

  export type ProfessorUpdateWithoutAlocacoesInput = {
    siap?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutAlocacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    siap?: StringFieldUpdateOperationsInput | string
    fkUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type CursoUpsertWithoutProfessoresInput = {
    update: XOR<CursoUpdateWithoutProfessoresInput, CursoUncheckedUpdateWithoutProfessoresInput>
    create: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutProfessoresInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutProfessoresInput, CursoUncheckedUpdateWithoutProfessoresInput>
  }

  export type CursoUpdateWithoutProfessoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    inscricao?: InscricaoUpdateManyWithoutCursoNestedInput
    Instituicao?: InstituicaoUpdateOneRequiredWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateWithoutProfessoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao?: IntFieldUpdateOperationsInput | number
    inscricao?: InscricaoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateWithoutInstituicaoInput = {
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorCreateNestedManyWithoutCursoInput
    inscricao?: InscricaoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutInstituicaoInput = {
    id?: number
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorUncheckedCreateNestedManyWithoutCursoInput
    inscricao?: InscricaoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutInstituicaoInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput>
  }

  export type CursoCreateManyInstituicaoInputEnvelope = {
    data: CursoCreateManyInstituicaoInput | CursoCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutInstituicaoInput, CursoUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutInstituicaoInput, CursoUncheckedUpdateWithoutInstituicaoInput>
  }

  export type CursoUpdateManyWithWhereWithoutInstituicaoInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id?: IntFilter<"Curso"> | number
    nome?: StringFilter<"Curso"> | string
    carga_horaria?: IntFilter<"Curso"> | number
    vagas?: IntFilter<"Curso"> | number
    status?: EnumStatusCursoFilter<"Curso"> | $Enums.StatusCurso
    dataInicio?: DateTimeFilter<"Curso"> | Date | string
    dataFim?: DateTimeFilter<"Curso"> | Date | string
    horarioInicio?: DateTimeFilter<"Curso"> | Date | string
    horarioFim?: DateTimeFilter<"Curso"> | Date | string
    diasSemana?: EnumDiasSemanaNullableListFilter<"Curso">
    fkInstituicao?: IntFilter<"Curso"> | number
  }

  export type RendaFamiliarCreateWithoutInscricaoInput = {
    rendaFamiliar: number
    numeroPessoas: number
  }

  export type RendaFamiliarUncheckedCreateWithoutInscricaoInput = {
    id?: number
    rendaFamiliar: number
    numeroPessoas: number
  }

  export type RendaFamiliarCreateOrConnectWithoutInscricaoInput = {
    where: RendaFamiliarWhereUniqueInput
    create: XOR<RendaFamiliarCreateWithoutInscricaoInput, RendaFamiliarUncheckedCreateWithoutInscricaoInput>
  }

  export type AlunoCreateWithoutInscricaosInput = {
    matricula: string
    usuario: UsuarioCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateWithoutInscricaosInput = {
    id?: number
    matricula: string
    fkUsuario: number
  }

  export type AlunoCreateOrConnectWithoutInscricaosInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutInscricaosInput, AlunoUncheckedCreateWithoutInscricaosInput>
  }

  export type CursoCreateWithoutInscricaoInput = {
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorCreateNestedManyWithoutCursoInput
    Instituicao: InstituicaoCreateNestedOneWithoutCursosInput
  }

  export type CursoUncheckedCreateWithoutInscricaoInput = {
    id?: number
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao: number
    professores?: AlocacaoProfessorUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutInscricaoInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutInscricaoInput, CursoUncheckedCreateWithoutInscricaoInput>
  }

  export type RendaFamiliarUpsertWithoutInscricaoInput = {
    update: XOR<RendaFamiliarUpdateWithoutInscricaoInput, RendaFamiliarUncheckedUpdateWithoutInscricaoInput>
    create: XOR<RendaFamiliarCreateWithoutInscricaoInput, RendaFamiliarUncheckedCreateWithoutInscricaoInput>
    where?: RendaFamiliarWhereInput
  }

  export type RendaFamiliarUpdateToOneWithWhereWithoutInscricaoInput = {
    where?: RendaFamiliarWhereInput
    data: XOR<RendaFamiliarUpdateWithoutInscricaoInput, RendaFamiliarUncheckedUpdateWithoutInscricaoInput>
  }

  export type RendaFamiliarUpdateWithoutInscricaoInput = {
    rendaFamiliar?: FloatFieldUpdateOperationsInput | number
    numeroPessoas?: IntFieldUpdateOperationsInput | number
  }

  export type RendaFamiliarUncheckedUpdateWithoutInscricaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rendaFamiliar?: FloatFieldUpdateOperationsInput | number
    numeroPessoas?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoUpsertWithoutInscricaosInput = {
    update: XOR<AlunoUpdateWithoutInscricaosInput, AlunoUncheckedUpdateWithoutInscricaosInput>
    create: XOR<AlunoCreateWithoutInscricaosInput, AlunoUncheckedCreateWithoutInscricaosInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutInscricaosInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutInscricaosInput, AlunoUncheckedUpdateWithoutInscricaosInput>
  }

  export type AlunoUpdateWithoutInscricaosInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateWithoutInscricaosInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    fkUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type CursoUpsertWithoutInscricaoInput = {
    update: XOR<CursoUpdateWithoutInscricaoInput, CursoUncheckedUpdateWithoutInscricaoInput>
    create: XOR<CursoCreateWithoutInscricaoInput, CursoUncheckedCreateWithoutInscricaoInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutInscricaoInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutInscricaoInput, CursoUncheckedUpdateWithoutInscricaoInput>
  }

  export type CursoUpdateWithoutInscricaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorUpdateManyWithoutCursoNestedInput
    Instituicao?: InstituicaoUpdateOneRequiredWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateWithoutInscricaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    fkInstituicao?: IntFieldUpdateOperationsInput | number
    professores?: AlocacaoProfessorUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type UsuarioCreateWithoutIdentidadeInput = {
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    alunos?: AlunoCreateNestedOneWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    cargos?: CargoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutIdentidadeInput = {
    id?: number
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    alunos?: AlunoUncheckedCreateNestedOneWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    cargos?: CargoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutIdentidadeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutIdentidadeInput, UsuarioUncheckedCreateWithoutIdentidadeInput>
  }

  export type UsuarioUpsertWithoutIdentidadeInput = {
    update: XOR<UsuarioUpdateWithoutIdentidadeInput, UsuarioUncheckedUpdateWithoutIdentidadeInput>
    create: XOR<UsuarioCreateWithoutIdentidadeInput, UsuarioUncheckedCreateWithoutIdentidadeInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutIdentidadeInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutIdentidadeInput, UsuarioUncheckedUpdateWithoutIdentidadeInput>
  }

  export type UsuarioUpdateWithoutIdentidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    alunos?: AlunoUpdateOneWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutIdentidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    alunos?: AlunoUncheckedUpdateOneWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    cargos?: CargoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type InscricaoCreateWithoutRendaFamiliarInput = {
    data?: Date | string
    status?: $Enums.StatusInscricao
    aluno: AlunoCreateNestedOneWithoutInscricaosInput
    curso: CursoCreateNestedOneWithoutInscricaoInput
  }

  export type InscricaoUncheckedCreateWithoutRendaFamiliarInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkAluno: number
    fkCurso: number
  }

  export type InscricaoCreateOrConnectWithoutRendaFamiliarInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutRendaFamiliarInput, InscricaoUncheckedCreateWithoutRendaFamiliarInput>
  }

  export type InscricaoUpsertWithoutRendaFamiliarInput = {
    update: XOR<InscricaoUpdateWithoutRendaFamiliarInput, InscricaoUncheckedUpdateWithoutRendaFamiliarInput>
    create: XOR<InscricaoCreateWithoutRendaFamiliarInput, InscricaoUncheckedCreateWithoutRendaFamiliarInput>
    where?: InscricaoWhereInput
  }

  export type InscricaoUpdateToOneWithWhereWithoutRendaFamiliarInput = {
    where?: InscricaoWhereInput
    data: XOR<InscricaoUpdateWithoutRendaFamiliarInput, InscricaoUncheckedUpdateWithoutRendaFamiliarInput>
  }

  export type InscricaoUpdateWithoutRendaFamiliarInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    aluno?: AlunoUpdateOneRequiredWithoutInscricaosNestedInput
    curso?: CursoUpdateOneRequiredWithoutInscricaoNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutRendaFamiliarInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkAluno?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutCargosInput = {
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    alunos?: AlunoCreateNestedOneWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    identidade: IdentidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCargosInput = {
    id?: number
    nome: string
    nomeSocial?: string | null
    dataNasc: Date | string
    naturalidade: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sexo: $Enums.Sexo
    raca: $Enums.Raca
    fkIdentidade: number
    alunos?: AlunoUncheckedCreateNestedOneWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCargosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCargosInput, UsuarioUncheckedCreateWithoutCargosInput>
  }

  export type PermissoesCreateWithoutCargoInput = {
    permissao: string
    desc?: string | null
  }

  export type PermissoesUncheckedCreateWithoutCargoInput = {
    id?: number
    permissao: string
    desc?: string | null
  }

  export type PermissoesCreateOrConnectWithoutCargoInput = {
    where: PermissoesWhereUniqueInput
    create: XOR<PermissoesCreateWithoutCargoInput, PermissoesUncheckedCreateWithoutCargoInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutCargosInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutCargosInput, UsuarioUncheckedUpdateWithoutCargosInput>
    create: XOR<UsuarioCreateWithoutCargosInput, UsuarioUncheckedCreateWithoutCargosInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutCargosInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutCargosInput, UsuarioUncheckedUpdateWithoutCargosInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutCargosInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutCargosInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    nomeSocial?: StringNullableFilter<"Usuario"> | string | null
    dataNasc?: DateTimeFilter<"Usuario"> | Date | string
    naturalidade?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    sexo?: EnumSexoFilter<"Usuario"> | $Enums.Sexo
    raca?: EnumRacaFilter<"Usuario"> | $Enums.Raca
    fkIdentidade?: IntFilter<"Usuario"> | number
  }

  export type PermissoesUpsertWithWhereUniqueWithoutCargoInput = {
    where: PermissoesWhereUniqueInput
    update: XOR<PermissoesUpdateWithoutCargoInput, PermissoesUncheckedUpdateWithoutCargoInput>
    create: XOR<PermissoesCreateWithoutCargoInput, PermissoesUncheckedCreateWithoutCargoInput>
  }

  export type PermissoesUpdateWithWhereUniqueWithoutCargoInput = {
    where: PermissoesWhereUniqueInput
    data: XOR<PermissoesUpdateWithoutCargoInput, PermissoesUncheckedUpdateWithoutCargoInput>
  }

  export type PermissoesUpdateManyWithWhereWithoutCargoInput = {
    where: PermissoesScalarWhereInput
    data: XOR<PermissoesUpdateManyMutationInput, PermissoesUncheckedUpdateManyWithoutCargoInput>
  }

  export type PermissoesScalarWhereInput = {
    AND?: PermissoesScalarWhereInput | PermissoesScalarWhereInput[]
    OR?: PermissoesScalarWhereInput[]
    NOT?: PermissoesScalarWhereInput | PermissoesScalarWhereInput[]
    id?: IntFilter<"Permissoes"> | number
    permissao?: StringFilter<"Permissoes"> | string
    desc?: StringNullableFilter<"Permissoes"> | string | null
  }

  export type CargoCreateWithoutPermissoesInput = {
    cargo: string
    desc?: string | null
    usuario?: UsuarioCreateNestedManyWithoutCargosInput
  }

  export type CargoUncheckedCreateWithoutPermissoesInput = {
    id?: number
    cargo: string
    desc?: string | null
    usuario?: UsuarioUncheckedCreateNestedManyWithoutCargosInput
  }

  export type CargoCreateOrConnectWithoutPermissoesInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutPermissoesInput, CargoUncheckedCreateWithoutPermissoesInput>
  }

  export type CargoUpsertWithWhereUniqueWithoutPermissoesInput = {
    where: CargoWhereUniqueInput
    update: XOR<CargoUpdateWithoutPermissoesInput, CargoUncheckedUpdateWithoutPermissoesInput>
    create: XOR<CargoCreateWithoutPermissoesInput, CargoUncheckedCreateWithoutPermissoesInput>
  }

  export type CargoUpdateWithWhereUniqueWithoutPermissoesInput = {
    where: CargoWhereUniqueInput
    data: XOR<CargoUpdateWithoutPermissoesInput, CargoUncheckedUpdateWithoutPermissoesInput>
  }

  export type CargoUpdateManyWithWhereWithoutPermissoesInput = {
    where: CargoScalarWhereInput
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyWithoutPermissoesInput>
  }

  export type CargoUpdateWithoutUsuarioInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    permissoes?: PermissoesUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    permissoes?: PermissoesUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InscricaoCreateManyAlunoInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkCurso: number
  }

  export type InscricaoUpdateWithoutAlunoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    rendaFamiliar?: RendaFamiliarUpdateOneWithoutInscricaoNestedInput
    curso?: CursoUpdateOneRequiredWithoutInscricaoNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkCurso?: IntFieldUpdateOperationsInput | number
    rendaFamiliar?: RendaFamiliarUncheckedUpdateOneWithoutInscricaoNestedInput
  }

  export type InscricaoUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkCurso?: IntFieldUpdateOperationsInput | number
  }

  export type AlocacaoProfessorCreateManyProfessorInput = {
    id?: number
    fkCurso: number
    cargaHoraria: number
    dataAlocacao?: Date | string
  }

  export type AlocacaoProfessorUpdateWithoutProfessorInput = {
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type AlocacaoProfessorUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProfessorUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fkCurso?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProfessorCreateManyCursoInput = {
    id?: number
    fkProfessor: number
    cargaHoraria: number
    dataAlocacao?: Date | string
  }

  export type InscricaoCreateManyCursoInput = {
    id?: number
    data?: Date | string
    status?: $Enums.StatusInscricao
    fkAluno: number
  }

  export type AlocacaoProfessorUpdateWithoutCursoInput = {
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type AlocacaoProfessorUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fkProfessor?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProfessorUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fkProfessor?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    dataAlocacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoUpdateWithoutCursoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    rendaFamiliar?: RendaFamiliarUpdateOneWithoutInscricaoNestedInput
    aluno?: AlunoUpdateOneRequiredWithoutInscricaosNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkAluno?: IntFieldUpdateOperationsInput | number
    rendaFamiliar?: RendaFamiliarUncheckedUpdateOneWithoutInscricaoNestedInput
  }

  export type InscricaoUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusInscricaoFieldUpdateOperationsInput | $Enums.StatusInscricao
    fkAluno?: IntFieldUpdateOperationsInput | number
  }

  export type CursoCreateManyInstituicaoInput = {
    id?: number
    nome: string
    carga_horaria: number
    vagas: number
    status?: $Enums.StatusCurso
    dataInicio: Date | string
    dataFim: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    diasSemana?: CursoCreatediasSemanaInput | $Enums.DiasSemana[]
  }

  export type CursoUpdateWithoutInstituicaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorUpdateManyWithoutCursoNestedInput
    inscricao?: InscricaoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutInstituicaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
    professores?: AlocacaoProfessorUncheckedUpdateManyWithoutCursoNestedInput
    inscricao?: InscricaoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutInstituicaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    vagas?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusCursoFieldUpdateOperationsInput | $Enums.StatusCurso
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diasSemana?: CursoUpdatediasSemanaInput | $Enums.DiasSemana[]
  }

  export type UsuarioUpdateWithoutCargosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    alunos?: AlunoUpdateOneWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    identidade?: IdentidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCargosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    fkIdentidade?: IntFieldUpdateOperationsInput | number
    alunos?: AlunoUncheckedUpdateOneWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutCargosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    naturalidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    raca?: EnumRacaFieldUpdateOperationsInput | $Enums.Raca
    fkIdentidade?: IntFieldUpdateOperationsInput | number
  }

  export type PermissoesUpdateWithoutCargoInput = {
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissoesUncheckedUpdateWithoutCargoInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissoesUncheckedUpdateManyWithoutCargoInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissao?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargoUpdateWithoutPermissoesInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateManyWithoutCargosNestedInput
  }

  export type CargoUncheckedUpdateWithoutPermissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUncheckedUpdateManyWithoutCargosNestedInput
  }

  export type CargoUncheckedUpdateManyWithoutPermissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
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