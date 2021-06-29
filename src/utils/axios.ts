import axios, { AxiosRequestConfig } from 'axios';
// cookie
import cookie from 'react-cookies';

export const cancelToken = axios.CancelToken;
export const { isCancel } = axios;

interface PostRequestData {
  config: AxiosRequestConfig | null;
  method: string | null;
}

const postData: PostRequestData = {
  config: null,
  method: null,
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 3600,
});

const setAxiosHeaders = (key: string, accessToken: string|null): void => {
  axiosInstance.defaults.headers.common[key.toLocaleLowerCase()] = accessToken;
};

/* axios 객체 request 를 가져와 하단 로직 수행 후 flow 재 실행 */
axiosInstance.interceptors.request.use(
  /*
    request Conifg 작업
    JWT Expeired or Unauthorization Error 로 인해 날라간 요청을
    자동으로 재수행하기 위한 사전작업
  */
  (config) => {
    console.log('[axios request Interceptor ... ] ');
    postData.config = config;
    postData.method = config.method ? config.method : null;

    /* AccessToken 헤더 첨부 */
    const accessToken: string|undefined = cookie.load('accesstoken');

    if (accessToken) {
      const setHeaderedConfig = {
        ...config,
        headers: {
          Authorization: 'jwt ' + accessToken,
        },
      };
      return setHeaderedConfig;
    }
    return config;
  },
  /* request Error 작업 */
  (err) => {
    console.log('[axios request Interceptor ... ] : Error ');
    return err;
  },
);

/* axios 객체 response 를 가져와 하단 로직 수행 후 flow 재 실행 */
axiosInstance.interceptors.response.use(
  /* resonse Conifg 작업 */
  (config) => config,
  /* resonse Error 작업 */
  async (err) => {
    console.log('[axios response Interceptor ... ]');

    if (err.response) {
      const errorState = err.response.status;

      /* JWT Expierd , 토큰 만료 에러시 리프레쉬 토큰을 사용해 엑세스 토큰 재발급 요청 로직 수행 시작 */
      if (errorState === 401) {
        console.log('[Error : UnAuthorization ... ]', err.response.status);
      }
    }

    return err;
  },
);

export default {
  axiosInstance,
  setAxiosHeaders,
};
