const { syncdb } = require("../../tasks/sync-db")

describe('pruebas en sync-db', () => {

    test('debe ejecutarse el proceso 2 veces', () => {

        syncdb()
      const times =   syncdb();

      console.log('se llamo dos veces',times )

      expect( times ).toBe(2)

    })

})
 