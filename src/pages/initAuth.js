// ./initAuth.js
import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    firebaseAuthEmulatorHost: "localhost:9099",
    firebaseAdminInitConfig: {
      credential: {
        projectId: "my-example-app-id",
        clientEmail: "example-abc123@my-example-app.iam.gserviceaccount.com",
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: "https://my-example-app.firebaseio.com",
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyCq9mOndO3g-rUoq_LhFsLf4QY5_4L9fkc",
      authDomain: "books-314f3.firebaseapp.com",
      databaseURL:
        "https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "books-314f3",
      storageBucket: "books-314f3.appspot.com",
      messagingSenderId: "627795944798",
      appId: "1:627795944798:web:853f1b3c49bede1282dbcf",
      measurementId: "G-L8HC0K2SWK",
    },
    cookies: {
      name: "ExampleApp", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
