import styled from "styled-components"
import { Box } from "./components"

const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    margin-top: 4px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${p => p.bg || "#4fbe79"};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Toggle = props => {
  const uuid = crypto.randomUUID()
  const { bg, checked, onChange } = props
  return (
    <Box {...props}>
      <CheckBoxWrapper>
        <CheckBox
          id={uuid}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          bg={bg}
        />
        <CheckBoxLabel htmlFor={uuid} />
      </CheckBoxWrapper>
    </Box>
  )
}

export default Toggle
