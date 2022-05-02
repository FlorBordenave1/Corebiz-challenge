import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function PrevArrow({ onClick, style }) {
    return (
        <IconButton onClick={onClick} style={{ ...style, display: "block", position: 'absolute', top: '50%', left: '0px' }}>
            <ArrowBackIosIcon />
        </IconButton>
    )
}