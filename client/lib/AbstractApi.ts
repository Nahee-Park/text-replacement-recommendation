type PossibleQueryType = string;

interface QueryType {
  [key: string]: PossibleQueryType;
}

export abstract class AbstractApi {
  protected constructor() {}

  protected static buildQuery(obj: QueryType): string {
    return Object.entries(obj)
      .reduce((query, [key, value]) => {
        return `${query + encodeURI(key)}=${encodeURI(String(value))}&`;
      }, '?')
      .slice(0, -1);
  }

  protected static buildPath(...args: string[]): string {
    return args.reduce((path, arg) => {
      return `${path}/${arg}`;
    }, '');
  }
}
