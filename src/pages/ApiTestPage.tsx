import { Button } from '@material-ui/core';
import useAxios from 'axios-hooks';

import React from 'react';

function ApiTestPage():JSX.Element {
  const [{ data: testGetData, loading: testGetLoading, error: testGetError }, testGetReq] = useAxios(
    'http://localhost:5000/api-test',
  );

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          testGetReq()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        API TEST Button
      </Button>
    </div>
  );
}

export default ApiTestPage;