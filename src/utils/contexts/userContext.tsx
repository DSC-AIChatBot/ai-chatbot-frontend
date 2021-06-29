import useAxios from 'axios-hooks';
import React from 'react';
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

const UserContext = React.createContext<UserContextValue>({
  user: defaultUser,
  status: false,
});

export function useUser(): UserContextValue {
  const [user, setUser] = React.useState<any>(defaultUser);
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
