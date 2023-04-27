import React from "react";
import _upperFirst from "lodash/upperFirst";
import _toNumber from "lodash/toNumber";
import * as Styled from "../../actionForm.styles";

import { IntActions } from "../../../../../../../types/globalContextType";

export interface IntFormFieldRangeProps {
  displayName?: string;
  max?: number;
  min?: number;
  name: string;
  onChange: (e: any) => void;
  showValue?: boolean;
  state: IntActions;
  step?: number;
}

const FormFieldRange: React.FC<IntFormFieldRangeProps> = ({
  displayName,
  max = 100,
  min = 0,
  name,
  onChange,
  showValue = false,
  state,
  step = 1
}) => {
  const value = _toNumber(state[name as keyof IntActions]);

  return (
    <>
      <Styled.Label data-testid="form_field_rangeField__label" htmlFor="action">
        {_upperFirst(displayName || name)}: {showValue && value}
      </Styled.Label>

      <Styled.RangeField
        data-testid="form_field_rangeField__input"
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        step={step}
        value={value}
      />
    </>
  );
};

export default FormFieldRange;
