import { Button } from "../Button/Button";

import './SubHeader.css';

export function SubHeader() {
  return (
    <div className="SubHeader">
      <div className='logo'>Logo</div>

      <Button value={'Sign In'}></Button>

      <Button value={'Sign up'}></Button>

      <Button value={'Gallery'}></Button>
    </div>
  );
}

