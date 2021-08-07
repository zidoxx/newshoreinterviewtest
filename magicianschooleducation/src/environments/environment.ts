// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Service Main URL
const URL = 'https://hp-api.herokuapp.com/api/';

export const environment = {
  production: false,

  //List of APIRest URLs for the application
  getAllCharacters: `${URL}characters`,
  getAllCharactersBook: `${URL}characters/students`,
  getAllStaffBook: `${URL}characters/staff`,
  getAllHouseFindByHouse: `${URL}characters/house`,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
