import { RowDataPacket } from 'mysql2';
import conn from '../ database/connection';
import Characters from '../interfaces/Characters';
import { simpleInterface } from './model';

const DATABASE = 'cartoon'

export default class characterModel implements simpleInterface<Characters> {
  constructor(private tableName: string = 'Characters',
    private connection = conn) {}


  async create(obj: Characters) {
    await this.connection.execute(
      `INSERT INTO ${DATABASE}.${this.tableName}(
        name
      ) VALUES (?);`,
      [ obj.name ]
    );
  }

  async list() {
    const result = await this.connection.execute(
      `SELECT id, name FROM ${DATABASE}.${this.tableName};`,
    );
    const [characters] = result;
    return characters as Characters[]
  }

  async find(id: number) {
    const result = await this.connection.execute(
      `SELECT id,name FROM ${DATABASE}.${this.tableName} as
      C WHERE C.ID = ?;
      `, [id]
    )
    const [characters] = result as RowDataPacket[];
    return characters[0] as Characters
  }

}