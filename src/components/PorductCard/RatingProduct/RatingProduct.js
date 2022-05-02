import Rating from '@mui/material/Rating';

export default function BasicRating({ value }) {

    return (
        <Rating
            name="read-only"
            readOnly
            value={value}
            size='small'
            sx={{
                "& .MuiRating-iconFilled": {
                    color: "#F8475F",
                },
            }}
        />
    );
}