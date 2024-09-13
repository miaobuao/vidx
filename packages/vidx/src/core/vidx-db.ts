import Dexie from 'dexie'
import { VidTable } from './vidx-table'

export class VidxDatabase {
	protected readonly db: Dexie

	constructor(readonly dbName: string) {
		this.db = new Dexie(dbName)
	}

	table(tableName: string) {
		return new VidTable()
	}
}
