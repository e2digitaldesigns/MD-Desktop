import React from "react";
import _map from "lodash/map";

import * as Styled from "./SideBarStyles.style";
import StylesHeader from "./stylesHeader/stylesHeader";
import { useStyles } from "../../../../hooks";
import { IntStyles } from "../../../../types";
import ItemStyle from "./ItemStyle/ItemStyle";
import { SideBarScroller } from "../../Utils/SideBarScroller/SideBarScroller";

const SideBarStyles: React.FC = () => {
  const { readStyles } = useStyles();

  const styles = readStyles();

  return (
    <Styled.SideBarStylesWrapper>
      <Styled.ItemListGrid>
        <StylesHeader />
        <SideBarScroller>
          {_map(
            styles,
            (style: IntStyles): React.ReactElement => (
              <ItemStyle key={style._id} data={style} />
            )
          )}
        </SideBarScroller>
      </Styled.ItemListGrid>
    </Styled.SideBarStylesWrapper>
  );
};

export default SideBarStyles;
