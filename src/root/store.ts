import { createStore } from "easy-peasy";

// import { injectionModel } from "../models/injection.model";
import { storeModel } from "../models/store.model";

const store = createStore(storeModel);

// Wrapping dev only code like this normally gets stripped out by bundlers
// such as Webpack when creating a production build.
// if (process.env.NODE_ENV === 'development') {
//   if (module.hot) {
//     module.hot.accept('./model', () => {
//       store.reconfigure(model); // 👈 Here is the magic
//     });
//   }
// }

export default store;
