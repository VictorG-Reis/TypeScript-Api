export interface simpleInterface<T> {
  create(obj: T): Promise<void>, 
  list(): Promise<Partial<T>[]>,
  find(id: number): Promise<Partial<T> | null>
}

export interface model<T> extends simpleInterface<T>{
  update(id: number, obj: T): Promise<void>,
  delete(id: number): Promise<void>
}

export interface complexModel<T> extends simpleInterface<T> {
  findByCast(id: number): Promise<T | null>;
  findByCharacter(id: number): Promise<T | null>;
}