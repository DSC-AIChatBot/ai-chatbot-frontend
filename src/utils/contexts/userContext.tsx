import useAxios from 'axios-hooks';
import React, { createContext, useEffect, useState } from 'react';
export interface UserContextValue {
  user: any;
  status: boolean;
}

export const defaultUser: any = {
  id: null,
  pw: null,
  nickName: null,
  email: null,
  gender: null,
  age: null,
  accountType: null,
};

const UserContext = createContext<UserContextValue>({
  user: defaultUser,
  status: false,
});

export function useUser(): UserContextValue {
  const [user, setUser] = useState<any>(defaultUser);
  const [status, setStatus] = useState<boolean>(false);

  const [_, getUserProfile] = useAxios({
    method: 'GET',
    url: '/auth/profile',
  });

  useEffect(() => {
    if (!user.id) {
      console.log('[UserContext] NULL - get Profile');
      console.log(user);
      getUserProfile()
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            setUser(res.data);
            setStatus(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('[UserContext]', user);
    }
  }, [user.id]);

  return {
    user,
    status,
  };
}

export default UserContext;
