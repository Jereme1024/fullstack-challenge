import * as IPFS from 'ipfs'
import OrbitDB from 'orbit-db'

export let ipfs = null
export let orbitdb: any = null
export let db: any = null

export const connectOrbitDb = async (
  repo: string = './ipfs',
  dbName: string = 'articles'
) => {
  const ipfsOptions = { repo }
  ipfs = await IPFS.create(ipfsOptions)
  orbitdb = await OrbitDB.createInstance(ipfs)
  db = await orbitdb.docs(dbName, { indexBy: 'id' })
  await db.load()
  console.log('database is ready')
}

export const disconnectOrbitDb = async () => {
  await db?.close()
  await orbitdb?.stop()
}
