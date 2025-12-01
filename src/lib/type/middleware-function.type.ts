/**
 * @description The type definition for arguments-based middleware function.
 * @export
 * @typedef {MiddlewareFunction}
 * @template [Args=any] The type of arguments based middleware function.
 */
export type MiddlewareFunction<Args = any> = (args: Args[], next: () => void) => void;
