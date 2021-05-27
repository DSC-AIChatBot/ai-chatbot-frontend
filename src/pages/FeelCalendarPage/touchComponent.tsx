import { Button, FormControlLabel, Grid, Input, Radio, RadioGroup } from '@material-ui/core';
import React, { useState } from 'react';

interface Props {
  open: boolean;
  header: string;
  close: ()=> void;
  setEmotion: (emotion: string) => void;
}

const TouchComponent = (props:any) => {
  const feel = ['슬픔', '기쁨', '보통'];
  const { open, header, setEmotion, close } = props;
  //const { message } = props;
  const [optionState, useOptionState] = useState<string>('opt1');
  const handleChange = (e:any) => {
    //const {optionState} = e.target;
    useOptionState(e.target.value);
    setEmotion(e.target.value);
  };

  return (
    <Grid className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <Button className="close" onClick={close}>close</Button>
          </header>
          <main>
            <RadioGroup aria-label="감정" onClick={handleChange}>
              <FormControlLabel value="우울" control={<Radio/>}
                label="우울" checked={optionState === "우울"} />
              <FormControlLabel value="슬픔" control={<Radio/>} label="슬픔"
                checked={optionState === "슬픔"} />
              <FormControlLabel value="즐거움" control={<Radio/>} label="즐거움"
                checked={optionState === "즐거움"} />
              <FormControlLabel value="화남" control={<Radio/>} label="화남"
                checked={optionState === "화남"} />
              <FormControlLabel value="공포" control={<Radio/>} label="공포"
                checked={optionState === "공포"} />
              <FormControlLabel value="걱정" control={<Radio/>} label="걱정"
                checked={optionState === "걱정"} />
            </RadioGroup>
          </main>
          <footer>
            <Button className="close" onClick={close}>close</Button>
          </footer>
        </section>
      ) : null}
    </Grid>
    // <Grid className="testModal">
    //   <p>{message}</p>
    // </Grid>



  );
};
export default TouchComponent;