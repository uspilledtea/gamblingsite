import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


function ColorButton(props) {
    return (
        <>
        <Button variant="" color="secondary">{props.text}</Button>
        </>
    )
}

export default ColorButton;