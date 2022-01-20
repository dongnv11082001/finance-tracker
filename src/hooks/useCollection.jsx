import { useEffect, useState, useRef } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (collectionPath, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState('');

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_query).current;

  useEffect(() => {
    let ref = collection(projectFirestore, collectionPath);
    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError('');
      },
      (error) => {
        console.log(error.message);
        setError('could not fetch the data');
      }
    );

    // unsubscribe on unmount
    return () => unsub();
  }, [collectionPath, q]);

  return { documents, error };
};
