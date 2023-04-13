/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, DropDown, Container } from '../Table/TableStyles';

export function ButtonNotes(value: any) {
  const [state, setState] = useState<any>({open:false})
  const handleButtonClick = () => {setState((state:any) => {
      return {
        open: !state.open,
      };
    });
  };
  return (
    <Container>
      <Button type="button" onClick={handleButtonClick}>View Notes</Button>
      {state.open && (
        <DropDown>
          <ul>
            <li>{value.value}</li>
          </ul>  
        </DropDown>
      )}
    </Container>
  );
};
