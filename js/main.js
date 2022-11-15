import {randomRace} from "./generateRace.js";
import {ageCharacterCreate, riseCharacterCreate, hairCharacterCreate,eyeCharacterCreate} from "./generateAppearance.js";
import {generateClass} from "./generateClass.js";

ageCharacterCreate();
riseCharacterCreate();
hairCharacterCreate();
eyeCharacterCreate();
randomRace();
generateClass();