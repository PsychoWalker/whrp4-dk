import {randomRace} from "./generateRace.js";
import {ageCharacterCreate, riseCharacterCreate, hairCharacterCreate,eyeCharacterCreate} from "./generateAppearance.js";
import {generateClass} from "./generateClass.js";
import {generateCharacteristicHandler} from  "./generateCharacteristic.js";
import {upMainCharacteristic} from "./startCharacteristic.js";

ageCharacterCreate();
riseCharacterCreate();
hairCharacterCreate();
eyeCharacterCreate();
randomRace();
generateClass();
generateCharacteristicHandler();
upMainCharacteristic();
