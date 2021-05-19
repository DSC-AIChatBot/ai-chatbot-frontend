import React from 'react';

export interface UserContextValue {
  // user: UserInfo;
  // handleProfile: () => void;
  // handleLogout: () => void;
  // handleAutoLogin: () => void;
  // handleGetToken: (uuid: string) => Promise<any> | any;
  // state: 'logined' | 'static' | undefined;
  user: any;
}

export const defaultUser: any = {
  name: null,
  picture: null,
  email: null,
  roles: 'user',
  url: [],
  id: null,
};

const UserContext = React.createContext<UserContextValue>({
  user: defaultUser,
  // handleProfile: () => {},
  // handleLogout: () => {},
  // handleAutoLogin: () => {},
  // handleGetToken: () => {},
  // state: undefined,
});

export function useUser(): UserContextValue {
  const [user, setUser] = React.useState<any>(defaultUser);


  return {
    user,
  };
}

export default UserContext;
