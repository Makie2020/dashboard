/* eslint-disable prettier/prettier */
import styled, {css} from 'styled-components';

export const StyledTable = styled.table `
   width: 100%;
   border-collapse: collapse;
   min-width: 800px;
   background-color: #FFFFFF;
   padding-left: 2em;
   td, th {
    text-align: left;
    padding-left: 1em;
   }
   tr {
        &:hover{
      box-shadow: 0px 4px 30px #00000014;
    }
   }
`
export const Button = styled.button.attrs(props =>({className: props.className})) `
  width: 109px;
  height: 48px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  &:hover{
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  };
  ${props => (props.value ==="Available") && css`
    background-color: #E8FFEE;
    color: #5AD07A;
  `};
  ${props => (props.value ==="Occupied") && css`
    background-color: #FFEDEC;
    color: #E23428;
  `};
  ${props => (props.value ==="ACTIVE") && css`
    background-color: transparent;
    color: #5AD07A;
  `};
  ${props => (props.value ==="INACTIVE") && css`
    background-color: transparent;
    color: #E23428;
  `};
  ${props => (props.value ==="In Progress") && css`
    background-color: #ffe6cc;
    color: #ff9c33;
  `};
  ${props => (props.value ==="Actions") && css`
    background-color: #FFFFFF !!important;
  `};
  ${props => (props.value ==="Special Request") && css`
    background-color: #EEF9F2;
  `};
  ${props => (props.value ==="Action") && css`
    color: #E23428;
  `};
`
export const DropDown = styled.div`
  background-color: #777777;
  color: #262626;
  div {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    button {
        display: flex;
        align-items: center;
        gap: 1em;
        width: 100%;
        padding: 1em ;
        border: 0.5px solid black;
        margin-bottom: 0.1em;
        border-radius: 12px;
        font-family: "Poppins";
        transition: all 0.3s;
        &:hover {
          background-color: #c5c5c5;
      }
    }
  }
`;
export const Img = styled.img `
  width: 125px;
  height: 77px;
  object-fit:cover ;
`
export const Th = styled.th `
  height: 65px;
`
/*
export const ButtonDots = (props:any) => {
  const deleteBooking = props.onDeleteBooking;
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const symbol = open ? 'Open' : 'Closed';
  const toggleButton = () => { 
    setOpen(!open);
  };
  const editBooking = (e:Event) => {
    e.preventDefault();
    navigate("/bookings/edit-booking");
  };
  
  return (
    <div>
      <button onClick={toggleButton}>
         {symbol}
      </button>
    {setOpen ? (
      <DropDown>
        <div>
          <button onClick={(_e) => {editBooking(props.data.id)}}><BsPencil/> Edit booking</button>
          <button onClick={(_e) => {deleteBooking(_e, props.data.id)}}> <BsTrash/> Delete booking</button>
        </div>
      </DropDown>
    ) : null}
    </div>
  )
}  
*/