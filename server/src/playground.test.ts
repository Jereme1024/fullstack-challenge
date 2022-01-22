describe('playground', () => {
  it('hello', async () => {
    const str = 'hello jest'
    expect(str).toEqual('hello jest')
  })
})

import * as IPFS from 'ipfs'
import OrbitDB from 'orbit-db'

describe('orbit DB', () => {
  const ipfsOptions = { repo: './ipfs-test' }
  let ipfs = null
  let orbitdb: OrbitDB | null = null

  beforeAll(async () => {
    try {
      require('fs').rmSync('./ipfs-test', { recursive: true, force: true })
      ipfs = await IPFS.create(ipfsOptions)
      orbitdb = await OrbitDB.createInstance(ipfs)
    } catch (e) {
      console.log(e)
    }
  })

  afterAll(() => orbitdb?.stop())

  it('should create a db', async () => {
    expect(orbitdb).not.toBeNull()
  })

  it('should create put a doc and get', async () => {
    if (orbitdb) {
      const db = await orbitdb.docs('test-db')
      expect(db).not.toBeNull()
      const data = {
        name: 'test',
        followers: 500,
      }
      await db.put({ _id: 'QmAwesomeIpfsHash', ...data })
      const doc = db.get('QmAwesomeIpfsHash')
      expect(doc).toHaveLength(1)
      expect(doc[0]).toMatchObject(data)
    }
  })
})
