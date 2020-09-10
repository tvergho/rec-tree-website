/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();

  const [user, setUser] = React.useState(null);
  const [auth, setAuth] = React.useState(undefined);
  const [firebaseExport, setFirebaseExport] = React.useState(undefined);

  useEffect(() => {
    setAuth(firebase.auth());
    setFirebaseExport(firebase);
  }, [firebase]);

  useEffect(() => {
    if (auth === undefined) return;

    const unlisten = firebase.auth().onAuthStateChanged((newUser) => {
      setUser(newUser);
    });

    return () => { unlisten(); };
  }, [auth]);

  const signOut = (navigatePath) => {
    if (auth) {
      auth.signOut();
      const path = !navigatePath || navigatePath?.length > 0 ? navigatePath : '/';
      router.push(path);
    }
  };

  return {
    user, auth, firebaseExport, signOut,
  };
};

export default useAuth;
