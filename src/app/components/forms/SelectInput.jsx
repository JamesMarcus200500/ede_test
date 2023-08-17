import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

export default function SelectInput({ label }) {
  const [data, setData] = React.useState('eng');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Select
      value={data}
      label={label}
      onChange={handleChange}
      displayEmpty
      sx={{
        border: "none",
        border: 'none', "& fieldset": { border: 'none' },
        width: '70px',
        paddingTop: '4px',
        width: '75px'
      }}
      IconComponent={ExpandMoreIcon}
    >
      <MenuItem value={'eng'}>
        <Image
          src="/images/lanselect_eng.png"
          width={26}
          height={17}
          alt="locale image english"
        />
      </MenuItem>
      <MenuItem value={'myan'}>
        <Image
          src="/images/lanselect_my.png"
          width={26}
          height={17}
          alt="locale image myanmar"
        />
      </MenuItem>
    </Select>
  );
}