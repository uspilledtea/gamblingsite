import Button from '@mui/material/Button';

function ColorButton(props) {
    return (
        <>
        <Button variant="contained">{props.text}</Button>
        </>
    )
}

export default ColorButton;