import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './SearchBar.css'

export const SearchBar = () => {

    return (
        <TextField
            className="search-bar"
            label="¿Qué estás buscando?"
            type="search"
            variant="standard"
            //value={value}
            // onChange={onChange} 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon
                            style={{ fontSize: '2.4rem', color: "#000" }}
                            className="search-icon"
                        // onClick={onClick}
                        />
                    </InputAdornment>
                ),
            }}
        />
    )
}


