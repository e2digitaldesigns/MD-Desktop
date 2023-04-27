import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _findIndex from "lodash/findIndex";
import _map from "lodash/map";
import _sortBy from "lodash/sortBy";
import _size from "lodash/size";

import { useAppData, useGlobalData } from "..";
import {
  IntAppContextInterface,
  IntAppData,
  IntGlobalContextInterface,
  IntGlobalData,
  IntPages
} from "../../types";

import { useObj } from "../../hooks";

export type TCreateSoundBoardProfile = (data: any) => void;

export interface IntUseProfileHook {
  createSoundBoardProfile: TCreateSoundBoardProfile;
}

const useProfileHook = (): IntUseProfileHook => {
  const globalData: IntGlobalData = useGlobalData();
  const appData: IntAppData = useAppData();
  const { actionObj, buttonPadObj, pageObj, profileObj } = useObj();

  const createSoundBoardProfile: TCreateSoundBoardProfile = data => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPads = 6;
    const sound = data.filesToSend;
    const soundNum = sound.length;
    const pageCount = Math.ceil(soundNum / buttonPads);

    const profile = profileObj();
    profile.profileName = data.profileName;
    profile.buttonPads = buttonPads;

    const page = pageObj();
    page.profileId = profile._id;

    let pageArray: IntPages[] = [];
    for (let i = 0; i < pageCount; i++) {
      let thisPage = pageObj();
      thisPage.profileId = profile._id;
      pageArray.push(thisPage);
      state.pages.push(thisPage);
    }

    const btnArrayIds: string[] = [];
    const actionArrayIds: string[] = [];

    let buttonPadNum = 0;
    let pageIndexer = 0;

    _map(data.filesToSend, (sound: string, index: number) => {
      if (buttonPadNum < buttonPads) {
        buttonPadNum = buttonPadNum + 1;
      } else {
        buttonPadNum = 1;
        pageIndexer = pageIndexer + 1;
      }

      let pageId = pageArray[pageIndexer]._id;

      const buttonPad = buttonPadObj();
      buttonPad.buttonPadNum = buttonPadNum;
      buttonPad.icon = "Music";
      buttonPad.pageId = pageId;
      buttonPad.profileId = profile._id;
      buttonPad.text = sound;
      state.buttonPads.push(buttonPad);
      btnArrayIds.push(buttonPad._id);

      const action = actionObj();
      action.action = "sound";
      action.buttonPadId = btnArrayIds[index];
      action.pageId = pageId;
      action.path = `${data.thePath}\\${sound}`;
      action.profileId = profile._id;
      action.subAction = "";
      action.volume = 75;
      state.actions.push(action);
      actionArrayIds.push(action._id);
    });

    console.log(198, state.profiles.length);
    state.profiles.push(profile);
    console.log(200, state.profiles.length);
    // globalData.setState(state);

    appState.active.profileId = profile._id;
    appState.active.pageId = pageArray[0]._id;

    appState.active.buttonPadId = btnArrayIds[0];
    appState.active.actionId = actionArrayIds[0];
    // appData.setAppState(appState);
  };

  const createProfile_Archive = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const profile = profileObj();
    const page = pageObj();
    page.profileId = profile._id;

    const buttonPad = buttonPadObj();
    buttonPad.profileId = profile._id;
    buttonPad.pageId = page._id;
    buttonPad.buttonPadNum = 1;

    const action = actionObj();
    action.profileId = profile._id;
    action.pageId = page._id;
    action.buttonPadId = buttonPad._id;

    state.profiles.push(profile);
    state.pages.push(page);
    state.buttonPads.push(buttonPad);
    state.actions.push(action);
    globalData.setState(state);

    appState.active.profileId = profile._id;
    appState.active.pageId = page._id;
    appState.active.buttonPadId = buttonPad._id;
    appState.active.actionId = action._id;
    appData.setAppState(appState);
  };

  return {
    createSoundBoardProfile
  };
};

export default useProfileHook;
