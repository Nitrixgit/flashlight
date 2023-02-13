import FlashlightWithSnakeAnimation from "./components/FlashlightWithSnakeAnimation/FlashlightWithSnakeAnimation";

import img__front_1920px from '../src/assets/front-1920px.webp';
import img__back_1920px from '../src/assets/back-1920px.webp';
import img__front_1366px from '../src/assets/front-1366px.webp';
import img__back_1366px from '../src/assets/back-1366px.webp';



const App = () => {


  return (
    <>
      <div className="flashlight_1920px">
        <FlashlightWithSnakeAnimation
          height='100vh'
          imgFront={img__front_1920px}
          imgBack={img__back_1920px}
          imgFrontId='img__front_1920px'
          imgBackId='img__back_1920px'
          href='https://nitrix.io'
        />
      </div>

      <div className="flashlight_1366px">
        <FlashlightWithSnakeAnimation
          height='100vh'
          imgFront={img__front_1366px}
          imgBack={img__back_1366px}
          imgFrontId='img__front_1366px'
          imgBackId='img__back_1366px'
          href='https://nitrix.io'
        />
      </div>
    </>
  );
}

export default App;
