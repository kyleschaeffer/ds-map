/**
 * Map data structure
 *  - Shadows ES6 Map (for instructional purposes only)
 */
export class Map {
  /**
   * Map key/value store
   */
  private map: IMap;

  /**
   * Create a new map
   */
  constructor() {
    // New empty map
    this.map = {};
  }

  /**
   * Get a value from the map by key
   */
  public get(key: string): any {
    return this.map[key];
  }

  /**
   * Update or create a value in the map
   */
  public set(key: string, value: any): void {
    this.map[key] = value;
  }

  /**
   * Determine whether map has given key
   */
  public has(key: string): boolean {
    return this.keys().includes(key);
  }

  /**
   * Clear all keys and values from the map
   */
  public clear(): void {
    this.map = {};
  }

  /**
   * Get all map keys
   */
  public keys(): string[] {
    return Object.keys(this.map);
  }

  /**
   * Get all map values
   */
  public values(): any[] {
    return Object.values(this.map);
  }
}

export interface IMap {
  [index: string]: any;
}
