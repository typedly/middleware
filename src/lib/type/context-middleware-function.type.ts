/**
 * @description The type definition for a context-based middleware function.
 * @export
 * @template [Context=any] The type of the context object passed to the middleware function.
 */
export type ContextMiddlewareFunction<Context = any> = (context: Context, next: () => void) => void;
