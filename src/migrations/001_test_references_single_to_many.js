module.exports = function (migration, {makeRequest}) {
    /* 
        Migrate all the content the contentType "Navigation Bar"
        in the field "test" (i.e. Reference) to "testMany" (i.e. References, Many).
    */

   const navigationBarReference = 'navigationBar'
   migration.transformEntries({
    contentType: navigationBarReference,
    from:['test'],
    to: ['testMany'],
    transformEntryForLocale: async (from, locale) => {
        if (from.test === null || from.test === undefined) {
            console.log("Test Doesn't Exist")
            return;
        }

        if (from.test[locale] === null || from.test[locale] === undefined) {
            console.log("Test for Locale Doesn't Exist, Locale: ", locale)
            return;
        }
        return {
            testMany: [from.test[locale]]
        }

      }
   })
      
  }