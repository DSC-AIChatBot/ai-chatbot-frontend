import React, { useCallback } from 'react';
import axios from '../axios';
// import { useCookies } from 'react-cookie';
import cookie from 'react-cookies';
import { useHistory } from 'react-router-dom';


const DEFAULT_ERROR_MESSAGE = '죄송합니다.. 오류가 발생했습니다..';
export interface UsePostRequestObject<T, P> {
    success: true | null;
    loading: boolean | undefined;
    error: string;
    doPostRequest: (param: T) => void;
    data: P | null;
    // setTokenHeader:()=>void;
  }

export default function usePostRequest<PARAM_TYPE = {[key: string]: any}, RES_DATA_TYPE = any>(
  url: string,
  successCallback?: (param?:RES_DATA_TYPE) => void
): UsePostRequestObject<PARAM_TYPE, RES_DATA_TYPE> {
  const history = useHistory();
  const [success, setSuccess] = React.useState<true | null>(null);
  const [data, setData] = React.useState<RES_DATA_TYPE | null>(null);
  const [loading, setLoading] = React.useState<boolean | undefined>(undefined);
  const [error, setError] = React.useState('');
  const [cookies, setCookie] = React.useState({
    name: '' ,
    value: ''
  });
  
//   const doSilentRefresh = useCallback((param:PARAM_TYPE) => {
//     axios.post('/refresh/silent')
//       .then((res)=>{
//         console.log('[Access Token refresh ... ]');
//         setCookie({name: 'access_token', value: res.headers['access_token']});
//         doPostRequest(param);
//       })
//       .catch((err) => {
//         if (err.response.status === 402) {
//           console.error(`error in POST ${url}: `, err.response.status, err.response.data.message);
//           setError(err.response.data.message || DEFAULT_ERROR_MESSAGE);
//           history.replace('/');
//         }
//         else if(err.response.status === 401) {
//           console.error(`error in POST ${url}: `, err.response.status, err.response.data.message);
//           setError(err.response.data.message || DEFAULT_ERROR_MESSAGE);
//           history.replace('/');
//         }
//       })
//   },[setCookie])

  const doPostRequest = useCallback((param: PARAM_TYPE): void => { //param넣으면 void 나온다
    setLoading(true); // 로딩 시작
    console.log('param',param);
    if ( cookie.load('access_token') ){
      axios.defaults.headers.common['access_token'] = cookie.load('access_token');
    }
    axios.post<RES_DATA_TYPE>(`${url}`,
      { ...param })
      .then((res) => { // 200 번대 상태코드
        
        setLoading(false); // 로딩 완료
        setData(res.data);
        setSuccess(true);
        if(res.headers['access_token']) { setCookie({name: 'access_token', value: res.headers['access_token']}); }
        if (successCallback) { successCallback(res.headers['access_token']); }

      })
      .catch((err) => {
        setLoading(false); // 로딩 완료
        setSuccess(null);
        if (err.response.status === 402) {
        //   doSilentRefresh(param);
          console.error(`error in POST ${url}: `, err.response.status, err.response.data.message);
          setError(err.response.data.message || DEFAULT_ERROR_MESSAGE);
        } 
        else if (err.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답한 경우.
          console.error(`error in POST ${url}: `, err.response.status, err.response.data);
          setError(err.response.data.message || DEFAULT_ERROR_MESSAGE);
        }
        else if (err.request) {
          // 요청이 이루어 졌으나 응답을 받지 못한 경우.
          console.log('요청이 이루어 졌으나 응답을 받지 못한 경우: ', err.request);
          setError(DEFAULT_ERROR_MESSAGE);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생
          console.log('오류를 발생시킨 요청을 설정하는 중에 문제가 발생');
          setError(DEFAULT_ERROR_MESSAGE);
        }
      });
  }, [successCallback, url]);

  return {
    success, loading, error, data, doPostRequest, 
  };
}