import { con } from "./connection.js"

export async function Name (n) {
    const a = 
     `select id_pet      id,
      nm_pet             nome`

     const [tabel] = await console.query(a,(n))
        return tabel[0];
}