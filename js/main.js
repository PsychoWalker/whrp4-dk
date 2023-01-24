import {randomRaceHandler} from "./generateRace.js";
import {ageCharacterCreate, riseCharacterCreateHandler, hairCharacterCreate,eyeCharacterCreate} from "./generateAppearance.js";
import {generateClass} from "./generateClass.js";
import {generateCharacteristicHandler} from  "./generateCharacteristic.js";
import {upMainCharacteristic} from "./startCharacteristic.js";
import {upMainAlignment} from "./startAlignment.js";

ageCharacterCreate();
riseCharacterCreateHandler();
hairCharacterCreate();
eyeCharacterCreate();
randomRaceHandler();
generateClass();
generateCharacteristicHandler();
upMainCharacteristic();
upMainAlignment();
