import React from 'react';
import {
  Box,
  ButtonGroup,
  Button,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

const ControlPanelStyles = {};
export default function ControlPanel({
  toggleStart,
  isRunning,
  random,
  clear,
  step,
  generation,state
}) {
  return (
    <>
      <Box
        border="groove cornflowerblue 3px"
        w="fit-content"
        p="5"
        borderRadius="5px"
        shadow="1px 1px 2.5px grey"
        display="flex"
        justify="space-evenly"
      >
        <Box>
        <ButtonGroup shadow="1.0px 1.0px 1.8px rgb(25,25,25)">
          <Button onClick={toggleStart}>{isRunning ? 'Stop' : 'Start'}</Button>
          <Button onClick={random}>RANDOM</Button>
          <Button onClick={clear}>CLEAR</Button>
          <Button onClick={step}>STEP</Button>
        </ButtonGroup>
          </Box><Box>

        <Stat fontSize="36px">
          <StatLabel fontSize="36px">Generation</StatLabel>
          <StatNumber fontSize="36px">{generation}</StatNumber>
        </Stat>
          </Box>
      </Box>
    </>
  );
}
