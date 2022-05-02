import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from 'react'
import './SearchBar.css'
import ProductsContext from '../../../context/ProductsContext/ProductsContext';

export default function SearchBar() {

    const { setSearch, search } = useContext(ProductsContext)

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <TextField
            className="search-bar"
            label="¿Qué estás buscando?"
            type="search"
            variant="standard"
            value={search}
            onChange={(event) => onSearchChange(event)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon
                            style={{ fontSize: '2.4rem', color: "#000" }}
                            className="search-icon"
                        />
                    </InputAdornment>
                ),
            }}
        />
    )
}


