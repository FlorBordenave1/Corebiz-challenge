import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function NextArrow({ onClick, style }) {
    return (
        <IconButton onClick={onClick} style={{ ...style, display: "block", position: 'absolute', top: '50%', right: '0px' }}>
            <ArrowForwardIosIcon />
        </IconButton>
    )
}