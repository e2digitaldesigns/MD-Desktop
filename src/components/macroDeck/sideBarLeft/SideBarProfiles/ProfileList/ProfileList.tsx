import React from "react";
import * as Styled from "./ProfileList.style";

import _includes from "lodash/includes";
import _filter from "lodash/filter";
import _map from "lodash/map";
import _size from "lodash/size";
import _toLower from "lodash/toLower";

import ProfileButton from "./profileButton/profileButton";
import ProfileSearch from "./profileSearch/profileSearch";
import ProfileListItem from "./ProfileListItem/ProfileListItem";

import { useProfile } from "../../../../../hooks";

import { IntProfile, profileModes } from "../../../../../types";
import { SideBarScroller } from "../../../Utils/SideBarScroller/SideBarScroller";

interface IntProfileList {
  setProfileMode: (type: profileModes) => void;
}

const ProfileList: React.FC<IntProfileList> = ({ setProfileMode }) => {
  const { readProfiles } = useProfile();
  const [searchText, setSearchText] = React.useState<string>("");

  const profiles = readProfiles();

  const handleOpenProfileEdit = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setProfileMode(profileModes.Edit);
  };

  const filteredProfiles = searchText
    ? _filter(profiles, (profile: IntProfile) =>
        _includes(_toLower(profile.profileName), _toLower(searchText))
      )
    : profiles;

  return (
    <Styled.ProfileListGrid>
      <ProfileButton setProfileMode={setProfileMode} />

      <ProfileSearch
        count={_size(filteredProfiles)}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <SideBarScroller>
        {_map(
          filteredProfiles,
          (profile: IntProfile): React.ReactElement => (
            <ProfileListItem
              key={profile._id}
              handleOpenProfileEdit={handleOpenProfileEdit}
              profile={profile}
            />
          )
        )}
      </SideBarScroller>
    </Styled.ProfileListGrid>
  );
};

export default ProfileList;
