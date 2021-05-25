import useAxios from 'axios-hooks';
import React from 'react';

export interface User {
  id: string|null;
  pw: string|null;
  nickName: string|null;
  email: string|null;
  gender: string|null
  age: string|null;
  accountType: string|null;
}
export interface UserContextValue {
  user: User;
  status: boolean;
}

export const defaultUser: User = {
  id: null,
  pw: null,
  nickName: null,
  email: null,
  gender: null,
  age: null,
  accountType: null,
};

const UserContext = React.createContext<UserContextValue>({
  user: defaultUser,
  status: false,
});

export function useUser(): UserContextValue {
  const [user, setUser] = React.useState<User>(defaultUser);
  const [status, setStatus] = React.useState<boolean>(false);

  const [, getUserProfile] = useAxios({
    method: 'GET',
    url: '/auth/profile',
  });

  React.useEffect(() => {
    if (!user.id) {
      console.log('[UserContext] NULL - get Profile');
      getUserProfile()
        .then((res) => {
          if (res.data) {
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
